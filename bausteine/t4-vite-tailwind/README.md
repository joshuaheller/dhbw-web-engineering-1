# Tailwind mit Build (Vite)

## Worum es geht

Derselbe Tailwind wie im CDN-Baustein, aber richtig: Vite startet einen Dev-Server, übersetzt die Klassen zu CSS und baut am Ende eine Datei, in der nur das steht, was ihr benutzt.

Nebenbei seht ihr, wofür npm gut ist – und was `package.json` eigentlich beschreibt.

## Starten

```bash
npm install     # liest package.json, füllt node_modules
npm run dev     # Dev-Server, meist http://localhost:5173
npm run build   # fertige Dateien landen in dist/
npm run preview # dist/ lokal ansehen
```

Beim ersten `npm install` entsteht `package-lock.json`. Die Datei gehört ins Repo – `node_modules/` nicht.

## Ins eigene Projekt

Genau dieses Setup nehmt ihr ab Blatt 4. Kopiert `package.json`, `vite.config.js` und `src/style.css`, dann `npm install`.

Beim Deployen auf GitHub Pages ladet ihr den Inhalt von `dist/` hoch, nicht den Projektordner.

## Änder mich

1. Öffnet `package.json`. Was steht unter `scripts`, und was passiert genau, wenn ihr `npm run dev` tippt?
2. Führt `npm run build` aus und schaut in `dist/assets/`. Wie groß ist die CSS-Datei? Fügt eine ungenutzte Klasse ins HTML ein, baut neu – ändert sich die Größe?
3. Ändert in `package.json` `"vite": "^6.0.0"` auf `"vite": "6.0.0"`. Was ist der Unterschied in einem Satz?
4. Löscht `node_modules/` und führt `npm install` erneut aus. Warum ist das unproblematisch – und warum wäre es das bei `src/` nicht?
