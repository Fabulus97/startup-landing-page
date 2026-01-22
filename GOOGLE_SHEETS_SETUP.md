# Configurazione Google Sheets per ricevere le email

## Passo 1: Crea un Google Sheet

1. Vai su [Google Sheets](https://sheets.google.com)
2. Crea un nuovo foglio di calcolo
3. Nella prima riga, aggiungi queste intestazioni:
   - **Colonna A**: Email
   - **Colonna B**: Data
   - **Colonna C**: Timestamp
   - **Colonna D**: Fonte

## Passo 2: Crea lo Script Google Apps Script

1. Nel tuo Google Sheet, vai su **Estensioni** → **Apps Script**
2. Cancella tutto il codice esistente e incolla questo:

```javascript
function doPost(e) {
  try {
    // Ottieni il foglio attivo (il primo foglio)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse i dati ricevuti - supporta sia JSON che form data
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      // Fallback per form data
      data = {
        email: e.parameter.email,
        date: e.parameter.date,
        timestamp: e.parameter.timestamp,
        source: e.parameter.source || 'lia-startup-landing'
      };
    } else {
      throw new Error("Nessun dato ricevuto");
    }
    
    // Aggiungi una nuova riga con i dati
    sheet.appendRow([
      data.email || '',
      data.date || new Date().toLocaleString("it-IT"),
      data.timestamp || new Date().toISOString(),
      data.source || 'lia-startup-landing'
    ]);
    
    // Ritorna una risposta di successo
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // In caso di errore, ritorna un messaggio di errore
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Funzione opzionale per testare lo script aprendo l'URL nel browser
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: "OK", 
      message: "Script funzionante - Usa POST per inviare dati",
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Salva lo script (Ctrl+S o Cmd+S)
4. Dai un nome al progetto, ad esempio "lia-email-collector"

## Passo 3: Pubblica come Web App

1. Clicca su **Distribuisci** → **Nuova distribuzione**
2. Clicca sull'icona dell'ingranaggio ⚙️ accanto a "Tipo" e seleziona **App Web**
3. Configura:
   - **Descrizione**: "lia Email Collector"
   - **Esegui come**: "Me" (o il tuo account)
   - **Chi può accedere**: **"Tutti"** (IMPORTANTE! Deve essere "Tutti", non "Solo io")
4. Clicca su **Distribuisci**
5. Autorizza lo script quando richiesto:
   - Clicca su **Autorizza accessi**
   - Scegli il tuo account Google
   - Clicca su **Avanzate** → **Vai a [nome progetto] (non sicuro)**
   - Clicca su **Consenti**
6. **Copia l'URL della Web App** che appare (sarà qualcosa come: `https://script.google.com/macros/s/.../exec`)

**IMPORTANTE**: Se modifichi lo script dopo averlo pubblicato:
- Devi creare una **NUOVA distribuzione** (non aggiornare quella esistente)
- Oppure vai su **Distribuisci** → **Gestisci distribuzioni** → Modifica → **Nuova versione** → **Distribuisci**
- L'URL potrebbe cambiare, quindi copialo di nuovo!

## Passo 4: Configura su Vercel

1. Vai su [Vercel](https://vercel.com) → Il tuo progetto → **Settings** → **Environment Variables**
2. Aggiungi una nuova variabile:
   - **Nome**: `GOOGLE_SCRIPT_URL`
   - **Valore**: L'URL che hai copiato (quello che finisce con `/exec`)
3. Clicca su **Save**
4. **Redeploy** il progetto per applicare le modifiche

## Passo 5: Test

1. **Verifica che lo script sia pubblicato correttamente**:
   - Vai su **Distribuisci** → **Gestisci distribuzioni**
   - Verifica che "Chi può accedere" sia **"Tutti"**
   - Se hai modificato lo script, crea una **Nuova versione** e ridistribuisci

2. **Testa il form sul sito**:
   - Vai sul tuo sito
   - Inserisci un'email di test nel form
   - Controlla il Google Sheet - dovresti vedere la nuova riga!

**Nota**: Se ricevi errori 401, assicurati che:
- Lo script sia pubblicato come **App Web** (non solo salvato)
- **Chi può accedere** sia impostato su **"Tutti"**
- Hai autorizzato lo script quando richiesto

## Note

- Lo script aggiunge automaticamente una nuova riga ogni volta che riceve una richiesta
- I dati includono: email, data formattata, timestamp ISO, e fonte
- Puoi modificare lo script per aggiungere più campi se necessario
- Lo script è gratuito e non ha limiti di utilizzo
