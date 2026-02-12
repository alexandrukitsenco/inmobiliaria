<script setup lang="ts">
import { computed, ref } from 'vue';
import Galleria from 'primevue/galleria';

const props = withDefaults(
  defineProps<{
    images?: string[];
  }>(),
  {
    images: () => [],
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

const images = computed(() => {
  return props.images.map((src) => ({ src }));
});
</script>

<template>
  <Galleria
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
        class="relative w-full aspect-video overflow-hidden rounded-lg bg-ocean-50 flex items-center justify-center"
      >
        <img
          :src="item.src"
          :alt="item.alt ?? 'Alojamiento'"
          class="max-w-full max-h-full w-auto h-auto object-contain object-center"
        />
      </div>
    </template>
    <template #thumbnail="{ item }">
      <div v-if="item?.src" class="w-[60px] h-[42px] overflow-hidden rounded">
        <img
          v-if="item?.src"
          :src="item.src"
          :alt="item.alt ?? 'Alojamiento'"
          class="w-full h-full object-cover"
        />
      </div>
    </template>
  </Galleria>
</template>
