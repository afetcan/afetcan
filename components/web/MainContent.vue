<script setup lang="ts">
defineProps<{
  /** Show the back button on small screens */
  backOnSmallScreen?: boolean
  /** Show the back button on both small and big screens */
  back?: boolean
  /** Do not applying overflow hidden to let use floatable components in title */
  noOverflowHidden?: boolean
}>()

const route = useRoute()
const wideLayout = computed(() => route.meta.wideLayout ?? false)

// useHeadFixed({
//   title: () => `${t('settings.language.label')} | ${t('nav.settings')}`,
// })
</script>

<template>
  <main class="mx-auto max-w-lg px-4 pt-10 pb-12 lg:pb-16">
    <slot name="header" />

    <div :class="isHydrated && wideLayout ? 'xl:w-full sm:max-w-600px' : 'sm:max-w-600px md:shrink-0'" class="m-auto">
      <slot />
    </div>
  </main>
</template>
