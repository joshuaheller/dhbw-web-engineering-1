# Web-Engineering 1 – DHBW Karlsruhe, TINF25B3

Kursmaterial zum Wintersemester 2026/27. Hier liegen die Übungsblätter, die Code-Bausteine aus den Terminen und das Gerüst, mit dem euer Projekt startet.

**Dozent:** Joshua Heller · dhbw@theaisoftwarecompany.com
**Termine:** neun Dienstage, 13:15 – 16:15 Uhr
**Fragen:** Moodle-Forum oder Mail. Auch zwischen den Terminen.

## Die eine Regel

> Ihr dürft alles benutzen. Ihr müsst alles erklären können.

KI ist in diesem Kurs erlaubt und erwünscht. Aber ein Feature, das niemand im Team erklären kann, zählt nicht – weder im Projekt noch in der Präsentation. Wie ihr KI zum Lernen statt zum Abschreiben nutzt, steht auf jedem Übungsblatt unter „So arbeitest du hier mit KI".

## Der rote Faden

Jeder Termin bringt euer Projekt einen Schritt weiter. Die Übungsblätter sind keine Wegwerf-Aufgaben: was ihr in Blatt 3 baut, benutzt ihr in Blatt 7 wieder.

| Termin | Datum | Thema | Blatt | Euer Projekt kann danach … |
| --- | --- | --- | --- | --- |
| 1 | 29.09. | Wie das Web funktioniert | [Blatt 1](blaetter/pdf/WE1_Blatt01_Setup-und-erster-Start.pdf) | Setup steht, Team und Idee stehen, erste Seite im Browser |
| 2 | 06.10. | HTML5 richtig | [Blatt 2](blaetter/pdf/WE1_Blatt02_Das-Gerüst.pdf) | Seiten, Navigation, ein Formular – sauber ausgezeichnet |
| 3 | 13.10. | CSS Grundlagen | [Blatt 3](blaetter/pdf/WE1_Blatt03_Eigenes-CSS.pdf) | Eigenes Stylesheet: Farben, Schrift, Abstände, sticky Header |
| 4 | 20.10. | Layout, Tailwind & npm | [Blatt 4](blaetter/pdf/WE1_Blatt04_Layout-Tailwind-und-die-Toolchain.pdf) | Responsives Layout, drei wiederverwendete Komponenten |
| 5 | 27.10. | Client, Server & HTTP | [Blatt 5](blaetter/pdf/WE1_Blatt05_Online-gehen.pdf) | Läuft live unter einer öffentlichen URL |
| 6 | 17.11. | JavaScript im Browser | [Blatt 6](blaetter/pdf/WE1_Blatt06_Interaktiv-werden.pdf) | Reagiert auf Eingaben, ohne die Seite neu zu laden |
| 7 | 24.11. | Daten & APIs | [Blatt 7](blaetter/pdf/WE1_Blatt07_Echte-Daten.pdf) | Holt echte Daten aus einer API, inklusive Fehlerfall |
| 8 | 01.12. | Arbeitsalltag mit Agents | [Blatt 8](blaetter/pdf/WE1_Blatt08_Feinschliff-und-Abgabe.pdf) | Ist abgabefertig: README, KI-Log, saubere Historie |
| 9 | 08.12. | Präsentationen & Abschluss | – | wird vorgeführt |

Die Blätter liegen als PDF in [`blaetter/pdf/`](blaetter/pdf) – das ist die Fassung, mit der ihr arbeitet.

## Was hier sonst noch liegt

- [`SETUP.md`](SETUP.md) – was ihr vor dem 06.10. installiert habt
- [`bausteine/`](bausteine) – die Code-Beispiele aus den Terminen, jedes einzeln lauffähig
- [`projekt-template/`](projekt-template) – ein leeres Gerüst, mit dem euer Projekt starten kann

## Wichtige Termine

| Wann | Was |
| --- | --- |
| So, 04.10., 20:00 | Team und Projektidee per Mail an dhbw@theaisoftwarecompany.com |
| So, 06.12., 20:00 | Abgabe: Repo-Link und Live-URL per Mail |
| Di, 08.12. | Präsentationen: 7 Minuten Demo, 3 Minuten Fragen |
| Klausurphase | Klausur über die DHBW, Stoff aus den Terminen 1 bis 7 |

## Euer Projekt: die Mindestanforderungen

- Mehrere Seiten oder eine Single-Page mit Navigation
- Semantisches HTML und mindestens ein Formular mit Validierung
- Responsive mit Tailwind, mindestens drei wiederverwendete Komponenten
- JavaScript-Interaktion: etwas ändert sich ohne Reload
- Daten aus einer öffentlichen API, Fehlerfall sichtbar
- Deployed unter öffentlicher URL, mit selbst geschriebener README

Bonus gibt es für ein Three.js-Element, eine Komponentenbibliothek, einen eigenen kleinen Node-Server, Tests, einen sauberen Build mit Vite – oder eine eigene Idee, die ihr begründen könnt.
