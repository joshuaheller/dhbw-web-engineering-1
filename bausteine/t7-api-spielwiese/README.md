# API-Spielwiese

## Worum es geht

Bevor ihr eine Zeile JavaScript schreibt, schaut ihr euch die API an: Welche URL, welche Felder, welche Grenzen? Am schnellsten geht das im Browser oder mit `curl`.

## Starten

Öffnet `beispiele.http` und probiert die URLs im Browser aus, oder im Terminal:

```bash
curl -i "https://api.open-meteo.com/v1/forecast?latitude=49.0&longitude=8.4&current=temperature_2m"
```

`-i` zeigt die Header mit. Achtet auf `content-type` und auf Felder wie `x-ratelimit-remaining`.

## Ins eigene Projekt

Sucht euch **eine** API aus, die zu eurer Idee passt, und beantwortet vorher diese vier Fragen:

1. Braucht sie einen Key? Wenn ja: ist er für den Browser gedacht oder geheim?
2. Wie viele Anfragen pro Stunde sind erlaubt?
3. Erlaubt sie Zugriff von einer anderen Domain (CORS)? Testet es aus eurer Seite heraus, nicht nur im Browser-Tab.
4. Welche drei Felder braucht ihr wirklich?

## Wenn CORS blockt

Der Fehler steht in der Konsole und beginnt mit „Access to fetch … has been blocked by CORS policy". Das ist **keine** Schutzverletzung eurerseits, sondern die Ansage der API, dass sie fremde Seiten nicht bedienen will.

Was hilft: eine andere API, oder ein eigener kleiner Server davor (siehe `t5-mini-server`). Was nicht hilft: eine Browser-Extension, die CORS abschaltet – die habt ihr, eure Nutzer nicht.
