<script setup lang="ts">
const router = useRouter()

interface ILocation {
  latitude: number
  longitude: number
}

const data = ref({
  latitude: 0,
  longitude: 0,
  deneme: 0,
} as ILocation)

const handleLocation = () => {
  router.push('/location')
}

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
    <div class="w-full max-w-xl grid grid-cols-1 gap-6">
      <div class="text-lg">
        Bu site yakında aktif olacak. Şimdilik aşağıdaki hesapları takip edebilirsiniz. Ayrıca sadece bir özellik olmayacak. Depremle ilgili harika fikiirlerimiz var. Sizlerle paylaşmak için sabırsızlanıyoruz.

        <br>
        <br>

        Biz şuanda yazılımda ana isketli oluşturuyoruz.
        <br>
        <br>
        İnşallah yakında aktif olacağız.
      </div>
      <NButton size="large" type="success" block tag="a" href="https://twitter.com/acildepremcom" target="_blank">
        Twitter
      </NButton>
      <NButton size="large" type="success" block tag="a" href="https://github.com/acildeprem" target="_blank">
        Github Tüm Açık Kaynak Kodlar Burada
      </NButton>
      <NButton size="large" type="success" block tag="a" href="https://discord.acildeprem.com" target="_blank">
        Discord
      </NButton>
    </div>
  </div>
</template>
