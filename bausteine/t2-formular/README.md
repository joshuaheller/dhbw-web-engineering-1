# Formular ohne JavaScript

## Worum es geht

Der Browser kann viel mehr, als die meisten benutzen: Pflichtfelder, Mindestlänge, E-Mail-Prüfung, Zahlenbereiche, Datumswähler – alles ohne eine Zeile JavaScript. Und barrierefrei ist es nebenbei auch.

## Starten

`index.html` mit Live Server öffnen. Absenden ohne Eingabe versuchen. Dann `kr` eintippen und absenden. Dann `Kronenplatz`.

## Ins eigene Projekt

Euer Pflicht-Formular aus Blatt 2 sieht im Kern so aus. Übertragbar ist das Muster:

- jedes Feld hat ein `label` mit `for`, das auf die `id` des Feldes zeigt
- `name` bestimmt, wie der Wert heißt, wenn er abgeschickt wird
- `type` wählt Tastatur und Prüfung
- `required`, `minlength`, `min`, `max`, `pattern` machen die Validierung

Nicht übertragbar: die Haltestellen-Idee. Nehmt eure eigenen Felder.

## Änder mich

1. Löscht `required` beim ersten Feld. Was ändert sich beim Absenden?
2. Ändert `type="email"` zu `type="text"`. Tippt „keine-mail" und sendet ab. Wer hat vorher gemeckert – und wer jetzt nicht mehr?
3. Ändert `method="get"` zu `method="post"`. Schaut in die Adresszeile. Wo sind die Werte hin? (Tipp: DevTools → Network → den Request anklicken.)
4. Nehmt allen `label`-Elementen das `for`-Attribut weg. Klickt auf den Text „Haltestelle". Was fehlt jetzt?

## Wichtig

Browser-Validierung ist **Komfort, keine Sicherheit**. Wer will, schickt beliebige Daten an euren Server. Geprüft werden muss immer auch dort.
