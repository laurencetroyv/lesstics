import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Lesstics - Turning Single-Use Plastics into Valuable Resources",
      meta: [
        {charset: "utf-8"},
        {name: "viewport", content: "width=device-width, initial-scale=1"},
        {
          name: "description",
          content:
            "Lesstics is tackling the global challenge of single-use plastic waste by putting value back into the material.",
        },
        {name: "format-detection", content: "telephone=no"},
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
