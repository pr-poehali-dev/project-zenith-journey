import { Order, STATUS_LABELS, STATUS_COLORS } from '@/types/order';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface OrderDetailModalProps {
  order: Order | null;
  onClose: () => void;
}

function Row({ icon, label, value }: { icon: string; label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-border last:border-0">
      <Icon name={icon} fallback="Info" size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground break-words">{value}</p>
      </div>
    </div>
  );
}

export function OrderDetailModal({ order, onClose }: OrderDetailModalProps) {
  if (!order) return null;

  return (
    <Dialog open={!!order} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <DialogTitle className="text-base">{order.id}</DialogTitle>
            <Badge className={`${STATUS_COLORS[order.status]} border-0 text-xs font-medium`}>
              {STATUS_LABELS[order.status]}
            </Badge>
          </div>
        </DialogHeader>

        <div className="mt-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Клиент</p>
          <div className="bg-muted rounded-lg px-4">
            <Row icon="User" label="Имя / Организация" value={order.clientName} />
            <Row icon="Phone" label="Телефон" value={order.clientPhone} />
            <Row icon="Mail" label="Email" value={order.clientEmail} />
          </div>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2">Маршрут</p>
          <div className="bg-muted rounded-lg px-4">
            <Row icon="MapPin" label="Откуда" value={order.addressFrom} />
            <Row icon="MapPin" label="Куда" value={order.addressTo} />
            <Row icon="Calendar" label="Дата доставки" value={order.deliveryDate} />
          </div>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2">Груз</p>
          <div className="bg-muted rounded-lg px-4">
            <Row icon="Package" label="Тип груза" value={order.cargoType} />
            <Row icon="Weight" label="Масса" value={order.cargoWeight} />
            <Row icon="Box" label="Объём" value={order.cargoVolume} />
            <Row icon="FileText" label="Описание" value={order.cargoDescription} />
          </div>

          {(order.driverName || order.notes) && (
            <>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2">Дополнительно</p>
              <div className="bg-muted rounded-lg px-4">
                <Row icon="Truck" label="Водитель" value={order.driverName || ''} />
                <Row icon="MessageSquare" label="Примечания" value={order.notes || ''} />
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
