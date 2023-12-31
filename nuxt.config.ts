// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/ionic'],
  ssr: false,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      newrelicAndroidToken: '',
      newrelicIosToken: '',
    },
  },
  experimental: {
    payloadExtraction: false,
  },
})
