<script setup lang="ts">
import { ref, onMounted } from 'vue'

const activeTab = ref(0)

// Load Google Fonts
onMounted(() => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap'
  link.rel = 'stylesheet'
  document.head.appendChild(link)
})

const capabilities = [
  {
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>`,
    title: "Construction Site Support",
    description: "Expert finishing works and fit-out coordination"
  },
  {
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>`,
    title: "Facilities Management",
    description: "Hard and soft FM services with utilities support"
  },
  {
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
    title: "Landscaping Solutions",
    description: "Soft and hard landscaping with external works"
  },
  {
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>`,
    title: "Environmental Compliance",
    description: "Full regulatory compliance and monitoring"
  },
  {
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
    </svg>`,
    title: "Sustainable Solutions",
    description: "ESG advisory and green building certifications"
  }
]
</script>

<template>
  <section class="relative py-20 px-5 overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30"></div>
    <div class="absolute top-20 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

    <div class="relative max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-5 py-2 rounded-full mb-6 shadow-lg">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
          </svg>
          <span class="font-bold text-xs uppercase tracking-widest">Who We Are</span>
        </div>
        
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-title">
          <span class="text-slate-900">Your Partner for</span>
          <br>
          <span class="bg-gradient-to-r from-emerald-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
            Integrated Construction Solutions
          </span>
        </h1>
        
        <p class="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
          MaYa delivers comprehensive construction support, facilities management, and environmental services across the complete project lifecycle.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12 mb-16">
        
        <!-- Left Column - About -->
        <div class="space-y-6">
          <div class="about-card">
            <div class="card-header">
              <h2 class="card-title">Our Expertise</h2>
              <div class="title-line"></div>
            </div>
            
            <div class="space-y-4 text-slate-700 leading-relaxed font-normal">
              <p>
                MaYa Sustainable Solutions is an international consulting and services firm specializing in <strong class="text-slate-900 font-semibold">Construction Site Support</strong>, <strong class="text-slate-900 font-semibold">Facilities Management</strong>, <strong class="text-slate-900 font-semibold">Landscaping</strong>, <strong class="text-slate-900 font-semibold">Environmental Compliance</strong>, and <strong class="text-slate-900 font-semibold">Sustainable Solutions</strong>.
              </p>
              
              <p>
                With a strong presence in <strong class="text-emerald-700 font-semibold">Saudi Arabia</strong> and registered entities in the <strong class="text-emerald-700 font-semibold">UK</strong> and <strong class="text-emerald-700 font-semibold">USA</strong>, we combine local regulatory knowledge with global best practice to deliver dependable, compliant, and efficient outcomes.
              </p>
              
              <p>
                Our teams bring hands-on experience supporting complex construction, infrastructure, industrial, and public-sector projects – from early-stage planning through to operations and optimization.
              </p>
            </div>

            <!-- Stats -->
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-value">3+</div>
                <div class="stat-label">Countries</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">5+</div>
                <div class="stat-label">Core Services</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">10+</div>
                <div class="stat-label">Sectors Served</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Why Choose Us -->
        <div class="space-y-6">
          <div class="why-choose-card">
            <div class="card-header">
              <h2 class="card-title">Why Organizations Choose MaYa</h2>
              <div class="title-line"></div>
            </div>

            <ul class="space-y-4">
              <li class="reason-item">
                <div class="reason-icon">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <p class="reason-title">Integrated Service Delivery</p>
                  <p class="reason-text">Construction support, FM, landscaping, environmental compliance, and sustainability through a single partner</p>
                </div>
              </li>

              <li class="reason-item">
                <div class="reason-icon">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <p class="reason-title">Multi-Jurisdictional Expertise</p>
                  <p class="reason-text">Deep understanding of Saudi NCEC, UK EPA, and US EPA regulatory requirements</p>
                </div>
              </li>

              <li class="reason-item">
                <div class="reason-icon">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <p class="reason-title">Hands-On Project Experience</p>
                  <p class="reason-text">Technical specialists with proven delivery across construction, industrial, and infrastructure sectors</p>
                </div>
              </li>

              <li class="reason-item">
                <div class="reason-icon">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <p class="reason-title">Practical Implementation Focus</p>
                  <p class="reason-text">Commitment to actionable solutions – not just reports. We execute, coordinate, and deliver.</p>
                </div>
              </li>

              <li class="reason-item">
                <div class="reason-icon">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <p class="reason-title">Measurable ESG Performance</p>
                  <p class="reason-text">Focus on quantifiable environmental and sustainability outcomes aligned with your organizational goals</p>
                </div>
              </li>
            </ul>

            <a href="/services" class="cta-link">
              <span>Explore Our Services</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Core Capabilities -->
      <div class="capabilities-section">
        <h2 class="capabilities-title">Our Core Capabilities</h2>
        
        <div class="capabilities-grid">
          <div 
            v-for="(capability, index) in capabilities" 
            :key="capability.title"
            class="capability-card"
            @mouseenter="activeTab = index"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <div class="capability-icon" v-html="capability.icon"></div>
            <h3 class="capability-title">{{ capability.title }}</h3>
            <p class="capability-description">{{ capability.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
/* Font Imports */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap');

/* Global Font Settings */
* {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Serif Font for Headings */
.hero-title,
.card-title,
.capabilities-title {
  font-family: 'Playfair Display', Georgia, serif;
}

/* Card Styles */
.about-card,
.why-choose-card {
  @apply bg-white/80 backdrop-blur-lg rounded-3xl p-8 border-2 border-slate-200 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1;
}

.card-header {
  @apply mb-6;
}

.card-title {
  @apply text-2xl font-bold text-slate-900 mb-3;
}

.title-line {
  @apply w-16 h-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full;
}

/* Stats Grid */
.stats-grid {
  @apply grid grid-cols-3 gap-6 mt-8 pt-8 border-t-2 border-slate-200;
}

.stat-item {
  @apply text-center;
}

.stat-value {
  @apply text-3xl font-black bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2;
}

.stat-label {
  @apply text-sm text-slate-600 font-semibold;
  font-family: 'Inter', sans-serif;
}

/* Reason Items */
.reason-item {
  @apply flex gap-4 p-4 rounded-xl bg-slate-50 border-l-4 border-emerald-500 transition-all duration-300 hover:bg-white hover:shadow-md;
}

.reason-icon {
  @apply flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 text-white rounded-lg flex items-center justify-center;
}

.reason-title {
  @apply font-bold text-slate-900 mb-1;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
}

.reason-text {
  @apply text-sm text-slate-600 leading-relaxed;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}

/* CTA Link */
.cta-link {
  @apply inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-full font-bold transition-all duration-300 hover:shadow-xl hover:scale-105;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* Capabilities Section */
.capabilities-section {
  @apply bg-white/80 backdrop-blur-lg rounded-3xl p-8 border-2 border-slate-200 shadow-xl;
}

.capabilities-title {
  @apply text-3xl font-black text-slate-900 mb-8 text-center;
  font-family: 'Playfair Display', serif;
}

.capabilities-grid {
  @apply grid md:grid-cols-3 lg:grid-cols-5 gap-6;
}

.capability-card {
  @apply text-center p-6 bg-slate-50 rounded-2xl border-2 border-slate-200 transition-all duration-500 hover:bg-white hover:border-emerald-300 hover:-translate-y-2 hover:shadow-xl;
  animation: fade-in-up 0.6s ease-out both;
}

.capability-icon {
  @apply mx-auto w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-500 text-white rounded-xl flex items-center justify-center mb-4 transition-transform duration-500;
}

.capability-card:hover .capability-icon {
  @apply scale-110 rotate-6;
}

.capability-title {
  @apply font-bold text-slate-900 mb-2 text-sm;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
}

.capability-description {
  @apply text-xs text-slate-600;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}

/* Animations */
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

/* Responsive */
@media (max-width: 768px) {
  .stats-grid {
    @apply gap-4;
  }
  
  .capabilities-grid {
    @apply grid-cols-2;
  }
}
</style>