import Icon from "@/components/ui/icon"
import { AnimateOnScroll, AnimateStagger, staggerItem } from "@/components/animate-on-scroll"
import { motion } from "framer-motion"

const extras = [
  { icon: "Phone", label: "Подключение колл-трекинга" },
  { icon: "Code", label: "Техническая оптимизация сайта" },
  { icon: "Globe", label: "SEO-продвижение" },
  { icon: "Palette", label: "Новый дизайн сайта" },
  { icon: "RefreshCw", label: "Перенос сайта на WordPress" },
  { icon: "BarChart2", label: "Интеграция со сквозной аналитикой" },
]

export function ExtrasSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2E3A46] mb-4 font-display">Дополнительные возможности</h2>
          <p className="text-xl text-[#2E3A46]/60 max-w-2xl mx-auto">
            Опциональные услуги для комплексного развития
          </p>
        </AnimateOnScroll>

        <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {extras.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 hover:border-[#FFCC00] hover:bg-[#FFCC00]/5 transition-all duration-200"
            >
              <div className="w-10 h-10 bg-[#FFCC00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={item.icon as "Phone"} size={20} className="text-[#F5A623]" />
              </div>
              <span className="text-[#2E3A46] font-medium text-sm">{item.label}</span>
            </motion.div>
          ))}
        </AnimateStagger>

        <AnimateOnScroll>
          <div className="text-center bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-2xl px-8 py-6">
            <Icon name="MessageCircle" size={28} className="text-[#F5A623] mx-auto mb-3" />
            <p className="text-[#2E3A46] font-semibold text-lg">
              Стоимость рассчитывается индивидуально — обсудим на созвоне
            </p>
            <p className="text-[#2E3A46]/55 mt-1">Оставьте заявку и мы свяжемся в течение часа</p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
