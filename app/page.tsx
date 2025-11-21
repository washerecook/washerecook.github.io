"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { MainContent } from "@/components/main-content"

export default function Page() {
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  const handleVerify = () => {
    setIsVerifying(true)
    setTimeout(() => {
      setIsVerifying(false)
      setIsVerified(true)
    }, 3000)
  }

  if (!isVerified) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8 p-8"
        >
          <motion.div initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-primary">TALAJ FC</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-4">Ellenőrizd, hogy ember vagy</p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <Button
              onClick={handleVerify}
              disabled={isVerifying}
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider transition-all hover:scale-105"
            >
              {isVerifying ? (
                <span className="flex items-center gap-2">
                  <motion.div
                    className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  Ellenőrzés...
                </span>
              ) : (
                "Ellenőrzés indítása"
              )}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm text-muted-foreground"
          >
            🏀 A weboldal betöltéséhez kattints a gombra
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <MainContent />
      </motion.div>
    </AnimatePresence>
  )
}
