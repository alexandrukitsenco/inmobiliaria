import type { App } from 'vue';
import PrimeVue from 'primevue/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import '../styles/global.css';

const OceanPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50:  '#eff8ff',
      100: '#dbeefe',
      200: '#bfe0fe',
      300: '#93ccfd',
      400: '#60b0fa',
      500: '#3b8ff6',
      600: '#2570eb',
      700: '#1d5bd8',
      800: '#1e4aaf',
      900: '#1e408a',
      950: '#172a54',
    },
    colorScheme: {
      light: {
        primary: {
          color: '#2570eb',
          inverseColor: '#ffffff',
          hoverColor: '#1d5bd8',
          activeColor: '#1e4aaf',
        },
        highlight: {
          background: '#eff8ff',
          focusBackground: '#dbeefe',
          color: '#1e4aaf',
          focusColor: '#1d5bd8',
        },
      },
    },
  },
});

export default (app: App) => {
  app.use(PrimeVue, {
    theme: {
      preset: OceanPreset,
      options: {
        darkModeSelector: '.never-dark',
      },
    },
  });
};