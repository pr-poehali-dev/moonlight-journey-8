import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-[#2E3A46] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display text-2xl font-bold text-white mb-4">
              Директ<span className="text-[#FFCC00]">Про</span>
            </h2>
            <p className="text-white/50 mb-6 max-w-md leading-relaxed">
              Профессиональная настройка и ведение Яндекс.Директ. Приводим целевых клиентов из поиска и РСЯ.
            </p>
            <div className="flex space-x-4">
              <a href="https://t.me/@atoyo" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FFCC00] transition-colors duration-200">
                <Icon name="Send" size={20} />
              </a>
              <a href="https://wa.me/79111132764" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FFCC00] transition-colors duration-200">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="mailto:atoyo.vega@gmail.com" className="text-white/40 hover:text-[#FFCC00] transition-colors duration-200">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/50 hover:text-[#FFCC00] transition-colors duration-200 text-sm">
                  Настройка Директ
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/50 hover:text-[#FFCC00] transition-colors duration-200 text-sm">
                  Ведение рекламы
                </a>
              </li>
              <li>
                <a href="#extras" className="text-white/50 hover:text-[#FFCC00] transition-colors duration-200 text-sm">
                  SEO-продвижение
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/50 hover:text-[#FFCC00] transition-colors duration-200 text-sm">
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:89111132764" className="text-white/50 hover:text-[#FFCC00] transition-colors text-sm">
                  8-911-113-27-64
                </a>
              </li>
              <li>
                <a href="mailto:atoyo.vega@gmail.com" className="text-white/50 hover:text-[#FFCC00] transition-colors text-sm">
                  atoyo.vega@gmail.com
                </a>
              </li>
              <li>
                <a href="https://creocamera.ru" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#FFCC00] transition-colors text-sm">
                  Creocamera.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/30 text-sm">© 2026 ДиректПро. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/30 hover:text-[#FFCC00] text-sm transition-colors duration-200">
                Конфиденциальность
              </a>
              <a href="#" className="text-white/30 hover:text-[#FFCC00] text-sm transition-colors duration-200">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
