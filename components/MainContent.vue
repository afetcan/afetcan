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
  <div>
    <div
      :class="isHydrated && wideLayout ? 'xl:w-full sm:max-w-[600px]' : 'sm:max-w-[600px] md:shrink-0'"
      class="sticky top-0 z-10 backdrop-blur backdrop-filter env(safe-area-inset-top,0) m-auto border-b-2 border-gray-300"
    >
      <div class="flex justify-between px-4 py-2 bg-gray-200">
        <div flex gap-3 items-center :overflow-hidden="!noOverflowHidden ? '' : false" py2 w-full>
          <NuxtLink
            v-if="backOnSmallScreen || back" flex="~ gap1" class="items-center btn-text p-0 xl:hidden"
            :aria-label="$t('global.back')"
            @click="$router.go(-1)"
          >
            <div i-ri:arrow-left-line class="rtl-flip" />
          </NuxtLink>
          <div class="flex w-full items-center justify-center">
            <!-- <slot name="title" /> -->
            <NuxtLink to="/" class="flex items-center justify-center" @click="$scrollToTop">
              <MolLogo class="h-10 w-32" />
            </NuxtLink>
          </div>
          <div sm:hidden h-7 w-1px />
        </div>
        <div flex items-center flex-shrink-0 gap-x-2>
          <slot name="actions" />
          <div class="pr-2">
            <label space-y-2>
              <TemSettingsLanguage select-settings />
            </label>
          </div>
        </div>
      </div>
      <slot name="header" />
    </div>
    <div :class="isHydrated && wideLayout ? 'xl:w-full sm:max-w-600px' : 'sm:max-w-600px md:shrink-0'" class="m-auto">
      <slot />
    </div>
  </div>
</template>
