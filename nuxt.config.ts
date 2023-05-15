// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //   app: {
  //     pageTransition: { name: "page", mode: "out-in" },
  //   },

  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap",
          crossorigin: "",
        },
      ],
    },
  },
});
