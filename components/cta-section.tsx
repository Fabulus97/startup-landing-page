"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="p-12 rounded-3xl bg-primary text-primary-foreground text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
          
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Pronto a ridurre il carico amministrativo?
            </h2>
            
            <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
              Unisciti alle Startup che hanno già scelto Lia per automatizzare 
              la gestione delle fatture scadute e ridurre i tempi di incasso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gap-2 text-base px-8 bg-[#DEFF0A] text-[#1A1A1A] hover:bg-[#DEFF0A]/90"
                asChild
              >
                <a href="#signup">
                  Richiedi accesso al programma
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <p className="text-sm opacity-70 mt-6">
              Nessuna carta di credito richiesta • Setup in 5 minuti • Cancella quando vuoi
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
