<script setup lang="ts">
import { computed, ref } from 'vue';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';

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

const images = computed(() => {
  return props.images.map((src, index) => ({
    src,
    thumb: props.thumbnails[index] ?? src,
    index,
  }));
});
</script>

<template>
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
      >
        <Image
          :src="item.src"
          :alt="item.alt ?? 'Alojamiento'"
          preview
          image-class="max-w-full max-h-full w-auto h-auto object-contain object-center"
          :pt="{
            root: { class: 'w-full h-full flex items-center justify-center' },
            originalContainer: { class: 'w-full h-full flex items-center justify-center' },
          }"
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
</template>
