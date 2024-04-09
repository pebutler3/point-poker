// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: '8888'
  },
  modules: ['@nuxtjs/supabase', '@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  supabase: {
    redirect: false
  }
})
