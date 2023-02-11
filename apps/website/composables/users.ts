import type { EffectScope, Ref } from 'vue'

interface UseUserLocalStorageCache {
  scope: EffectScope
  value: Ref<Record<string, any>>
}

export const currentUser = computed<undefined>(() => {
  return undefined
})
/**
 * Create reactive storage for the current user
 */
export function useUserLocalStorage<T extends object>(key: string, initial: () => T): Ref<T> {
  if (process.server || process.test)
    return shallowRef(initial())

  // @ts-expect-error bind value to the function
  const map: Map<string, UseUserLocalStorageCache> = useUserLocalStorage._ = useUserLocalStorage._ || new Map()

  if (!map.has(key)) {
    const scope = effectScope(true)
    const value = scope.run(() => {
      const all = useLocalStorage<Record<string, T>>(key, {}, { deep: true })
      return computed(() => {
        const id = currentUser.value
          ? currentUser.value
          : '[anonymous]'
        all.value[id] = Object.assign(initial(), all.value[id] || {})
        return all.value[id]
      })
    })
    map.set(key, { scope, value: value! })
  }

  return map.get(key)!.value as Ref<T>
}
