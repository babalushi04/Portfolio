# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
ng serve          # dev server at localhost:4200
ng build          # development build
ng build --configuration=production  # production build → dist/portfolio/browser
ng test           # run tests (vitest)
```

## Architecture

**NgModule-based Angular 21** — no standalone components. Every new component must be declared in `src/app/app-module.ts`.

### Module structure
```
src/app/
  app-module.ts          # single NgModule, all declarations here
  app-routing-module.ts  # routes: '' → Portfolio, /impressum, /datenschutz
  core/
    components/header, footer, loader
    services/language.ts   # DE/EN toggle via LanguageService + ngx-translate
  features/
    portfolio/             # main page sections (Hero, AboutMe, Skills, Projects, Testimonials, Contact)
    legal/                 # Imprint, Privacy
```

### i18n
ngx-translate v17 with `provideTranslateHttpLoader()`. Translation files: `src/assets/i18n/de.json` and `en.json`. Default language is `de`. Use `{{ 'KEY' | translate }}` in templates. Language stored in `localStorage` key `lang`.

### Styling
All SCSS uses `@use '../../../../styles/variables' as *;` to import design tokens. Key tokens: `$accent: #3dcfb6`, `$bg-dark: #1c1c1c`. Mixins: `section-setup`, `flex-center`, `flex-between`, `section-label`, `section-title`. Never use hardcoded colors — always reference variables.

### Template syntax
Use Angular 17+ control flow: `@if`, `@for`, `@switch`. Do not use `*ngIf` / `*ngFor` (deprecated).

### Contact form
Netlify Forms via HTTP POST to `/`. Hidden form in `src/index.html` is required for Netlify to detect the form on deploy. The `honeypot` field uses CSS class `.honeypot` (positioned off-screen) — never `style="display:none"`.

### Deployment
Netlify. Build command: `ng build`, publish dir: `dist/portfolio/browser`. SPA redirect handled by `netlify.toml`. Push to `master` branch of `github.com/babalushi04/Portfolio`.
