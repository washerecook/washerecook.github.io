import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { SmokeBackground } from "@/components/smoke-background"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <SmokeBackground />
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
