import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar({ onOpenForm }: { onOpenForm?: () => void }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="font-display text-xl font-bold text-[#2E3A46]">
              Директ<span className="text-[#F5A623]">Про</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-[#2E3A46] hover:text-[#F5A623] transition-colors duration-200 font-medium">
                Услуги
              </a>
              <a href="#extras" className="text-[#2E3A46] hover:text-[#F5A623] transition-colors duration-200 font-medium">
                Возможности
              </a>
              <a href="#faq" className="text-[#2E3A46] hover:text-[#F5A623] transition-colors duration-200 font-medium">
                Вопросы
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button onClick={onOpenForm} className="bg-[#FFCC00] hover:bg-[#F5A623] text-[#2E3A46] font-bold border-0 shadow-sm">
              Получить аудит
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2E3A46] hover:text-[#F5A623] transition-colors duration-200"
            >
              {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a
                href="#services"
                className="block px-3 py-2 text-[#2E3A46] hover:text-[#F5A623] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Услуги
              </a>
              <a
                href="#extras"
                className="block px-3 py-2 text-[#2E3A46] hover:text-[#F5A623] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Возможности
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 text-[#2E3A46] hover:text-[#F5A623] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Вопросы
              </a>
              <div className="px-3 py-2">
                <Button onClick={onOpenForm} className="w-full bg-[#FFCC00] hover:bg-[#F5A623] text-[#2E3A46] font-bold border-0">
                  Получить аудит
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}