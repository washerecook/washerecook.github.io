"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import WhyBest from "@/components/why-best"
import JoinSection from "@/components/join-section"
import AIChat from "@/components/ai-chat"

export default function MainWebsite() {
  const [showChat, setShowChat] = useState(false)

  return (
    <div className="w-full bg-background text-foreground animate-fade-in">
      <Header onChatToggle={() => setShowChat(!showChat)} chatOpen={showChat} />
      {!showChat ? (
        <>
          <Hero />
          <WhyBest />
          <JoinSection />
        </>
      ) : (
        <AIChat />
      )}
    </div>
  )
}
