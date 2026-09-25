# Konventionen für dieses Projekt

Diese Datei liest der Agent bei jedem Auftrag. Sie ersetzt die Korrekturen, die ihr sonst jedes Mal neu tippt.

## Sprache
- Code, Dateinamen und Commits: Englisch
- Oberfläche und Texte für Nutzer: Deutsch

## Struktur
- Eine Datei pro Komponente, in `src/components/`
- Keine Datei über 200 Zeilen ohne Rückfrage
- Keine neue Abhängigkeit ohne Rückfrage

## Stil
- Styling ausschließlich mit Tailwind-Klassen, kein zusätzliches CSS
- Semantisches HTML: `button` für Aktionen, `a` für Navigation
- Jedes Formularfeld hat ein `label`, jedes Bild ein `alt`

## Daten
- Jeder `fetch` behandelt: lädt, leer, Fehler
- `res.ok` wird immer geprüft
- Keine Secrets im Frontend

## Vorgehen
- Ein Feature pro Auftrag
- Vor jedem Commit: Seite im Browser prüfen
- Commit-Nachrichten im Imperativ, eine Zeile

## Was du nicht tust
- Keine Dateien löschen, die nicht Teil des Auftrags sind
- Keine Formatierung des ganzen Projekts nebenbei
- Kein Umbau auf ein Framework ohne Auftrag
