---
name: primevue-expert
description: Guides PrimeVue 4 usage: setup, theming with @primeuix/themes, components (Button, InputText, DataTable, Dialog, etc.), and best practices. Use when building Vue UIs with PrimeVue, styling with Aura/Lara/Nora, or when the user mentions PrimeVue, Prime components, or design system.
---

# PrimeVue Expert

## Defaults

- **PrimeVue 4** with **Vue 3** and **@primeuix/themes**. Use the **Aura** preset unless the project specifies another (Lara, Nora, Material).
- Register PrimeVue once in the app entrypoint (e.g. Astro `_app.ts` or Vue `main.ts`); components then use the same theme and config.
- Prefer **unstyled** only when the project explicitly uses Tailwind/utility-first with PrimeVue unstyled mode.

## Setup

1. Install: `primevue`, `@primeuix/themes`.
2. In the Vue app entrypoint (e.g. `_app.ts` for Astro + Vue):

```ts
import type { App } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

export default (app: App) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura
    }
  });
};
```

3. Import components where used (or use a plugin/auto-import): e.g. `import Button from 'primevue/button'`; register globally only if the project does so.

## Theming (@primeuix/themes)

- **Presets**: `Aura`, `Lara`, `Nora`, `Material` from `@primeuix/themes/<name>`.
- **Light/Dark**: Aura (and others) expose light/dark variants; set via preset or by overriding theme tokens. Use the theme’s semantic tokens for colors so switching works.
- **Customization**: Extend or override the preset object (e.g. override specific design tokens) before passing to `theme.preset`. Avoid patching CSS globally when token overrides suffice.
- **Tailwind**: If the project uses Tailwind (e.g. Astro + Tailwind), keep PrimeVue’s theme CSS loading order correct so theme base styles apply; use utility classes for layout/spacing, not for replacing PrimeVue’s component structure.

## Components (usage patterns)

- **Button**: `<Button label="Save" icon="pi pi-check" @click="..." />`. Use `severity="secondary" | "success" | "info" | "warn" | "danger"`, `outlined`, `rounded`, `loading` as needed.
- **InputText**: `<InputText v-model="value" />`. Use `invalid`, `disabled`; pair with a label and optional `FloatLabel` or message.
- **FloatLabel**: Wrap input in `<FloatLabel>` (or use the component’s slot) for floating labels.
- **DataTable**: `<DataTable :value="rows" :paginator="true" :rows="10">` with `<Column field="name" header="Name" />` etc. Use `v-model:selection` for selection, `sortable` for sortable columns, `filter` for filtering.
- **Dialog**: `<Dialog v-model:visible="open" header="Title" :modal="true">` with content in default slot. Use `@hide` for cleanup; prefer `v-model:visible` (or current visible prop name in v4) for open state.
- **Dropdown / Select**: Use `Select` or `Dropdown` with `options` array and `optionLabel`/`optionValue`; bind value with `v-model`.
- **Menu / TieredMenu**: Pass `model` (array of menu items with `label`, `icon`, `command`, `items` for submenus); use with `popup` ref or inline.
- **Toast**: Register `<Toast />` once (e.g. in layout); inject and use `useToast()` in components to call `toast.add({ severity: 'success', summary: 'Done', detail: '...' })`.
- **Message / InlineMessage**: For inline feedback use `<Message severity="error">...</Message>` or `<InlineMessage>`.

Use **kebab-case** for component tags in templates (e.g. `InputText`, `DataTable`) and follow the official PrimeVue 4 docs for exact prop names (e.g. `visible` vs `open` for modals in your version).

## Icons

- **PrimeIcons**: Use class `pi pi-<icon-name>` for the `icon` prop (e.g. `pi pi-check`, `pi pi-times`). Ensure PrimeIcons font/CSS is loaded (usually via theme or `primeicons` package).
- **Component icons**: Many components accept `icon` prop; some use slots (e.g. `dropdownicon`) for custom icons.

## Forms and validation

- Use **invalid** and **aria-invalid** on inputs when validation fails; show messages with **Message** or **InlineMessage** below the field.
- For complex forms, consider grouping fields and using a single reactive model; validate on submit or on blur depending on UX.
- **Calendar**, **InputNumber**, **InputMask**: Use for dates, numbers, and masked input; bind with `v-model`.

## Accessibility

- Prefer PrimeVue’s built-in ARIA and keyboard support; don’t remove `aria-*` attributes without replacing with equivalent semantics.
- Modals and dropdowns should trap focus and close on Escape; PrimeVue handles this when used as intended.
- Use **label** and **invalid** so screen readers get the right state.

## Best practices

- **One config**: Configure PrimeVue and theme in a single app entrypoint; avoid re-calling `app.use(PrimeVue, ...)` in child apps or layouts.
- **Import only what you use**: Prefer importing components per file over global registration if the project doesn’t already register everything globally.
- **Preset first**: Customize via theme preset/tokens before reaching for heavy CSS overrides.
- **Toasts for global feedback**: Use `<Toast />` + `useToast()` for success/error/info; use **Message** for inline, contextual feedback.
- **Responsive**: Use PrimeVue’s responsive props (e.g. DataTable) and layout components; combine with Tailwind breakpoints for page layout.

## Common pitfalls

- Forgetting to add PrimeVue and the theme preset in the app entrypoint (e.g. `_app.ts` in Astro) so components render unstyled or break.
- Mixing theme presets or loading theme CSS in the wrong order with Tailwind, causing overrides to fail.
- Using Options API lifecycle or non-Vue-3 patterns in components that use PrimeVue (stick to Composition API and Vue 3 patterns).
- Registering PrimeVue in a child app or only in a layout that doesn’t wrap all pages, so some routes don’t get the theme.
- Using `visible`/`open` prop names that don’t match the installed PrimeVue version; check the docs for the exact API (e.g. `v-model:visible` vs `v-model:open`).

## With Astro + Vue

- PrimeVue and theme are configured in `_app.ts`; all Vue components (including those used with `client:*` directives) share that app and thus the same PrimeVue setup.
- Use `client:load`, `client:idle`, or `client:visible` on pages that contain PrimeVue components so the Vue app (and PrimeVue) hydrates when needed.
- Pass locale or theme (e.g. dark mode) via props or provide/inject from the layout so PrimeVue components can adapt.
