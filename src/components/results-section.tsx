import Icon from "@/components/ui/icon"

const results = [
  {
    icon: "FileText",
    title: "Прозрачная отчётность",
    description: "Все действия видны в рекламном кабинете и Метрике. Никаких скрытых операций.",
  },
  {
    icon: "Users",
    title: "Рост целевых обращений",
    description: "Объявления видят те, кто уже ищет ваши услуги. Горячий трафик с первого дня.",
  },
  {
    icon: "PiggyBank",
    title: "Экономия бюджета",
    description: "Минус-слова и ручное управление ставками снижают нецелевые расходы до 30%.",
  },
  {
    icon: "RefreshCw",
    title: "Постоянная оптимизация",
    description: "Мы не просто запускаем — мы улучшаем кампании каждый месяц на основе данных.",
  },
]

export function ResultsSection() {
  return (
    <section className="py-24 px-6 bg-[#2E3A46]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-display">Что вы получите в итоге?</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Результат нашей работы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-[#FFCC00]/20 rounded-xl flex items-center justify-center mb-4">
                <Icon name={item.icon as "FileText"} size={24} className="text-[#FFCC00]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-display">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
