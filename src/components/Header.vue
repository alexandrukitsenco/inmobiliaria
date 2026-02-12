<script setup lang="ts">
import LangSelector from './LangSelector.vue';
import type { Locale } from '../i18n/config';

defineProps<{
  lang: Locale;
  pathname?: string;
}>();
</script>

<template>
  <header class="flex items-center justify-between gap-4 p-4 border-b border-gray-200 dark:border-gray-700">
    <slot name="brand">
      <span class="font-semibold">Inmobiliaria</span>
    </slot>
    <nav class="flex items-center gap-4">
      <slot name="nav" />
      <LangSelector :current-lang="lang" :pathname="pathname" />
    </nav>
  </header>
</template>
