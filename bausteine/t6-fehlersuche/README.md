# Fehlersuche: fünf eingebaute Fehler

## Worum es geht

Debuggen ist die Fähigkeit, die euch von der KI unterscheidet – sie sieht euren Bildschirm nicht. Hier sind fünf Fehler eingebaut, wie sie wirklich passieren: ein Tippfehler, eine Verwechslung, ein fehlendes Detail, eine Falle in der Sprache.

**Zwei** davon melden sich in der Konsole. **Drei** nicht – da tut die Seite einfach etwas anderes als gedacht.

Die Fehler bauen aufeinander auf: solange der erste nicht gefunden ist, passiert gar nichts. Arbeitet euch der Reihe nach durch.

## Starten

`index.html` mit Live Server öffnen, DevTools auf (`F12`), Reiter **Console**. Etwas eintippen, absenden, lesen.

## So geht ihr vor

1. Fehlermeldung lesen: Datei, Zeilennummer, Art des Fehlers. Die Konsole sagt meistens schon, was los ist.
2. In `app.js` zu der Zeile springen (die Meldung ist anklickbar).
3. Vermutung aufschreiben, **bevor** ihr ändert.
4. Eine Sache ändern, neu laden, prüfen. Nicht drei auf einmal.
5. Für den unsichtbaren Fehler: `console.log` an zwei Stellen, oder einen Breakpoint in **Sources** setzen.

## Die Regel für dieses Blatt

Erst zehn Minuten selbst. Danach dürft ihr die KI fragen – aber so:

> „Hier ist mein Code und diese Fehlermeldung. Sag mir **nicht** die Lösung. Erklär mir, was die Meldung bedeutet und wo ich suchen soll."

## Wenn ihr alle fünf habt

Schreibt für jeden Fehler einen Satz auf: **Symptom → Ursache → Fix.** Das ist genau die Form, in der ihr später Bugs im Team beschreibt – und die Art Frage, die in der Klausur vorkommen kann.

## Zum Weiterbauen

Der Zähler soll auch dann stimmen, wenn ein Eintrag wieder entfernt wird. Baut das ein – und überlegt, ob euch der Baustein `t6-zustand-und-render` dabei geholfen hätte.
