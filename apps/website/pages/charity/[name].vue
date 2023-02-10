<script setup lang="ts">
const route = useRoute()

const getSlug = computed(() => {
  return route.params.name
})

const { data } = await useAsyncData(() => queryContent<any>('charity/turkiye').where({ slug: getSlug.value }).find())
</script>

<template>
  <NuxtLayout name="charity">
    <div class="pt-4">
      <NuxtLink to="/charity" class="bg-gray-200 p-4 rounded">
        Diğer Yardım Kuruluşları
      </NuxtLink>
    </div>
    <ContentRenderer :value="data">
      <div v-for="item in data" :key="item">
        <h1 class="text-2xl font-medium mt-10">
          {{ item.name }}
        </h1>
        {{ item.description }}
        <div v-for="banckItem in item.bank" :key="item.id">
          {{ banckItem.name }}
          {{ banckItem.description }}
        </div>
      </div>
    </ContentRenderer>
  </NuxtLayout>
</template>
