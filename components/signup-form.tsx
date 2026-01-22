"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"
import { submitEmail } from "@/app/actions/submit-email"

export function SignupForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    if (!email || !email.includes("@")) {
      setError("Inserisci una mail aziendale valida")
      return
    }

    setIsLoading(true)
    
    const result = await submitEmail(email)
    
    setIsLoading(false)
    
    if (result.success) {
      setIsSubmitted(true)
    } else {
      setError(result.error || "Errore durante l'invio. Riprova.")
    }
  }

  if (isSubmitted) {
    return (
      <div id="signup" className="py-20 px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Richiesta inviata!
          </h3>
          <p className="text-muted-foreground">
            Ti contatteremo presto a <span className="font-medium text-foreground">{email}</span> per 
            attivare il tuo accesso al programma lia for Startup.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div id="signup" className="py-20 px-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Richiedi accesso al programma
          </h3>
          <p className="text-muted-foreground">
            Inserisci la tua mail aziendale e ti contatteremo entro 24 ore.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="nome@tuastartup.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-base bg-card border-border"
              required
            />
            {error && (
              <p className="text-sm text-destructive mt-2">{error}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            size="lg" 
            className="w-full gap-2 bg-[#DEFF0A] text-[#1A1A1A] hover:bg-[#DEFF0A]/90"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Invio in corso...
              </>
            ) : (
              <>
                Richiedi accesso gratuito
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </form>
        
        <p className="text-xs text-muted-foreground text-center mt-4">
          Nessuna carta di credito richiesta. Riceverai una risposta entro 24 ore lavorative.
        </p>
      </div>
    </div>
  )
}
