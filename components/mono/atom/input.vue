<script setup lang="ts">
import { toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  successMessage: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
})

// use `toRef` to create reactive references to `name` prop which is passed to `useField`
// this is important because vee-validte needs to know if the field name changes
// https://vee-validate.logaretm.com/v4/guide/composition-api/caveats
const name = toRef(props, 'name')

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
})
</script>

<template>
  <div :class="{ 'has-error': !!errorMessage, 'success': meta.valid }">
    <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>

    <div class="relative mt-1 flex items-center">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <div class="icon-[ph--magnifying-glass-bold]" />
      </div>

      <input
        :id="name" :name="name" :type="type" :value="inputValue" :placeholder="placeholder" class="block w-full rounded-md border-gray-300 pl-10 pr-12 h-12 px-4 border bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        @input="handleChange"

        @blur="handleBlur"
      >
      <div v-if="false" class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
        <kbd
          class="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400"
        >⌘K</kbd>
      </div>
    </div>

    <p v-show="errorMessage || meta.valid" id="email-error" class="mt-2 text-sm text-red-600">
      {{ errorMessage || successMessage }}
    </p>
  </div>
</template>
