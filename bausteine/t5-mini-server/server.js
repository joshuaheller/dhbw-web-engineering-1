import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const PORT = 3000;

const abfahrten = [
  { linie: "S1", ziel: "Bad Herrenalb", minuten: 4 },
  { linie: "S2", ziel: "Rheinstetten", minuten: 9 },
  { linie: "Bus 10", ziel: "Oberreut", minuten: 14 },
];

createServer(async (req, res) => {
  console.log(req.method, req.url);

  if (req.url === "/" || req.url === "/index.html") {
    const html = await readFile(new URL("./index.html", import.meta.url));
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(html);
  }

  if (req.url.startsWith("/api/abfahrten")) {
    res.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    });
    return res.end(JSON.stringify(abfahrten));
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("404 – gibt es hier nicht");
}).listen(PORT, () => {
  console.log(`Läuft auf http://localhost:${PORT}`);
});
