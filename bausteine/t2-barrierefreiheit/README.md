# Barrierefreiheit: vorher / nachher

## Worum es geht

Vier Fehler, die fast jede selbstgebaute Seite hat – und ihre Korrektur direkt daneben. Alle vier fallen in der Lighthouse-Prüfung auf, und alle vier sind in einer Minute behoben, wenn man sie kennt.

## Starten

`index.html` öffnen. Dann **ohne Maus** durch die Seite: `Tab`, `Tab`, `Enter`. Der linke Kasten lässt sich nicht bedienen, der rechte schon.

Danach: DevTools → Reiter **Lighthouse** → nur „Accessibility" ankreuzen → **Analyze**. Lest die Liste.

## Ins eigene Projekt

Diese vier Punkte sind euer Mindeststandard:

- Was klickbar ist, ist ein `button` oder ein `a` – nie ein `div` mit `onclick`
- Jedes inhaltstragende Bild hat ein `alt`, jedes Deko-Bild ein leeres `alt=""`
- Text hat mindestens 4,5:1 Kontrast
- Jedes Feld hat ein `label for`, jeder Icon-Button ein `aria-label`

## Änder mich

1. Entfernt im rechten Kasten das `alt`-Attribut und lasst Lighthouse noch einmal laufen. Wie heißt der Fehler genau?
2. Ändert `color: #c9c9c9` schrittweise dunkler, bis Lighthouse den Kontrast akzeptiert. Bei welchem Wert kippt es?
3. Baut in den rechten Kasten einen Icon-Button mit nur einem Zeichen (`✕`) und ohne Text. Was müsst ihr ergänzen, damit er angesagt wird?

## Erste ARIA-Regel

Kein ARIA ist besser als falsches ARIA. `<div role="button">` ist nicht die Lösung – `<button>` ist die Lösung.
