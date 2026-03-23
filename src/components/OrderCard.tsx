import { Order, OrderStatus, STATUS_LABELS, STATUS_COLORS } from '@/types/order';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Icon from '@/components/ui/icon';

interface OrderCardProps {
  order: Order;
  onStatusChange: (id: string, status: OrderStatus) => void;
  onView: (order: Order) => void;
}

const NEXT_STATUSES: Record<OrderStatus, { value: OrderStatus; label: string }[]> = {
  new: [{ value: 'in_progress', label: 'Взять в работу' }, { value: 'cancelled', label: 'Отменить' }],
  in_progress: [{ value: 'completed', label: 'Завершить' }, { value: 'cancelled', label: 'Отменить' }],
  completed: [],
  cancelled: [{ value: 'new', label: 'Восстановить' }],
};

export function OrderCard({ order, onStatusChange, onView }: OrderCardProps) {
  const nextStatuses = NEXT_STATUSES[order.status];

  return (
    <div className="bg-white rounded-xl border border-border p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-mono text-sm font-semibold text-muted-foreground">{order.id}</span>
          <Badge className={`${STATUS_COLORS[order.status]} border-0 text-xs font-medium`}>
            {STATUS_LABELS[order.status]}
          </Badge>
        </div>
        <span className="text-xs text-muted-foreground whitespace-nowrap">{order.createdAt}</span>
      </div>

      <h3 className="font-semibold text-foreground mb-1">{order.clientName}</h3>
      <p className="text-sm text-muted-foreground mb-3">{order.clientPhone}</p>

      <div className="space-y-1.5 mb-4">
        <div className="flex items-start gap-2 text-sm">
          <Icon name="MapPin" size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-foreground">{order.addressFrom}</span>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <Icon name="MapPin" size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
          <span className="text-foreground">{order.addressTo}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 flex-wrap">
        <div className="flex items-center gap-1">
          <Icon name="Package" size={13} />
          <span>{order.cargoType}</span>
        </div>
        <span>·</span>
        <div className="flex items-center gap-1">
          <Icon name="Weight" size={13} />
          <span>{order.cargoWeight}</span>
        </div>
        <span>·</span>
        <div className="flex items-center gap-1">
          <Icon name="Calendar" size={13} />
          <span>{order.deliveryDate}</span>
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" onClick={() => onView(order)}>
          <Icon name="Eye" size={14} className="mr-1.5" />
          Детали
        </Button>

        {nextStatuses.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-white gap-1.5">
                Статус
                <Icon name="ChevronDown" size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {nextStatuses.map((ns) => (
                <DropdownMenuItem key={ns.value} onClick={() => onStatusChange(order.id, ns.value)}>
                  {ns.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}
