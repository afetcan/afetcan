<script setup lang="ts">
const { data } = await useAsyncData(() => queryContent<any>('charity/turkiye').find())
</script>

<template>
  <NuxtLayout name="charity">
    <h1 class="text-2xl font-medium mt-10">
      Yardım kurulumları
    </h1>
    <ContentRenderer :value="data">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
        <NuxtLink v-for="item in data" :key="item" :to="`/charity/${item.slug}`" class="bg-gray-200 p-4 rounded hover:bg-gray-400">
          <div>
            {{ item.name }}
          </div>
          <div class="text-sm opacity-60 lin">
            {{ item.shortDescription }}
          </div>
        </NuxtLink>
      </div>
    </ContentRenderer>
  </NuxtLayout>
</template>
