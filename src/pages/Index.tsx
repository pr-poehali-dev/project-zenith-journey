import { useState } from 'react';
import { Order, OrderStatus } from '@/types/order';
import { mockOrders } from '@/data/mockOrders';
import { AppHeader } from '@/components/AppHeader';
import { StatsBar } from '@/components/StatsBar';
import { OrderFilters } from '@/components/OrderFilters';
import { OrderCard } from '@/components/OrderCard';
import { OrderDetailModal } from '@/components/OrderDetailModal';
import { NewOrderModal } from '@/components/NewOrderModal';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<OrderStatus | 'all'>('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showNewOrder, setShowNewOrder] = useState(false);

  const filtered = orders.filter((o) => {
    const matchesStatus = statusFilter === 'all' || o.status === statusFilter;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      o.clientName.toLowerCase().includes(q) ||
      o.clientPhone.includes(q) ||
      o.cargoType.toLowerCase().includes(q) ||
      o.addressFrom.toLowerCase().includes(q) ||
      o.addressTo.toLowerCase().includes(q) ||
      o.id.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  const handleStatusChange = (id: string, status: OrderStatus) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
  };

  const handleAddOrder = (order: Order) => {
    setOrders((prev) => [order, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <AppHeader onNewOrder={() => setShowNewOrder(true)} />

      <div className="container mx-auto px-4 py-6">
        <StatsBar orders={orders} />
        <OrderFilters
          search={search}
          onSearchChange={setSearch}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
        />

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-muted-foreground">
            <Icon name="PackageSearch" size={48} className="mb-4 opacity-40" />
            <p className="text-lg font-medium">Заказы не найдены</p>
            <p className="text-sm mt-1">Попробуйте изменить фильтры или создайте новый заказ</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filtered.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onStatusChange={handleStatusChange}
                onView={setSelectedOrder}
              />
            ))}
          </div>
        )}
      </div>

      <OrderDetailModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />
      <NewOrderModal open={showNewOrder} onClose={() => setShowNewOrder(false)} onAdd={handleAddOrder} />
    </div>
  );
}
