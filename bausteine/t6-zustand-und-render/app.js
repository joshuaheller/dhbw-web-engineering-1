const formular = document.querySelector("#formular");
const eingabe = document.querySelector("#halt");
const liste = document.querySelector("#liste");
const status = document.querySelector("#status");

// ---- 1. Der Zustand: alles, was die Anzeige bestimmt, an einer Stelle ----
let zustand = {
  haltestellen: [
    { id: 1, name: "Kronenplatz", favorit: true },
    { id: 2, name: "Marktplatz", favorit: false },
  ],
  filter: "alle",
};

// ---- 2. Ändern heißt: Zustand setzen, dann neu zeichnen ----
function setze(teil) {
  zustand = { ...zustand, ...teil };
  zeichne();
}

// ---- 3. Eine Funktion baut aus dem Zustand die Anzeige ----
function zeichne() {
  const sichtbar =
    zustand.filter === "favoriten"
      ? zustand.haltestellen.filter((h) => h.favorit)
      : zustand.haltestellen;

  liste.replaceChildren(...sichtbar.map(zeile));

  status.textContent =
    sichtbar.length === 0
      ? "Nichts zu zeigen."
      : `${sichtbar.length} von ${zustand.haltestellen.length} Haltestellen`;
}

function zeile(halt) {
  const li = document.createElement("li");

  const name = document.createElement("span");
  name.textContent = halt.name;

  const stern = document.createElement("button");
  stern.type = "button";
  stern.textContent = halt.favorit ? "★" : "☆";
  stern.setAttribute("aria-label", `${halt.name} als Favorit markieren`);
  stern.setAttribute("aria-pressed", String(halt.favorit));
  stern.addEventListener("click", () =>
    setze({
      haltestellen: zustand.haltestellen.map((h) =>
        h.id === halt.id ? { ...h, favorit: !h.favorit } : h
      ),
    })
  );

  li.append(name, stern);
  return li;
}

// ---- 4. Ereignisse ändern nur den Zustand, nie direkt den DOM ----
formular.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = eingabe.value.trim();
  if (name.length < 3) return;

  setze({
    haltestellen: [
      ...zustand.haltestellen,
      { id: Date.now(), name, favorit: false },
    ],
  });
  formular.reset();
  eingabe.focus();
});

document.querySelectorAll('input[name="filter"]').forEach((radio) => {
  radio.addEventListener("change", () => setze({ filter: radio.value }));
});

zeichne();
