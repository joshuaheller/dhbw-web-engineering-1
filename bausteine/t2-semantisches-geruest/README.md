# Semantisches Grundgerüst

## Worum es geht

Zwei Kästen, gleiches Aussehen, unterschiedlicher Bauplan. Links sagt der Code nichts darüber, was die Teile bedeuten. Rechts schon – und davon profitieren Screenreader, Suchmaschinen, Sprachmodelle und ihr selbst beim Ändern.

## Starten

`index.html` mit Live Server öffnen.

## Ins eigene Projekt

Die rechte Struktur ist genau das Gerüst, das euer Projekt braucht: `header` mit `nav`, ein `main` pro Seite, `footer`. In `main` genau **eine** `h1`, darunter `h2` und `h3` in der Reihenfolge, in der sie stehen.

## Änder mich

1. Öffnet die DevTools, Reiter **Elements**. Klappt beide Kästen auf. Welcher lässt sich schneller lesen?
2. Drückt `Tab` mehrfach. Welche der beiden Navigationen könnt ihr per Tastatur bedienen – und warum die andere nicht?
3. Ersetzt rechts `<nav>` durch `<div>` und schaut mit einem Screenreader oder der Lighthouse-Prüfung nach, was sich ändert.
4. Fragt eure KI: „Welche Elemente außer header, nav, main, footer und article gibt es noch, und wann nimmt man `section` statt `div`?" – und prüft die Antwort an dieser Datei nach.
