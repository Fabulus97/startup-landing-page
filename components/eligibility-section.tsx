import { Building2, Euro, FileCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const requirements = [
  {
    icon: Building2,
    title: "Startup Innovativa o PMI Innovativa",
    description: "Devi essere iscritta nella sezione speciale del Registro delle Imprese come Startup innovativa o PMI innovativa."
  },
  {
    icon: Euro,
    title: "Raising inferiore a €3M",
    description: "Il programma è riservato a Startup con una raccolta complessiva di capitali inferiore a 3 milioni di euro."
  },
  {
    icon: FileCheck,
    title: "Ricavi inferiori a 1M€",
    description: "Il programma è riservato a Startup con ricavi dell'anno precedente a quello in corso, inferiore a 1 milione di euro."
  }
]

export function EligibilitySection() {
  return (
    <section id="requisiti" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-foreground mb-3 uppercase tracking-wide">
            Requisiti
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Chi può accedere al programma
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lia for Startup è un programma esclusivo dedicato alle realtà innovative 
            italiane nelle prime fasi di crescita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {requirements.map((req, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-card border border-border text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
                <req.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {req.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {req.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
        </div>
      </div>
    </section>
  )
}
