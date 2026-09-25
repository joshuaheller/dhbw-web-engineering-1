# Zustand und Render

## Worum es geht

Sobald eine Seite mehr als zwei Dinge kann, zerfasert der Code: hier ein `textContent`, dort ein `classList.add`, und irgendwann stimmt der Zähler nicht mehr mit der Liste überein.

Die Lösung ist alt und einfach: **alle Daten in einem Objekt**, **eine Funktion**, die daraus die Anzeige baut. Ändern heißt dann immer: Zustand setzen, neu zeichnen.

## Starten

`index.html` mit Live Server öffnen. Fügt Haltestellen hinzu, markiert Favoriten, schaltet den Filter um.

## Ins eigene Projekt

Sehr empfehlenswert, sobald euer Projekt zwei zusammenhängende Anzeigen hat (Liste + Zähler, Liste + Filter, Liste + Detailansicht).

Und: genau dieses Prinzip ist der Kern von React. Wer das hier versteht, versteht in Termin 7 die React-Folie in zwei Minuten.

## Änder mich

1. Fügt ein drittes Feld `zuletztGeaendert` in den Zustand ein und zeigt es an – ohne `zeichne()` anzufassen? Geht das? Warum nicht?
2. Baut den Filter von Radio-Buttons auf ein `<select>` um. Wie viele Stellen müsst ihr ändern?
3. Speichert `zustand.haltestellen` beim Ändern in `localStorage` und ladet sie beim Start zurück. Zwei Zeilen genügen – an welchen zwei Stellen?
4. Was passiert, wenn ihr in `zeile()` direkt `halt.favorit = !halt.favorit` schreibt statt über `setze()` zu gehen? Probiert es und erklärt, was ihr seht.

## Für die Präsentation

„Wo steht bei euch der Zustand, und wer darf ihn ändern?" ist eine der Rückfragen, die am 08.12. kommen kann.
