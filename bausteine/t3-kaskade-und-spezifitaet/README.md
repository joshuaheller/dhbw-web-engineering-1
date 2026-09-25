# Kaskade und Spezifität

## Worum es geht

Wenn zwei Regeln dasselbe Element treffen, gewinnt nicht die letzte, sondern die spezifischere. Gezählt wird in drei Stellen: IDs – Klassen – Elemente. Erst bei Gleichstand entscheidet die Reihenfolge.

## Starten

`index.html` öffnen. Für jede Zeile: **erst raten, dann prüfen** über DevTools → Styles.

## Ins eigene Projekt

Sobald euer Stylesheet über 50 Zeilen wächst, passiert das ständig: eine Regel „wirkt nicht". In neun von zehn Fällen wirkt sie doch – sie verliert nur. Das Styles-Panel zeigt es mit einem Strich durch die Zeile.

Praktische Konsequenz: haltet die Spezifität flach. Klassen statt IDs, kurze Selektoren, und `!important` nur, wenn ihr wirklich nicht an fremdes CSS herankommt.

## Änder mich

1. Löscht in `style.css` die Regel `nav a.aktiv`. Welche Farbe hat Link A jetzt – und warum nicht die von `nav a`?
2. Verschiebt `.hinweis` **unter** `.hinweis.wichtig`. Ändert sich etwas? Begründet mit der Zählung.
3. Entfernt `!important`. Welche der beiden verbleibenden Regeln gewinnt jetzt, und nach welchem Kriterium?
4. Fügt ganz unten `body p { color: red; }` ein. Trifft es die Absätze? Rechnet die Stellen aus, bevor ihr neu ladet.

## Für die Klausur

„Warum gewinnt Regel A gegen Regel B?" ist eine der Fragen, die ihr in eigenen Worten beantworten können solltet.
