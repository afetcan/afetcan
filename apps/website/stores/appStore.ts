import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export type NotificationType = 'success' | 'info' | 'warning' | 'error'

export interface Notification {
  id: string
  title?: string
  content: string
  type?: NotificationType
}

export interface NotificationConfig {
  title?: string
  content: string
  duration?: number
  autoClose?: boolean
  type?: NotificationType
}

export interface NotificationsState {
  notifications: Notification[]
}

export const useAppStore = defineStore({
  id: 'appStore',
  state: (): NotificationsState => ({
    notifications: [],
  }),
  getters: {
    getNotifications(state) {
      return [...state.notifications].slice(0, 4)
    },
    getNotificationsCount(state): number {
      return state.notifications.length
    },
  },
  actions: {
    removeNotification(id: string) {
      this.$state.notifications = this.$state.notifications.filter(notification => notification.id !== id)
    },
    dispatchNotification({
      title,
      content,
      type,
      autoClose = true,
      duration = 3000,
    }: NotificationConfig) {
      const id = uuidv4()
      const notifications = [{
        id,
        title,
        content,
        type,
      }, ...this.$state.notifications]
      this.$state.notifications = notifications

      if (autoClose) {
        setTimeout(() => {
          this.removeNotification(id)
        }, duration)
      }
    },
  },
})
