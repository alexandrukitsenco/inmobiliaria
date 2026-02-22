<script setup lang="ts">
import { contact } from '../i18n/apartamentos';

const phone = contact.phone.replace(/\s+/g, '');
const whatsappUrl = `https://wa.me/${phone}`;
</script>

<template>
  <a
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
  >
    <i class="pi pi-whatsapp" style="font-size: 2rem;"></i>
  </a>
</template>
