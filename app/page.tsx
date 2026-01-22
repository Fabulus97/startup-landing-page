import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProgramSection } from "@/components/program-section"
import { EligibilitySection } from "@/components/eligibility-section"
import { CTASection } from "@/components/cta-section"
import { SignupForm } from "@/components/signup-form"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProgramSection />
      <EligibilitySection />
      <SignupForm />
      <CTASection />
      <Footer />
    </main>
  )
}
