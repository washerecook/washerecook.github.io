export function AboutSection() {
  return (
    <section className="relative py-24 px-4 z-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-bold mb-8 text-primary">
            Rólam
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-card-foreground">
            <p>
              Szia, <strong>Juhász Koppány</strong> vagyok – vagy ahogy a legtöbben ismernek:{" "}
              <strong className="text-primary">DJ Phantøm</strong>.
            </p>

            <p>
              Már <strong>9 évesen</strong> beleszerettem a DJ-zés világába. A zene, a ritmus és a pult mögötti
              varázslat teljesen elkapott. <strong>10 éves koromban</strong> megkaptam az első saját DJ pultomat, és
              onnantól kezdve minden szabad percem a gyakorlásról szólt.
            </p>

            <p>
              <strong>11 évesen</strong> már komolyan fejlesztettem a technikámat, és <strong>12 évesen</strong>{" "}
              elkezdtem hangosítani iskolai rendezvényeken, falusi eseményeken, lagzikon és születésnapi bulikon.
            </p>

            <div className="py-6 px-8 bg-primary/10 border-l-4 border-primary rounded-r-lg">
              <p className="italic text-primary-foreground">
                Számomra a DJ-zés nem csak zene – ez szenvedély, önkifejezés és energiaátadás.
              </p>
            </div>

            <p>De nem csak a zenében találtam meg önmagam.</p>

            <p>
              Már fiatalon elkezdett érdekelni az <strong>informatika világa</strong> is: a számítógépek működése, a
              programok logikája, a technológia rejtett világa. Szívesen tanulok új dolgokat, kísérletezem, és minden
              nap bővítem a tudásomat – legyen szó zenei szoftverekről, rendszerekről vagy akár programozásról.
            </p>

            <p className="text-primary font-semibold">
              Célom, hogy a zenét és a technológiát ötvözve egyedi és különleges élményeket hozzak létre.
            </p>

            <p className="text-xl font-semibold pt-4">Üdv a világomban – ahol a zene és az informatika találkozik.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
