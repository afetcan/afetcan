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
</script>

<template>
  <div class="flex justify-center items-center h-screen w-screen">
    <div class="w-full max-w-xl grid grid-cols-1 gap-6">
      <div class="text-lg">
        Seninle birlikteyiz <span class="text-2xl">🤲</span>
        İnşallah bu sürecini birlikte atlatacağız. Sana sürekli dua ediyoruz.
      </div>
      <NButton size="large" type="error" block @click="handleLocation()">
        Konum gönder (yakında)
      </NButton>
      <NButton size="large" type="error" block disabled>
        Yemek yardımı bölgeleri (yakında)
      </NButton>
      <NButton size="large" type="error" block disabled>
        İhtiyaç sahipleri (yakında)
      </NButton>
      <NButton size="large" type="error" block disabled>
        Dernek ve sivil toplum kuruluşları (yakında)
      </NButton>
      <NButton size="large" type="error" block disabled>
        Devlet kurumları ve yardım kuruluşları eft (yakında)
      </NButton>
      <NButton size="large" type="error" block disabled>
        İhtiyaç listesi (yakında)
      </NButton>
      <NButton size="large" type="error" block disabled>
        Tüm illerde yardım noktaları (yakında)
      </NButton>
      <NButton size="large" type="error" block disabled>
        Barınma yerleri (yakında)
      </NButton>
    </div>
  </div>
</template>
