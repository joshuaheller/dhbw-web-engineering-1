# Ein Webserver in zehn Zeilen

## Worum es geht

Das, was jeder Webserver im Kern macht: Anfrage rein, Antwort raus. Express, Next.js und Supabase bauen alle darauf auf – hier seht ihr es ohne jede Abhängigkeit.

Nebenbei ist das der Unterschied zwischen `file:///` und `http://localhost:3000`, über den wir in Termin 5 reden.

## Starten

```bash
node server.js
```

Dann <http://localhost:3000> öffnen. Im Terminal seht ihr jede Anfrage mitlaufen – auch die vom Browser für `/favicon.ico`.

Beenden: `Ctrl + C`.

## Ins eigene Projekt

Optional. Ihr braucht keinen eigenen Server für die Pflichtanforderungen – GitHub Pages liefert statische Dateien aus, und die APIs ruft der Browser direkt auf.

Interessant wird er, wenn eine API einen **geheimen Key** verlangt: den dürft ihr nicht ins Frontend legen. Dann steht so ein Server davor, hält den Key und reicht die Anfrage weiter. Das ist eine der Bonusaufgaben.

## Änder mich

1. Ruft <http://localhost:3000/gibtsnicht> auf. Welchen Statuscode seht ihr im Network-Panel, und wo im Code wird er gesetzt?
2. Ändert den `Content-Type` der API-Antwort auf `text/plain`. Was macht der Browser jetzt mit derselben Antwort?
3. Löscht die Zeile mit `Access-Control-Allow-Origin`. Ruft die API dann aus einer Seite auf, die per Live Server auf Port 5500 läuft. Welcher Fehler steht in der Konsole?
4. Ergänzt eine Route `/api/abfahrten?halt=…`, die nur Einträge mit passendem Ziel zurückgibt.
