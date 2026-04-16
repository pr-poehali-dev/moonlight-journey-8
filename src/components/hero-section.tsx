import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface HeroSectionProps {
  onOpenForm: () => void
}

export function HeroSection({ onOpenForm }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-16">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#2E3A46 1px, transparent 1px), linear-gradient(90deg, #2E3A46 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-20 right-10 w-96 h-96 bg-[#FFCC00]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#F5A623]/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#FFCC00]/20 border border-[#FFCC00]/40 rounded-full px-4 py-2 mb-8 fade-in">
          <Icon name="Target" size={16} className="text-[#F5A623]" />
          <span className="text-[#2E3A46] text-sm font-semibold">Профессиональная настройка рекламы</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-[#2E3A46] mb-6 font-display leading-tight fade-in">
          Настройка и сопровождение{" "}
          <span className="text-[#F5A623]">Яндекс.Директ</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#2E3A46]/70 mb-10 max-w-3xl mx-auto leading-relaxed fade-in-subtitle">
          Приводим целевых клиентов из поиска и РСЯ. Прозрачная аналитика, ручное управление ставками и постоянная оптимизация.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 slide-up">
          <Button
            size="lg"
            onClick={onOpenForm}
            className="bg-[#FFCC00] hover:bg-[#F5A623] text-[#2E3A46] font-bold text-lg px-8 py-6 shadow-lg"
          >
            Получить бесплатный аудит
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onOpenForm}
            className="border-[#2E3A46]/30 text-[#2E3A46] hover:bg-[#2E3A46] hover:text-white text-lg px-8 py-6 bg-transparent"
          >
            Узнать стоимость
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto slide-up">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#F5A623] font-display">12+</div>
            <div className="text-sm text-[#2E3A46]/60 mt-1">лет опыта</div>
          </div>
          <div className="text-center border-x border-gray-200">
            <div className="text-3xl font-bold text-[#F5A623] font-display">150+</div>
            <div className="text-sm text-[#2E3A46]/60 mt-1">клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#F5A623] font-display">30%</div>
            <div className="text-sm text-[#2E3A46]/60 mt-1">экономия бюджета</div>
          </div>
        </div>
      </div>


    </section>
  )
}