import type { Locale } from './config';
import { DEFAULT_LOCALE } from './config';

/**
 * Translation strings per locale.
 * Add new keys here and use them via t(lang, 'section', 'key') or t(lang, 'section.key').
 */
export const strings = {
  es: {
    app: {
      name: 'Inmobiliaria',
    },
    home: {
      greeting: 'Hola Mundo!!',
      title: 'Inicio',
    },
    common: {
      loading: 'Cargando...',
      error: 'Ha ocurrido un error',
    },
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      language: 'Idioma',
    },
  },
  en: {
    app: {
      name: 'Real Estate',
    },
    home: {
      greeting: 'Hello World!!',
      title: 'Home',
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
    },
    nav: {
      home: 'Home',
      about: 'About us',
      language: 'Language',
    },
  },
  cat: {
    app: {
      name: 'Immobiliària',
    },
    home: {
      greeting: 'Hola Món!!',
      title: 'Inici',
    },
    common: {
      loading: 'Carregant...',
      error: 'S\'ha produït un error',
    },
    nav: {
      home: 'Inici',
      about: 'Nosaltres',
      language: 'Llengua',
    },
  },
} as const;

/**
 * Get a translation string for the given locale.
 * Falls back to DEFAULT_LOCALE if the key is missing in the requested locale.
 *
 * @example
 * t(lang, 'home', 'greeting')  // "Hola Mundo!!" | "Hello World!!" | "Hola Món!!"
 * t(lang, 'nav', 'about')
 */
export function t(
  lang: Locale,
  section: keyof (typeof strings)[Locale],
  key: string
): string {
  const localeStrings = strings[lang];
  const sectionObj = localeStrings[section] as Record<string, string> | undefined;
  const value = sectionObj?.[key];
  if (typeof value === 'string') return value;
  const defaultSection = strings[DEFAULT_LOCALE][section] as Record<string, string> | undefined;
  const fallback = defaultSection?.[key];
  return typeof fallback === 'string' ? fallback : key;
}
