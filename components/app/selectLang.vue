<script lang="ts" setup>
import { availableLocales } from '~/config/i18n'
const { locale, setLocale } = useI18n()
const cookie = useCookie('language')

const selectLang = ref()

onMounted(() => {
  selectLang.value = locale.value
  console.log('selectLang.value', selectLang.value)
})

watch(selectLang, (newV, oldV) => {
  if (newV !== oldV) {
    cookie.value = locale.value
    setLocale(selectLang.value)
  }
})
// const getFlag = computed(() => {
//   return availableLocales[locale.value].flag
// })
</script>

<template>
  <!-- <div class="flex items-center bg-gray-200 p-4">
    <div v-if="selectLang" :class="getFlag" class="w-8 h-8 mr-2" />
    <select v-model="selectLang" class="w-full h-10 px-4 bg-gray-400 rounded-lg">
      <option
        v-for="item in availableLocales" :key="item.iso" class="bg-gray-200" :value="item.iso"
        :selected="selectLang === item.iso"
      >
        {{ item.name }}
      </option>
    </select>
  </div> -->
  <div class="space-y-2">
    <button
      v-for="item in availableLocales"
      :key="item.iso"
      class="w-full transition-transform active:scale-90 flex items-center justify-between from-white p-4 rounded-md"
      :class="selectLang === item.iso && 'ring-1 ring-offset-2 ring-offset-gray-100 ring-emerald-400/50 bg-emerald-500 text-white'"
      @click="selectLang = item.iso"
    >
      <div class="flex items-center">
        <div v-if="selectLang" :class="item.flag" class="w-7 h-7 mr-4" />
        <div>
          <h6 class="text-left m-0 text-['inherit']">
            {{ item.name }}
          </h6>
          <p class="whitespace-nowrap truncate font-medium w-56 text-sm opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            mollitia delectus cumque molestiae reprehenderit, laborum possimus ad
            sequi. Maiores, ea.
          </p>
        </div>
      </div>
      <div class="icon-[ph--arrow-right-duotone] opacity-50 text-xl" />
    </button>
  </div>
</template>
