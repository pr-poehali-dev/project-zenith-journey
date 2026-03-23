import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Order } from '@/types/order';
import { exportOrdersToExcel } from '@/lib/exportExcel';

interface AppHeaderProps {
  onNewOrder: () => void;
  orders: Order[];
}

export function AppHeader({ onNewOrder, orders }: AppHeaderProps) {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
            <Icon name="Truck" size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground leading-none">ГрузоТрек</h1>
            <p className="text-xs text-muted-foreground">Учёт заказов на перевозку</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => exportOrdersToExcel(orders)}
            disabled={orders.length === 0}
            className="gap-2"
          >
            <Icon name="Download" size={16} />
            <span className="hidden sm:inline">Экспорт Excel</span>
          </Button>
          <Button onClick={onNewOrder} className="gap-2 bg-accent hover:bg-accent/90 text-white">
            <Icon name="Plus" size={16} />
            <span className="hidden sm:inline">Новый заказ</span>
          </Button>
        </div>
      </div>
    </header>
  );
}