---
name: tailwind-expert
description: Guides Tailwind CSS usage: utility-first styling, Tailwind v4 CSS-first config (@theme, @layer), responsive and dark mode, custom utilities. Use when styling with Tailwind, editing CSS with utilities, or when the user mentions Tailwind, utilities, or design tokens.
---

# Tailwind Expert

## Defaults

- **Tailwind v4** when the project uses `tailwindcss` 4.x and `@tailwindcss/vite`. Use **CSS-first configuration** (`@theme`, `@layer` in CSS) unless a `tailwind.config.*` is present (v3-style).
- **Utility-first**: Prefer single-purpose classes; avoid inline styles for layout/spacing/typography/colors that Tailwind covers.
- **One global entry**: Import Tailwind once (e.g. `@import "tailwindcss"` in `global.css`) and ensure that file is included in the app (e.g. in root layout).

## Setup (Tailwind v4)

- Install: `tailwindcss`, `@tailwindcss/vite`.
- In Vite (or Astro’s `vite.plugins`): `import tailwindcss from '@tailwindcss/vite'` and add `tailwindcss()` to `plugins`.
- In CSS: `@import "tailwindcss";` (in the main global stylesheet imported by the app).
- No `tailwind.config.js` required; theme and layers are defined in CSS (see below).

## Theme and config in CSS (v4)

- **Design tokens** live in `@theme { ... }` in your CSS:

```css
@import "tailwindcss";

@theme {
  --color-brand: #0ea5e9;
  --font-sans: "Inter", system-ui, sans-serif;
  --radius-lg: 0.5rem;
}
```

- Use the variables in utilities: `bg-brand`, `font-sans`, `rounded-lg` (Tailwind maps `--color-*`, `--font-*`, `--radius-*`, etc. to utilities).
- **Custom utilities**: `@utility name { ... }` or extend in `@layer components` / `@layer utilities` with `@apply` or raw CSS.

## Core utilities (quick reference)

- **Layout**: `flex`, `grid`, `block`, `inline-block`, `hidden`, `overflow-*`, `container`.
- **Spacing**: `m-*`, `p-*`, `gap-*`, `space-x-*`, `space-y-*` (margin/padding/gap; scale 0, 0.5, 1–96, etc.).
- **Sizing**: `w-*`, `h-*`, `min-w-*`, `max-w-*`, `min-h-*`, `max-h-*`.
- **Typography**: `text-*` (size, color), `font-*`, `leading-*`, `tracking-*`, `italic`, `truncate`, `line-clamp-*`.
- **Colors**: `bg-*`, `text-*`, `border-*`, `ring-*`, `fill-*`, `stroke-*`; use theme color names or arbitrary `bg-[#hex]`.
- **Borders**: `border`, `border-*`, `rounded-*`, `divide-*`.
- **Effects**: `shadow-*`, `opacity-*`, `mix-blend-*`.
- **Transitions**: `transition`, `duration-*`, `ease-*`; combine with state variants.

## Responsive and variants

- **Breakpoints** (default): `sm:`, `md:`, `lg:`, `xl:`, `2xl:` (mobile-first). Example: `flex flex-col md:flex-row`.
- **State**: `hover:`, `focus:`, `focus-visible:`, `active:`, `disabled:`, `group-hover:`, `peer-*`.
- **Dark**: `dark:` (e.g. `bg-white dark:bg-gray-900`). Configure dark mode in `@theme` if needed (e.g. `--dark-mode: selector` or `media`).
- **Arbitrary values**: `w-[13rem]`, `top-[2px]`, `bg-[#1a1a1a]` when the scale doesn’t fit.

## Best practices

- **Compose in HTML**: Prefer many single-purpose classes over one custom class with lots of `@apply`; keeps CSS small and intent visible.
- **Extract only when repeated**: If the same long list of utilities repeats in 3+ places, then consider a component class in `@layer components` or a shared component (e.g. Vue/React) that applies the classes.
- **Use theme tokens**: Define colors, fonts, radius in `@theme` and use utility names (`bg-brand`) instead of arbitrary values so design stays consistent and theming is easy.
- **Mobile-first**: Write base styles for small screens; add `sm:`, `md:`, etc. for larger.
- **Avoid conflicting utilities**: Don’t combine e.g. `pt-4` and `pt-6` on the same element; one wins and it’s unclear which.

## With component libraries (e.g. PrimeVue)

- Tailwind is for **layout, spacing, typography, and page-level styling**. Let the library’s theme handle component internals when possible.
- Use Tailwind for wrapper layout (grids, gaps, margins) and for overrides only when necessary; prefer the library’s theming (design tokens) over heavy utility overrides on components.
- If the library injects base styles, load order matters: typically global Tailwind first, then library CSS, so your utilities can override when needed.

## Custom layers

- **`@layer base`**: Resets, default element styles (use sparingly).
- **`@layer components`**: Reusable component-like classes (buttons, cards) with `@apply` or custom CSS.
- **`@layer utilities`**: Extra utilities via `@utility` or custom classes in this layer.

## Common pitfalls

- Adding a `tailwind.config.js` in a v4 project when the team uses CSS-first config; prefer `@theme` and CSS unless migrating or coexisting with v3.
- Forgetting to import the Tailwind entry CSS (e.g. `global.css` with `@import "tailwindcss"`) in the root layout or app entry.
- Overusing `@apply` for one-off layouts; it duplicates utility code and can bloat CSS.
- Using arbitrary values everywhere instead of extending `@theme` for repeated values (harder to maintain and theme).
- Conflicting utilities (e.g. two different margins) or relying on source order for conflicts; keep one source of truth per property.

## Tailwind v3 (when config file exists)

- If the project has `tailwind.config.js`/`tailwind.config.ts`, use **content** (paths to templates), **theme.extend** for tokens, **plugins** for extra utilities/components.
- Use PostCSS with `tailwindcss` and `autoprefixer` if not using the Vite plugin. Class names and utilities are largely the same; only config location differs.
