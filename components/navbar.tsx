"use client"

import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo-lia.svg" alt="Lia" className="w-8 h-8" />
          <span className="font-semibold text-xl text-foreground">Lia</span>
          <span className="ml-2 text-xs font-medium bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
            for Startup
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#programma" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Programma
          </a>
          <a href="#vantaggi" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Vantaggi
          </a>
          <a href="#requisiti" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Requisiti
          </a>
        </div>

        <Button className="gap-2 bg-[#DEFF0A] text-[#1A1A1A] hover:bg-[#DEFF0A]/90" asChild>
          <a href="#signup">
            <Rocket className="w-4 h-4" />
            Richiedi accesso
          </a>
        </Button>
      </div>
    </nav>
  )
}
