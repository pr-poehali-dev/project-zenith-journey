"""
API для управления заказами на перевозку грузов.
GET    /          — список всех заказов (с фильтрацией по status и search)
POST   /          — создать новый заказ
PATCH  /{id}      — изменить статус заказа
"""

import os
import json
import psycopg2
from datetime import date


def get_conn():
    return psycopg2.connect(os.environ["DATABASE_URL"])


def row_to_order(row):
    return {
        "id": row[0],
        "createdAt": str(row[1]),
        "status": row[2],
        "clientName": row[3],
        "clientPhone": row[4],
        "clientEmail": row[5] or "",
        "cargoType": row[6],
        "cargoWeight": row[7] or "",
        "cargoVolume": row[8] or "",
        "cargoDescription": row[9] or "",
        "addressFrom": row[10],
        "addressTo": row[11],
        "deliveryDate": str(row[12]),
        "driverName": row[13] or "",
        "notes": row[14] or "",
    }


CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
}


def handler(event: dict, context) -> dict:
    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": ""}

    method = event.get("httpMethod", "GET")
    path = event.get("path", "/")

    # Определяем ID из пути вида /orders/ORD-001
    path_parts = [p for p in path.strip("/").split("/") if p]
    order_id = path_parts[-1] if len(path_parts) >= 2 else None

    conn = get_conn()
    cur = conn.cursor()

    try:
        # PATCH /{id} — смена статуса
        if method == "PATCH" and order_id:
            body = json.loads(event.get("body") or "{}")
            new_status = body.get("status")
            valid = {"new", "in_progress", "completed", "cancelled"}
            if new_status not in valid:
                return {"statusCode": 400, "headers": CORS_HEADERS, "body": json.dumps({"error": "Invalid status"})}

            cur.execute(
                "UPDATE orders SET status = %s WHERE id = %s RETURNING id",
                (new_status, order_id),
            )
            if cur.rowcount == 0:
                conn.rollback()
                return {"statusCode": 404, "headers": CORS_HEADERS, "body": json.dumps({"error": "Not found"})}
            conn.commit()
            return {"statusCode": 200, "headers": CORS_HEADERS, "body": json.dumps({"ok": True})}

        # POST / — создать заказ
        if method == "POST":
            body = json.loads(event.get("body") or "{}")
            order_id = body.get("id") or f"ORD-{int(date.today().strftime('%Y%m%d'))}"
            cur.execute(
                """INSERT INTO orders (id, created_at, status, client_name, client_phone, client_email,
                   cargo_type, cargo_weight, cargo_volume, cargo_description,
                   address_from, address_to, delivery_date, driver_name, notes)
                   VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                   RETURNING id""",
                (
                    body["id"],
                    body.get("createdAt", str(date.today())),
                    body.get("status", "new"),
                    body["clientName"],
                    body["clientPhone"],
                    body.get("clientEmail", ""),
                    body["cargoType"],
                    body.get("cargoWeight", ""),
                    body.get("cargoVolume", ""),
                    body.get("cargoDescription", ""),
                    body["addressFrom"],
                    body["addressTo"],
                    body["deliveryDate"],
                    body.get("driverName", ""),
                    body.get("notes", ""),
                ),
            )
            conn.commit()
            return {"statusCode": 201, "headers": CORS_HEADERS, "body": json.dumps({"ok": True, "id": body["id"]})}

        # GET / — список заказов
        params = event.get("queryStringParameters") or {}
        status_filter = params.get("status", "")
        search = params.get("search", "").lower()

        query = "SELECT id, created_at, status, client_name, client_phone, client_email, cargo_type, cargo_weight, cargo_volume, cargo_description, address_from, address_to, delivery_date, driver_name, notes FROM orders"
        conditions = []
        args = []

        if status_filter and status_filter != "all":
            conditions.append("status = %s")
            args.append(status_filter)
        if search:
            conditions.append(
                "(LOWER(client_name) LIKE %s OR client_phone LIKE %s OR LOWER(cargo_type) LIKE %s OR LOWER(address_from) LIKE %s OR LOWER(address_to) LIKE %s OR LOWER(id) LIKE %s)"
            )
            s = f"%{search}%"
            args.extend([s, s, s, s, s, s])

        if conditions:
            query += " WHERE " + " AND ".join(conditions)
        query += " ORDER BY created_at DESC, id DESC"

        cur.execute(query, args)
        rows = cur.fetchall()
        orders = [row_to_order(r) for r in rows]
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": json.dumps(orders)}

    finally:
        cur.close()
        conn.close()
