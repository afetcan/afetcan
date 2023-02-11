<script setup lang="ts">
const {
  isModalVisible,
  toggle,
  toggleBubbleVisibility,
  popoutChatWindow,

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
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="w-full max-w-xl grid grid-cols-1 gap-6 p-4">
      <div class="flex items-center justify-center">
        <MolLogo class="h-14 w-44" />
      </div>
      <div class="grid grid-cols-1 gap-10">
        <button class="h-20 flex items-center bg-red-600 hover:bg-red-800 text-white rounded text-2xl" to="/charity" @click="toggle('open')">
          <span class="p-4">
            Acil Yardım Edin
          </span>
        </button>
        <NuxtLink class="h-20 flex items-center bg-green-600 hover:bg-green-800 text-white rounded text-2xl" to="/charity">
          <span class="p-4">
            Yardım kuruluşları
          </span>
        </NuxtLink>

        <NuxtLink class="h-20 flex items-center bg-gray-200 text-gray-700 rounded text-2xl" to="#">
          <span class="p-4">
            ... soon new features
          </span>
        </NuxtLink>
      </div>
      <div class="my-20 grid grid-cols-1 gap-6">
        <div class="text-base ">
          Acil yardım gerektiren insanların yanında olmak ve onlara destek olmak, hepimizin ortak amaçlarından
          biridir. Deprem
          gibi afet durumları, insanların hayatlarını ve evlerini kökten değiştirebilir. Bu nedenle, depremin
          olduğu yerde bulunan
          insanlara yardım etmek, hem bugün hem de gelecekte onların hayatını kolaylaştırmak için önemlidir.
          <br>
          <br>
          İnsanların yardım için bir bu platform olarak kullanılabilecektir. Şimdilik
          sosyal medya, Github ve Discord hesaplarınızı takip etmek mümkün olsa da, yakın zamanda açacağımız
          internet sitesi, daha da fazla insana
          ulaşmanıza ve yardım konularını daha detaylı şekilde ele almanıza imkan verecektir.
          <br>
          <br>
          Sizin gibi insanlar, depremzedeler için fazlasıyla yardım etmeyi amaçlayan kuruluşlar, toplumun geleceği
          açısından önem
          taşır. Bu amaçla hareket eden pek çok insan ve kuruluşun bir araya gelerek, depremzedelerin
          yardımına koşmasına katkı sağlayacağız.
          <br>
          <br>
          Acil Destek Takımı

          <p class="mt-8">
            Acil Destek open source bir proje olduğu için, herkesin katkıda bulunmasını ve geliştirmesini istiyoruz. Bu proje
            sadece
            Türkiye'de değil, dünyanın her yerinde depremzedeler için yardım toplayan herkes için kullanılabilir.
          </p>
        </div>
        <AtomACButton block tag="a" href="https://twitter.com/acildepremcom" target="_blank">
          Twitter
        </AtomACButton>
        <AtomACButton block tag="a" href="https://github.com/acildeprem" target="_blank">
          Github Tüm Açık Kaynak Kodlar Burada
        </AtomACButton>
        <AtomACButton block tag="a" href="https://discord.acildeprem.com" target="_blank">
          Discord
        </AtomACButton>
      </div>
    </div>
  </div>
</template>
