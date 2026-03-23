export function Testimonials() {
  const testimonials = [
    {
      name: "Анна Ковальская",
      role: "Исполнительный ассистент в TechFlow Solutions",
      image: "/professional-woman-headshot.png",
      quote:
        "Структурированный подход к изучению инструментов управления проектами - именно то, что мне было нужно. Через два месяца я получила удаленную работу в tech-стартапе.",
    },
    {
      name: "Максим Волков",
      role: "VA в Stellar Analytics",
      image: "/professional-man-headshot.png",
      quote:
        "Коучинг помог мне обрести уверенность в общении с клиентами. Сейчас я веду аккаунты сразу трех компаний одновременно.",
    },
    {
      name: "Елена Родригес",
      role: "Фриланс VA, Alpine Ventures",
      image: "/professional-woman-smiling.png",
      quote:
        "Практические упражнения и реальные кейсы подготовили меня ко всему. Удержание клиентов значительно выросло после прохождения программы.",
    },
  ]

  return (
    <section id="testimonials" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Истории успеха</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Отзывы наших учеников</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
