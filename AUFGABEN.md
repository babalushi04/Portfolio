# Portfolio – Offene Aufgaben für Claude Code
## (Mentor-Feedback + Developer Akademie Checkliste)

Dieses Dokument enthält alle offenen Punkte aus dem Mentor-Feedback und der offiziellen
Portfolio-Checkliste. Claude Code soll alle Punkte systematisch prüfen, beheben und
committen.

---

## 🔴 PRIORITÄT 1 — Mentor-Feedback (muss zwingend behoben werden)

### 1. Responsiveness — Kritisches Problem
Der Mentor hat mehrfach betont: Responsiveness ist das Hauptproblem. Folgendes wurde konkret bemängelt:

- **Horizontale Scrollbar** sichtbar — keine ungewollte horizontale Overflow darf auftreten
- **Name „Virxhin Bytyqi" wird auf Mobile abgeschnitten** — Hero-Sektion, der Name fließt aus dem Viewport heraus
- **Text/Inhalte werden auf kleinen Screens abgeschnitten** — mehrere Sektionen betroffen
- **Überprüfe alle Sektionen bei 320px, 360px, 375px, 390px, 430px** (mobile Viewports)
- Nutze Chrome DevTools → Responsive Mode und teste jeden Breakpoint durch

**Was zu tun ist:**
- Alle Sektionen auf horizontalen Overflow prüfen (`overflow-x: hidden` nur als letztes Mittel — bevorzuge korrekte `width`/`max-width`/`padding`-Fixes)
- Hero-Name: `font-size` für sehr kleine Screens weiter reduzieren, `word-break` und `overflow-wrap` sicherstellen
- Jede Sektion einzeln im DevTools bei 320px prüfen

### 2. Skills-Sektion — SVG Icons komplett kaputt
**Problem:** In `src/app/features/portfolio/skills/skills.ts` sind die Icon-Pfade falsch!

Die Datei referenziert Pfade wie `assets/img/skills/html.svg`, `assets/img/skills/css.svg` usw.,
aber die tatsächlichen Dateien im Ordner `src/assets/img/skills/` heißen:

```
Frame 383Angular.svg
Frame 383HTML.svg
Frame 383JS.svg
Frame 383Materialdesign.svg
Frame 383TS.svg
Frame 383css.svg
Frame 383git.svg
Frame 383growthmindset.svg
Frame 383restApi.svg
Frame 383scrum.svg
Frame 383supabase.svg
```

**Zusätzlich:** Der Mentor hat gesagt, diese SVGs sehen aus wie "ausgedachte Bilder" / "Raubkopien".
Material Design Logo sieht falsch aus. JS und TS Icons haben unterschiedliche Größen.

**Was zu tun ist:**
1. Lies zuerst alle Dateien in `src/assets/img/skills/` aus
2. Aktualisiere `skills.ts` so, dass die `icon`-Pfade mit den tatsächlichen Dateinamen übereinstimmen
3. Stelle sicher, dass alle Skill-Icons dieselbe Größe haben (48×48px, einheitlich)
4. Falls neue SVGs mit eigenen Namen hinzugefügt wurden (ohne "Frame 383" Präfix), diese bevorzugen
5. Prüfe, ob es offizielle SVGs für die Skills gibt (devicons.dev, simpleicons.org) und ersetze fake-aussehende Icons
6. Der Eintrag `firebase` in skills.ts existiert nicht als SVG-Datei — entweder Firebase SVG hinzufügen oder durch `supabase` ersetzen (Datei `Frame 383supabase.svg` ist vorhanden)
7. `growthMindset` hat eine `.png` Referenz — prüfe ob `Frame 383growthmindset.svg` verwendet werden kann

**Aktueller Stand skills.ts** (muss korrigiert werden):
```typescript
skills: Skill[] = [
  { name: 'HTML',           icon: 'assets/img/skills/html.svg' },           // FALSCH
  { name: 'CSS',            icon: 'assets/img/skills/css.svg' },            // FALSCH
  { name: 'JavaScript',     icon: 'assets/img/skills/javascript.svg' },     // FALSCH
  { name: 'TypeScript',     icon: 'assets/img/skills/typescript.svg' },     // FALSCH
  { name: 'Angular',        icon: 'assets/img/skills/angular.svg' },        // FALSCH
  { name: 'Firebase',       icon: 'assets/img/skills/firebase.svg' },       // DATEI FEHLT
  { name: 'Git',            icon: 'assets/img/skills/git.svg' },            // FALSCH
  { name: 'Scrum',          icon: 'assets/img/skills/scrum.svg' },          // FALSCH
  { name: 'REST API',       icon: 'assets/img/skills/rest-api.svg' },       // FALSCH
  { name: 'Material Design',icon: 'assets/img/skills/material-design.svg' },// FALSCH
  { name: 'Growth Mindset', icon: 'assets/img/skills/growthMindset.png' },  // .png, SVG vorhanden
];
```

**Korrekte Pfade (basierend auf vorhandenen Dateien):**
```typescript
skills: Skill[] = [
  { name: 'HTML',           icon: 'assets/img/skills/Frame 383HTML.svg' },
  { name: 'CSS',            icon: 'assets/img/skills/Frame 383css.svg' },
  { name: 'JavaScript',     icon: 'assets/img/skills/Frame 383JS.svg' },
  { name: 'TypeScript',     icon: 'assets/img/skills/Frame 383TS.svg' },
  { name: 'Angular',        icon: 'assets/img/skills/Frame 383Angular.svg' },
  { name: 'Supabase',       icon: 'assets/img/skills/Frame 383supabase.svg' },
  { name: 'Git',            icon: 'assets/img/skills/Frame 383git.svg' },
  { name: 'Scrum',          icon: 'assets/img/skills/Frame 383scrum.svg' },
  { name: 'REST API',       icon: 'assets/img/skills/Frame 383restApi.svg' },
  { name: 'Material Design',icon: 'assets/img/skills/Frame 383Materialdesign.svg' },
  { name: 'Growth Mindset', icon: 'assets/img/skills/Frame 383growthmindset.svg' },
];
```

**WICHTIG:** Falls Virxhin neue SVG-Dateien ohne "Frame 383" Präfix hinzufügt (z.B. `html.svg`, `css.svg`),
diese neuen Pfade verwenden. Immer erst `ls src/assets/img/skills/` prüfen.

### 3. Campus-Link aktualisieren
Der Mentor sagte: Im Campus-Abgabelink steht noch die Developer Academy URL.
Virxhin muss diesen Link im Campus-Portal auf `https://noir-studio.de` aktualisieren.
*(Dies ist keine Code-Aufgabe für Claude — Virxhin muss das manuell im DA-Campus machen)*

### 4. Slider / Testimonials prüfen
Der Mentor hat einen möglichen "Jump" beim Reset des Sliders gesehen.
- Testimonials-Slider auf flüssigen Loop prüfen
- Sicherstellen, dass der Übergang beim Zurücksetzen auf den Anfang nicht sichtbar springt
- Falls ein harter Reset passiert: CSS transition oder JavaScript-Logik überprüfen und glätten

---

## 🟡 PRIORITÄT 2 — Checkliste Developer Akademie

### User Story 1 — Design & Responsiveness
- [ ] Design stimmt mit Figma-Mockup für Mobile und Desktop überein
- [ ] Abstände, Farben, Typografie, Bildgrößen korrekt
- [ ] Zwischengrößen (768px, 1024px) sehen gut aus
- [ ] **Hero-Bereich hat `height: 100vh` (oder `min-height: 100svh`)** — bereits umgesetzt, nochmal prüfen

### User Story 2 — Bilder
- [ ] Keine verzerrten Bilder (`object-fit: cover` oder `contain` korrekt gesetzt)
- [ ] Alle Bilder sind komprimiert (max. 500 KB) — prüfe `src/assets/img/` auf große Dateien
- [ ] Kein Bild wird mehrfach verwendet
- [ ] Fotos wirken professionell (gute Pose, neutraler Hintergrund) — *manuell zu prüfen*

### User Story 3 — Texte
- [ ] Alle Texte auf Deutsch und Englisch vorhanden (ngx-translate, `de.json` + `en.json`)
- [ ] Sprachumschalter im Header funktioniert
- [ ] Kein "Lorem Ipsum" irgendwo
- [ ] Texte auf Grammatikfehler geprüft (languagetool.org für DE, deepl/grammarly für EN)

### User Story 4 — Projekte
- [ ] Jedes Projekt hat einen **Live-Link** (URL zur gehosteten Version)
- [ ] Jedes Projekt hat einen **GitHub-Link**
- [ ] Projekte sind auf eigenen Subdomains erreichbar (z.B. `join.noir-studio.de`)
- [ ] Projekte funktionieren ohne Bugs
- [ ] Vorschaubilder sind ansprechend und passen zum Projekt

### User Story 5 — Social Media
- [ ] LinkedIn-Link korrekt mit `https://` (bereits vorhanden, nochmal prüfen)
- [ ] GitHub-Link korrekt mit `https://` (bereits vorhanden, nochmal prüfen)
- [ ] Keine privaten Social-Media-Links (kein Facebook, Instagram, etc.)

### User Story 6 — Domain & SSL
- [x] Eigene Domain: `https://noir-studio.de` — ✅ erledigt
- [x] SSL-Zertifikat aktiv (Vercel macht das automatisch) — ✅ erledigt
- [ ] **Favicon individuell angepasst** — kein Standard-Angular-Logo? Prüfe `src/favicon.ico`
- [ ] **Seitentitel (`<title>`)** individuell gesetzt — prüfe `src/index.html`

### User Story 7 — Kontaktformular
- [ ] Validierung erfolgt erst beim Verlassen eines Feldes (`blur`-Event, nicht `input`)
- [ ] Validierungsmeldungen verursachen **keine Layout-Verschiebung** (reservierter Platz oder `position: absolute`)
- [ ] Senden-Button ist **deaktiviert**, solange Formular ungültig ist (inkl. Datenschutz-Checkbox)
- [ ] Browser-Autovervollständigung zerstört das Design nicht (Webkit-Autofill-Styles vorhanden — bereits in `styles.scss`)
- [ ] Nach dem Senden: klare Erfolgs- oder Fehlermeldung sichtbar

### User Story 8 — Impressum & Datenschutz
- [x] Links zu Datenschutz und Impressum im Footer — prüfen ob vorhanden
- [ ] Seiten sind responsiv auf allen Geräten gut lesbar (min-height fix bereits gemacht)
- [ ] Informationen klar strukturiert und in verständlicher Sprache

---

## 📋 Reihenfolge für Claude Code

1. **Zuerst: SVG-Pfade in `skills.ts` korrigieren** (Bilder sind komplett kaputt)
2. **Dann: Responsiveness systematisch fixen** (horizontale Scrollbar, Name abgeschnitten)
3. **Dann: Kontaktformular prüfen** (onBlur, Layout-Shift, Button-State)
4. **Dann: Favicon und Seitentitel prüfen**
5. **Dann: Alle Links prüfen** (LinkedIn, GitHub, Projekte mit https://)
6. **Zuletzt: Slider auf Jump prüfen**
7. **Nach jedem Fix: Commit mit beschreibender Message**

---

## 📁 Wichtige Dateipfade

```
src/app/features/portfolio/skills/skills.ts          ← SVG-Pfade korrigieren
src/app/features/portfolio/skills/skills.html        ← Icon-Größen prüfen
src/assets/img/skills/                               ← Vorhandene SVG-Dateien
src/app/features/portfolio/hero/hero.scss            ← Name overflow auf Mobile
src/app/features/portfolio/contact/                  ← Formular-Validierung
src/index.html                                       ← <title> und <meta>
src/favicon.ico                                      ← Favicon
src/assets/i18n/de.json                             ← Deutsche Texte
src/assets/i18n/en.json                             ← Englische Texte
```

---

## ⚠️ Hinweise für Claude Code

- **NgModule-basiertes Angular 21** — keine standalone components, alles in `app-module.ts` deklariert
- **SCSS-Variablen:** Immer `@use '../../../../styles/variables' as *;` verwenden, niemals hardcoded Farben
- **Kein `overflow-x: hidden`** auf `html` oder `body` — Overflow-Probleme durch korrekte Layout-Fixes lösen
- **Angular Control Flow:** `@if`, `@for`, `@switch` verwenden — kein `*ngIf` / `*ngFor`
- **Nach Änderungen:** `ng build` testen, dann Git commit und push zu `master`
- **Branch:** `master` → auto-deploy auf Vercel → `https://noir-studio.de`
