export default defineNuxtConfig({
  devtools: { enabled: true },
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
})