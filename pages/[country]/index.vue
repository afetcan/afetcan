<script setup lang="ts">
const { t } = useI18n()

const route = useRoute()

const getSlug = computed(() => {
  return route.params.country
})
</script>

<template>
  <NuxtLayout name="web">
    <WebMainContent>
      <div>
        <div class="py-4">
          <NuxtLink
            to="/"
            class="bg-gray-200 hover:bg-gray-400 h-10 px-4 rounded flex items-center w-full"
          >
            <div class="icon-[ph--caret-left-bold] w-5 h-5 mr-1" />
            {{ t('global.home') }}
            <div class="icon-[ph--heart-duotone] w-5 h-5 ml-auto" />
          </NuxtLink>
        </div>

        <!-- Actions panel -->
        <section aria-labelledby="quick-links-title">
          <div class="overflow-hidden rounded-lg bg-gray-200 shadow grid grid-cols-1 gap-px divide-y-0">
            <h2 id="quick-links-title" class="sr-only">
              Quick links
            </h2>

            <div class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
              <div>
                <span class="rounded-lg inline-flex p-3 bg-red-50 text-red-700 ring-4 ring-white">
                  <div class="icon-[ph--caret-right-bold] w-6 h-6" />
                </span>
              </div>
              <div class="mt-8">
                <h3 class="text-lg font-medium">
                  <NuxtLink :to="`/${getSlug}/charity`" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true" />
                    {{ t('home.charities') }}
                  </NuxtLink>
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                  Konum bilgilerinizi paylaşarak acil yardım talebinde bulunabilirsiniz.
                </p>
              </div>
              <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
            <div class="relative group opacity-60 bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
              <div>
                <span class="rounded-lg inline-flex p-3 bg-red-50 text-red-700 ring-4 ring-white">
                  <div class="icon-[ph--caret-right-bold] w-6 h-6" />
                </span>
              </div>
              <div class="mt-8">
                <h3 class="text-lg font-medium">
                  <NuxtLink to="#" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true" />
                    {{ t('home.soonFeatures') }}
                  </NuxtLink>
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                  Konum bilgilerinizi paylaşarak acil yardım talebinde bulunabilirsiniz.
                </p>
              </div>
              <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          </div>
        </section>
      </div>
    </WebMainContent>
  </NuxtLayout>
</template>
