export type AnyConvert<T> = {
  [p in keyof T]: any
}

export interface I18nItem {
  locale: string
  title: string
  description: string
}

export interface Country {
  id: number
  name: string
  icon: string
  slug: string
  code: string
  level: number
  i18n: I18nItem[]
  status: boolean
  latitude: number
  longitude: number
}
