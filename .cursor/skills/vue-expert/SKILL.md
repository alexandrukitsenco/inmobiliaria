---
name: vue-expert
description: Guides Vue 3 development with Composition API, script setup, reactivity, and components. Use when editing .vue files, building Vue components, or when the user mentions Vue, Composition API, ref, reactive, or Vue best practices.
---

# Vue Expert

## Defaults

- **Vue 3** with **Composition API** and **`<script setup>`**.
- Prefer `ref()` for primitives and single values, `reactive()` for object-shaped state.
- Use **TypeScript** for props, emits, and component types when the project uses it.

## Component structure

```vue
<script setup lang="ts">
// 1. Imports
import { ref, computed, watch } from 'vue'

// 2. Props & emits
const props = defineProps<{ title: string; count?: number }>()
const emit = defineEmits<{ submit: [value: string] }>()

// 3. Local state
const local = ref('')

// 4. Computed
const doubled = computed(() => (props.count ?? 0) * 2)

// 5. Watchers / lifecycle (if needed)
watch(local, (v) => { /* ... */ })
</script>

<template>
  <!-- template -->
</template>

<style scoped>
/* scoped styles */
</style>
```

## Reactivity

- **ref**: use for primitives and when you need to replace the whole value. Access/assign with `.value` in script; unwrapped in template.
- **reactive**: use for object-shaped state. Don’t reassign the whole object; mutate properties. Not for primitives.
- **shallowRef** / **shallowReactive**: when you want to skip deep reactivity for performance.
- Prefer **computed** for derived state instead of manual watchers.

```ts
const count = ref(0)
const label = computed(() => `Count: ${count.value}`)
```

## Props and emits

- Typed props with `defineProps<{ ... }>()`; optional/defaults with `withDefaults(defineProps<...>(), { ... })`.
- Typed emits with `defineEmits<{ event: [payloadType] }>()`.
- Don’t mutate props; emit events or use v-model for two-way flow.

## v-model

- Single: `v-model="x"` ↔ `modelValue` + `update:modelValue`.
- Named: `v-model:title="title"` ↔ `title` prop + `update:title`.
- Multiple v-models and custom modifiers are supported (define in `defineModel()` in Vue 3.4+ when available).

## Slots

- Default slot: `<slot />` or `<slot><fallback /></slot>`.
- Named: `<slot name="header" />`; use `<template #header>` (or `v-slot:header`) when using.
- Scoped: `<slot name="item" :item="item" />`; consume with `#item="{ item }"`.

## Lifecycle

- Prefer **onMounted**, **onUpdated**, **onUnmounted** from `vue` over Options API lifecycle names.
- For cleanup (timers, listeners), do it inside **onUnmounted** or return a cleanup from **watch** / **watchEffect**.

## Best practices

- Keep components focused; extract subcomponents or composables when logic grows.
- Use **composables** (`useXxx`) for shared state and side effects; return `ref`/`reactive` and functions.
- Prefer **scoped** styles; use one main root element or a fragment if needed.
- Use **defineOptions** (or unplugin macro) if you need to set `name` or other options in `<script setup>`.
- For forms and validation, consider form state in a composable or Pinia; avoid deep prop drilling.

## Vue in Astro

- Use **client directives** for interactivity: `client:load`, `client:idle`, `client:visible`, or `client:only="vue"`.
- Shared app setup (e.g. PrimeVue, i18n) goes in the Astro app entrypoint (`_app.ts`); components receive the same app context.
- Prefer passing props from Astro; use the same Vue 3 patterns inside `.vue` components.

## Common pitfalls

- Mutating a prop instead of emitting or using a local ref copy.
- Using `reactive()` for a primitive (use `ref()`).
- Forgetting `.value` when reading/writing `ref` in script.
- Using `v-if` and `v-for` on the same element (Vue 3 allows it but list iteration on the outer element is clearer).
- Deep watchers without considering performance; use `shallowRef` or narrow the watched source when possible.
