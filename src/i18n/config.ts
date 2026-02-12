export const LOCALES = ['es', 'en', 'cat', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';

export const localeLabels: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  cat: 'Català',
  fr: 'Français',
};
