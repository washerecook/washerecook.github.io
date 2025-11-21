"use client"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-balance">
          Üdvözlünk a <span className="text-primary">Talaj FC</span>-nél
        </h2>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 text-balance">
          A Szentgyörgyi István Általános Iskola legjobb kosárlabdacsapata. Passion, dedikáció és csapatszellem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 active:scale-95 animate-pulse-glow">
            Csatlakozz az csapathoz
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-all duration-300">
            Tudj meg többet
          </button>
        </div>
      </div>
    </section>
  )
}
