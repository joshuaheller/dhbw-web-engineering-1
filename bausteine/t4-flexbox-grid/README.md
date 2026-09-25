# Flexbox und Grid nebeneinander

## Worum es geht

Flexbox ordnet Dinge entlang **einer** Achse: Navigation, Button-Leiste, Karte mit Bild links und Text rechts. Grid spannt ein Raster über **zwei** Achsen: das Seitenlayout, eine Kartengalerie.

Faustregel: Grid für das grobe Raster der Seite, Flexbox für die Teile darin.

## Starten

`index.html` öffnen. DevTools → im Elements-Panel steht neben `.flex-demo` und `.grid-demo` ein kleines Badge `flex` bzw. `grid` – anklicken, dann zeichnet der Browser die Achsen ein.

## Ins eigene Projekt

Übertragbar ist das Muster, nicht die Farbe. Eure Navigation ist ein Flex-Container. Eure Übersichtsseite ist wahrscheinlich ein Grid.

## Änder mich

1. Setzt `justify-content` nacheinander auf `flex-start`, `center`, `space-around`, `space-evenly`. Beschreibt in einem Satz den Unterschied zwischen den letzten beiden.
2. Ändert `flex-direction` auf `column`. Welche Eigenschaft richtet jetzt horizontal aus – `justify-content` oder `align-items`?
3. Löscht `flex: 1` bei Element 3. Wer bekommt den freien Platz?
4. Ändert im Grid `grid-template-columns: 8rem 1fr` zu `1fr 3fr`. Was bedeutet `fr` hier genau?
5. Baut `grid-template-areas` so um, dass `nav` rechts steht – ohne die Reihenfolge im HTML zu ändern.
