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
  grid: {
    type: Number,
    default: 100,
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
  validateOnValueUpdate: false,
})
</script>

<template>
  <div
    class="relative"
    :class="[{ 'has-error': !!errorMessage, 'success': meta.valid }, grid === 100 ? 'col-span-full' : `col-span-${grid}`]"
  >
    <label :for="name" class="font-medium text-gray-900 dark:text-white mb-1">{{ label }}</label>

    <slot
      :value="inputValue" :blur="handleBlur" :change="handleChange"
      :error="errorMessage ? true : false && !meta.valid"
    />

    <p v-if="errorMessage || !meta.valid" id="email-error" class="mt-2 text-sm text-red-600">
      {{ errorMessage || successMessage }}
    </p>

    <slot name="footer" />
  </div>
</template>
