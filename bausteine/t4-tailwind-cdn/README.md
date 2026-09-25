# Tailwind zum Ausprobieren (Play CDN)

## Worum es geht

Eine einzige Script-Zeile, und alle Tailwind-Klassen funktionieren. Gut zum Ausprobieren und für die Werkstatt – **nicht** für ein Projekt, das online geht: der Browser baut das CSS hier bei jedem Aufruf neu zusammen.

## Starten

`index.html` öffnen. Ihr braucht eine Internetverbindung, weil das Script von einem CDN kommt.

## Ins eigene Projekt

Zum Lernen ja, zum Ausliefern nein. Für euer Projekt nehmt ihr den Baustein `t4-vite-tailwind`.

Vergleicht diese Datei mit `t3-sticky-header-badge`: gleiches Ergebnis, einmal mit eigenem Stylesheet, einmal mit Utility-Klassen. Beides ist CSS.

## Änder mich

1. Ändert `p-4` in `p-8` und `rounded-xl` in `rounded-none`. Schaut in den DevTools nach, welches CSS dahinter erzeugt wird.
2. Ergänzt bei einer Karte `hover:scale-[1.02]`. Was fehlt, damit es sanft aussieht? (Tipp: eine Klasse ist schon da.)
3. Baut die dritte Karte so, dass sie auf dem Handy die volle Breite hat und ab `md` nur die Hälfte.
4. Zählt: Wie oft wiederholt sich die Klassenkette der Karten? Genau das ist der Übergang zu Komponenten – in Blatt 4 Aufgabe 3.
