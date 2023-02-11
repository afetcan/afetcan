<script setup lang="ts">
export type NotificationType = 'success' | 'info' | 'warning' | 'error'

export interface Notification {
  id: string
  title?: string
  content: string
  type?: NotificationType
}

defineProps<{
  notification: Notification
}>()
const { removeNotification } = useAppStore()
const closeNotification = (id: string) => {
  removeNotification(id)
}
</script>

<template>
  <div class="bg-white shadow shadow-gray-200 rounded-lg pointer-events-auto">
    <div class="rounded-lg overflow-hidden">
      <div class="p-4">
        <div class="flex items-start">
          <div v-if="notification.type" class="flex-shrink-0">
            <div v-if="notification.type === 'success'" class="icon-[ph--check-bold] w-8 h-8 text-green-500" />
            <div v-else-if="notification.type === 'info'" class="icon-[ph--info-duotone] w-8 h-8 text-blue-500" />
            <div v-else-if="notification.type === 'warning'" class="icon-[ph--warning-duotone] w-8 h-8 text-yellow-500" />
            <div v-else-if="notification.type === 'error'" class="icon-[ph--x-circle-duotone] w-8 h-8 text-red-500" />
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p v-if="notification.title" class="text-sm leading-5 font-medium text-gray-900">
              {{ notification.title }}
            </p>
            <p :class="`${notification.title ? 'mt-1' : ''} text-sm leading-5 text-gray-500`">
              {{ notification.content }}
            </p>
          </div>
          <div class="ml-4 flex-shrink-0 flex">
            <button
              class="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition-all ease-in-out duration-150"
              @click="() => closeNotification(notification.id)"
            >
              <div class="icon-[ph--x-circle-duotone] w-10 h-10 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
