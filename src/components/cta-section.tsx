import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface CTASectionProps {
  onOpenForm: () => void
}

export function CTASection({ onOpenForm }: CTASectionProps) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#2E3A46] rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFCC00]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F5A623]/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#FFCC00]/20 border border-[#FFCC00]/30 rounded-full px-4 py-2 mb-6">
              <Icon name="MessageCircle" size={16} className="text-[#FFCC00]" />
              <span className="text-[#FFCC00] text-sm font-semibold">Готовы обсудить ваш проект?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
              Оставьте заявку — проведём{" "}
              <span className="text-[#FFCC00]">бесплатный аудит</span>
            </h2>

            <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Созвонимся, разберём вашу ситуацию и предложим стратегию. Без обязательств и навязчивых продаж.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={onOpenForm}
                className="bg-[#FFCC00] hover:bg-[#F5A623] text-[#2E3A46] font-bold text-lg px-8 py-6 shadow-lg"
              >
                <Icon name="Phone" size={18} className="mr-2" />
                Оставить заявку
              </Button>
              <a
                href="https://t.me/@atoyo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent w-full"
                >
                  <Icon name="Send" size={18} className="mr-2" />
                  Написать в Telegram
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-10">
              <a href="tel:89111132764" className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
                <Icon name="Phone" size={20} className="text-[#FFCC00]" />
                <span className="text-white font-semibold">8-911-113-27-64</span>
                <span className="text-white/40 text-sm">Телефон</span>
              </a>
              <a href="mailto:atoyo.vega@gmail.com" className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
                <Icon name="Mail" size={20} className="text-[#FFCC00]" />
                <span className="text-white font-semibold">atoyo.vega@gmail.com</span>
                <span className="text-white/40 text-sm">Email</span>
              </a>
              <a href="https://creocamera.ru" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
                <Icon name="Globe" size={20} className="text-[#FFCC00]" />
                <span className="text-white font-semibold">Creocamera.ru</span>
                <span className="text-white/40 text-sm">Сайт</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
