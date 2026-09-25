const formular = document.querySelector("#formular");
const ort = document.querySelector("#ort");
const status = document.querySelector("#status");
const ergebnis = document.querySelector("#ergebnis");

const GEO = "https://geocoding-api.open-meteo.com/v1/search";
const WETTER = "https://api.open-meteo.com/v1/forecast";

// Damit ihr die unangenehmen Fälle auch ohne kaputtes Internet seht:
let testfall = null;
document.querySelectorAll("[data-fall]").forEach((b) =>
  b.addEventListener("click", () => {
    testfall = b.dataset.fall;
    formular.requestSubmit();
  })
);

formular.addEventListener("submit", async (event) => {
  event.preventDefault();
  await laden(ort.value.trim());
  testfall = null;
});

async function laden(suchbegriff) {
  // Zustand 1: es lädt
  setzeStatus("Lade …", "laedt");
  ergebnis.replaceChildren();

  try {
    if (testfall === "langsam") await warte(2500);
    if (testfall === "fehler") throw new Error("HTTP 500");

    const orte = testfall === "leer" ? [] : await sucheOrt(suchbegriff);

    // Zustand 2: nichts gefunden – ein leerer Bildschirm ist keine Antwort
    if (orte.length === 0) {
      return setzeStatus(`Kein Ort namens „${suchbegriff}“ gefunden.`, "leer");
    }

    const treffer = orte[0];
    const wetter = await holeWetter(treffer.latitude, treffer.longitude);

    // Zustand 3: Daten
    setzeStatus(`${treffer.name}, ${treffer.country}`, "ok");
    ergebnis.replaceChildren(
      zeile("Temperatur", `${wetter.temperature_2m} °C`),
      zeile("Wind", `${wetter.wind_speed_10m} km/h`),
      zeile("Stand", new Date(wetter.time).toLocaleTimeString("de-DE"))
    );
  } catch (fehler) {
    // Zustand 4: kaputt – und zwar lesbar, nicht als Stacktrace
    console.error(fehler);
    setzeStatus("Daten konnten nicht geladen werden. Bitte später noch einmal.", "fehler");
  }
}

async function sucheOrt(name) {
  const res = await fetch(`${GEO}?name=${encodeURIComponent(name)}&count=1&language=de`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const daten = await res.json();
  return daten.results ?? [];
}

async function holeWetter(lat, lon) {
  const url = `${WETTER}?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const daten = await res.json();
  return daten.current;
}

function setzeStatus(text, art) {
  status.textContent = text;
  status.className = art;
}

function zeile(bezeichnung, wert) {
  const li = document.createElement("li");
  const b = document.createElement("span");
  b.textContent = bezeichnung;
  const w = document.createElement("strong");
  w.textContent = wert;
  li.append(b, w);
  return li;
}

const warte = (ms) => new Promise((auf) => setTimeout(auf, ms));
