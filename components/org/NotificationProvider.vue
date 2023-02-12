<script setup lang="ts">
const state = useAppStore()
</script>

<template>
  <div class="fixed inset-0 flex items-start justify-end px-4 py-6 sm:p-6 pointer-events-none">
    <div class="max-w-sm w-full">
      <TransitionGroup
        appear tag="div"
        :enter-active-class="state.getNotificationsCount > 1 ? 'transform ease-out delay-300 duration-300 transition' : 'transform ease-out duration-300 transition'"
        enter-from-class="translate-x-4 opacity-0" enter-to-class="translate-x-0 opacity-100"
        leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
        leave-to-class="opacity-0" move-class="transition ease-in-out duration-500"
      >
        <MolNotification
          v-for="(notification, idx) in state.getNotifications" :key="notification.id" :notification="notification"
          :class="idx > 0 ? 'mt-4' : ''"
        />
      </TransitionGroup>
    </div>
  </div>
  <slot />
</template>

<style scoped>
.delay-300 {
    transition-delay: 300ms;
}
</style>
