# Pfade: was lokal läuft und live nicht

## Worum es geht

Der häufigste Grund für kaputte Bilder nach dem Deployen ist kein Fehler im Code, sondern ein Pfad, der irgendwo zufällig funktioniert hat. Hier stehen vier Varianten nebeneinander – zwei laden, zwei nicht.

Die beiden kaputten sind genau die, die euch auch bei GitHub Pages erwischen: ein Pfad ab der Domain-Wurzel und eine falsche Großschreibung.

## Starten

`index.html` öffnen, dann DevTools → Network → neu laden. Danach `unterordner/seite.html` öffnen und dasselbe tun.

## Ins eigene Projekt

Drei Regeln, die euch Blatt 5 ersparen:

1. **Relative Pfade** (`img/logo.svg`) statt absoluter (`/img/logo.svg`), solange euer Projekt unter `benutzername.github.io/repo/` liegt.
2. **Kleinschreibung überall.** Euer Mac ist bei Groß- und Kleinschreibung großzügig, der Server ist es nicht.
3. Relative Pfade gelten **relativ zur HTML-Datei**, nicht zum Projektordner. Eine Seite im Unterordner braucht `../`.

## Änder mich

1. Öffnet das Network-Panel und filtert auf `Img`. Welche Anfrage endet mit 404, und welchen Pfad hat der Browser wirklich angefragt?
2. Benennt `img/logo.svg` in `img/Logo.svg` um. Welche der vier Varianten geht jetzt, welche nicht – und was sagt euch das über euren eigenen Rechner?
3. Schreibt in `unterordner/seite.html` das kaputte Bild richtig. Ohne `../` – geht das auch? (Tipp: `<base>`.)
4. Ladet den Ordner testweise als GitHub Pages hoch und prüft, welche Variante bricht.
