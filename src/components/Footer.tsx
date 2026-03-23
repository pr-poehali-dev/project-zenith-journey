export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">E</span>
              </div>
              <span className="font-semibold">Elevate VA Academy</span>
            </div>
            <p className="text-sm text-background/70">Персональное обучение 1-на-1 для будущих виртуальных ассистентов.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#about" className="hover:text-background transition">
                  О нас
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-background transition">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-background transition">
                  Записаться
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-background transition">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Вопросы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Конфиденциальность
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Условия
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Связаться</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; 2025 Elevate VA Academy. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
