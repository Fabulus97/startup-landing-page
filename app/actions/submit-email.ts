"use server"

export async function submitEmail(email: string) {
  const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

  if (!GOOGLE_SCRIPT_URL) {
    console.error("[v0] GOOGLE_SCRIPT_URL not configured")
    return { success: false, error: "Configurazione mancante" }
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        timestamp: new Date().toISOString(),
        source: "lia-startup-landing"
      }),
    })

    if (!response.ok) {
      throw new Error("Errore nella richiesta")
    }

    return { success: true }
  } catch (error) {
    console.error("[v0] Error submitting email:", error)
    return { success: false, error: "Errore durante l'invio" }
  }
}
