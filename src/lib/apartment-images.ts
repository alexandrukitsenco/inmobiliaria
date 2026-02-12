/**
 * Image URLs for apartment galleries. Images are served from public/apartamentos/{blue|paradise}/.
 */
const BLUE_FILES = [
  'IMG_7620 2.jpg',
  'IMG_7632 2.jpg',
  'IMG_7678 2.jpg',
  'IMG_7686 2.jpg',
  'IMG_7699 2.jpg',
  'IMG_7706 2.jpg',
  'IMG_7710 2.jpg',
  'IMG_7713 2.jpg',
  'IMG_7715 2.jpg',
  'IMG_7718 2.jpg',
  'IMG_7721 2.jpg',
  'IMG_7732 2.jpg',
  'IMG_7779 2.jpg',
  'IMG_7792 2.jpg',
  'IMG_8832 2.jpg',
];

const PARADISE_FILES = [
  'FullSizeRender 4.jpg',
  'FullSizeRender 5.jpg',
  'IMG_1418 3.jpg',
  'IMG_1418 4.jpg',
  'IMG_3917 2.jpg',
  'IMG_3925 2.jpg',
  'IMG_5639 2.jpg',
  'IMG_5677 2.jpg',
  'IMG_5703 2.jpg',
  'IMG_5756 2.jpg',
  'IMG_5991 2.jpg',
  'IMG_6015 2.jpg',
  'IMG_6041 2.jpg',
  'IMG_6140 2.jpg',
  'IMG_6152 2.jpg',
];

function toUrls(filenames: string[], folder: string): string[] {
  return filenames.map((name) => `/apartamentos/${folder}/${encodeURIComponent(name)}`);
}

export const blueImages: string[] = toUrls(BLUE_FILES, 'blue');
export const paradiseImages: string[] = toUrls(PARADISE_FILES, 'paradise');
