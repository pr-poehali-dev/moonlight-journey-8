import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const testimonials = [
  {
    name: "Алексей Смирнов",
    role: "Владелец строительной компании",
    initials: "АС",
    content:
      "За первый месяц сопровождения стоимость заявки снизилась с 4500 до 1800 рублей. Чёткая отчётность — вижу каждый шаг.",
  },
  {
    name: "Марина Козлова",
    role: "Руководитель медицинской клиники",
    initials: "МК",
    content:
      "Настроили рекламу за 5 дней. Первые звонки пошли в день запуска. Очень довольна прозрачностью работы.",
  },
  {
    name: "Дмитрий Воронов",
    role: "Директор юридической фирмы",
    initials: "ДВ",
    content:
      "Перешли от другого агентства — разница ощутимая. Реальные конверсии, а не просто красивые отчёты.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2E3A46] mb-4 font-display">Нам доверяют</h2>
          <p className="text-xl text-[#2E3A46]/60 max-w-2xl mx-auto leading-relaxed">
            Что говорят наши клиенты о результатах
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:border-[#FFCC00] hover:shadow-lg transition-all duration-300 slide-up bg-white"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-[#FFCC00] fill-[#FFCC00]" />
                  ))}
                </div>
                <p className="text-[#2E3A46]/80 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFCC00] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#2E3A46] font-bold text-sm">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2E3A46]">{testimonial.name}</p>
                    <p className="text-sm text-[#2E3A46]/50">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
