import type { CapacitorConfig } from '@capacitor/cli'

import dotenv from 'dotenv'
import getMyIP from './utils/myIP'

const env = () => {
  const env = process.env.STATUS
  if (env === 'staging')
    return 'staging'
  if (env === 'production')
    return 'production'
  if (env === 'development')
    return 'dev'
  return 'dev'
}
dotenv.config({
  path: `.env.${env()}`,
})

const config: CapacitorConfig = {
  appId: 'com.acildeprem.app',
  appName: 'acildeprem',
  webDir: '.output/public',
  bundledWebRuntime: false,
}

const ip = getMyIP()

if (process.env.VITE_HOST_IP_LIVE_CAPACITOR) {
  console.log('API_ADDRESS', ip)
  // Uncomment this to enable live-reload.
  // For Android, need to run `adb reverse tcp:4000 tcp:4000` to port-forward the Frontend server to the emulator.
  //
  config.server = {
    url: `http://${process.env.VITE_HOST_IP_LIVE_CAPACITOR}:${process.env.VITE_LIVE_PORT}`,
    cleartext: true,
  }
}

export default config
