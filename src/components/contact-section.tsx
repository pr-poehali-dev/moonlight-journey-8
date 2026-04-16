import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

const API_URL = "https://functions.poehali.dev/2bbbc4bb-2d37-450b-b601-72d7e928c09c"

export function ContactSection() {
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone.trim()) {
      setError("Введите номер телефона")
      return
    }
    setLoading(true)
    setError("")
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setSuccess(true)
        setPhone("")
      } else {
        setError(data.error || "Что-то пошло не так")
      }
    } catch {
      setError("Ошибка сети, попробуйте ещё раз")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: contacts */}
          <div>
            <h2 className="text-4xl font-bold text-[#2E3A46] mb-4 font-display">
              Свяжитесь с нами
            </h2>
            <p className="text-[#2E3A46]/60 text-lg mb-8 leading-relaxed">
              Оставьте заявку — проведём бесплатный аудит текущей рекламы или созвонимся для обсуждения стратегии.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="tel:89111132764"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-[#FFCC00]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFCC00]/40 transition-colors">
                  <Icon name="Phone" size={20} className="text-[#F5A623]" />
                </div>
                <div>
                  <div className="text-xs text-[#2E3A46]/40 mb-0.5">Телефон</div>
                  <div className="font-semibold text-[#2E3A46] group-hover:text-[#F5A623] transition-colors">8-911-113-27-64</div>
                </div>
              </a>

              <a
                href="mailto:atoyo.vega@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-[#FFCC00]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFCC00]/40 transition-colors">
                  <Icon name="Mail" size={20} className="text-[#F5A623]" />
                </div>
                <div>
                  <div className="text-xs text-[#2E3A46]/40 mb-0.5">Email</div>
                  <div className="font-semibold text-[#2E3A46] group-hover:text-[#F5A623] transition-colors">atoyo.vega@gmail.com</div>
                </div>
              </a>

              <a
                href="https://creocamera.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-[#FFCC00]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFCC00]/40 transition-colors">
                  <Icon name="Globe" size={20} className="text-[#F5A623]" />
                </div>
                <div>
                  <div className="text-xs text-[#2E3A46]/40 mb-0.5">Сайт</div>
                  <div className="font-semibold text-[#2E3A46] group-hover:text-[#F5A623] transition-colors">Creocamera.ru</div>
                </div>
              </a>
            </div>

            <div className="flex gap-3">
              <a
                href="https://t.me/@atoyo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#2E3A46] hover:bg-[#3a4a59] text-white px-4 py-2.5 rounded-xl font-medium transition-colors text-sm"
              >
                <Icon name="Send" size={16} />
                Telegram
              </a>
              <a
                href="https://wa.me/79111132764"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white px-4 py-2.5 rounded-xl font-medium transition-colors text-sm"
              >
                <Icon name="MessageCircle" size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#FFCC00]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-[#F5A623]" />
                </div>
                <h3 className="text-2xl font-bold text-[#2E3A46] mb-2 font-display">Заявка отправлена!</h3>
                <p className="text-[#2E3A46]/60">Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-[#2E3A46] mb-2 font-display">Оставить заявку</h3>
                <p className="text-[#2E3A46]/55 mb-6">Введите номер — перезвоним в течение часа</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-12 text-base border-gray-200 focus:border-[#FFCC00] rounded-xl"
                    />
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-[#FFCC00] hover:bg-[#F5A623] text-[#2E3A46] font-bold text-base rounded-xl"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <Icon name="Loader" size={18} className="animate-spin" />
                        Отправляем...
                      </span>
                    ) : (
                      "Оставить заявку"
                    )}
                  </Button>
                  <p className="text-center text-xs text-[#2E3A46]/40">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
