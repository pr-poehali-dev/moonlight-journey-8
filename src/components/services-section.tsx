import Icon from "@/components/ui/icon"
import { AnimateOnScroll, AnimateStagger, staggerItem } from "@/components/animate-on-scroll"
import { motion } from "framer-motion"

const setupItems = [
  "Анализ конкурентов в выдаче",
  "Сбор семантики и минус-слов",
  "Создание текстов объявлений",
  "Настройка ставок и стратегий",
  "UTM-метки и расширения",
  "Настройка РСЯ и аудиторий",
  "Настройка целей в Яндекс.Метрике",
  "Аудит существующего кабинета (опционально)",
]

const managementItems = [
  "Контроль цены клика и позиций",
  "Запуск новых рекламных кампаний",
  "Доработка ключевых слов и минус-слов",
  "Создание объявлений и A/B-тесты",
  "Аналитика показателей и конверсий",
  "Расширение семантического ядра",
  "Тестирование гипотез",
  "Анализ поведения на сайте",
  "Рекомендации по посадочным страницам",
]

function ServiceCard({
  icon,
  title,
  subtitle,
  items,
  price,
  priceNote,
  highlight,
}: {
  icon: string
  title: string
  subtitle: string
  items: string[]
  price: string
  priceNote: string
  highlight?: boolean
}) {
  return (
    <div
      className={`rounded-2xl border-2 p-8 flex flex-col ${
        highlight
          ? "border-[#FFCC00] bg-white shadow-xl shadow-[#FFCC00]/20"
          : "border-gray-200 bg-white shadow-sm hover:border-[#FFCC00]/50 transition-colors"
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#FFCC00]/20 rounded-xl flex items-center justify-center">
          <Icon name={icon as "Settings"} size={24} className="text-[#F5A623]" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#2E3A46] font-display">{title}</h3>
          <p className="text-sm text-[#2E3A46]/50">{subtitle}</p>
        </div>
      </div>

      <ul className="space-y-3 flex-1 mb-8">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-[#FFCC00]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Icon name="Check" size={12} className="text-[#F5A623]" />
            </div>
            <span className="text-[#2E3A46]/75 text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-100 pt-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-[#2E3A46] font-display">{price}</div>
          <div className="text-sm text-[#2E3A46]/50 mt-1">{priceNote}</div>
        </div>
      </div>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2E3A46] mb-4 font-display">Наши услуги</h2>
          <p className="text-xl text-[#2E3A46]/60 max-w-2xl mx-auto">
            Выберите подходящий формат работы
          </p>
        </AnimateOnScroll>

        <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={staggerItem}>
            <ServiceCard
              icon="Settings"
              title="Разовый запуск рекламы"
              subtitle="Полная настройка с нуля"
              items={setupItems}
              price="30 000 ₽"
              priceNote="единоразово"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ServiceCard
              icon="TrendingUp"
              title="Ежемесячное ведение"
              subtitle="Оптимизация и развитие"
              items={managementItems}
              price="30 000 ₽/мес"
              priceNote="оплата до начала нового месяца"
              highlight
            />
          </motion.div>
        </AnimateStagger>
      </div>
    </section>
  )
}
