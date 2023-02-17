import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import type { Country } from '~~/types'

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
  countries: Country[]
  selectedCountry: Country
}

export const useAppStore = defineStore({
  id: 'appStore',
  state: (): NotificationsState => ({
    notifications: [],
    countries: [],
    selectedCountry: {} as Country,
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
    async getCountries() {
      const { data } = await useAsyncData(() => queryContent<any>('charity/country').findOne())
      return data
    },
    async changeCountry(slug: string) {
      let data = {} as Country
      await this.getCountries().then((countries) => {
        this.selectedCountry = countries.value.data.find((country: Country) => country.slug === slug)
        data = this.selectedCountry as Country
      })
      localStorage.setItem('selectedCountry', JSON.stringify(data))
      return data
    },
    async getSelectedCountry() {
      const selectedCountry = localStorage.getItem('selectedCountry')
      if (selectedCountry)
        this.selectedCountry = JSON.parse(selectedCountry)

      return this.selectedCountry
    },
  },
})
