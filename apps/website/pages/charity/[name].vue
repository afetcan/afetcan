<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const source = ref('Hello')
const { text, copy, copied, isSupported } = useClipboard({ source })

const route = useRoute()
const appStore = useAppStore()

const copyAccount = (data: any, notification?: Notification) => {
  copy(data)
  appStore.dispatchNotification({ title: 'Success!', content: 'Your action was successfully submitted', type: 'success' })
}

const getSlug = computed(() => {
  return route.params.name
})

const { data } = await useAsyncData(() => queryContent<any>('charity/turkiye').where({ slug: getSlug.value }).find())
</script>

<template>
  <NuxtLayout name="charity">
    <div class="pt-4">
      <NuxtLink to="/charity" class="bg-gray-200 h-10 px-4 rounded flex items-center w-full">
        <div class="icon-[ph--caret-left-bold] w-5 h-5 mr-1" />
        Diğer Yardım Kuruluşları
        <div class="icon-[ph--heart-duotone] w-5 h-5 ml-auto" />
      </NuxtLink>
    </div>

    <ContentRenderer :value="data as any">
      <div v-for="item in data" :key="item">
        <h1 class="text-2xl font-medium mt-10">
          {{ item.name }}
        </h1>
        {{ item.description }}
        <div class="grid grid-cols-1 gap-6">
          <div v-for="bankItem in item.bank" :key="bankItem.id" class="space-y-4">
            <h3 class="mb-4 text-base font-semibold">
              {{ bankItem.name }}
            </h3>
            <div v-for="eft in bankItem.eft" :key="eft.currency" class="divide divide-y-2 p-2 rounded">
              <div class="flex items-center font-medium">
                <div class="icon-[ph--bank-thin] w-5 h-5 mr-1 " />
                {{ eft.currency }}
              </div>
              {{ eft.account }}
              <div class="grid grid-cols-2 gap-2 mt-4">
                <button>
                  Paylaş
                </button>
                <OrgNotificationProvider>
                  <button class="bg-gray-200 h-10" @click="copyAccount(eft.account)">
                    Kopyala
                  </button>
                </OrgNotificationProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentRenderer>
  </NuxtLayout>
</template>
