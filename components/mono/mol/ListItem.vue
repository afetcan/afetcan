<script setup lang="ts">
const { href, icon, title } = defineProps<{
  title: string
  icon: string
  iconRight?: string
  href?: string
  subtitle?: string
  dark?: boolean
  headerClass?: string
  clickable?: boolean
}>()

const attibutes = useAttrs()
</script>

<template>
  <div class="relative">
    <div :class="href ? 'hover:scale-105 transition-transform' : ''">
      <div :class="headerClass ? headerClass : 'bg-zinc-100 dark:bg-zinc-700'">
        <div class="p-4 md:p-6 relative">
          <div class="mx-auto flex max-w-screen-md gap-4 md:gap-6">
            <div class="rounded-xl w-16 h-16 flex flex-none items-center justify-center bg-black dark:bg-white/50 bg-opacity-5 px-2 py-1 text-2xl font-bold tabular-nums md:text-4xl">
              <div class="w-10 h-10" :class="icon" />
            </div>
            <div class="flex flex-col">
              <NuxtLink v-if="!clickable" :to="href ? href : '#'" class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                <h3 class="text-lg font-bold">
                  {{ title }}
                </h3>

                <p class="opacity-60 text-sm">
                  {{ subtitle }}
                </p>
              </NuxtLink>
              <div v-else class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                <h3 class="text-lg font-bold">
                  {{ title }}
                </h3>

                <p class="opacity-60 text-sm">
                  {{ subtitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <slot />
    </div>
    <div class="absolute top-3 right-3">
      <div class="w-7 h-7" :class="iconRight ? iconRight : 'icon-[ph--arrow-square-in-duotone]'" />
    </div>
  </div>
</template>
