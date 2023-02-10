<script setup lang="ts">
const route = useRoute()

const getSlug = computed(() => {
  return route.params.name
})

const { data } = await useAsyncData(() => queryContent<any>('charity/turkiye').where({ slug: getSlug.value }).find())
</script>

<template>
  <ContentRenderer :value="data">
    <div v-for="item in data" :key="item">
      {{ item.name }}
      {{ item.description }}
      <div v-for="banckItem in item.bank" :key="item.id">
        {{ banckItem.name }}
        {{ banckItem.description }}
      </div>
    </div>
  </ContentRenderer>
</template>
