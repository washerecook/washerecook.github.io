"use client"

import { Music } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 z-10">
      <div className="text-center max-w-4xl">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary mb-8 animate-pulse">
          <Music className="w-10 h-10 text-primary" />
        </div>

        <h1 className="font-[family-name:var(--font-orbitron)] text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
          DJ <span className="text-primary">Phantøm</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">Juhász Koppány</p>

        <p className="text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-2xl mx-auto text-pretty">
          Ahol a zene és az informatika találkozik
        </p>

        <Button size="lg" className="text-lg px-8 py-6 font-semibold" onClick={scrollToContact}>
          Kapcsolatfelvétel
        </Button>
      </div>
    </section>
  )
}
