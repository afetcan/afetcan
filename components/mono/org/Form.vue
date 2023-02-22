<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  schema: {
    type: Object as PropType<Record<string, any>>,
    required: true,
  },
})

const emit = defineEmits<{ (e: 'post', value: Event): void }>()

const post = (e: Event) => {
  emit('post', e)
}
</script>

<template>
  <form @submit.prevent="post($event)">
    <slot />
  </form>
</template>
