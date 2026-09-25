# Responsive ohne und mit Media Query

## Worum es geht

Zwei Wege zu einem Layout, das auf dem Handy funktioniert. `auto-fit` mit `minmax` regelt sich selbst, Media Queries geben euch feste Stufen. Beide fangen klein an – mobile first.

## Starten

`index.html` öffnen und das Fenster schmal ziehen. Danach DevTools → **Device Mode** (das Handy-Symbol oben links) und ein echtes Gerät auswählen.

## Ins eigene Projekt

Die Karten-Übersicht in eurem Projekt ist fast immer eine dieser beiden Varianten. Nehmt zuerst `auto-fit`; erst wenn ihr die Stufen wirklich steuern müsst, kommen Media Queries dazu.

Breakpoints setzt ihr dort, wo das Layout hässlich wird – nicht nach Gerätemodellen. 640, 768 und 1024 px sind übliche Werte, weil Tailwind sie so benennt (`sm`, `md`, `lg`).

## Änder mich

1. Ändert `minmax(220px, 1fr)` auf `minmax(320px, 1fr)`. Bei welcher Fensterbreite gibt es jetzt nur noch eine Spalte?
2. Schreibt die Media Queries von `min-width` auf `max-width` um, sodass es desktop first wird. Welche Variante braucht mehr Zeilen?
3. Entfernt im `head` die Zeile `<meta name="viewport" …>` und schaut im Device Mode nach. Was passiert – und warum ist das der häufigste Anfängerfehler?
4. Gebt einer Karte `grid-column: span 2`. Was passiert bei einer einspaltigen Ansicht?
