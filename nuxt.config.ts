// https://nuxt.com/docs/api/configuration/nuxt-config
import { isDevelopment } from 'std-env'
import dotenv from 'dotenv'

import { i18n } from './config/i18n'
const env = () => {
  const env = process.env.STATUS
  if (env === 'staging')
    return 'staging'
  if (env === 'production')
    return 'production'
  if (env === 'development')
    return 'dev'
  return 'dev'
}
dotenv.config({
  path: `.env.${env()}`,
})

const isMobile = process.env.WHERE === 'app'

export default defineNuxtConfig({
  ssr: process.env.WHERE === 'web',
  runtimeConfig: {
    public: {
      mobile: process.env.WHERE === 'app',
    },
  },
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
    '@vue-macros/nuxt',
    '@nuxtjs/ionic',
    'nuxt-time',
  ],
  imports: {
    dirs: [
      './stores',
      './composables/settings',
    ],
    injectAtEnd: true,
  },
  ionic: {
    css: {
      basic: isMobile,
      core: isMobile,
      utilities: isMobile,
    },
  },
  pinia: {
    autoImports: [
      'defineStore',
      'storeToRefs',
    ],
  },
  tailwindcss: {
    configPath: './tailwind.config.js',
  },
  huntersofbookI18n: {
    languages: ['tr', 'en', 'de', 'ja'],
    exportDir: 'locales',
  },
  plausible: {
    init: {
      domain: 'acildeprem.com',
      apiHost: 'https://rapor.acildeprem.com',
    },
    partytown: true,
  },
  i18n,
  chatwoot: {
    init: {
      websiteToken: 'ib83pxJACnfjmBGnm8unHCo2',
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
        '../shims-vue.d.ts',
      ],
    },
  },
  sourcemap: !isDevelopment,
  app: {
    keepalive: true,
    head: {
      viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
      bodyAttrs: {
        class: 'overflow-x-hidden',
      },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        // open graph social image
        { property: 'og:title', content: 'acildeprem' },
        { property: 'og:description', content: 'It is an open source project that provides uninterrupted service in the event of an emergency earthquake.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://acildeprem/acildeprem-og-en.png' },
        { property: 'og:image:width', content: '3800' },
        { property: 'og:image:height', content: '1900' },
        { property: 'og:site_name', content: 'acildeprem' },
        { property: 'twitter:site', content: '@acildepremcom' },
        { property: 'twitter:card', content: 'summary_large_image' },
      ],
    },
  },
})
