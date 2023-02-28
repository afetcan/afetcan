<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
    variant?: 'primary' | 'secondary' | 'constract'
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
    fullWidth?: boolean
  }>(),
  {
    fullWidth: false,
    disabled: false,
    loading: false,
    size: 'md',
    variant: 'primary',
    type: 'button',
  },
)
const emit = defineEmits(['click'])
const button = ref<HTMLElement | null>(null)
const disabled = ref(props.disabled)

const focus = () => button.value?.focus()

async function onClick(e: MouseEvent) {
  if (props.loading || props.disabled)
    return
  emit('click', e)
}

defineExpose({
  focus,
})
</script>

<template>
  <button
    ref="button"
    class="button" :class="[size, variant, { 'w-full min-w-full': fullWidth }]"
    :disabled="disabled || loading"
    :type="type"
    @click="onClick"
  >
    <div v-if="loading" class="icon-[svg-spinners--180-ring-with-bg]" />
    <slot v-else />
  </button>
</template>

  <style lang="postcss" scoped>
  .button {
    @apply inline-flex items-center justify-center rounded-md border border-transparent font-semibold transition-all outline-none focus:ring-offset-white focus:ring-2 focus:ring-offset-2 active:scale-90 disabled:cursor-not-allowed disabled:opacity-75 disabled:active:scale-100;

    &.sm {
      @apply px-2.5 py-2 text-xs;
    }

    &.md {
      @apply px-3 py-2.5 text-sm;
    }

    &.lg {
      @apply px-4 py-2.5 text-sm;
    }

    &.primary {
      @apply bg-blue-500 text-white shadow-sm hover:opacity-80 focus:ring-blue-500;
    }

    &.secondary {
      @apply bg-blue-500/20 text-white/80 shadow-sm hover:bg-blue-500/30 focus:ring-blue-500/20;
    }

    &.constract {
      @apply border border-black/10 bg-white/20 text-white shadow-sm hover:opacity-80 focus:ring-black/10;
    }
  }
  </style>
