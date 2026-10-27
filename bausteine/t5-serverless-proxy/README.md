# Ein Backend in einer Datei

## Worum es geht

GitHub Pages liefert nur Dateien aus – Code auf dem Server läuft dort nicht. Eine **Serverless Function** ist die kleinste Form eines eigenen Backends: eine Datei im Ordner `api/`, die der Anbieter bei jeder Anfrage startet. Ihr betreibt keinen Server, habt aber trotzdem einen.

Das Frontend fragt nicht mehr die fremde API, sondern `/api/wetter` auf der eigenen Domain. Damit lösen sich zwei Probleme aus Termin 5: Ein **geheimer Key** bleibt auf dem Server, und **CORS** spielt keine Rolle, weil Server-zu-Server keine CORS-Regel kennt.

Als Datenquelle dient Open-Meteo, das ohne Key auskommt – so läuft das Beispiel sofort. Wo bei einer anderen API der Key hinkäme, steht als Kommentar in `api/wetter.js`.

## Starten

Online mit Vercel (kostenloser Hobby-Plan, Login mit GitHub):

1. Diesen Ordner als eigenes Repo auf GitHub anlegen (oder euer Projekt nehmen und `api/` dazulegen)
2. Auf vercel.com → *Add New* → *Project* → Repo importieren → *Deploy*
3. Nach einer Minute: `https://<projekt>.vercel.app` öffnen, Stadt wählen, *Laden*

Lokal mit der Vercel-CLI (fragt beim ersten Mal nach dem Login):

```bash
npx vercel dev
```

Dann <http://localhost:3000> öffnen. Die Function direkt aufrufen: <http://localhost:3000/api/wetter?stadt=berlin>.

`index.html` per Doppelklick oder Live Server öffnen funktioniert **nicht** – dann gibt es kein `/api/wetter`, und genau das ist der Punkt.

## Ins eigene Projekt

Übertragbar ist das Muster: Ordner `api/` ins Repo, eine Datei pro Endpunkt, das Frontend ruft `/api/...` auf. Mit Vite funktioniert das genauso – Vercel baut das Frontend und stellt die Functions daneben.

Braucht eure API einen Key:

1. Key **nicht** ins Repo und **nicht** in eine `VITE_`-Variable
2. Vercel → Projekt → *Settings* → *Environment Variables* → z. B. `WETTER_KEY` anlegen
3. In der Function mit `process.env.WETTER_KEY` lesen, neu deployen

Bei den anderen Anbietern heißt es anders, die Idee ist dieselbe:

- **Netlify:** Ordner `netlify/functions/`, Aufruf unter `/.netlify/functions/<name>`
- **Cloudflare:** ein Worker mit `export default { async fetch(request, env) { … } }`, Keys über `env`

Für die Pflicht braucht ihr das nicht. Es ist der Bonus „Weg 2" auf Blatt 5.

## Änder mich

1. Ruft `/api/wetter?stadt=paris` direkt im Browser auf. Welcher Statuscode kommt, und wo im Code wird er gesetzt?
2. Öffnet auf der deployten Seite DevTools → Network und ladet eine Stadt. Welche Domain seht ihr in der Anfrage – und welche **nicht**?
3. Nehmt `"&timezone=Europe/Berlin"` aus der URL in `api/wetter.js`. Was ändert sich an der Uhrzeit, und warum?
4. Ergänzt in der Antwort ein Feld `gefuehlt`. Tipp: Open-Meteo kennt `apparent_temperature`.
