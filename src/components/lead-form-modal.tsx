import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

interface LeadFormModalProps {
  isOpen: boolean
  onClose: () => void
}

const API_URL = "https://functions.poehali.dev/2bbbc4bb-2d37-450b-b601-72d7e928c09c"

export function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  if (!isOpen) return null

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
        setError(data.error || "Что-то пошло не так, попробуйте ещё раз")
      }
    } catch {
      setError("Ошибка сети, попробуйте ещё раз")
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setSuccess(false)
    setError("")
    setPhone("")
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#2E3A46] transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        {success ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-[#FFCC00]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={32} className="text-[#F5A623]" />
            </div>
            <h3 className="text-2xl font-bold text-[#2E3A46] mb-2 font-display">Заявка отправлена!</h3>
            <p className="text-[#2E3A46]/60">Мы свяжемся с вами в ближайшее время</p>
            <Button
              className="mt-6 bg-[#FFCC00] hover:bg-[#F5A623] text-[#2E3A46] font-bold"
              onClick={handleClose}
            >
              Отлично!
            </Button>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-[#FFCC00]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-[#F5A623]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2E3A46] font-display">Оставить заявку</h3>
              <p className="text-[#2E3A46]/55 mt-1 text-sm">
                Введите номер — перезвоним в течение часа
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12 text-base border-gray-200 focus:border-[#FFCC00] focus:ring-[#FFCC00] rounded-xl"
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
  )
}
