import type { LocaleObject } from '#i18n'

export default defineNuxtPlugin(async () => {
  const { $i18n: { setLocale, locales, locale } } = useNuxtApp()
  const userSettings = useCookie('language')
  const lang = $computed(() => userSettings.value || 'tr')

  const supportLanguages = (locales.value as LocaleObject[]).map(locale => locale.code)
  if (!supportLanguages.includes(lang))
    userSettings.value = 'tr'

  watch([$$(lang)], () => {
    if (isHydrated.value && lang !== locale.value)
      setLocale('lang')
  }, { immediate: true })
})
