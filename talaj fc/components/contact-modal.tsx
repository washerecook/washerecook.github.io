"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { Send, CheckCircle2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const { toast } = useToast()

  const sendToDiscord = async () => {
    if (!name.trim() || !message.trim()) {
      toast({
        title: "Hiba",
        description: "Kérlek, töltsd ki az összes mezőt!",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      })

      if (response.ok) {
        setIsSent(true)
        toast({
          title: "Sikeres!",
          description: "Az üzeneted elküldtük a csapatnak!",
        })
        setTimeout(() => {
          setIsSent(false)
          setName("")
          setMessage("")
          onOpenChange(false)
        }, 2000)
      } else {
        throw new Error("Failed to send")
      }
    } catch (error) {
      toast({
        title: "Hiba",
        description: "Nem sikerült elküldeni az üzenetet. Próbáld újra!",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-2 border-primary">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Beszélj a Csapattagokkal</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Küldj üzenetet a Talaj FC tagoknak! Hamarosan válaszolunk Discordon.
          </DialogDescription>
        </DialogHeader>

        {isSent ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex flex-col items-center justify-center py-8 gap-4"
          >
            <CheckCircle2 className="w-20 h-20 text-primary" />
            <p className="text-xl font-bold text-foreground">Üzenet elküldve!</p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Neved
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Add meg a neved..."
                className="bg-secondary border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Üzenet
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Írd meg az üzeneted..."
                rows={5}
                className="bg-secondary border-border resize-none"
              />
            </div>

            <Button
              onClick={sendToDiscord}
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <motion.div
                    className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  Küldés...
                </span>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Üzenet küldése
                </>
              )}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
