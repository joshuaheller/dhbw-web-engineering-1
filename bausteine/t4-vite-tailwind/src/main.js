const knopf = document.querySelector("#knopf");
const ausgabe = document.querySelector("#ausgabe");

let zaehler = 0;
knopf.addEventListener("click", () => {
  zaehler += 1;
  ausgabe.textContent = `${zaehler} mal geklickt.`;
});
