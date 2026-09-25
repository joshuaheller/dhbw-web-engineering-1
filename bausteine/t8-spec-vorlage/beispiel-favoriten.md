# Favoriten speichern

## Ziel
Wer eine Haltestelle oft braucht, markiert sie mit einem Stern. Markierte Haltestellen stehen beim nächsten Besuch oben in der Liste.

## Nicht Teil davon
Kein Login, keine Synchronisierung zwischen Geräten, keine Sortierung innerhalb der Favoriten.

## Akzeptanzkriterien
- [ ] An jeder Haltestelle steht ein Stern, sein Zustand ist sichtbar (gefüllt / leer)
- [ ] Favoriten überstehen einen Reload
- [ ] Favoriten stehen in der Liste oben
- [ ] Ohne Favoriten erscheint ein Hinweistext statt einer leeren Fläche
- [ ] Der Stern ist per Tab erreichbar, per Enter bedienbar und hat `aria-pressed`

## Technik
`localStorage`, Schlüssel `favoriten`, Wert: Array von IDs. Lesen beim Start, schreiben bei jeder Änderung.

## Offene Fragen
- Was passiert, wenn eine gespeicherte Haltestelle nicht mehr existiert?
