import { Order } from '@/types/order';
import Icon from '@/components/ui/icon';

interface StatsBarProps {
  orders: Order[];
}

export function StatsBar({ orders }: StatsBarProps) {
  const total = orders.length;
  const newCount = orders.filter((o) => o.status === 'new').length;
  const inProgressCount = orders.filter((o) => o.status === 'in_progress').length;
  const completedCount = orders.filter((o) => o.status === 'completed').length;

  const stats = [
    { label: 'Всего заказов', value: total, icon: 'Package', color: 'text-foreground', bg: 'bg-muted' },
    { label: 'Новые', value: newCount, icon: 'CircleDot', color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'В процессе', value: inProgressCount, icon: 'Loader', color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { label: 'Завершены', value: completedCount, icon: 'CheckCircle', color: 'text-green-600', bg: 'bg-green-50' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-xl border border-border p-4 flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center flex-shrink-0`}>
            <Icon name={stat.icon} fallback="Package" size={20} className={stat.color} />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}