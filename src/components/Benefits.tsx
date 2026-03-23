export function Benefits() {
  const benefits = [
    {
      icon: "👤",
      title: "Персональное обучение",
      description: "Индивидуальные сессии под ваш уровень и карьерные цели",
    },
    {
      icon: "⏰",
      title: "Гибкое расписание",
      description: "Занятия в удобное для вас время",
    },
    {
      icon: "💬",
      title: "Обратная связь в реальном времени",
      description: "Мгновенные рекомендации и корректировки на занятиях",
    },
    {
      icon: "🚀",
      title: "Карьерная поддержка",
      description: "Помощь с резюме, подготовка к собеседованиям, трудоустройство",
    },
    {
      icon: "🛠️",
      title: "Инструменты и ресурсы",
      description: "Доступ к шаблонам, гайдам и профессиональным инструментам",
    },
    {
      icon: "📈",
      title: "Бессрочный доступ",
      description: "Поддержка и материалы даже после завершения обучения",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Почему мы</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Все для вашего успеха
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Комплексное обучение для ускорения вашей карьеры виртуального ассистента
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
