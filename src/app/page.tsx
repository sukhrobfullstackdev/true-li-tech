import HeroBanner from "@/components/hero-banner"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import PortfolioSection from "@/components/portfolio-section"
// import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <HeroBanner />

      <ServicesSection />

      <ProcessSection />

      <PortfolioSection />

      {/* <TestimonialsSection /> */}
      <ContactSection />

      <CTASection />
    </>
  )
}

