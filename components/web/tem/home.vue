<script setup lang="ts">
defineProps({
  app: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const {
  toggle,
  toggleBubbleVisibility,
} = useChatWoot()

onMounted(() => {
  toggleBubbleVisibility('hide')
})
useHead({
  title: 'Acil Deprem',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Acil deprem deprem bilgilerini toplayıp anlandırıp yetkilelerle paylaşan bir site.',
    },
  ],
})
const { t } = useI18n()

const selectCountry = ref(false)
</script>

<template>
  <div v-if="selectCountry" class="grid grid-cols-1 gap-6 p-4">
    <div class="my-20 grid grid-cols-1 gap-6">
      <div class="text-base ">
        <div v-html="t('home.description')" />

        <p class="mt-8">
          {{ t('home.description2') }}
        </p>
      </div>
      <MonoAtomACButton block tag="a" href="https://twitter.com/acildepremcom" target="_blank">
        Twitter
      </MonoAtomACButton>
      <MonoAtomACButton block tag="a" href="https://github.com/acildeprem" target="_blank">
        Github
      </MonoAtomACButton>
      <MonoAtomACButton block tag="a" href="https://discord.acildeprem.com" target="_blank">
        Discord
      </MonoAtomACButton>
      <MonoAtomACButton block tag="a" href="https://www.instagram.com/acildepremcom/" target="_blank">
        Instagram
      </MonoAtomACButton>
    </div>
  </div>
  <div v-else class="mt-4">
    <p>
      Lütfen devam etmek için ülkenizi seçin. Ulke seçimi sadece bir kez yapılabilir. Daha sonra değiştirmek için ayarlar sayfasından yapabilirsiniz.
    </p>
    <LazyWebTemSelectCountry />
  </div>
</template>
