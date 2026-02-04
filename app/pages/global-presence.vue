<script setup lang="ts">
import { ref } from 'vue'

const activeLocation = ref<number | null>(null)

const locations = [
  {
    country: "Saudi Arabia",
    flag: "🇸🇦",
    city: "Riyadh",
    badge: "Operational Hub",
    description: "Core base for construction site support, finishing works, FM utilities, landscaping, environmental compliance, and sustainable solutions across major infrastructure projects.",
    gradient: "from-emerald-500 to-green-500",
    services: [
      "Construction Site Support & Finishing Works",
      "Facilities Management & Utilities",
      "Landscaping & External Works",
      "Environmental Compliance & Monitoring",
      "Waste Management Solutions"
    ]
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    city: "London",
    badge: "European Operations",
    description: "Supporting UK and European projects with environmental compliance, sustainability advisory, and FM partnerships.",
    gradient: "from-blue-500 to-cyan-500",
    services: [
      "Environmental & Sustainability Consulting",
      "ESG Advisory & Reporting",
      "Facilities Management Partnerships",
      "UK EPA Compliance Support",
      "Green Building Certifications"
    ]
  },
  {
    country: "United States",
    flag: "🇺🇸",
    city: "Texas",
    badge: "Americas Hub",
    description: "Delivering business consulting, environmental compliance, and technical services across select US regions.",
    gradient: "from-orange-500 to-red-500",
    services: [
      "Business & Sustainability Consulting",
      "US EPA Environmental Compliance",
      "Equipment & Technical Services",
      "Construction Support Solutions",
      "Sustainability Strategy"
    ]
  }
]
</script>

<template>
  <section class="relative py-20 px-5 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
    <!-- Background Elements -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-full blur-3xl"></div>
    
    <!-- World Map Pattern (Optional) -->
    <div class="absolute inset-0 opacity-[0.02]">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 40px 40px;"></div>
    </div>

    <div class="relative max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-5 py-2 rounded-full mb-6 shadow-lg">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"/>
          </svg>
          <span class="font-bold text-xs uppercase tracking-widest">Global Presence</span>
        </div>
        
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
          <span class="text-slate-900">Local Delivery,</span>
          <span class="block bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-600 bg-clip-text text-transparent">
            International Perspective
          </span>
        </h1>
        
        <p class="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
          MaYa operates from Saudi Arabia with registered entities in the UK and USA, combining international expertise with strong local regulatory understanding across construction, FM, landscaping, and environmental services.
        </p>
      </div>

      <!-- Location Cards -->
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(location, index) in locations" 
          :key="location.country"
          class="group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-slate-200 transition-all duration-500 hover:border-emerald-300 hover:shadow-2xl hover:-translate-y-2"
          @mouseenter="activeLocation = index"
          @mouseleave="activeLocation = null"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          <!-- Gradient Overlay -->
          <div :class="['absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500', location.gradient]"></div>
          
          <!-- Header with Flag -->
          <div class="relative p-6 pb-4">
            <div class="flex items-start justify-between mb-4">
              <div class="text-6xl">{{ location.flag }}</div>
              <div :class="['px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r', location.gradient]">
                {{ location.badge }}
              </div>
            </div>
            
            <h2 class="text-2xl font-black text-slate-900 mb-1">
              {{ location.country }}
            </h2>
            <p class="text-sm font-bold text-emerald-600 uppercase tracking-wide flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              {{ location.city }}
            </p>
          </div>

          <!-- Description -->
          <div class="relative px-6 pb-4">
            <p class="text-sm text-slate-600 leading-relaxed">
              {{ location.description }}
            </p>
          </div>

          <!-- Services List -->
          <div class="relative px-6 pb-6">
            <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wide mb-3">Key Services:</h3>
            <ul class="space-y-2">
              <li 
                v-for="service in location.services" 
                :key="service"
                class="flex items-start gap-2 text-sm text-slate-700 transition-all duration-300 group-hover:translate-x-1"
              >
                <div :class="['flex-shrink-0 w-1 h-1 mt-2 rounded-full bg-gradient-to-r', location.gradient]"></div>
                <span>{{ service }}</span>
              </li>
            </ul>
          </div>

          <!-- Bottom Accent -->
          <div :class="['absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r transition-all duration-500 group-hover:h-2', location.gradient]"></div>
        </div>
      </div>

      <!-- Global Stats -->
      <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border-2 border-slate-200 shadow-xl">
        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Global Reach, Local Expertise
          </h2>
          <p class="text-slate-600 max-w-3xl mx-auto">
            Operating across three continents with comprehensive construction support and environmental services
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border-2 border-emerald-200">
            <div class="text-4xl font-black bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">
              3
            </div>
            <p class="text-sm font-bold text-slate-900">Countries</p>
            <p class="text-xs text-slate-600 mt-1">Active Operations</p>
          </div>

          <div class="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200">
            <div class="text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <p class="text-sm font-bold text-slate-900">Core Services</p>
            <p class="text-xs text-slate-600 mt-1">Integrated Solutions</p>
          </div>

          <div class="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-200">
            <div class="text-4xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
              3
            </div>
            <p class="text-sm font-bold text-slate-900">Regulatory Systems</p>
            <p class="text-xs text-slate-600 mt-1">NCEC, EPA UK, EPA US</p>
          </div>

          <div class="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border-2 border-purple-200">
            <div class="text-4xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <p class="text-sm font-bold text-slate-900">Industry Sectors</p>
            <p class="text-xs text-slate-600 mt-1">Diverse Portfolio</p>
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
    transform: translateY(30px);
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