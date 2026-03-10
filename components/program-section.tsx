import { Check, Gift, Percent, HeartHandshake } from "lucide-react"

const benefits = [
  "Accesso completo a tutte le funzionalità",
  "Supporto prioritario via chat e email",
  "Onboarding personalizzato con il team",
  "Integrazione con i tuoi sistemi contabili",
  "Dashboard analytics avanzata",
  "Nessun vincolo di permanenza"
]

export function ProgramSection() {
  return (
    <section id="programma" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-foreground mb-3 uppercase tracking-wide">
            Il Programma
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Lia for Startup: cresci senza pensieri
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un programma esclusivo pensato per supportare le Startup innovative 
            nella gestione del cash flow fin dai primi passi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Gift className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Onboarding gratuito e 100 fatture gratis
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Parti subito senza alcun costo: ti affianchiamo nell&apos;onboarding 
                    e puoi gestire le prime 100 fatture gratuitamente.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Percent className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Sconti sull&apos;abbonamento fino a 2 anni
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dopo le 100 fatture gratis, hai il 30% di sconto sull&apos;abbonamento per il primo anno 
                    e il 15% per il secondo anno, con tariffe dedicate alle Startup del programma.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Supporto dedicato
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Un team dedicato ti accompagna nella configurazione e 
                    nell&apos;ottimizzazione del processo di recupero crediti.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Cosa include il programma
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-muted/50">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Nota:</span> Il prezzo 
                dopo le 100 fatture gratuite e gli sconti dedicati ai primi due anni di abbonamento 
                viene calcolato in base al volume di fatture gestite e al valore degli incassi recuperati.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
