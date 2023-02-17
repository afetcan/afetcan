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
const route = useRoute()

const { getCountry } = useAppStore()
const { selectedCountry } = storeToRefs(useAppStore())
const countrySlug = computed(() => {
  if (route.name === 'app-country')
    return route.fullPath.split('/')[2]
  return ''
})

onMounted(async () => {
  await getCountry(countrySlug.value)
})
</script>

<template>
  <IonPage>
    <IonTabs>
      <Teleport to="body">
        <MonoOrgNotificationProvider />
      </Teleport>
      <IonRouterOutlet />

      <IonTabBar slot="bottom">
        <IonTabButton tab="app" href="/app/home">
          <div class="icon-[ph--gear-duotone] w-6 h-6" />
          <IonLabel>{{ t('global.home') }}</IonLabel>
        </IonTabButton>
        <IonTabButton v-if="selectedCountry" :tab="selectedCountry.slug" :href="`/app/${selectedCountry.slug}`">
          <div :class="selectedCountry.icon" class=" w-6 h-6" />
          <IonLabel>
            {{ selectedCountry.name }}
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
