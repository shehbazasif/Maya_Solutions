<script setup lang="ts">
import { ref } from "vue";

// SEO
useSeoMeta({
  title: "Industry Sectors",
  description:
    "Maya Solutions serves diverse sectors including construction & infrastructure, industrial manufacturing, government, utilities & energy, and commercial real estate.",
  keywords:
    "sectors, industries, construction, industrial, government, utilities, energy, commercial real estate, infrastructure",
  ogTitle: "Industry Sectors Served | Maya Solutions",
  ogDescription:
    "Expertise across construction, industrial, government, and commercial sectors.",
  ogImage: "/images/og-sectors.jpg",
});

useHead({
  link: [{ rel: "canonical", href: "https://www.mayassc.com/sectors" }],
});

const hoveredSector = ref<number | null>(null);

const sectors = [
  {
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>`,
    title: "Construction & Infrastructure",
    description:
      "Site support, finishing works, and fit-out coordination for large-scale projects",
    services: ["Construction Site Support", "Finishing Works", "Civil Works"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
    </svg>`,
    title: "Industrial & Manufacturing",
    description:
      "FM services, environmental compliance, and waste management for industrial facilities",
    services: [
      "Facilities Management",
      "Environmental Compliance",
      "Waste Management",
    ],
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
    </svg>`,
    title: "Government & Public Sector",
    description:
      "Integrated solutions for public infrastructure and municipal projects",
    services: ["Site Support", "Landscaping", "Sustainability Solutions"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>`,
    title: "Utilities & Energy",
    description:
      "Utilities support, compliance monitoring, and sustainable energy solutions",
    services: ["Utilities Support", "Environmental Monitoring", "Compliance"],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
    </svg>`,
    title: "Commercial & Real Estate",
    description:
      "FM, landscaping, and finishing works for commercial developments",
    services: ["Facilities Management", "Landscaping", "Finishing Works"],
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
    title: "Events & Temporary Sites",
    description:
      "Rapid mobilization for events, temporary facilities, and short-term projects",
    services: ["Site Setup", "Utilities", "Waste Management"],
    gradient: "from-pink-500 to-rose-500",
  },
];
</script>

<template>
  <section
    class="relative py-20 px-5 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/20"
  >
    <!-- Background Decorations -->
    <div
      class="absolute top-20 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
    ></div>

    <div class="relative max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <div
          class="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-5 py-2 rounded-full mb-6 shadow-lg"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="font-bold text-xs uppercase tracking-widest"
            >Industries</span
          >
        </div>

        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
        >
          <span class="text-slate-900">Sectors We</span>
          <span
            class="block bg-gradient-to-r from-emerald-600 via-blue-600 to-green-600 bg-clip-text text-transparent"
          >
            Serve & Support
          </span>
        </h1>

        <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We tailor our construction support, FM, landscaping, environmental
          compliance, and sustainability services to the specific needs of each
          sector.
        </p>
      </div>

      <!-- Sectors Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div
          v-for="(sector, index) in sectors"
          :key="sector.title"
          class="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-slate-200 transition-all duration-500 hover:border-emerald-300 hover:shadow-2xl hover:-translate-y-2"
          @mouseenter="hoveredSector = index"
          @mouseleave="hoveredSector = null"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Gradient Background on Hover -->
          <div
            :class="[
              'absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500',
              sector.gradient,
            ]"
          ></div>

          <!-- Icon -->
          <div
            :class="[
              'relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br text-white flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6',
              sector.gradient,
            ]"
            v-html="sector.icon"
          ></div>

          <!-- Content -->
          <div class="relative">
            <h3
              class="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300"
            >
              {{ sector.title }}
            </h3>

            <p class="text-sm text-slate-600 leading-relaxed mb-4">
              {{ sector.description }}
            </p>

            <!-- Services Tags -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="service in sector.services"
                :key="service"
                class="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200 transition-all duration-300 group-hover:bg-emerald-50 group-hover:border-emerald-300 group-hover:text-emerald-700"
              >
                {{ service }}
              </span>
            </div>
          </div>

          <!-- Corner Accent -->
          <div
            class="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-slate-200 rounded-tr-2xl group-hover:border-emerald-400 transition-colors duration-300"
          ></div>
        </div>
      </div>

      <!-- Service Capabilities -->
      <div
        class="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border-2 border-slate-200 shadow-xl"
      >
        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Our Cross-Sector Capabilities
          </h2>
          <p class="text-slate-600 max-w-3xl mx-auto">
            Comprehensive services delivered across all sectors with proven
            expertise
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div
            class="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div
              class="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl flex items-center justify-center"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h4 class="font-bold text-slate-900 mb-2">Construction Support</h4>
            <p class="text-xs text-slate-600">Site finishing & fit-out works</p>
          </div>

          <div
            class="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border-2 border-emerald-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div
              class="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-green-500 text-white rounded-xl flex items-center justify-center"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h4 class="font-bold text-slate-900 mb-2">Facilities Management</h4>
            <p class="text-xs text-slate-600">Hard & soft FM services</p>
          </div>

          <div
            class="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div
              class="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl flex items-center justify-center"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 class="font-bold text-slate-900 mb-2">Landscaping</h4>
            <p class="text-xs text-slate-600">External works & green spaces</p>
          </div>

          <div
            class="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div
              class="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h4 class="font-bold text-slate-900 mb-2">
              Environmental Compliance
            </h4>
            <p class="text-xs text-slate-600">Monitoring & reporting</p>
          </div>

          <div
            class="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border-2 border-purple-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div
              class="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-xl flex items-center justify-center"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h4 class="font-bold text-slate-900 mb-2">Sustainable Solutions</h4>
            <p class="text-xs text-slate-600">ESG & green certifications</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.group {
  animation: fade-in-up 0.6s ease-out both;
}
</style>
