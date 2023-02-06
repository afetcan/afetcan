import type { NavigationGuard, NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import { setupLayouts } from 'virtual:generated-layouts'

import generatedRoutes from '~pages'

export const routes = [
  ...setupLayouts(generatedRoutes),
] as RouteRecordRaw[]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export const onBeforeEach: NavigationGuard = async (
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  next()
}

router.beforeEach(onBeforeEach)

export default router
