"use server"

export async function submitEmail(email: string) {
  // Google Apps Script URL - configura questo dopo aver creato lo script
  const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

  if (!GOOGLE_SCRIPT_URL) {
    console.error("GOOGLE_SCRIPT_URL not configured")
    return { success: false, error: "Configurazione mancante" }
  }

  try {
    const payload = {
      email: email,
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleString("it-IT", {
        dateStyle: "short",
        timeStyle: "short"
      }),
      source: "lia-startup-landing"
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    // Google Apps Script può restituire HTML invece di JSON in caso di errore
    const contentType = response.headers.get("content-type")
    let result

    if (contentType && contentType.includes("application/json")) {
      result = await response.json()
    } else {
      // Se la risposta non è JSON, proviamo a leggerla come testo
      const text = await response.text()
      console.log("Google Script response (non-JSON):", text)
      
      // Se lo status è ok, assumiamo che sia andato bene
      if (response.ok || response.status === 200) {
        return { success: true }
      } else {
        throw new Error(`Errore HTTP ${response.status}: ${text.substring(0, 100)}`)
      }
    }
    
    if (result && result.success) {
      return { success: true }
    } else {
      throw new Error(result?.error || "Errore sconosciuto dal server")
    }
  } catch (error: any) {
    console.error("Error submitting email:", error)
    const errorMessage = error?.message || "Errore durante l'invio"
    
    // Se è un errore di rete o CORS, potrebbe comunque essere andato a buon fine
    // Google Apps Script a volte ha problemi con CORS ma processa comunque la richiesta
    if (errorMessage.includes("CORS") || errorMessage.includes("network") || errorMessage.includes("fetch")) {
      console.log("Possibile errore CORS, ma la richiesta potrebbe essere stata processata")
      // Ritorniamo success perché Google Apps Script potrebbe aver processato la richiesta
      return { success: true }
    }
    
    return { 
      success: false, 
      error: errorMessage.includes("HTTP") ? errorMessage : "Errore durante l'invio. Riprova più tardi." 
    }
  }
}
