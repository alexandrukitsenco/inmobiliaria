<script setup lang="ts">
import LangSelector from './LangSelector.vue';
import type { Locale } from '../i18n/config';

defineProps<{
    lang: Locale;
    pathname?: string;
}>();
</script>

<template>
    <header class="bg-white/90 backdrop-blur-sm border-b border-ocean-100 sticky top-0 z-50">
        <div class="container mx-auto px-4 flex items-center justify-between py-3">
            <slot name="brand">
                <a :href="`/${lang}/`" class="flex items-center gap-2 no-underline text-ocean-800 hover:text-ocean-600 transition-colors">
                    <img src="/logo.svg" alt="B&P Miami Playa" class="h-9 w-auto" />
                    <span class="font-bold text-lg tracking-tight">B&P Miami Playa</span>
                </a>
            </slot>
            <nav class="flex items-center gap-4">
                <slot name="nav" />
                <LangSelector :current-lang="lang" :pathname="pathname" />
            </nav>
        </div>
    </header>
</template>
