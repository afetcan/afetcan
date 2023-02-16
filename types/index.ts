export type AnyConvert<T> = {
  [p in keyof T]: any
}
