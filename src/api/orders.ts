import { Order, OrderStatus } from '@/types/order';
import func2url from '../../backend/func2url.json';

const BASE_URL = func2url.orders;

async function parseBody(res: Response) {
  const text = await res.text();
  try {
    const outer = JSON.parse(text);
    if (typeof outer === 'string') return JSON.parse(outer);
    return outer;
  } catch {
    return text;
  }
}

export async function fetchOrders(status?: OrderStatus | 'all', search?: string): Promise<Order[]> {
  const params = new URLSearchParams();
  if (status && status !== 'all') params.set('status', status);
  if (search) params.set('search', search);

  const url = params.toString() ? `${BASE_URL}?${params}` : BASE_URL;
  const res = await fetch(url);
  const data = await parseBody(res);
  return Array.isArray(data) ? data : [];
}

export async function createOrder(order: Order): Promise<void> {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });
  if (!res.ok) throw new Error('Ошибка при создании заказа');
}

export async function updateOrderStatus(id: string, status: OrderStatus): Promise<void> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error('Ошибка при обновлении статуса');
}