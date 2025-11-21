"use client"

import type React from "react"

import { useState } from "react"
import { Send, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email && !phone) {
      toast({
        title: "Hiányzó információ",
        description: "Kérlek adj meg egy email címet vagy telefonszámot!",
        variant: "destructive",
      })
      return
    }

    if (!message.trim()) {
      toast({
        title: "Hiányzó üzenet",
        description: "Kérlek írj egy üzenetet!",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const webhookUrl =
        "https://discord.com/api/webhooks/1441520976150921329/3StwfQ8JhXmP3kWcIVh91y0LQnd5N1nPxuon0hbjDqsKlyk5aPwQjd6BfkrVyGI9duzc"

      const discordMessage = {
        embeds: [
          {
            title: "🎵 Új Üzenet DJ Phantøm-nak",
            color: 0x6366f1, // Cyan blue color
            fields: [
              {
                name: "📧 Email",
                value: email || "Nincs megadva",
                inline: true,
              },
              {
                name: "📱 Telefon",
                value: phone || "Nincs megadva",
                inline: true,
              },
              {
                name: "💬 Üzenet",
                value: message,
              },
            ],
            timestamp: new Date().toISOString(),
            footer: {
              text: "DJ Phantøm Portfólió",
            },
          },
        ],
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discordMessage),
      })

      if (response.ok) {
        toast({
          title: "Üzenet elküldve! ✓",
          description: "Hamarosan jelentkezem!",
        })
        setEmail("")
        setPhone("")
        setMessage("")
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Hiba történt",
        description: "Nem sikerült elküldeni az üzenetet. Próbáld újra!",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 px-4 z-10">
      <div className="max-w-2xl mx-auto">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-bold mb-8 text-primary text-center">
            Kapcsolat
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email cím
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="pelda@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Telefonszám (opcionális)
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+36 XX XXX XXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Üzenet
              </Label>
              <Textarea
                id="message"
                placeholder="Írj nekem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="bg-background/50 resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-lg" disabled={isLoading}>
              {isLoading ? "Küldés..." : "Üzenet küldése"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
