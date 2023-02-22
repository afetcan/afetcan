<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface Props {
  name: string
  label: string
  grid?: number
  errorText: string
  successText: string
  valid: boolean
}

withDefaults(defineProps<Props>(), {
  errorMessage: '',
  successMessage: '',
  valid: false,
  grid: 12,
  label: '',
  name: '',
})
</script>

<template>
  <div class="relative" :class="[{ 'has-error': !!errorText, 'success': valid }, grid === 100 ? 'col-span-full' : `col-span-${grid}`]">
    <label :for="name" class="font-medium text-kalem-900 dark:text-white mb-1">{{ label }}</label>

    <slot />

    <p v-if="errorText || !valid" id="email-error" class="mt-2 text-sm text-red-600">
      {{ errorText || successText }}
    </p>

    <slot name="footer" />
  </div>
</template>
