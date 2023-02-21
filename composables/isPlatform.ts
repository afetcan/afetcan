import { isPlatform } from '@ionic/vue'

export const useWhatPlatform = () => {
  const ios = isPlatform('ios')
  const android = isPlatform('android')
  const capacitor = isPlatform('capacitor')
  const electron = isPlatform('electron')
  const pwa = isPlatform('pwa')
  const cordova = isPlatform('cordova')
  const desktop = isPlatform('desktop')
  const hybrid = isPlatform('hybrid')
  const mobile = isPlatform('mobile')
  const mobileweb = isPlatform('mobileweb')
  const tablet = isPlatform('tablet')
  const runtimeConfig = useRuntimeConfig()

  const envApp = runtimeConfig.public.mobile

  const isApp = capacitor || cordova || electron || hybrid || envApp
  return {
    ios,
    android,
    capacitor,
    electron,
    pwa,
    cordova,
    desktop,
    hybrid,
    mobile,
    mobileweb,
    tablet,
    isApp,
    envApp,
  }
}
