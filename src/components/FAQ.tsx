import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Что если я полный новичок?",
      answer:
        "Не проблема! Обучение подходит для любого уровня. Мы начнем с основ и будем двигаться в вашем темпе. Каждая сессия адаптируется под ваш текущий опыт.",
    },
    {
      question: "Сколько длится сессия?",
      answer:
        "Каждая сессия длится 60 минут. Этого достаточно, чтобы разобрать материал, попрактиковаться и ответить на ваши вопросы без спешки.",
    },
    {
      question: "Можно ли перенести сессию?",
      answer:
        "Да, вы можете перенести сессию бесплатно, если сообщите минимум за 24 часа. Просто свяжитесь со мной как можно раньше.",
    },
    {
      question: "Что если обучение мне не подойдет?",
      answer:
        "Я предлагаю 100% гарантию возврата, если первая сессия вас не устроит. Ваш успех - мой приоритет.",
    },
    {
      question: "Есть ли пакетные предложения?",
      answer:
        "Да! Я предлагаю скидки на пакеты из 5 и 10 сессий. Свяжитесь со мной для уточнения условий.",
    },
    {
      question: "Помогаете ли вы с трудоустройством?",
      answer:
        "Да! Карьерная поддержка включена во все программы обучения. Это помощь с резюме, подготовка к собеседованиям и консультации по поиску работы.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
