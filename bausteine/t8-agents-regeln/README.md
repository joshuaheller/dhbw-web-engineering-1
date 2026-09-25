# Regeln für den Agent

## Worum es geht

Cursor, GitHub Copilot und Claude Code lesen eine Konventionsdatei im Projekt automatisch mit. Einmal aufgeschrieben, gilt sie für jeden Auftrag – und ihr hört auf, dieselben drei Korrekturen zu wiederholen.

## Starten

`AGENTS.md` ins Wurzelverzeichnis eures Projekts kopieren und anpassen. Je nach Werkzeug heißt die Datei auch `.cursorrules`, `CLAUDE.md` oder `.github/copilot-instructions.md` – der Inhalt ist derselbe.

## Ins eigene Projekt

Für euer Projekt reicht auch ein Abschnitt in der README. Wichtig ist nicht die Datei, sondern dass die Regeln **aufgeschrieben** sind: Sprache, Struktur, Stil, was nicht passieren soll.

## Änder mich

1. Nehmt eure letzten drei Korrekturen an KI-Vorschlägen. Steht jede davon als Regel in eurer Datei? Wenn nicht: ergänzen.
2. Gebt einer KI einen Auftrag einmal mit und einmal ohne diese Datei im Kontext. Was ist anders?
3. Der Abschnitt „Was du nicht tust" ist der wertvollste. Überlegt, was euer Agent in eurem Projekt auf keinen Fall anfassen darf.
