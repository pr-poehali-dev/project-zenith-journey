import { useState } from 'react';
import { Order, OrderStatus } from '@/types/order';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface NewOrderModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (order: Order) => void;
}

const emptyForm = {
  clientName: '',
  clientPhone: '',
  clientEmail: '',
  cargoType: '',
  cargoWeight: '',
  cargoVolume: '',
  cargoDescription: '',
  addressFrom: '',
  addressTo: '',
  deliveryDate: '',
  driverName: '',
  notes: '',
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</Label>
      {children}
    </div>
  );
}

export function NewOrderModal({ open, onClose, onAdd }: NewOrderModalProps) {
  const [form, setForm] = useState(emptyForm);

  const set = (key: keyof typeof emptyForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder: Order = {
      ...form,
      id: `ORD-${String(Date.now()).slice(-3)}`,
      createdAt: new Date().toISOString().slice(0, 10),
      status: 'new' as OrderStatus,
    };
    onAdd(newOrder);
    setForm(emptyForm);
    onClose();
  };

  const required = form.clientName && form.clientPhone && form.addressFrom && form.addressTo && form.cargoType && form.deliveryDate;

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Новый заказ</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 mt-2">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Клиент</p>
            <div className="space-y-3">
              <Field label="Имя / Организация *">
                <Input placeholder="ООО Транспорт или Иван Иванов" value={form.clientName} onChange={set('clientName')} required />
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Телефон *">
                  <Input placeholder="+7 (___) ___-__-__" value={form.clientPhone} onChange={set('clientPhone')} required />
                </Field>
                <Field label="Email">
                  <Input placeholder="email@mail.ru" type="email" value={form.clientEmail} onChange={set('clientEmail')} />
                </Field>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Маршрут</p>
            <div className="space-y-3">
              <Field label="Адрес отправления *">
                <Input placeholder="Город, улица, дом" value={form.addressFrom} onChange={set('addressFrom')} required />
              </Field>
              <Field label="Адрес назначения *">
                <Input placeholder="Город, улица, дом" value={form.addressTo} onChange={set('addressTo')} required />
              </Field>
              <Field label="Желаемая дата доставки *">
                <Input type="date" value={form.deliveryDate} onChange={set('deliveryDate')} required />
              </Field>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Груз</p>
            <div className="space-y-3">
              <Field label="Тип груза *">
                <Input placeholder="Стройматериалы, мебель, оборудование..." value={form.cargoType} onChange={set('cargoType')} required />
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Масса">
                  <Input placeholder="например 5 т" value={form.cargoWeight} onChange={set('cargoWeight')} />
                </Field>
                <Field label="Объём">
                  <Input placeholder="например 12 м³" value={form.cargoVolume} onChange={set('cargoVolume')} />
                </Field>
              </div>
              <Field label="Описание груза">
                <Textarea
                  placeholder="Дополнительные сведения о грузе..."
                  value={form.cargoDescription}
                  onChange={set('cargoDescription')}
                  rows={2}
                />
              </Field>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Дополнительно</p>
            <div className="space-y-3">
              <Field label="Водитель">
                <Input placeholder="ФИО водителя" value={form.driverName} onChange={set('driverName')} />
              </Field>
              <Field label="Примечания">
                <Textarea
                  placeholder="Особые условия, инструкции..."
                  value={form.notes}
                  onChange={set('notes')}
                  rows={2}
                />
              </Field>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" className="flex-1" onClick={onClose}>
              Отмена
            </Button>
            <Button type="submit" disabled={!required} className="flex-1 bg-accent hover:bg-accent/90 text-white">
              Создать заказ
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
