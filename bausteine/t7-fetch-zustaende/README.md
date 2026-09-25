# Laden, Anzeigen, Fehler

## Worum es geht

`fetch` holen kann jeder. Der Unterschied zwischen einer Übung und einer benutzbaren App sind die Fälle, in denen es **nicht** klappt: langsame Verbindung, Server kaputt, nichts gefunden.

Dieser Baustein zeigt alle drei – mit Knöpfen, mit denen ihr sie absichtlich auslöst.

## Starten

`index.html` mit Live Server öffnen. Erst „Wetter laden", dann die drei grauen Knöpfe durchprobieren. Danach DevTools → Network → Throttling auf „Slow 3G".

Die Daten kommen von [open-meteo.com](https://open-meteo.com) – ohne Key, ohne Anmeldung.

## Ins eigene Projekt

Das Muster ist Pflicht in eurem Projekt:

```
status: "Lade …"      → Anfrage läuft
status: ""            → Daten sind da
status: "Kein Treffer" → leeres Ergebnis
status: "Fehler …"    → catch
```

Übertragbar ist auch: `if (!res.ok) throw …`. `fetch` wirft bei einem 404 **keinen** Fehler – es liefert brav eine Antwort mit Status 404. Wer das nicht prüft, zeigt Nutzern eine leere Seite.

## Änder mich

1. Schaltet im Network-Panel Throttling auf „Slow 3G" und ladet neu. Wie lange steht „Lade …"? Was würde ein Nutzer ohne diesen Text denken?
2. Nehmt die Zeile `if (!res.ok) throw new Error(...)` heraus und sucht nach einem Ort, den es nicht gibt. Was passiert jetzt statt der Fehlermeldung?
3. Zeigt im Fehlerfall zusätzlich einen „Erneut versuchen"-Button. Wo im Code gehört der hin?
4. Die KI vergisst Lade- und Fehlerzustände fast immer. Lasst euch von ihr eine `fetch`-Funktion schreiben und prüft: Sind alle vier Fälle abgedeckt? Genau das ist gemeint mit „prüfen können, was die KI liefert".
