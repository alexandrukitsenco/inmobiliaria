<script setup lang="ts">
import { navigate } from 'astro:transitions/client';
import Button from 'primevue/button';
import type { Locale } from '../i18n/config';
import { strings } from '../i18n/strings';
import { computed } from 'vue';

const COOKIE_NAME = 'bp_cookies_consent';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60;

const props = withDefaults(defineProps<{ lang?: string }>(), { lang: 'es' });

const label = computed(() => {
  const locale = props.lang as Locale;
  return strings[locale]?.cookies?.rejectedAccept ?? strings.es.cookies.rejectedAccept;
});

function accept() {
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent('accepted')}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
  navigate(`/${props.lang}/`);
}
</script>

<template>
  <Button :label="label" icon="pi pi-check" @click="accept" />
</template>
