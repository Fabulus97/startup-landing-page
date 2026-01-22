import { 
  Bot, 
  RefreshCw, 
  BarChart3, 
  CreditCard,
  Zap,
  Shield
} from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI che parla come te",
    description: "lia comunica con i tuoi clienti in modo professionale e personalizzato, mantenendo il tono della tua azienda."
  },
  {
    icon: RefreshCw,
    title: "Riconciliazione automatica",
    description: "Verifichiamo i pagamenti e aggiorniamo lo stato delle fatture attive in maniera completamente automatica."
  },
  {
    icon: BarChart3,
    title: "3.000+ variabili analizzate",
    description: "Non ci limitiamo a inviare e-mail. Raccogliamo dati per ottimizzare ogni passo del processo di recupero."
  },
  {
    icon: CreditCard,
    title: "Pagamenti facilitati",
    description: "Il cliente può pagarti in pochi secondi, con il metodo che preferisce. Zero scuse, più incassi."
  },
  {
    icon: Zap,
    title: "Setup in 5 minuti",
    description: "Integrazione rapida con i tuoi sistemi esistenti. Nessuna configurazione complessa richiesta."
  },
  {
    icon: Shield,
    title: "GDPR compliant",
    description: "Sicurezza e privacy dei dati garantite. Conforme alle normative europee sulla protezione dei dati."
  }
]

export function FeaturesSection() {
  return (
    <section id="vantaggi" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-foreground mb-3 uppercase tracking-wide">
            Funzionalità
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Tutto ciò che serve per incassare in automatico
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            lia non è solo uno strumento, è il processo stesso. Ti costruisce un flusso, 
            lo ottimizza e lo gestisce per te.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
