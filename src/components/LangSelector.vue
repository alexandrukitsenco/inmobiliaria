<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { navigate } from 'astro:transitions/client';
import { LOCALES, localeLabels, type Locale } from '../i18n/config';
import Select from 'primevue/select';

const props = withDefaults(
  defineProps<{
    currentLang: Locale;
    pathname?: string;
  }>(),
  { pathname: '' }
);

const pathnameRef = ref(props.pathname);

onMounted(() => {
  if (typeof window !== 'undefined' && !pathnameRef.value) {
    pathnameRef.value = window.location.pathname;
  }
});

const localeOptions = computed(() =>
  LOCALES.map((locale) => ({
    label: localeLabels[locale],
    value: locale,
  }))
);

function getLocalePath(locale: Locale): string {
  const path = pathnameRef.value || '/';
  const segments = path.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
  if (segments.length === 0) return `/${locale}`;
  segments[0] = locale;
  return `/${segments.join('/')}`;
}

function onLocaleChange(value: Locale | null) {
  if (value == null) return;
  document.cookie = `bp_lang=${value}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
  const path = getLocalePath(value);
  navigate(path);
}
</script>

<template>
  <Select
    :model-value="currentLang"
    :options="localeOptions"
    option-label="label"
    option-value="value"
    placeholder="Idioma"
    @update:model-value="onLocaleChange"
  />
</template>
