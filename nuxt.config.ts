import {fileURLToPath, URL} from "node:url";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-shiki'],
  nitro: {
    plugins: ["~/server/plugins/mongodb.ts"],
  },
  css: ['@/assets/scss/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_variables.scss";'
        }
      }
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "@/assets/scss/global.scss";`
  //     }
  //   }
  // },
})