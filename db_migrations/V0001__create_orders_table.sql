CREATE TABLE orders (
  id VARCHAR(20) PRIMARY KEY,
  created_at DATE NOT NULL DEFAULT CURRENT_DATE,
  status VARCHAR(20) NOT NULL DEFAULT 'new',
  client_name VARCHAR(255) NOT NULL,
  client_phone VARCHAR(50) NOT NULL,
  client_email VARCHAR(255),
  cargo_type VARCHAR(255) NOT NULL,
  cargo_weight VARCHAR(50),
  cargo_volume VARCHAR(50),
  cargo_description TEXT,
  address_from TEXT NOT NULL,
  address_to TEXT NOT NULL,
  delivery_date DATE NOT NULL,
  driver_name VARCHAR(255),
  notes TEXT
);

INSERT INTO orders (id, created_at, status, client_name, client_phone, client_email, cargo_type, cargo_weight, cargo_volume, cargo_description, address_from, address_to, delivery_date, driver_name, notes) VALUES
('ORD-001', '2026-03-20', 'in_progress', 'Алексей Морозов', '+7 (910) 123-45-67', 'morozov@mail.ru', 'Строительные материалы', '5 т', '12 м³', 'Кирпич, блоки, цемент', 'Москва, ул. Промышленная, 15', 'Подольск, ул. Строителей, 8', '2026-03-25', 'Иван Петров', 'Осторожно, хрупкий груз в части партии'),
('ORD-002', '2026-03-21', 'new', 'ООО «ТехноСнаб»', '+7 (495) 987-65-43', 'info@technosnab.ru', 'Оборудование', '2 т', '6 м³', 'Промышленные станки', 'Санкт-Петербург, Выборгское ш., 5', 'Москва, Ленинградский пр., 80', '2026-03-28', '', ''),
('ORD-003', '2026-03-18', 'completed', 'Наталья Соколова', '+7 (916) 555-00-11', 'sokolova@gmail.com', 'Мебель', '800 кг', '15 м³', 'Офисная мебель, разборная', 'Казань, ул. Баумана, 44', 'Набережные Челны, пр. Мира, 12', '2026-03-20', 'Сергей Козлов', ''),
('ORD-004', '2026-03-22', 'new', 'ИП Федоров Д.А.', '+7 (903) 222-33-44', 'fedorov@yandex.ru', 'Продукты питания', '3 т', '8 м³', 'Замороженные продукты, требует рефрижератора', 'Екатеринбург, ул. Малышева, 101', 'Челябинск, ул. Победы, 55', '2026-03-24', '', 'Температурный режим -18°C'),
('ORD-005', '2026-03-19', 'cancelled', 'Виктор Смирнов', '+7 (926) 777-88-99', 'smirnov@mail.ru', 'Автозапчасти', '1.5 т', '4 м³', 'Запчасти для грузовых автомобилей', 'Нижний Новгород, пр. Гагарина, 20', 'Саратов, ул. Московская, 30', '2026-03-22', '', 'Клиент отменил заказ');
