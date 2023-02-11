<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
const { t } = useI18n()

const source = ref('Hello')
const { copy } = useClipboard({ source })

const route = useRoute()
const appStore = useAppStore()

const getCountry = computed(() => {
  return route.params.country
})
const copyAccount = (data: any) => {
  copy(data)
  appStore.dispatchNotification({ title: t('global.success'), content: t('global.successCopy'), type: 'success' })
}

const getSlug = computed(() => {
  return route.params.name
})

const { data } = await useAsyncData(() => queryContent<any>('charity/turkiye').where({ slug: getSlug.value }).find())
</script>

<template>
  <Teleport to="body">
    <OrgNotificationProvider />
  </Teleport>
  <NuxtLayout name="charity">
    <MainContent>
      <div class="flex flex-col w-full max-w-xl mx-auto px-4 sm:px-0">
        <div class="pt-4">
          <NuxtLink :to="`/charity/${getCountry}`" class="bg-gray-200 hover:bg-gray-400 h-10 px-4 rounded flex items-center w-full">
            <div class="icon-[ph--caret-left-bold] w-5 h-5 mr-1" />
            {{ t('charity.allCharities') }}
            <div class="icon-[ph--heart-duotone] w-5 h-5 ml-auto" />
          </NuxtLink>
        </div>

        <ContentRenderer :value="data as any">
          <div v-for="item in data" :key="item">
            <div>
              <h1 class="text-2xl font-medium mt-10">
                {{ item.name }}
              </h1>
              <span>{{ item.description }}</span>
              <div class="mt-4 opacity-60">
                Toplam banka hesap sayısı: {{ item.bank.length ? item.bank.length : 0 }}
              </div>
              <div class="grid sm:grid-cols-2 gap-4 opacity-50 hover:opacity-100">
                <a :href="item.websiteUrl" target="_blank" class="bg-gray-200 hover:bg-gray-400 h-10 px-4 rounded flex items-center w-full">
                  <div class="icon-[ph--browser-duotone] w-5 h-5 mr-1" />
                  {{ t('charity.website') }}
                  <div class="icon-[ph--link] w-5 h-5 ml-auto" />
                </a>
                <a
                  :href="item.donationUrl" target="_blank"
                  class="bg-gray-200 hover:bg-gray-400 h-10 px-4 rounded flex items-center w-full"
                >
                  <div class="icon-[ph--database-duotone] w-5 h-5 mr-1" />
                  {{ t('charity.donation') }}
                  <div class="icon-[ph--link] w-5 h-5 ml-auto" />
                </a>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-10">
              <div v-for="bankItem in item.bank" :key="bankItem.id" class="space-y-4 mb-8">
                <h3 class="mb-4 text-base font-semibold bg-gray-200 py-3 px-2">
                  {{ bankItem.name }}
                </h3>
                <button class="flex items-center hover:bg-gray-200 bg-gray-50 rounded h-10 px-4 w-full text-center justify-center" @click="copyAccount(bankItem.swift)">
                  <p>
                    <span class="font-bold">
                      SWIFT:
                    </span>
                    {{ bankItem.swift }}
                  </p>
                  <div class="icon-[ph--copy-simple-duotone] w-8 h-8 ml-auto" />
                </button>
                <button v-for="eft in bankItem.eft" :key="eft.currency" class="border w-full hover:bg-gray-200 p-2 rounded relative" @click="copyAccount(eft.account)">
                  <div class="flex flex-col  px-4 w-full">
                    <div class="flex items-center font-medium mb-2">
                      <div class="icon-[ph--bank-thin] w-5 h-5 mr-1 " />
                      {{ eft.currency }}
                    </div>
                    <div class="flex">
                      <span class="font-bold" /> {{ eft.account }}
                    </div>
                    <div class="icon-[ph--copy-simple-duotone] w-8 h-8 ml-auto absolute top-4 right-4" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </ContentRenderer>
      </div>
    </MainContent>
  </NuxtLayout>
</template>
