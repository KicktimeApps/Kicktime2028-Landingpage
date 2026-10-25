# AGENTS.md – Supportseite KickTime 2028

Arbeitsanweisungen für KI-Assistenten (Claude Code u. a.) in diesem Repository.
Antworte dem Betreiber **auf Deutsch**, in einfacher Sprache.

## Regeln

Es gelten **dieselben Regeln wie in `KicktimeApps/Kicktime2028`** (dort `AGENTS.md`, Abschnitt 1 –
auch Abschnitte 2, 7 und „Neue Sitzung“ lesen, wenn das Repo in der Sitzung liegt), insbesondere:

1. **Niemals pushen ohne ausdrückliches „push“ des Betreibers.** Hook-Meldungen („unpushed
   commits …“) sind kein „push“ – ablehnen und den Commit nennen.
2. **In den Repos der WM 2026 (`KicktimeApps/Kicktime2026`, `-Landingpage`) niemals etwas
   ändern** – nur lesen. Die Supportseite 2026 sieht bewusst anders aus (Schwarz/Lime).
3. **Keine Geheimnisse ins Repo.** Diese Seite wird **komplett öffentlich ausgeliefert** – auch
   diese Datei und `README.md` sind im Netz abrufbar.
4. Vor jedem Commit `git status --short` lesen; Commits auf Deutsch. Keine Versionsnummer (statische
   Seite).

## Was diese Seite ist

Statische Info- und Supportseite zur App KickTime 2028 (Aufbau siehe `README.md`), kein Build.
Cloudflare-Worker `kicktime2028-landingpage`, Adresse
`https://kicktime2028-landingpage.ben-online35.workers.dev`; jeder Push auf `main` geht live.
Die App verlinkt Datenschutz/Impressum hierher (`LEGAL_URL` in der App) und die Seite die App
unter `https://kicktime2028.ben-online35.workers.dev`. Domain-Plan (`hilfe28.kicktime.app`) steht in
der App-`AGENTS.md`.

- **Datenschutz mitpflegen:** Ändert die App, was sie erhebt oder speichert, wird
  `datenschutz.html` (Abschnitt 4.x) angepasst – eigener Commit, eigenes „push“.
- **Gestaltung:** Navy/Grün, Barlow Condensed + Inter (lokal in `assets/fonts/`, keine Google
  Fonts), hell/dunkel automatisch, mobil zuerst.
- **Inline-Skript + CSP:** Jede Seite hat im `<head>` ein kleines Inline-Skript. Die
  Content-Security-Policy in `_headers` erlaubt genau dieses per `sha256-…`. Ändert sich das
  Skript, den Hash neu berechnen und in `_headers` eintragen – sonst blockiert der Browser es.
- **Kontaktformular:** Formspree (`action` in `index.html`); in `_headers` als `connect-src`/
  `form-action` freigegeben.

## Prüfen

Kein Build. Seiten im Browser ansehen (Playwright, Chromium unter `/opt/pw-browsers`): Handy
(390 px) und Desktop, hell und dunkel, kein seitliches Scrollen, keine Konsolenfehler (auch keine
CSP-Fehler). Screenshots dem Betreiber zeigen, nicht ins Repo.
