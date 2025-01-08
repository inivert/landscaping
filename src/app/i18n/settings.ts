import enTranslations from './locales/en.json';

export const i18n = {
  defaultLocale: 'en',
  locales: ['en'] as const,
} as const;

export type Locale = (typeof i18n)['locales'][number];

export const getTranslations = async () => {
  return enTranslations;
}; 