// nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,

  devServer: {
    port: 3005,
  },

  // Global app head configuration
  app: {
    head: {
      title: "Maya Solutions - Construction & FM Services",
      titleTemplate: "%s | Maya Solutions",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Maya Solutions provides expert site support, facilities management, landscaping, and environmental compliance services across construction and infrastructure projects.",
        },
        {
          name: "keywords",
          content:
            "construction services, facilities management, site support, landscaping, environmental compliance, FM services, finishing works",
        },
        { name: "author", content: "Maya Solutions" },
        { name: "robots", content: "index, follow" },
        { property: "og:site_name", content: "Maya Solutions" },
        {
          property: "og:description",
          content:
            "Expert construction site support, FM services, and environmental compliance solutions.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://www.mayassc.com" },
      ],
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "@hypernym/nuxt-anime",
    "@nuxtjs/sitemap",
    "@nuxt/image",
  ],

  // Sitemap configuration
  sitemap: {
    urls: [
      {
        loc: "/",
        changefreq: "weekly",
        priority: 1.0,
      },
      {
        loc: "/services",
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: "/sectors",
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: "/who-we-are",
        changefreq: "monthly",
        priority: 0.8,
      },
      {
        loc: "/global-presence",
        changefreq: "monthly",
        priority: 0.8,
      },
      {
        loc: "/contact",
        changefreq: "monthly",
        priority: 0.8,
      },
      {
        loc: "/privacy",
        changefreq: "yearly",
        priority: 0.5,
      },
      {
        loc: "/cookies",
        changefreq: "yearly",
        priority: 0.5,
      },
      {
        loc: "/terms",
        changefreq: "yearly",
        priority: 0.5,
      },
    ],
    credits: false,
  },
});
