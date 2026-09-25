# Review-Checkliste

## Worum es geht

Der Diff ist die Wahrheit. Alles, was ihr am 08.12. erklären können müsst, geht vorher durch diese Liste. Zehn Minuten pro Feature.

## So lest ihr einen Diff

```bash
git diff                # was ist geändert, noch nicht vorgemerkt
git diff --staged       # was geht in den nächsten Commit
git log --oneline -10   # die letzten zehn Commits
```

In VS Code: Quellcodeverwaltung → Datei anklicken → links alt, rechts neu.

**Erst die Dateiliste, dann die Details.** Wenn eine Datei geändert wurde, die ihr nicht beauftragt habt, ist das die wichtigste Frage des Tages.

## Checkliste

### Verstehen
- [ ] Ich kann jede geänderte Zeile in einem Satz erklären
- [ ] Es wurde keine Datei verändert, die nicht zum Auftrag gehört
- [ ] Keine Abhängigkeit ist dazugekommen, die ich nicht kenne

### Funktioniert
- [ ] Die Seite lädt ohne Fehler in der Konsole
- [ ] Das neue Feature tut, was in der Spec steht
- [ ] Das alte Feature, das ich zuletzt gebaut habe, tut es immer noch
- [ ] Lade-, Leer- und Fehlerfall sind sichtbar

### Sauber
- [ ] Keine auskommentierten Reste, keine vergessenen `console.log`
- [ ] Keine Funktion, die dasselbe macht wie eine andere
- [ ] Namen sagen, was gemeint ist
- [ ] Keine Zugangsdaten im Code

### Zugänglich
- [ ] Per Tab erreichbar, mit Enter bedienbar
- [ ] Semantische Elemente statt `div` mit `onclick`
- [ ] Kontrast passt

### Dokumentiert
- [ ] README ist noch aktuell
- [ ] KI-Log ergänzt, wenn KI beteiligt war
- [ ] Commit-Nachricht sagt, was und warum

## Wenn etwas nicht durchgeht

Fragt nach, statt zu übernehmen:

> „Erklär mir Zeile 34 bis 48. Warum diese Lösung und nicht die einfachere?"

Und wenn die Antwort nicht überzeugt: rauswerfen. Code, den niemand im Team erklären kann, zählt nicht.
