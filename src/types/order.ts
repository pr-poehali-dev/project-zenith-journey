export type OrderStatus = 'new' | 'in_progress' | 'completed' | 'cancelled';

export interface Order {
  id: string;
  createdAt: string;
  status: OrderStatus;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  cargoType: string;
  cargoWeight: string;
  cargoVolume: string;
  cargoDescription: string;
  addressFrom: string;
  addressTo: string;
  deliveryDate: string;
  driverName?: string;
  notes?: string;
}

export const STATUS_LABELS: Record<OrderStatus, string> = {
  new: 'Новый',
  in_progress: 'В процессе',
  completed: 'Завершён',
  cancelled: 'Отменён',
};

export const STATUS_COLORS: Record<OrderStatus, string> = {
  new: 'bg-blue-100 text-blue-700',
  in_progress: 'bg-yellow-100 text-yellow-700',
  completed: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700',
};
