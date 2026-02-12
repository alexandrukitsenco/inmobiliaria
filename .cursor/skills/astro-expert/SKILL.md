---
name: astro-expert
description: Guides Astro development: project structure, pages, routing, islands, and View Transitions API. Use when editing .astro files, configuring Astro, adding page transitions, or when the user mentions Astro, view transitions, or static/SSR setup.
---

# Astro Expert

## Defaults

- **Astro 5** (or current LTS). Prefer **static (SSG)** by default; enable SSR or hybrid only when needed.
- **File-based routing** under `src/pages/`. Use **TypeScript** in frontmatter and props when the project uses it.
- **Content in frontmatter** (between `---`); component logic and imports there; minimal client JS via islands.

## Project structure

- `src/pages/` — routes; file name = URL path. `index.astro` = `/`, `[param].astro` = dynamic segment.
- `src/layouts/` — shared shell (html, head, body); use `<slot />` for page content.
- `src/components/` — reusable .astro, .vue, .react, etc. Use framework components as islands with client directives.
- `astro.config.mjs` — integrations (vue, react, tailwind, etc.), i18n, vite.

## Pages and routing

- **Static paths**: Export `getStaticPaths()` for dynamic routes; return `{ params: { ... }, props?: { ... } }[]`.
- **Params**: `Astro.params` in the page (e.g. `Astro.params.lang`). Validate/coerce types (e.g. `Locale`).
- **Props**: Pass from `getStaticPaths` via `props`; receive in page as second argument to the frontmatter (or use `Astro.props` if using a wrapper).
- **URL**: `Astro.url`, `new URL(Astro.request.url)` for query params and pathname.

## Layouts and slots

- Layout receives props (e.g. `title`, `lang`); page content goes in default `<slot />`.
- Named slots: `<Layout><Fragment slot="head">...</Fragment></Layout>` and `<slot name="head" />` in layout.
- Use one root layout that sets `<html>`, `<head>`, `<body>`; nest layout wrappers if needed.

## Components and islands

- **.astro components**: No client JS; render at build (or on server in SSR). Pass props; use `<slot />`.
- **Framework components** (Vue, React): Import and use with **client directives** to ship JS:
  - `client:load` — load and hydrate immediately
  - `client:idle` — after browser idle
  - `client:visible` — when in viewport
  - `client:only="vue"` (or "react") — only run in client, no SSR
- Prefer `client:visible` or `client:idle` for below-the-fold islands to improve LCP.

## View Transitions

Astro’s View Transitions API gives in-browser, SPA-like transitions between pages without a full reload.

### Setup

1. Add the integration in `astro.config.mjs`:

```js
import viewTransitions from '@astrojs/view-transitions';

export default defineConfig({
  integrations: [viewTransitions(), vue(), /* ... */],
});
```

2. In the **root layout** (the one that wraps all pages), wrap the body content with `<ViewTransitions />`:

```astro
---
import { ViewTransitions } from 'astro:transitions';
import '../styles/global.css';
const { lang, title } = Astro.props;
---
<!doctype html>
<html lang={lang}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{title}</title>
  </head>
  <body>
    <ViewTransitions />
    <slot />
  </body>
</html>
```

After this, navigations via links (same-origin) are intercepted and the new page is fetched and swapped with transitions.

### Transition directives (which elements animate)

- **`transition:animate="..."`** — attach a built-in animation to an element. Common values:
  - `fade` — opacity
  - `slide` — horizontal slide (default direction can be overridden)
  - `slide` with `transition:name="slide-right"` etc. for direction
- **`transition:name="my-name"`** — give the element a stable identity across pages. Astro will morph elements with the same `transition:name` (same “name”) from old page to new page (shared element transition).
- **`transition:persist="id"`** — persist an element by `id` across navigations; it is moved to the new DOM instead of recreated (e.g. a video or a counter that should not re-run).

Use in layout or in page/layout components:

```astro
<div transition:animate="fade" transition:name="main-content">
  <slot />
</div>
```

```astro
<header transition:name="site-header">...</header>
<main transition:animate="slide" transition:name="main">
  <slot />
</main>
```

### Custom animations

- Use `transition:animate` with a custom animation object (e.g. from `astro:transitions` or define your own) for duration, easing, etc.
- For full control, use the **View Transitions API** (browser): `document.startViewTransition(callback)` and style `::view-transition-old(...)` / `::view-transition-new(...)` in CSS. Astro’s integration runs transitions in this model; the directives are sugar on top.

### Best practices (View Transitions)

- Put **one** `<ViewTransitions />` in the **root layout** that wraps every page.
- Use **`transition:name`** on shared regions (header, main, sidebar) so the same “name” on both pages creates a smooth morph.
- Prefer **`transition:animate="fade"`** for full-page content swap when you don’t need shared-element morphing.
- Use **`transition:persist="id"`** for elements that must not re-mount (e.g. media, stateful widgets).
- Avoid persisting or naming huge trees; keep named/persisted elements small and stable.
- With **i18n** and `[lang]` routes, ensure the layout used by all locales includes `<ViewTransitions />` so language switches also get transitions.

## i18n (Astro built-in)

- In `astro.config.mjs`, set `i18n.locales`, `i18n.defaultLocale`, and `i18n.routing.prefixDefaultLocale` (or similar).
- Dynamic segment e.g. `[lang]`; in `getStaticPaths` return one entry per locale.
- Use a shared `t(lang, key)` or similar for strings; pass `lang` into Layout and use for `html lang={lang}` and content.

## Config and integrations

- **Integrations order** can matter (e.g. View Transitions before or after Vue). Keep View Transitions if you use it; add Vue/React as needed.
- **Vite**: Use `vite.plugins` for Tailwind (`@tailwindcss/vite`) or other plugins; `vite.resolve.alias` for path aliases.
- **SSR**: Set `output: 'server'` or use `output: 'hybrid'` and `export const prerender = true` per page for hybrid.

## Best practices

- Keep **layout** thin: meta, one wrapper, `<ViewTransitions />`, `<slot />`. Put page-specific head (e.g. meta description) via a layout prop or slot.
- Use **getStaticPaths** for all locales in i18n so every locale has a known set of static pages.
- Prefer **Astro components** for static content; use framework components only where interactivity is required, with the least aggressive client directive that works (`client:visible` > `client:load` when possible).
- For **images**, use `<Image />` from `astro:assets` (or the assets integration) for optimization.
- **View Transitions**: Design transition names and persistence so the same logical element has the same `transition:name` or `transition:persist` on both pages; avoid duplicate names in one page.

## Common pitfalls

- Forgetting to add `<ViewTransitions />` in the root layout (transitions won’t run).
- Putting `<ViewTransitions />` in a child layout only (some routes may not get transitions).
- Using `transition:name` with different values for the “same” element on different pages (no morph).
- Persisting or naming large subtrees (performance; keep scope small).
- Using `client:load` for every island (hurts LCP; prefer `client:idle` or `client:visible` where possible).
