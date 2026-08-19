# gabrielstedile.dev

Personal portfolio of **Gabriel Stedile** — Senior Full Stack Engineer (React · TypeScript · Node.js · AI Integration).

**Live:** [gabrielstedile.dev](https://gabrielstedile.dev) · [Português](https://gabrielstedile.dev/pt) · [Resume](https://gabrielstedile.dev/resume)

[![CI](https://github.com/GabrielStedile999/gabrielstedile.dev/actions/workflows/ci.yml/badge.svg)](https://github.com/GabrielStedile999/gabrielstedile.dev/actions/workflows/ci.yml)

## What this site is

A one-page portfolio with a few satellite pages, built as a working demonstration of the workflow it advertises: the site was designed and implemented in pair with an AI coding agent (Claude), delivered in reviewed phases through a real git workflow — every commit human-reviewed and pushed by hand, deployed by Vercel.

Beyond the usual portfolio sections it ships a filterable **Selected Work** section with case-study modals (client work under NDA is described at a shareable level), a **⌘K command palette**, a printable **/resume** page in English and Portuguese, a typed-content **/notes** structure, and full technical SEO (Open Graph image, sitemap with hreflang, JSON-LD, PWA manifest).

## Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router, static export) + React 19 + TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) with a small design-token system in `globals.css`
- **Motion:** [Motion](https://motion.dev) — scroll reveals, layout animations, modal transitions, all honoring `prefers-reduced-motion`
- **i18n:** hand-rolled typed dictionaries (`src/i18n`) — English at `/`, Portuguese at `/pt`, hreflang alternates
- **Testing:** [Playwright](https://playwright.dev) e2e suite against the production static export
- **CI/CD:** GitHub Actions (lint → format check → build → e2e) and Vercel (deploy on push to `main`)

## Architecture notes

```
src/
├── app/               # routes: /, /pt, /resume, /pt/resume, /notes, 404,
│                      # sitemap, robots, manifest, icons
├── components/
│   ├── layout/        # Navbar (scrollspy + language toggle), Footer
│   ├── sections/      # one component per homepage section
│   ├── ui/            # design-system primitives (Card, Tag, Modal, Reveal…)
│   ├── CommandPalette.tsx
│   ├── HomePage.tsx   # locale-agnostic page composition
│   └── ResumeDocument.tsx
├── content/           # typed content (EN source of truth)
└── i18n/              # Dict type + en/pt dictionaries
```

Decisions worth calling out: **content lives in typed files**, never inside components — copy edits don't touch JSX, and the PT dictionary is checked by the same `Dict` type as EN, so a missing translation is a compile error. **Sections are server components**; interactivity lives in small client leaves (`Reveal`, `Counter`, the palette), keeping the JS bundle honest. The **static export** (`output: "export"`) means the whole site is prerendered HTML — no server, nothing to cold-start.

## Development

```bash
npm install
npm run dev          # local dev server
npm run lint         # eslint
npm run format       # prettier --write
npm run build        # static export → out/
npm test             # e2e suite (requires a prior build)
```

The e2e suite serves `out/` exactly as production does. First run needs a browser: `npx playwright install chromium`.

## AI-assisted workflow

The site was built in phases, each one a reviewable commit: ① design system → ② full layout with real content → ③ interactions, Selected Work + command palette → ④ technical SEO, 404, /resume, /notes → ⑤ icons/PWA, i18n, tests, CI. The agent proposes and implements; the human reviews, owns the content and presses `git push`.

## License

Code is available for reading and reference. Content (texts, resume, images) © Gabriel Stedile — please don't reuse it as your own.
