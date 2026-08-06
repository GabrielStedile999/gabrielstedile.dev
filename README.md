# gabrielstedile.dev

Personal portfolio of **Gabriel Stedile** — Senior Frontend Engineer (React · TypeScript · Node.js · AI Integration).

Bilingual (EN / PT-BR) single-page portfolio, statically exported and deployed on Vercel.

## Stack

- [Next.js](https://nextjs.org) (App Router, static export) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) with design tokens via CSS variables
- [Motion](https://motion.dev) for animations
- [next-intl](https://next-intl.dev) for i18n (`/en`, `/pt`)
- [cmdk](https://cmdk.paco.me) command palette
- Vitest + Testing Library

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to /out
npm run lint
npm run format
```

## Structure

```
src/
  app/            # App Router pages and layout
  components/     # layout / sections / ui
  content/        # typed content data (cases, journey, stack)
  messages/       # i18n messages (en.json, pt.json)
```

## License

Code is available for reference. All content (texts, case studies, images) © Gabriel Stedile.
