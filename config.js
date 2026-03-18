/**
 * ============================================================
 *  CONFIGURAZIONE SITO — EdilPro Template
 *  Modifica solo questo file per adattare il sito a un nuovo cliente.
 * ============================================================
 */
window.SITO = {

  // --- IDENTITÀ AZIENDA ---
  nomeAzienda:      "EdilPro",
  slogan:           "Edilizia e Ristrutturazioni",
  descrizioneBreve: "Specializzati in edilizia, decorazioni, idraulica, impianti elettrici e pavimenti. Servizio completo e professionale.",
  anniEsperienza:   "15+",
  numeroProgetti:   "300+",

  // --- CONTATTI ---
  telefono:         "320 000 0000",          // Numero visualizzato
  telefonoHref:     "3200000000",            // Solo cifre, per href="tel:..."
  whatsapp:         "393200000000",          // Prefisso internazionale 39 + numero
  email:            "info@edilpro.it",

  // --- SEDE ---
  indirizzo:        "Via Roma 1",
  citta:            "Milano",
  cap:              "20100",
  provincia:        "MI",
  mappaQuery:       "Via+Roma+1+Milano",     // Per il link Google Maps
  mappaEmbed:       "https://maps.google.com/maps?q=Via+Roma,+1,+20100+Milano+MI&t=&z=15&ie=UTF8&iwloc=&output=embed",

  // --- ORARI ---
  orariSettimana:   "Lun - Ven: 8:00 - 18:00",
  orariSabato:      "Sab: 8:00 - 13:00",

  // --- DATI LEGALI ---
  pIva:             "IT00000000000",
  annoFondazione:   "2010",
  annoCorrente:     new Date().getFullYear(),

  // --- SEO ---
  titoloPagineBase: "EdilPro — Edilizia e Ristrutturazioni",
  localita:         "Milano",               // Usato nelle meta description

  // --- SOCIAL (lascia vuoto "" per nascondere il pulsante) ---
  facebook:         "",
  instagram:        "",

  // --- BRAND COLORS (modifica anche :root in style.css) ---
  // coloreAccento:  "#DC2626",  // Rosso default — cambia in style.css nella sezione :root
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

    // Iframe mappa: usa data-map-src per sicurezza
    document.querySelectorAll('iframe[data-map-src]').forEach(function (el) {
      el.src = window.SITO.mappaEmbed;
    });

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
