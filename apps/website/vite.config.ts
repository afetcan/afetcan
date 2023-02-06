import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import {
  HeadlessUiResolver,
  IonicResolver,
  NaiveUiResolver,
} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      directoryAsNamespace: true,
      dts: 'src/components.d.ts',
      resolvers: [
        HeadlessUiResolver(),
        NaiveUiResolver(),
        IonicResolver(),
      ],
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        '@vueuse/core',
        'vee-validate',
        'pinia',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
      dirs: [
        './src/composables/',
        './src/stores/',
      ],
      dts: './src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
      vueTemplate: true,
    }),
  ],
})
