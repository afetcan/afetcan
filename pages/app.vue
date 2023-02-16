<script setup lang="ts">
const {
  toggle,
  toggleBubbleVisibility,
} = useChatWoot()

onMounted(() => {
  toggleBubbleVisibility('hide')
})
definePageMeta({
  ionic: true,
  where: 'capacitor',
  middleware: ['app'],
})
const { t } = useI18n()
const router = useRouter()
const route = useRoute()

const { getCountry } = useAppStore()

const countrySlug = computed(() => {
  if (route.name === 'app-country')
    return route.fullPath.split('/')[2]
  return ''
})

const selectCountry = ref()

onMounted(async () => {
  const data = await getCountry(countrySlug.value)
  selectCountry.value = data
})
// onMounted(() => {
//   setTimeout(() => {
//     if (route.name === 'app')
//       router.replace('/app/home')
//   }, 300)
// })
</script>

<template>
  <IonPage>
    <IonTabs>
      <Teleport to="body">
        <MonoOrgNotificationProvider />
      </Teleport>
      <IonRouterOutlet />
      <IonTabBar slot="bottom">
        <IonTabButton v-if="selectCountry" tab="home" :href="`/app/${selectCountry.slug}`">
          <div :class="selectCountry.icon" class=" w-6 h-6" />
          <IonLabel>
            {{ selectCountry.name }}
          </IonLabel>
        </IonTabButton>

        <IonTabButton tab="setting" href="/app/setting">
          <div class="icon-[ph--gear-duotone] w-6 h-6" />
          <IonLabel>{{ t('global.settings') }}</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>
</template>
