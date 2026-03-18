/**
 * ============================================================
 *  CONFIGURAZIONE SITO — Edilizia d'Elite Template
 *  Modifica solo questo file per adattare il sito a un nuovo cliente.
 * ============================================================
 */
window.SITO = {

  // --- IDENTITÀ AZIENDA ---
  nomeAzienda:      "Edilizia d'Elite",
  slogan:           "L'Arte del Costruire",
  descrizioneBreve: "Artigianato italiano d'eccellenza: ogni progetto nasce da una visione e si compie con precisione millimetrica. Soluzioni chiavi in mano per chi non scende a compromessi.",
  anniEsperienza:   "25+",
  numeroProgetti:   "500+",
  titolare:         "Mario Rossi",

  // --- CONTATTI ---
  telefono:         "02 1234 5678",          // Numero visualizzato
  telefonoHref:     "0212345678",            // Solo cifre, per href="tel:..."
  whatsapp:         "390212345678",          // Prefisso internazionale 39 + numero
  email:            "info@edilitelite.it",

  // --- SEDE ---
  indirizzo:        "Via Montenapoleone 8",
  citta:            "Milano",
  cap:              "20121",
  provincia:        "MI",
  mappaQuery:       "Via+Montenapoleone+8+Milano",     // Per il link Google Maps
  mappaEmbed:       "https://maps.google.com/maps?q=Via+Montenapoleone,+8,+20121+Milano+MI&t=&z=15&ie=UTF8&iwloc=&output=embed",

  // --- ORARI ---
  orariSettimana:   "Lun - Ven: 9:00 - 18:00",
  orariSabato:      "Sab: 9:00 - 13:00",

  // --- DATI LEGALI ---
  pIva:             "IT12345678901",
  annoFondazione:   "2000",
  annoCorrente:     new Date().getFullYear(),

  // --- SEO ---
  titoloPagineBase: "Edilizia d'Elite — Artigianato Italiano di Lusso a Milano",
  localita:         "Milano",               // Usato nelle meta description

  // --- SOCIAL (lascia vuoto "" per nascondere il pulsante) ---
  facebook:         "",
  instagram:        "",

  // --- BRAND COLORS (modifica anche :root in style.css) ---
  // coloreAccento:  "#C9A84C",  // Gold luxury — cambia in style.css nella sezione :root
};

/**
 * Popola automaticamente tutti gli elementi [data-config="chiave"]
 * e aggiorna gli href tramite [data-config-href="template{chiave}"].
 */
(function initConfig() {
  document.addEventListener('DOMContentLoaded', function () {
    // Popola testo degli elementi con data-config
    document.querySelectorAll('[data-config]').forEach(function (el) {
      var key = el.getAttribute('data-config');
      if (window.SITO[key] !== undefined) {
        el.textContent = window.SITO[key];
      }
    });

    // Popola href con template tipo "https://wa.me/{whatsapp}"
    document.querySelectorAll('[data-config-href]').forEach(function (el) {
      var tpl = el.getAttribute('data-config-href');
      el.href = tpl.replace(/\{(\w+)\}/g, function (_, k) {
        return window.SITO[k] !== undefined ? window.SITO[k] : '';
      });
    });

    // Anno corrente
    document.querySelectorAll('[data-anno]').forEach(function (el) {
      el.textContent = window.SITO.annoCorrente;
    });

    // Iframe mappa: carica solo se l'utente ha accettato i cookie
    window.loadConsentedMap = function () {
      var consent = localStorage.getItem('cookieConsent');
      var placeholder = document.getElementById('map-placeholder');
      var iframe = document.getElementById('map-iframe');
      if (consent === 'accepted') {
        if (iframe && !iframe.src) {
          iframe.src = window.SITO.mappaEmbed;
        }
        if (placeholder) { placeholder.style.display = 'none'; }
        if (iframe) { iframe.style.display = 'block'; }
      } else {
        if (placeholder) { placeholder.style.display = 'flex'; }
        if (iframe) { iframe.style.display = 'none'; }
      }
    };
    window.loadConsentedMap();

    // Schema.org JSON-LD aggiornato dinamicamente
    var schemaEl = document.getElementById('schema-org');
    if (schemaEl) {
      var schema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": window.SITO.nomeAzienda,
        "description": window.SITO.descrizioneBreve,
        "telephone": window.SITO.telefono,
        "email": window.SITO.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": window.SITO.indirizzo,
          "addressLocality": window.SITO.citta,
          "postalCode": window.SITO.cap,
          "addressRegion": window.SITO.provincia,
          "addressCountry": "IT"
        },
        "openingHours": ["Mo-Fr 08:00-18:00", "Sa 08:00-13:00"],
        "foundingDate": window.SITO.annoFondazione
      };
      schemaEl.textContent = JSON.stringify(schema, null, 2);
    }
  });
})();
