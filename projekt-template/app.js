// Ab Termin 6 wird das hier interessant.
// Bis dahin reicht ein Lebenszeichen, damit ihr seht, dass die Datei geladen wird.

const jahr = document.querySelector("#jahr");
if (jahr) jahr.textContent = new Date().getFullYear();

console.log("app.js läuft");
