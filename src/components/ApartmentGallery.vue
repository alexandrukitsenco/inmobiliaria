<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import Galleria from 'primevue/galleria';
import { useSwipe } from '@vueuse/core';

const props = withDefaults(
  defineProps<{
    images?: string[];
    thumbnails?: string[];
  }>(),
  {
    images: () => [],
    thumbnails: () => [],
  }
);

/** Matches Tailwind container breakpoints: sm 640, md 768, lg 1024, xl 1280, 2xl 1536 */
const responsiveOptions = ref([
    { breakpoint: '1536px', numVisible: 6 },
    { breakpoint: '1280px', numVisible: 5 },
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px',  numVisible: 4 },
    { breakpoint: '640px',  numVisible: 3 },
]);

const activeIndex = ref(0);
const displayFullscreen = ref(false);

const images = computed(() => {
  return props.images.map((src, index) => ({
    src,
    thumb: props.thumbnails[index] ?? src,
    index,
  }));
});

function navigate(direction: string) {
  const len = images.value.length;
  if (!len) return;
  if (direction === 'left') {
    activeIndex.value = (activeIndex.value + 1) % len;
  } else if (direction === 'right') {
    activeIndex.value = (activeIndex.value - 1 + len) % len;
  }
}

// Swipe on inline gallery
const galleryRef = ref<HTMLElement | null>(null);

useSwipe(galleryRef, {
  threshold: 30,
  onSwipeEnd(_e, direction) {
    navigate(direction);
  },
});

// Swipe on fullscreen overlay (teleported to body by PrimeVue)
const fullscreenMaskRef = ref<HTMLElement | null>(null);
let observer: MutationObserver | null = null;

onMounted(() => {
  observer = new MutationObserver(() => {
    const mask = document.querySelector('.galleria-fullscreen-mask') as HTMLElement | null;
    fullscreenMaskRef.value = mask;
  });
  observer.observe(document.body, { childList: true, subtree: true });
});

onUnmounted(() => {
  observer?.disconnect();
});

useSwipe(fullscreenMaskRef, {
  threshold: 30,
  onSwipeEnd(_e, direction) {
    navigate(direction);
  },
});

function openFullscreen(index: number) {
  activeIndex.value = index;
  displayFullscreen.value = true;
}
</script>

<template>
  <div ref="galleryRef" class="touch-action-pan-y">
    <Galleria
      v-model:activeIndex="activeIndex"
      :value="images"
      :num-visible="7"
      :responsive-options="responsiveOptions"
      :show-thumbnails="true"
      :show-item-navigators="true"
      :show-item-navigators-on-hover="true"
      :circular="true"
    >
      <template #item="{ item }">
        <div
          v-if="item?.src"
          class="relative w-full aspect-video overflow-hidden rounded-lg bg-ocean-50 flex items-center justify-center cursor-pointer"
          @click="openFullscreen(item.index)"
        >
          <img
            :src="item.src"
            :alt="item.alt ?? 'Alojamiento'"
            class="max-w-full max-h-full w-auto h-auto object-contain object-center"
          />
        </div>
      </template>
      <template #thumbnail="{ item }">
        <div v-if="item?.thumb" class="w-[60px] h-[42px] overflow-hidden rounded">
          <img
            :src="item.thumb"
            :alt="item.alt ?? 'Alojamiento'"
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover"
          />
        </div>
      </template>
    </Galleria>

    <Galleria
      v-model:activeIndex="activeIndex"
      v-model:visible="displayFullscreen"
      :value="images"
      :circular="true"
      :full-screen="true"
      :show-item-navigators="true"
      :show-thumbnails="false"
      :pt="{ mask: { class: 'galleria-fullscreen-mask' } }"
    >
      <template #item="{ item }">
        <img
          v-if="item?.src"
          :src="item.src"
          :alt="item.alt ?? 'Alojamiento'"
          class="max-w-full max-h-[90vh] object-contain"
        />
      </template>
    </Galleria>
  </div>
</template>

<style scoped>
.touch-action-pan-y {
  touch-action: pan-y;
}
</style>
