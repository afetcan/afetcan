export const getJSONI18n = <T>(data: any[], locale: string): T => {
  const i18n = data.find(item => item.locale === locale)
  return i18n || ''
}
