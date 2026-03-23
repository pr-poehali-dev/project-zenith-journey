export function AboutTrainer() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img src="/professional-trainer-headshot-smiling.jpg" alt="Тренер" className="w-full h-full object-cover rounded-2xl" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">О наставнике</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Ваш коуч по успеху в VA
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Более 10 лет опыта в виртуальном ассистировании и бизнес-операциях. Я помогла сотням
              специалистов освоить навыки, необходимые для успеха в этой динамичной сфере.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Моя экспертиза охватывает административный менеджмент, коммуникацию с клиентами, координацию
              проектов и владение цифровыми инструментами. Опыт работы с компаниями Fortune 500 и стартапами
              дает мне уникальное понимание того, что действительно ценят работодатели.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Сертифицированный коуч VA</p>
                  <p className="text-sm text-muted-foreground">Признание лидерами отрасли</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">500+ выпускников</p>
                  <p className="text-sm text-muted-foreground">95% карьерного роста</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Персональный подход</p>
                  <p className="text-sm text-muted-foreground">Адаптация под ваши цели</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
