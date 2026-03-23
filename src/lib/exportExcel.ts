import * as XLSX from 'xlsx';
import { Order, STATUS_LABELS } from '@/types/order';

export function exportOrdersToExcel(orders: Order[]) {
  const rows = orders.map((o) => ({
    '№ заказа': o.id,
    'Дата создания': o.createdAt,
    'Статус': STATUS_LABELS[o.status],
    'Клиент': o.clientName,
    'Телефон': o.clientPhone,
    'Email': o.clientEmail,
    'Тип груза': o.cargoType,
    'Масса': o.cargoWeight,
    'Объём': o.cargoVolume,
    'Описание груза': o.cargoDescription,
    'Откуда': o.addressFrom,
    'Куда': o.addressTo,
    'Дата доставки': o.deliveryDate,
    'Водитель': o.driverName,
    'Примечания': o.notes,
  }));

  const ws = XLSX.utils.json_to_sheet(rows);

  // Ширина столбцов
  ws['!cols'] = [
    { wch: 12 }, { wch: 14 }, { wch: 14 }, { wch: 24 }, { wch: 18 },
    { wch: 22 }, { wch: 22 }, { wch: 10 }, { wch: 10 }, { wch: 28 },
    { wch: 32 }, { wch: 32 }, { wch: 14 }, { wch: 20 }, { wch: 30 },
  ];

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Заказы');

  const date = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(wb, `Заказы_${date}.xlsx`);
}
