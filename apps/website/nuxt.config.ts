// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@huntersofbook/i18n/nuxt',
    '@huntersofbook/plausible-nuxt',
    '@nuxtjs/partytown',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@huntersofbook/chatwoot-nuxt',
  ],
  imports: {
    dirs: [
      'stores',
    ],
  },
  pinia: {
    autoImports: [
      'defineStore',
    ],
  },
  tailwindcss: {
    configPath: './tailwind.config.js',
  },
  huntersofbookI18n: {
    languages: ['tr', 'en'],
  },
  plausible: {
    init: {
      domain: 'acildeprem.cim',
      apiHost: 'https://rapor.acildeprem.com',
    },
    partytown: true,
  },
  i18n: {
    locales: [
      {
        code: 'tr',
        iso: 'tr-TR',
        name: 'Türkçe',
        file: 'tr.json',
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
      },
    ],
    defaultLocale: 'tr',
    langDir: 'language/',
  },
  chatwoot: {
    init: {
      websiteToken: 'AwB8e43XtTQNnXKrwzeGcrJR',
      baseUrl: 'https://chat.acildeprem.com',
    },
    settings: {
      locale: 'tr',
      position: 'right',
      launcherTitle: 'Yardım',
    },
    partytown: true,
  },
  typescript: {
    tsConfig: {
      include: [
        './shims-vue.d.ts',
      ],
    },
  },
})
