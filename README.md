# KickTime 2028 – Support- & Infoseite

Statische Website zur Web-App **KickTime 2028** (UEFA EURO 2028): Vorstellung, Installationsanleitung,
häufige Fragen, Support-Formular, Impressum und Datenschutz.

## Aufbau

```
index.html          Startseite: Funktionen, Einblicke, Installieren, FAQ, Support
impressum.html      Impressum (§ 5 DDG)
datenschutz.html    Datenschutzerklärung für Website und App
assets/css/         Gestaltung (Farben und Schriften wie in der App, hell/dunkel automatisch)
assets/js/main.js   Handy-Menü, Einblendungen, Formular ohne Seitenwechsel
assets/fonts/       Inter, Barlow Condensed – lokal, keine Google Fonts
assets/img/         Logo und App-Screenshots
_headers            Sicherheits- und Cache-Header (CSP mit Hash des Inline-Skripts)
.assetsignore       Dateien, die nicht ausgeliefert werden (AGENTS.md, CLAUDE.md, README.md)
```

Kein Build-Schritt nötig: Der Ordner wird so ausgeliefert, wie er ist – als Cloudflare-Worker
`kicktime2028-landingpage` (statische Dateien), jeder Push auf `main` geht automatisch live.

## Anpassen

- **Adresse der App:** steht als `https://kicktime2028.ben-online35.workers.dev` in allen Seiten (bis zur eigenen Domain).
- **Kontaktformular:** wird über Formspree (`action` des Formulars in `index.html`) per E-Mail
  zugestellt.
- **App-Screenshots:** in `assets/img/` (WebP, 390 × 844 bzw. doppelte Auflösung).

## Lizenzen

Schriften: Inter, Barlow Condensed (SIL Open Font License). Flaggen in den Screenshots:
[flag-icons](https://github.com/lipis/flag-icons) (MIT). KickTime steht in keiner Verbindung zur UEFA.
