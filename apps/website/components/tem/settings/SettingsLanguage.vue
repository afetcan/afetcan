<script lang="ts" setup>
import { availableLocales } from '~/config/i18n'
const { locale, setLocale } = useI18n()
const cookie = useCookie('language')

const selectLang = ref()

onMounted(() => {
  selectLang.value = locale.value
})

watch(selectLang, (newV, oldV) => {
  if (newV !== oldV) {
    cookie.value = locale.value
    setLocale(selectLang.value)
  }
})
</script>

<template>
  <select v-model="selectLang" class="w-32 sm:w-40 h-10 px-4 bg-gray-300 rounded-lg">
    <option v-for="item in availableLocales" :key="item.iso" class="bg-gray-200" :value="item.iso" :selected="selectLang === item.iso">
      {{ item.name }}
    </option>
  </select>
</template>
