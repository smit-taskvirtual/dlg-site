# Debate Leaders Global — Homepage

A premium, responsive homepage for **Debate Leaders Global (DLG)**, an international
consulting firm that helps debate organizations become sustainable, high-performing
institutions. Built to feel credible to foundations, governments, universities,
corporate partners, boards, and prospective investors.

## Tech stack

- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org) (strict mode)
- [Vite](https://vite.dev) build tool
- [Tailwind CSS](https://tailwindcss.com) v4 (via the official Vite plugin)
- [Framer Motion](https://www.framer.com/motion) for animation
- [Lucide React](https://lucide.dev) for icons

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
```

### Production build

```bash
npm run build   # type-check + production build (outputs to dist/)
npm run preview # serve the production build locally
npm run lint    # run oxlint
```

## Project structure

```
public/
  images/            # downloaded copyright-free imagery (see ASSETS.md)
  favicon.svg
src/
  content.ts         # single source of truth for all editable copy + image paths
  index.css          # Tailwind theme tokens (brand palette, fonts, motion curve)
  App.tsx            # page composition
  components/
    Navigation.tsx   # sticky header + animated mobile drawer
    Hero.tsx         # staggered hero + animated network visual
    Purpose.tsx      # "Debate changes lives..." challenge narrative
    Philosophy.tsx   # navy editorial philosophy statement
    Services.tsx     # services grid (data-driven, hover emphasis)
    Products.tsx     # expandable signature products list
    GlobalNetwork.tsx# stylized animated global network
    AIAdvisor.tsx    # DLG AI Advisor concept preview (simulated chat)
    Insights.tsx     # newsletter form (client-side only)
    FinalCta.tsx     # closing call to action
    Footer.tsx
    SectionHeading.tsx
    Reveal.tsx       # shared scroll-reveal primitive
    ServiceIcon.tsx  # icon-name → Lucide resolver
```

## Editing content

All copy, navigation, services, products, proof points, and image paths live in
`src/content.ts`. Change text there without touching the components.

- **Proof points** (Hero) are plan-provided **positioning** figures, not verified
  claims. They are grouped under `hero.proofPoints` for easy updating.
- **Contact links** in the footer and the newsletter are **client-side placeholders**
  marked with `TODO` comments — wire them to a real email provider / URL before launch.
- The **AI Advisor** is a static UI concept preview and does **not** call a live AI
  service. It is labeled accordingly in the UI.

## Accessibility & performance

- Semantic HTML, skip link, visible focus states, keyboard-navigable menus/accordions.
- `prefers-reduced-motion` is honored across all animation (Framer Motion's
  `useReducedMotion` plus a global CSS fallback).
- Lazy-loaded images below the fold; minimal animation libraries.

## Image attribution

See [`ASSETS.md`](./ASSETS.md) for every external image, source URL, and license.