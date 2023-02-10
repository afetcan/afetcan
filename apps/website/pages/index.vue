<script setup lang="ts">
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
  <div class="flex justify-center items-center h-screen w-screen">
    <div class="w-full max-w-xl grid grid-cols-1 gap-6 p-4">
      <AtomACButton block tag="nuxt-link" to="/charity" target="_blank">
        Yardim kuruluslari
      </AtomACButton>
      <div class="text-lg">
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
        İnşallah yakında aktif olacağız.
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
</template>
