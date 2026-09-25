# Sticky Header und Badge

## Worum es geht

Zwei Muster, die in fast jedem Projekt vorkommen: ein Header, der beim Scrollen oben bleibt, und ein Element, das in der Ecke seines Containers klebt. Beides ist CSS, kein JavaScript.

## Starten

`index.html` öffnen und scrollen.

## Ins eigene Projekt

Direkt übertragbar. Das Paar `position: relative` am Elternteil und `position: absolute` am Kind ist das Muster für alles, was „in der Ecke von etwas" sitzen soll: Badges, Schließen-Buttons, Status-Punkte.

## Änder mich

1. Löscht `top: 0` beim Header. Was passiert – und warum ist „sticky ohne top" ein häufiger Fehler?
2. Löscht `position: relative` bei `.karte`. Wohin wandern die Badges, und woran liegt das?
3. Setzt `z-index: 10` beim Header auf `z-index: 0` und scrollt. Woran merkt ihr den Unterschied?
4. Gebt einer Karte zusätzlich `overflow: hidden`. Was macht das mit einem Badge, das über den Rand ragt?

## Für die Klausur

`z-index` wirkt nur bei positionierten Elementen. Ohne `position` ist die Zahl wirkungslos – eine beliebte Fangfrage.
