<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { LocaleObject } from '#i18n'

const userSettings = useUserSettings()

const { locales } = useI18n() as { locales: ComputedRef<LocaleObject[]> }
</script>

<template>
  <select v-model="userSettings.language" class="w-full h-10 px-4 bg-gray-200 rounded-lg">
    <option v-for="item in locales" :key="item.code" class="bg-gray-200" :value="item.code" :selected="userSettings.language === item.code">
      {{ item.name }}
    </option>
  </select>
</template>
