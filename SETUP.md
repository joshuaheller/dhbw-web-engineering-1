# Setup

Einmal aufsetzen, danach läuft es das ganze Semester. Plant etwa 45 Minuten ein. Wenn etwas klemmt: Moodle-Forum, ihr seid garantiert nicht allein.

## 1. VS Code

Download: <https://code.visualstudio.com>

Diese Erweiterungen installiert ihr gleich mit (Seitenleiste → Extensions):

| Erweiterung | Wofür |
| --- | --- |
| Live Server | Seite im Browser öffnen und bei jedem Speichern neu laden |
| Prettier | Formatiert HTML, CSS und JS automatisch |
| GitHub Copilot | Kommt in Termin 2 dazu, siehe unten |

**Prettier scharf schalten:** `Cmd/Strg + ,` → nach `format on save` suchen → Haken setzen.

## 2. Node.js

Ladet die **LTS**-Version: <https://nodejs.org>

Prüfen im Terminal (VS Code: `Ctrl + ö` oder Terminal → Neues Terminal):

```bash
node -v    # v22.x.x oder neuer
npm -v     # 10.x oder neuer
```

Node braucht ihr ab Termin 4 für Tailwind und Vite. Was npm eigentlich macht, klären wir dort.

## 3. Git und GitHub

Git installieren: <https://git-scm.com> (macOS: kommt mit den Xcode Command Line Tools)

```bash
git --version
git config --global user.name "Dein Name"
git config --global user.email "deine@mail.de"
```

Account anlegen: <https://github.com> – nehmt einen Namen, den ihr auch in einer Bewerbung zeigen würdet.

## 4. GitHub Copilot (kostenlos für Studierende)

1. <https://education.github.com/discount_requests/application> – mit eurer DHBW-Mailadresse verifizieren
2. Freischaltung dauert von ein paar Minuten bis ein paar Tage. Macht das **früh**.
3. In VS Code die Erweiterung „GitHub Copilot" installieren und mit dem Account anmelden.

Ab Termin 2 arbeitet ihr damit – als Erklärer, nicht als Autopilot.

## 5. Browser

Chrome, Firefox oder Edge. Wichtig sind die DevTools: `F12` oder `Cmd + Alt + I`. Safari braucht dafür erst „Entwickler"-Menü in den Einstellungen.

## 6. Projekt starten

```bash
git clone https://github.com/<euer-name>/<euer-projekt>.git
cd <euer-projekt>
```

Alternativ könnt ihr den Ordner `projekt-template/` aus diesem Repo als Startpunkt kopieren.

## Prüfliste

- [ ] VS Code läuft, Live Server und Prettier installiert
- [ ] `node -v` und `npm -v` geben eine Version aus
- [ ] `git --version` gibt eine Version aus, Name und Mail sind gesetzt
- [ ] GitHub-Account existiert, Copilot beantragt
- [ ] DevTools lassen sich öffnen
- [ ] Eigenes Repo angelegt, erster Commit gepusht
