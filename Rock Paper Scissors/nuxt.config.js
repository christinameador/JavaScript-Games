const pkg = require("./package");

module.exports = {
  mode: "spa",

  /*
   ** Headers of the page
   */
  head: {
    title: "Rock, Paper, Scissors",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [
    "~/assets/variables.css",
    "~/assets/utilities.css",
    "~/assets/baseline.css"
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ["nuxt-webfontloader"],
  webfontloader: {
    google: {
      families: ["Barlow Semi Condensed:600,700"]
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
