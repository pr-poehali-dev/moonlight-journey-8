import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#2E3A46] rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Background decoration */}
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
                className="bg-[#FFCC00] hover:bg-[#F5A623] text-[#2E3A46] font-bold text-lg px-8 py-6 shadow-lg"
              >
                <Icon name="Send" size={18} className="mr-2" />
                Связаться в Telegram
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent"
              >
                <Icon name="Mail" size={18} className="mr-2" />
                Написать на почту
              </Button>
            </div>

            {/* Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-10">
              <div className="flex flex-col items-center gap-2">
                <Icon name="Phone" size={20} className="text-[#FFCC00]" />
                <span className="text-white font-semibold">+7 (XXX) XXX-XX-XX</span>
                <span className="text-white/40 text-sm">Телефон</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="Mail" size={20} className="text-[#FFCC00]" />
                <span className="text-white font-semibold">your@email.ru</span>
                <span className="text-white/40 text-sm">Email</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="Globe" size={20} className="text-[#FFCC00]" />
                <span className="text-white font-semibold">вашсайт.рф</span>
                <span className="text-white/40 text-sm">Сайт</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
