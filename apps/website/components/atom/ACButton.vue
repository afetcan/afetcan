<script setup lang="ts">
defineProps({
  block: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String as PropType<'button' | 'a' | 'nuxt-link'>,
    default: 'button',
  },
  href: {
    type: String,
    default: undefined,
  },
  to: {
    type: String,
    default: undefined,
  },
  target: {
    type: String,
    default: undefined,
  },
})
</script>

<template>
  <template v-if="tag === 'button'">
    <button
      class="px-4 py-2 rounded-md text-white bg-gray-500 hover:bg-gray-600" :class="{
        'w-full': block,
      }"
      :type="tag === 'button' ? 'button' : undefined"
      :disabled="tag === 'button' ? undefined : true"
    >
      <slot />
    </button>
  </template>
  <template v-if="tag === 'nuxt-link'">
    <NuxtLink
      class="px-4 py-2 rounded-md text-white bg-gray-500 hover:bg-gray-600" :class="{
        'w-full': block,
      }"
      :to="to"
    >
      <slot />
    </NuxtLink>
  </template>
  <template v-else>
    <a
      class="px-4 py-2 rounded-md text-white bg-gray-500 hover:bg-gray-600" :class="{
        'w-full': block,
      }"
      :href="href"
      :target="target ? target : '_blank'"
    >
      <slot />
    </a>
  </template>
</template>
