// 1. Elemente einmal holen, nicht bei jedem Klick neu
const formular = document.querySelector("#formular");
const eingabe = document.querySelector("#halt");
const liste = document.querySelector("#liste");
const status = document.querySelector("#status");
const leeren = document.querySelector("#leeren");

// 2. Auf Tippen reagieren: Rückmeldung, während getippt wird
eingabe.addEventListener("input", () => {
  const zuKurz = eingabe.value.length > 0 && eingabe.value.length < 3;
  eingabe.classList.toggle("fehler", zuKurz);
  status.textContent = zuKurz ? "Noch zu kurz." : "";
});

// 3. Auf Absenden reagieren – und das Neuladen verhindern
formular.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = eingabe.value.trim();
  if (name.length < 3) return;

  const eintrag = document.createElement("li");

  const text = document.createElement("span");
  text.textContent = name;          // textContent, nicht innerHTML

  const weg = document.createElement("button");
  weg.type = "button";
  weg.textContent = "entfernen";
  weg.addEventListener("click", () => eintrag.remove());

  eintrag.append(text, weg);
  liste.append(eintrag);

  status.textContent = `${name} hinzugefügt.`;
  formular.reset();
  eingabe.focus();
});

// 4. Ein Klick, der alles zurücksetzt
leeren.addEventListener("click", () => {
  liste.replaceChildren();
  status.textContent = "Liste geleert.";
});
