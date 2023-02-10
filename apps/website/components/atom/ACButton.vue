<script setup lang="ts">
defineProps({
  block: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: 'button',
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
  <template v-else>
    <a
      class="px-4 py-2 rounded-md text-white bg-gray-500 hover:bg-gray-600" :class="{
        'w-full': block,
      }"
      :href="tag === 'button' ? undefined : '#'"
      :target="tag === 'button' ? undefined : '_blank'"
    >
      <slot />
    </a>
  </template>
</template>
