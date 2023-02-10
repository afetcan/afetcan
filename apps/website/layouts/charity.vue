<template>
  <div class="max-w-xl mx-auto py-4 px-4 md:px-0">
    <div class="space-x-4 m-5">
      <NuxtLink class="bg-gray-200 p-4 rounded" to="/">
        Anasayfa
      </NuxtLink>
    </div>
    <slot />

    <div class="mt-20 text-sm text-gray-600">
      <p class="text-sm mb-10">
        Bu sayfadaki verileri kurum ve kuruluşların sitelerinden alıyoruz. Taraf gözetmeksizin, tüm yardım toplayan devlet
        tarafından denetlenen kuruluşları listeliyoruz. Eğer bir kurumun verileri eksik, yanlış yada eklenmemesi
        gerektiğini,
        lütfen bizimle iletişime geçin. Devlet tarafında iletişime tarafımızla iletişime geçilirse ve değişiklik talep
        edilirse derhal
        gerekliliklerin yerine getirilecektir.
      </p>
      <p>
        Acil Destek open source bir proje olduğu için, herkesin katkıda bulunmasını ve geliştirmesini istiyoruz. Bu proje sadece
        Türkiye'de değil, dünyanın her yerinde depremzedeler için yardım toplayan herkes için kullanılabilir.
      </p>
      <div class="mt-8 grid grid-cols-3 gap-6">
        <a href="https://twitter.com/acildepremcom" class="bg-gray-200 rounded p-2" target="_blank">
          Github
        </a>
        <a href="https://twitter.com/acildepremcom" class="bg-gray-200 rounded p-2" target="_blank">
          Twitter
        </a>
      </div>
    </div>
  </div>
</template>
