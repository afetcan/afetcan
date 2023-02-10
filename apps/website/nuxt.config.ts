// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    configPath: './tailwind.config.js',
  },
})
