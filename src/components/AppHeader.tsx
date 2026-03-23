import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface AppHeaderProps {
  onNewOrder: () => void;
}

export function AppHeader({ onNewOrder }: AppHeaderProps) {
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
        <Button onClick={onNewOrder} className="gap-2 bg-accent hover:bg-accent/90 text-white">
          <Icon name="Plus" size={16} />
          Новый заказ
        </Button>
      </div>
    </header>
  );
}
