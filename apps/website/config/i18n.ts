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
    name: 'EN',
    iso: 'en',
    flag: 'i-twemoji-flag-us-outlying-islands',
  },
  tr: {
    name: 'TR',
    iso: 'tr',
    flag: 'i-twemoji-flag-turkey',
  },
}

export const i18n: NuxtI18nOptions = {
  locales: [
    {
      code: 'en',
      file: 'en.json',
    },
    { code: 'tr', file: 'tr.json' },
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
