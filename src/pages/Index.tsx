import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ServicesSection } from "@/components/services-section"
import { ResultsSection } from "@/components/results-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ExtrasSection } from "@/components/extras-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LeadFormModal } from "@/components/lead-form-modal"

export default function Index() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <div>
      <Navbar onOpenForm={() => setFormOpen(true)} />
      <main>
        <HeroSection onOpenForm={() => setFormOpen(true)} />
        <FeaturesSection />
        <section id="services">
          <ServicesSection />
        </section>
        <ResultsSection />
        <TestimonialsSection />
        <section id="extras">
          <ExtrasSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <CTASection onOpenForm={() => setFormOpen(true)} />
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
      <LeadFormModal isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  )
}