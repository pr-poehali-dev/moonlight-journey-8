import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"
import { AnimateOnScroll, AnimateStagger, staggerItem } from "@/components/animate-on-scroll"
import { motion } from "framer-motion"

const features = [
  {
    icon: "Search",
    title: "Анализ конкурентов",
    description: "Понимаем, какие объявления уже работают в вашей нише — используем это для вашего преимущества.",
  },
  {
    icon: "Target",
    title: "Точный таргетинг",
    description: "Собираем семантику и исключаем нецелевые показы минус-словами. Только ваша аудитория.",
  },
  {
    icon: "BarChart2",
    title: "Прозрачная аналитика",
    description: "Настраиваем цели в Метрике и UTM-метки для отслеживания каждого рубля вложений.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2E3A46] mb-4 font-display">
            Зачем нужна профессиональная настройка?
          </h2>
          <p className="text-xl text-[#2E3A46]/60 max-w-2xl mx-auto leading-relaxed">
            Без опытного специалиста рекламный бюджет легко уходит на нецелевые клики
          </p>
        </AnimateOnScroll>

        <AnimateStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="border border-gray-200 hover:border-[#FFCC00] hover:shadow-lg transition-all duration-300 bg-white h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#FFCC00]/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={feature.icon as "Search"} size={24} className="text-[#F5A623]" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#2E3A46] font-display">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#2E3A46]/65 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimateStagger>
      </div>
    </section>
  )
}
