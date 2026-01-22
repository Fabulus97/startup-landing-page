"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, TrendingDown, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground border-primary">
          <Sparkles className="w-4 h-4 mr-2 text-primary-foreground" />
          3 mesi gratis per startup innovative
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
          Il tuo assistente AI per{" "}
          <span className="bg-primary text-primary-foreground px-2 rounded">incassare le fatture</span>{" "}
          mentre fai crescere la tua startup
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          lia automatizza la gestione delle fatture scadute, permettendoti di concentrarti 
          su ciò che conta davvero: costruire il tuo prodotto e scalare il business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="gap-2 text-base px-8 bg-[#DEFF0A] text-[#1A1A1A] hover:bg-[#DEFF0A]/90" asChild>
            <a href="#signup">
              Inizia gratis per 3 mesi
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" asChild>
            <a href="#programma">Scopri il programma</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-foreground">-70%</p>
              <p className="text-sm text-muted-foreground">Tempo di incasso</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-foreground">20 giorni</p>
              <p className="text-sm text-muted-foreground">Tempo medio incasso</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-foreground">3 mesi</p>
              <p className="text-sm text-muted-foreground">Gratis per startup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
