// Diese Datei enthält fünf Fehler. Finde und behebe sie.
// Regeln: erst selbst suchen, Konsole lesen, dann erst fragen.

const formular = document.querySelector("#formular");
const eingabe = document.querySelector("#eingabe");
const liste = document.querySelector("#Liste");
const zaehler = document.querySelector("#zaehler");

let haltestellen = [];

formular.addEventListener("sumbit", (event) => {
  event.preventDefault();

  const name = eingabe.value.trim();

  if (name.length = 0) {
    return;
  }

  haltestellen.push(name);

  const li = document.createElement("li");
  li.textContent = name;
  liste.appendChild(li);

  zaehler.textContent = haltestellen.lenght + " Haltestellen";

  formular.reset();
});
