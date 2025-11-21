"use client"

import type React from "react"

import { useState } from "react"

export default function JoinSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ name: "", discord: "" })
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setMessage("Sikeresen csatlakoztál a Talaj FC-hez! A csapata hamarosan felvenni veled a kapcsolatot.")
        setFormData({ name: "", discord: "" })
        setTimeout(() => setIsOpen(false), 2000)
      } else {
        setMessage("Valami hiba történt. Kérjük próbáld újra.")
      }
    } catch (error) {
      setMessage("Hiba a kapcsolódás közben. Kérjük próbáld újra.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Csatlakozz a Talaj FC-hez!</h2>
        <p className="text-foreground/70 text-lg mb-8 animate-fade-in">
          Szeretnél a legjobb kosárlabdacsapat tagja lenni? Töltsd ki az alábbi űrlapot és csatlakozz hozzánk!
        </p>

        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in"
          >
            Csatlakozni szeretnék
          </button>
        ) : (
          <div className="bg-card border border-border rounded-xl p-8 animate-fade-in shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-primary">Csatlakozási Form</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-left text-sm font-semibold mb-2">Teljes Neved</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Például: Kiss János"
                />
              </div>

              <div>
                <label className="block text-left text-sm font-semibold mb-2">Discord Felhasználóneved</label>
                <input
                  type="text"
                  required
                  value={formData.discord}
                  onChange={(e) => setFormData({ ...formData, discord: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Például: JanciKiss#1234"
                />
              </div>

              {message && (
                <p
                  className={`py-3 px-4 rounded-lg text-sm font-semibold ${message.includes("Sikeresen") ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
                >
                  {message}
                </p>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 px-6 py-2 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-all duration-300"
                >
                  {isLoading ? "Feltöltés..." : "Küldés"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false)
                    setMessage("")
                  }}
                  className="flex-1 px-6 py-2 bg-secondary text-foreground font-bold rounded-lg hover:bg-secondary/80 transition-all duration-300"
                >
                  Mégsem
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
