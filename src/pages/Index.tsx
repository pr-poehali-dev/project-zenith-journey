import { useState, useEffect, useCallback } from 'react';
import { Order, OrderStatus } from '@/types/order';
import { fetchOrders, createOrder, updateOrderStatus } from '@/api/orders';
import { AppHeader } from '@/components/AppHeader';
import { StatsBar } from '@/components/StatsBar';
import { OrderFilters } from '@/components/OrderFilters';
import { OrderCard } from '@/components/OrderCard';
import { OrderDetailModal } from '@/components/OrderDetailModal';
import { NewOrderModal } from '@/components/NewOrderModal';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<OrderStatus | 'all'>('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showNewOrder, setShowNewOrder] = useState(false);

  const loadOrders = useCallback(async () => {
    setLoading(true);
    try {
      const [filtered, all] = await Promise.all([
        fetchOrders(statusFilter, search),
        fetchOrders(),
      ]);
      setOrders(filtered);
      setAllOrders(all);
    } finally {
      setLoading(false);
    }
  }, [statusFilter, search]);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  const handleStatusChange = async (id: string, status: OrderStatus) => {
    await updateOrderStatus(id, status);
    await loadOrders();
  };

  const handleAddOrder = async (order: Order) => {
    await createOrder(order);
    await loadOrders();
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <AppHeader onNewOrder={() => setShowNewOrder(true)} orders={orders} />

      <div className="container mx-auto px-4 py-6">
        <StatsBar orders={allOrders} />
        <OrderFilters
          search={search}
          onSearchChange={setSearch}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
        />

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 text-muted-foreground">
            <Icon name="Loader" size={36} className="mb-4 animate-spin opacity-40" />
            <p className="text-sm">Загружаем заказы...</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-muted-foreground">
            <Icon name="PackageSearch" size={48} className="mb-4 opacity-40" />
            <p className="text-lg font-medium">Заказы не найдены</p>
            <p className="text-sm mt-1">Попробуйте изменить фильтры или создайте новый заказ</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {orders.map((order) => (
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