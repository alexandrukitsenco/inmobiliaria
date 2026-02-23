<script setup lang="ts">
import { ref } from 'vue';
import { navigate } from 'astro:transitions/client';
import Drawer from 'primevue/drawer';
import type { Locale } from '../i18n/config';
import { LOCALES, localeLabels } from '../i18n/config';

const props = defineProps<{
  lang: Locale;
  pathname: string;
  labels: {
    home: string;
    apartments: string;
    contact: string;
    language: string;
    menu: string;
  };
  apartmentLinks: { name: string; href: string }[];
}>();

const visible = ref(false);

function goTo(href: string) {
  visible.value = false;
  navigate(href);
}

function getLocalePath(locale: Locale): string {
  const path = props.pathname || '/';
  const segments = path.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
  if (segments.length === 0) return `/${locale}`;
  segments[0] = locale;
  return `/${segments.join('/')}`;
}

function switchLang(locale: Locale) {
  visible.value = false;
  document.cookie = `bp_lang=${locale}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
  navigate(getLocalePath(locale));
}

function isActive(href: string): boolean {
  const clean = props.pathname.replace(/\/+$/, '');
  const target = href.replace(/\/+$/, '');
  return clean === target;
}

const isHome = isActive(`/${props.lang}`);

</script>

<template>
  <!-- Hamburger button -->
  <button
    class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-ocean-700 hover:bg-ocean-50 transition-colors"
    aria-label="Menu"
    @click="visible = true"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>

  <!-- Drawer -->
  <Drawer v-model:visible="visible" position="right" :modal="true" class="w-72">
    <template #header>
      <span class="font-bold text-lg text-ocean-800">{{ labels.menu }}</span>
    </template>

    <nav class="flex flex-col gap-1">
      <!-- Home -->
      <button
        class="flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors w-full"
        :class="isHome ? 'bg-ocean-50 text-ocean-700 font-semibold' : 'text-gray-700 hover:bg-ocean-50 hover:text-ocean-700'"
        @click="goTo(`/${lang}/`)"
      >
        <svg class="w-5 h-5" :class="isHome ? 'text-ocean-600' : 'text-ocean-400'" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
        </svg>
        <span>{{ labels.home }}</span>
      </button>

      <!-- Apartments section -->
      <div class="px-4 pt-4 pb-1">
        <p class="text-xs uppercase tracking-wider text-ocean-400 font-semibold">{{ labels.apartments }}</p>
      </div>
      <button
        v-for="apt in apartmentLinks"
        :key="apt.href"
        class="flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors w-full"
        :class="isActive(apt.href) ? 'bg-ocean-50 text-ocean-700 font-semibold' : 'text-gray-700 hover:bg-ocean-50 hover:text-ocean-700'"
        @click="goTo(apt.href)"
      >
        <svg class="w-5 h-5" :class="isActive(apt.href) ? 'text-ocean-600' : 'text-ocean-400'" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0a2 2 0 01-2 2H7a2 2 0 01-2-2m0 0H3" />
        </svg>
        <span>{{ apt.name }}</span>
      </button>

      <!-- Separator -->
      <div class="my-2 border-t border-ocean-100"></div>

      <!-- Contact -->
      <button
        class="flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors w-full text-gray-700 hover:bg-ocean-50 hover:text-ocean-700"
        @click="goTo(`/${lang}/#contacto`)"
      >
        <i class="pi pi-phone text-ocean-400 w-5 text-center"></i>
        <span>{{ labels.contact }}</span>
      </button>

      <!-- Separator -->
      <div class="my-2 border-t border-ocean-100"></div>

      <!-- Language section -->
      <div class="px-4 pt-4 pb-1">
        <p class="text-xs uppercase tracking-wider text-ocean-400 font-semibold">{{ labels.language }}</p>
      </div>
      <button
        v-for="locale in LOCALES"
        :key="locale"
        class="flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors w-full"
        :class="locale === lang ? 'bg-ocean-50 text-ocean-700 font-semibold' : 'text-gray-700 hover:bg-ocean-50 hover:text-ocean-700'"
        @click="switchLang(locale)"
      >
        <span class="w-5 h-5 flex items-center justify-center text-sm">
          {{ locale === lang ? '●' : '○' }}
        </span>
        <span>{{ localeLabels[locale] }}</span>
      </button>
    </nav>
  </Drawer>
</template>
