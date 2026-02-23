<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { navigate } from 'astro:transitions/client';
import Button from 'primevue/button';
import type { Locale } from '../i18n/config';
import { strings } from '../i18n/strings';

const COOKIE_NAME = 'bp_cookies_consent';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60;

const props = withDefaults(defineProps<{ lang?: string }>(), { lang: 'es' });

const visible = ref(false);

const t = computed(() => {
  const locale = props.lang as Locale;
  return strings[locale]?.cookies ?? strings.es.cookies;
});

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

function accept() {
  setCookie(COOKIE_NAME, 'accepted');
  visible.value = false;
}

function reject() {
  setCookie(COOKIE_NAME, 'rejected');
  visible.value = false;
  navigate(`/${props.lang}/cookies-rejected`);
}

onMounted(() => {
  const consent = getCookie(COOKIE_NAME);
  if (consent === 'accepted') return;

  const path = window.location.pathname;
  const onAllowedPage = path.includes('cookies-rejected') || path.endsWith('/cookies') || path.endsWith('/cookies/');
  if (consent === 'rejected' && !onAllowedPage) {
    navigate(`/${props.lang}/cookies-rejected`);
    return;
  }

  if (!consent && !onAllowedPage) {
    visible.value = true;
  }
});
</script>

<template>
  <Transition name="slide">
    <div v-if="visible" class="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-ocean-100 shadow-[0_-4px_24px_rgba(0,0,0,0.1)]" style="padding-bottom: env(safe-area-inset-bottom)">
      <div class="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
        <p class="text-sm text-gray-700 leading-relaxed flex-1">
          {{ t.message }}
          <a
            :href="`/${props.lang}/cookies`"
            class="text-ocean-600 hover:text-ocean-800 underline transition-colors"
          >{{ t.moreInfo }}</a>
        </p>
        <div class="flex items-center gap-2 shrink-0 self-end sm:self-auto">
          <Button :label="t.reject" severity="secondary" outlined size="small" @click="reject" />
          <Button :label="t.accept" size="small" @click="accept" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(100%);
}
</style>
