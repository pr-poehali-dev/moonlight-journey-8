import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimateOnScroll, AnimateStagger, staggerItem } from "@/components/animate-on-scroll"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "Сколько времени занимает настройка рекламы?",
    answer:
      "Стандартная настройка занимает 3–5 рабочих дней. За это время мы собираем семантику, пишем объявления, настраиваем кампании и метрику. В срочных случаях можем запустить быстрее.",
  },
  {
    question: "Какой рекламный бюджет нужен для старта?",
    answer:
      "Минимальный эффективный бюджет зависит от ниши, но в среднем от 30 000 ₽/мес на рекламный бюджет. На созвоне обсудим вашу нишу и дадим конкретную рекомендацию.",
  },
  {
    question: "Как я буду видеть результаты?",
    answer:
      "Все кампании ведутся в вашем рекламном кабинете — у вас всегда есть доступ. Ежемесячно предоставляем отчёт с ключевыми метриками: показы, клики, заявки, стоимость обращения.",
  },
  {
    question: "Что входит в бесплатный аудит?",
    answer:
      "Проанализируем текущие кампании (если есть), найдём точки потерь бюджета, оценим конкурентов и предложим конкретные улучшения. Займёт 1–2 рабочих дня.",
  },
  {
    question: "Можно ли совмещать настройку и ведение?",
    answer:
      "Да, многие клиенты начинают с разовой настройки, а затем переходят на ежемесячное ведение. Или сразу берём оба формата — настраиваем и сразу ведём.",
  },
  {
    question: "Вы работаете только с Яндекс.Директ?",
    answer:
      "Основная специализация — Яндекс.Директ (поиск + РСЯ). Дополнительно предлагаем SEO, разработку сайтов и подключение аналитики — всё для комплексного роста.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2E3A46] mb-4 font-display">Частые вопросы</h2>
          <p className="text-xl text-[#2E3A46]/60 max-w-2xl mx-auto">
            Ответы на популярные вопросы о нашей работе
          </p>
        </AnimateOnScroll>

        <Accordion type="single" collapsible>
          <AnimateStagger className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={staggerItem}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white border border-gray-200 rounded-xl px-6 data-[state=open]:border-[#FFCC00]"
                >
                  <AccordionTrigger className="text-[#2E3A46] font-semibold font-display text-left hover:no-underline hover:text-[#F5A623] py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#2E3A46]/70 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </AnimateStagger>
        </Accordion>
      </div>
    </section>
  )
}