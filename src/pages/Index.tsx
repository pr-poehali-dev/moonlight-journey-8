import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ServicesSection } from "@/components/services-section"
import { ResultsSection } from "@/components/results-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ExtrasSection } from "@/components/extras-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Index() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
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
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
