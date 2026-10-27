// Läuft auf dem Server von Vercel – nicht im Browser.
// Erreichbar unter /api/wetter?stadt=Karlsruhe

const STAEDTE = {
  karlsruhe: { lat: 49.01, lon: 8.4 },
  berlin: { lat: 52.52, lon: 13.41 },
  hamburg: { lat: 53.55, lon: 9.99 },
  muenchen: { lat: 48.14, lon: 11.58 },
};

export default async function handler(req, res) {
  const stadt = String(req.query.stadt ?? "karlsruhe").toLowerCase();
  const ort = STAEDTE[stadt];

  if (!ort) {
    return res.status(404).json({ fehler: `Stadt "${stadt}" kenne ich nicht` });
  }

  // Open-Meteo braucht keinen Key. Bei einer API mit geheimem Key
  // käme er hier dazu – aus den Vercel-Einstellungen, nie aus dem Repo:
  // const key = process.env.WETTER_KEY;
  const url =
    "https://api.open-meteo.com/v1/forecast" +
    `?latitude=${ort.lat}&longitude=${ort.lon}` +
    "&current=temperature_2m,wind_speed_10m&timezone=Europe/Berlin";

  try {
    const antwort = await fetch(url);
    if (!antwort.ok) {
      return res.status(502).json({ fehler: `Wetter-API antwortet mit ${antwort.status}` });
    }
    const daten = await antwort.json();

    // Nur weitergeben, was das Frontend braucht
    res.setHeader("Cache-Control", "s-maxage=600");
    return res.status(200).json({
      stadt,
      temperatur: daten.current.temperature_2m,
      wind: daten.current.wind_speed_10m,
      zeit: daten.current.time,
    });
  } catch {
    return res.status(500).json({ fehler: "Wetter-API nicht erreichbar" });
  }
}
