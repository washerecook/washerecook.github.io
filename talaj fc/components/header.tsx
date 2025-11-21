"use client"

export default function Header({ onChatToggle, chatOpen }: { onChatToggle: () => void; chatOpen: boolean }) {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border animate-slide-left">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">T</span>
          </div>
          <h1 className="text-2xl font-bold">
            Talaj <span className="text-primary">FC</span>
          </h1>
        </div>

        <button
          onClick={onChatToggle}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
            chatOpen ? "bg-primary text-primary-foreground" : "bg-secondary/20 text-foreground hover:bg-secondary/30"
          }`}
        >
          {chatOpen ? "Vissza" : "AI Csevegés"}
        </button>
      </div>
    </header>
  )
}
