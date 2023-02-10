<script setup lang="ts">
const { data } = await useAsyncData(() => queryContent<any>('charity/turkiye').find())
</script>

<template>
  <ContentRenderer :value="data">
    <NuxtLink v-for="item in data" :key="item" :to="`/charity/${item.slug}`">
      {{ item.name }}
      {{ item.description }}
    </NuxtLink>
  </ContentRenderer>
</template>
