"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MessageCircle, Users, Trophy, Star, Zap, TrendingUp } from "lucide-react"
import { AIChatModal } from "@/components/ai-chat-modal"
import { ContactModal } from "@/components/contact-modal"

export function MainContent() {
  const [showAIChat, setShowAIChat] = useState(false)
  const [showContact, setShowContact] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-primary mb-6">TALAJ FC</h1>
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              A Szentgyörgyi István Általános Iskola
            </p>
            <p className="text-3xl md:text-4xl font-bold text-primary mb-12">Legjobb Kosárlabda Csapata</p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => setShowAIChat(true)}
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider transition-all hover:scale-105"
            >
              <MessageCircle className="mr-2" />
              Beszélj az AI-val
            </Button>
            <Button
              onClick={() => setShowContact(true)}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-wider transition-all hover:scale-105"
            >
              <Users className="mr-2" />
              Csapattagok
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Why We're The Best Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center text-primary mb-16">Miért Vagyunk A Legjobbak?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Trophy,
              title: "Bajnokok",
              description:
                "Minden tornát megnyerünk! A Talaj FC legyőzhetetlen, mert mindannyian keményen dolgozunk és összeszokott csapatot alkotunk.",
            },
            {
              icon: Star,
              title: "Kiváló Játékosok",
              description:
                "A legjobb játékosok alkotják csapatunkat. Minden tagunk profi szinten játszik és rengeteg tapasztalattal rendelkezik.",
            },
            {
              icon: Zap,
              title: "Villámgyors Támadások",
              description:
                "A gyorsaságunk legendás! Senki sem tud lépést tartani velünk, amikor támadásba lendülünk a pályán.",
            },
            {
              icon: TrendingUp,
              title: "Folyamatos Fejlődés",
              description: "Minden nap eddzünk és fejlődünk. A siker titka a kemény munka és az állandó tanulás.",
            },
            {
              icon: Users,
              title: "Csapatszellem",
              description:
                "A közösség ereje! Együtt minden könnyebb, és a csapatszellemünk verhetetlen a pályán és azon kívül is.",
            },
            {
              icon: MessageCircle,
              title: "Kommunikáció",
              description:
                "Tökéletes együttműködés! A játék közben folyamatos a kommunikáció, így mindig tudjuk, mit csinál a másik.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all"
            >
              <item.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-secondary/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100%", label: "Győzelmi arány" },
              { number: "50+", label: "Kosár / meccs" },
              { number: "15+", label: "Csapattagok" },
              { number: "#1", label: "Rangsor az iskolában" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-5xl md:text-6xl font-bold text-primary">{stat.number}</div>
                <div className="text-lg text-muted-foreground uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-lg">
            © 2025 Talaj FC - Szentgyörgyi István Általános Iskola legenda csapata 🏀
          </p>
        </div>
      </div>

      <AIChatModal open={showAIChat} onOpenChange={setShowAIChat} />
      <ContactModal open={showContact} onOpenChange={setShowContact} />
    </div>
  )
}
