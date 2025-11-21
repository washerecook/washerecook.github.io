"use client"

export default function WhyBest() {
  const reasons = [
    {
      title: "Kiválló játékosok",
      description: "Az iskolánk legjobb sportolói alkotják a csapatot, akik rendszeres edzésen vesznek részt.",
      icon: "🏀",
    },
    {
      title: "Profi edzés",
      description: "Professzionális edzők vezetik az edzéseket, akik nemzetközi szinten is dolgoztak.",
      icon: "💪",
    },
    {
      title: "Csapatszellem",
      description: "Egy valódi család vagyunk, ahol a kölcsönös segítés és támogatás az első.",
      icon: "🤝",
    },
    {
      title: "Verseny sikerek",
      description: "Számtalan győzelmet szerzünk az iskolai és helyi versenyeken.",
      icon: "🏆",
    },
    {
      title: "Fiatalos energia",
      description: "Fiatal, lelkes csapat, amely mindig készen áll a kihívásokra.",
      icon: "⚡",
    },
    {
      title: "Fejlődési lehetőség",
      description: "Az iskolában edzünk, de a jövőben profi kosárlabdázók lehetünk.",
      icon: "🚀",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">Miért Talaj FC a legjobb?</h2>
        <p className="text-center text-foreground/70 mb-16 text-lg animate-fade-in">
          Ezek az okok teszik a Talaj FC-t a Szentgyörgyi István Általános Iskola legjobb kosárlabdacsapatává
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-primary">{reason.title}</h3>
              <p className="text-foreground/70">{reason.description}</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
