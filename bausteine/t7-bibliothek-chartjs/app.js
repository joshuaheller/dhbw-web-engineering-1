const status = document.querySelector("#status");

const url =
  "https://api.open-meteo.com/v1/forecast" +
  "?latitude=49.0094&longitude=8.4044&hourly=temperature_2m&forecast_days=1";

fetch(url)
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .then((daten) => {
    const stunden = daten.hourly.time.map((t) => t.slice(11, 16));
    const werte = daten.hourly.temperature_2m;

    status.textContent = "Temperatur in Karlsruhe, heute";

    new Chart(document.querySelector("#diagramm"), {
      type: "line",
      data: {
        labels: stunden,
        datasets: [{ label: "°C", data: werte, borderColor: "#0000ff", tension: 0.3 }],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { title: { display: true, text: "°C" } } },
      },
    });
  })
  .catch((fehler) => {
    console.error(fehler);
    status.textContent = "Diagramm konnte nicht geladen werden.";
  });
