# Box-Modell zum Anfassen

## Worum es geht

Jedes Element ist ein Rechteck aus vier Schichten: Inhalt, padding, border, margin. Ob `width` den Inhalt oder die ganze Box meint, entscheidet `box-sizing` – und das ist der häufigste Grund, warum ein Layout „ein paar Pixel zu breit" ist.

## Starten

`index.html` öffnen, DevTools → Element anklicken → Reiter **Computed**. Ganz oben liegt die Box-Grafik: fahrt mit der Maus über margin, border, padding und Content.

## Ins eigene Projekt

Schreibt einmal ganz oben in euer Stylesheet:

```css
* { box-sizing: border-box; }
```

Danach meint `width` immer die sichtbare Breite. Das ist die Einstellung, mit der praktisch alle modernen Projekte arbeiten – auch Tailwind.

## Änder mich

1. Gebt beiden Boxen `width: 100%` und packt sie in einen Container mit `padding: 20px`. Welche läuft über?
2. Ersetzt in `.collapse` den margin durch `gap` auf einem Flex-Container. Verschwindet das Zusammenfallen?
3. Setzt bei `.a2` `padding: 8px 16px 24px 0` auf `padding: 8px 0 24px 16px`. Ratet vorher, welche Seite sich ändert.
4. Ersetzt `width: 300px` durch `max-width: 300px` und verkleinert das Browserfenster. Was ist der Unterschied?
