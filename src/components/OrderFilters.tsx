import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { OrderStatus, STATUS_LABELS } from '@/types/order';
import Icon from '@/components/ui/icon';

interface OrderFiltersProps {
  search: string;
  onSearchChange: (v: string) => void;
  statusFilter: OrderStatus | 'all';
  onStatusChange: (v: OrderStatus | 'all') => void;
}

const ALL_STATUSES: (OrderStatus | 'all')[] = ['all', 'new', 'in_progress', 'completed', 'cancelled'];

const STATUS_FILTER_LABELS: Record<OrderStatus | 'all', string> = {
  all: 'Все',
  ...STATUS_LABELS,
};

export function OrderFilters({ search, onSearchChange, statusFilter, onStatusChange }: OrderFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <div className="relative flex-1">
        <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Поиск по клиенту, адресу, типу груза..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9"
        />
      </div>
      <div className="flex gap-2 flex-wrap">
        {ALL_STATUSES.map((s) => (
          <Button
            key={s}
            variant={statusFilter === s ? 'default' : 'outline'}
            size="sm"
            onClick={() => onStatusChange(s)}
            className={statusFilter === s ? 'bg-accent hover:bg-accent/90 text-white' : ''}
          >
            {STATUS_FILTER_LABELS[s]}
          </Button>
        ))}
      </div>
    </div>
  );
}
