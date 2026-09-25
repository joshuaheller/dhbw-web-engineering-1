# DOM und Events

## Worum es geht

Die vier Handgriffe, mit denen jede interaktive Seite anfängt: Elemente finden, auf Ereignisse hören, Elemente erzeugen, Elemente entfernen. Alles ohne Framework.

## Starten

`index.html` mit Live Server öffnen. Tippt zwei Zeichen, dann drei. Fügt Einträge hinzu, entfernt einen.

## Ins eigene Projekt

Das ist das Muster für eure Pflichtanforderung „etwas ändert sich ohne Reload". Übertragbar:

- `event.preventDefault()` beim `submit`, sonst lädt die Seite neu
- `textContent` statt `innerHTML`, wenn Daten von außen kommen – sonst öffnet ihr eine XSS-Lücke
- `classList.toggle("klasse", bedingung)` statt if/else mit `add` und `remove`
- Elemente einmal oben holen, nicht in jedem Handler neu

## Änder mich

1. Entfernt `event.preventDefault()`. Was passiert beim Absenden, und was steht danach in der Adresszeile?
2. Tauscht `text.textContent = name` gegen `text.innerHTML = name` und gebt `<img src=x onerror="alert(1)">` ein. Erklärt in zwei Sätzen, warum das ein Sicherheitsproblem ist.
3. Ergänzt einen Zähler: „3 Haltestellen". Er muss beim Hinzufügen **und** beim Entfernen stimmen. (Wenn euch das lästig vorkommt: genau dafür gibt es den nächsten Baustein.)
4. Lasst `Enter` im Eingabefeld dasselbe tun wie den Button – oder prüft nach, ob es das schon tut, und warum.
