# Eine Bibliothek einbinden

## Worum es geht

Chart.js als Beispiel dafür, wie man fremden Code benutzt: einbinden, Doku lesen, minimal konfigurieren – und vorher prüfen, ob es sich lohnt.

Nebenbei seht ihr `fetch` einmal mit `.then()` statt `async/await`. Beides ist dasselbe, KI-Antworten benutzen mal das eine, mal das andere.

## Starten

`index.html` mit Live Server öffnen. Die Bibliothek kommt per CDN, die Daten von open-meteo.

## Ins eigene Projekt

Nur, wenn ihr wirklich ein Diagramm braucht. Prüft vorher die vier Fragen unten auf der Seite.

Wenn ihr mit Vite arbeitet, nehmt statt des CDN-Scripts:

```bash
npm install chart.js
```

```js
import Chart from "chart.js/auto";
```

## Änder mich

1. Ändert `type: "line"` auf `"bar"`. Was muss sonst noch angepasst werden – und was nicht?
2. Schaut auf <https://bundlephobia.com/package/chart.js>: Wie viel kostet die Bibliothek eure Seite? Wie lange lädt das bei 3G?
3. Baut dasselbe Diagramm ohne Bibliothek aus 24 `div`s mit `height` in Prozent. Wie lange braucht ihr – und welche Variante würdet ihr im Projekt nehmen?
4. Fragt eure KI nach drei Alternativen zu Chart.js und prüft jede auf npmjs.com: letzter Commit, Downloads, Lizenz. Eine davon existiert vielleicht gar nicht.
