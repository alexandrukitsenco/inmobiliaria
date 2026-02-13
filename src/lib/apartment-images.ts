/**
 * Raw image imports from src/assets for Astro image optimization.
 * These return ImageMetadata objects that can be used with getImage().
 */

const blueGlob = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/blue/*.jpg',
  { eager: true }
);

const paradiseGlob = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/paradise/*.jpg',
  { eager: true }
);

function sortedImages(glob: Record<string, { default: ImageMetadata }>): ImageMetadata[] {
  return Object.keys(glob)
    .sort()
    .map((key) => glob[key].default);
}

/** Raw ImageMetadata objects for Astro's getImage() */
export const blueRawImages: ImageMetadata[] = sortedImages(blueGlob);
export const paradiseRawImages: ImageMetadata[] = sortedImages(paradiseGlob);
