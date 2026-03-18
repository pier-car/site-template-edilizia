# EdilPro — Template Sito Web per Imprese Edili

Template premium, moderno e responsivo per imprese edili locali. Zero dipendenze, deployabile su qualsiasi hosting statico.

## 🚀 Setup rapido (3 passi)

### 1. Modifica `config.js`
Apri il file `config.js` e compila tutte le voci nella sezione relativa al nuovo cliente:

```javascript
window.SITO = {
  nomeAzienda:  "Nome Impresa",
  telefono:     "320 000 0000",
  email:        "info@esempio.it",
  // ... tutti gli altri campi
};
```

Tutti i testi, link e dati del sito si aggiornano automaticamente.

### 2. Sostituisci le immagini

| File da sostituire | Descrizione |
|---|---|
| `images/titolare-placeholder.jpg` | Foto del titolare/squadra (sezione Chi Siamo) |
| Hero background | URL immagine in `style.css` nella sezione `.hero` |

### 3. Aggiorna i testi legali

Nei file `privacy.html` e `cookie.html` cerca i segnaposto `[URL_SITO]` e sostituiscili con l'URL reale del sito.

---

## 📁 Struttura file

```
config.js          ← Configurazione centralizzata (MODIFICA SOLO QUESTO)
style.css          ← Stili globali
index.html         ← Home page
servizi.html       ← Pagina servizi
galleria.html      ← Galleria lavori con lightbox e filtri
contatti.html      ← Contatti + form preventivo (Netlify Forms)
grazie.html        ← Pagina di conferma dopo invio form
privacy.html       ← Privacy Policy (GDPR)
cookie.html        ← Cookie Policy
images/            ← Immagini (sostituisci i placeholder)
favicon.svg        ← Icona browser
```

---

## 🌐 Deploy

### Netlify (consigliato — gratuito)
1. Vai su [netlify.com](https://netlify.com) → "Add new site" → "Deploy manually"
2. Trascina l'intera cartella del sito
3. Il form di contatto funziona automaticamente grazie all'attributo `data-netlify="true"`

### GitHub Pages
1. Carica i file su un repository GitHub
2. Vai su Settings → Pages → seleziona il branch `main`

### cPanel / Hosting tradizionale
1. Carica tutti i file nella cartella `public_html` tramite File Manager o FTP

---

## 🔍 SEO e Google Search Console

Dopo il deploy, per verificare il sito su Google Search Console:
- Aggiungi il meta tag di verifica nel `<head>` di `index.html`:
  `<meta name="google-site-verification" content="IL_TUO_CODICE">`
- In alternativa, carica il file HTML di verifica fornito da Google

---

## 🎨 Personalizzazione colori

Per cambiare il colore rosso del brand in ogni altro colore:
1. Apri `style.css`
2. Nella sezione `:root` modifica `--primary-red: #DC2626;`

---

## ✅ Funzionalità incluse

- Design responsivo (mobile-first)
- Form preventivo con Netlify Forms
- Galleria con filtri per categoria e lightbox
- Floating WhatsApp button (configurabile)
- Cookie banner GDPR-compliant
- Animazioni scroll (IntersectionObserver)
- Schema.org LocalBusiness (SEO strutturato)
- Meta Open Graph per condivisioni social
- Zero dipendenze JavaScript esterne
