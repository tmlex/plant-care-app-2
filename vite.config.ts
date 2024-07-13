import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Vuetify from 'vite-plugin-vuetify'
import { rmSync } from 'node:fs'

// https://vitejs.dev/config/
export default defineConfig(() => {
  rmSync('auto-components.d.ts')
  rmSync('auto-imports.d.ts')
  rmSync('auto-routes.d.ts')

  return {
    plugins: [
      AutoImport({
        imports: ['vue', 'pinia'],
        dirs: ['src/composables', 'src/stores', 'src/plugins', 'src'],
        dts: './auto-imports.d.ts',
        vueTemplate: true
      }),
      Components({
        dts: './auto-components.d.ts'
      }),
      VueRouter({
        dts: './auto-routes.d.ts'
      }),
      Vue(),
      Vuetify({
        autoImport: { labs: true },
        styles: {
          configFile: 'src/styles/settings.scss'
        }
      }),
      VueDevTools()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
