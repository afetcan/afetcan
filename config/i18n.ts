import type { NuxtI18nOptions } from '@nuxtjs/i18n'

export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag: string
  }
}

export const availableLocales: ILocales = {
  en: {
    name: 'English',
    iso: 'en',
    flag: 'icon-[twemoji--flag-united-states]',
  },
  tr: {
    name: 'Türkçe',
    iso: 'tr',
    flag: 'icon-[twemoji--flag-turkey]',
  },
  de: {
    name: 'Deutsch',
    iso: 'de',
    flag: 'icon-[twemoji--flag-germany]',
  },
}

export const i18n: NuxtI18nOptions = {
  locales: [
    {
      code: 'en',
      file: 'en.json',
    },
    { code: 'tr', file: 'tr.json' },
    { code: 'de', file: 'de.json' },
  ],
  defaultLocale: 'tr',
  lazy: true,
  strategy: 'no_prefix',
  langDir: 'locales/',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'language',
    redirectOn: 'root', // recommended
  },
  vueI18n: {
    legacy: false,
    locale: 'tr',
    fallbackLocale: 'tr',
    availableLocales: ['en', 'tr'],
  },
}
