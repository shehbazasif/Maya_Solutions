<script setup lang="ts">
const serviceGroups = [
  {
    title: "Environmental services",
    description:
      "End-to-end environmental support across planning, construction and operations.",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
    items: [
      "Environmental permitting (Saudi NCEC, UK EPA, US EPA)",
      "ESIA / EIA studies",
      "Construction Environmental Management Plans (CEMP / CESMP)",
      "Compliance monitoring & reporting",
      "Air, noise, and water quality monitoring",
      "Environmental compliance audits & due diligence",
      "Mangrove and tree assessment & plantation",
    ],
  },
  {
    title: "Sustainability services",
    description:
      "Practical sustainability and ESG advisory integrated into everyday operations.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>`,
    items: [
      "Corporate sustainability strategy",
      "LEED construction credits compliance assurance",
      "Environmental product declarations & LCA optimisation",
      "ESG advisory & reporting",
      "Sustainable procurement & material compliance",
    ],
  },
  {
    title: "Waste management",
    description:
      "Safe, compliant and efficient waste management for complex assets and projects.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
    </svg>`,
    items: [
      "Waste collection & transport",
      "Hazardous and non-hazardous waste handling",
      "Recycling solutions",
      "Waste minimisation & resource recovery programmes",
      "Site waste management systems",
    ],
  },
  {
    title: "Facilities management",
    description:
      "Hard and soft FM services to keep assets safe, efficient and compliant.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>`,
    items: [
      "Hard FM: MEP maintenance, HVAC, electrical systems, civil works",
      "Soft FM: Cleaning, landscaping & general maintenance",
    ],
  },
  {
    title: "Equipment & operational support",
    description:
      "Reliable equipment and manpower tailored to project and operational needs.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>`,
    items: [
      "Construction machinery & equipment rental",
      "Water tankers, sewage tankers, loaders, forklifts",
      "Drinking water delivery",
      "Skilled manpower supply",
    ],
  },
];
</script>

<template>
  <section class="relative py-20 px-5 md:px-10 overflow-hidden bg-slate-50">
    <!-- Background Construction Pattern -->
    <div class="absolute inset-0 opacity-[0.03]">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute top-20 right-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-10 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl"></div>

    <div class="relative max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-16 text-center">
        <div class="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 text-white px-5 py-2 rounded-full mb-5 shadow-lg">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"/>
          </svg>
          <span class="font-bold text-xs tracking-widest uppercase">Our Services</span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-black mb-5">
          <span class="bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent">
            What We Do
          </span>
        </h1>
        
        <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          From early-stage advisory to ongoing operations support, we deliver
          integrated services for construction, industrial, commercial, and
          government clients.
        </p>
      </div>

      <!-- Service Cards Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(group, index) in serviceGroups"
          :key="group.title"
          class="service-card group"
        >
          <!-- Image Container -->
          <div class="image-wrapper">
            <img 
              :src="group.image" 
              :alt="group.title"
              class="service-image"
            />
            <div class="image-gradient"></div>
            
            <!-- Icon Badge -->
            <div class="icon-badge">
              <div v-html="group.icon"></div>
            </div>
          </div>

          <!-- Content -->
          <div class="card-content">
            <!-- Title & Description -->
            <div class="mb-6">
              <h2 class="service-title">
                {{ group.title }}
              </h2>
              <p class="service-description">
                {{ group.description }}
              </p>
            </div>

            <!-- Items List -->
            <ul class="service-list">
              <li
                v-for="item in group.items"
                :key="item"
                class="service-item"
              >
                <div class="item-bullet"></div>
                <span class="item-text">{{ item }}</span>
              </li>
            </ul>

            <!-- Hover Arrow -->
            <div class="card-hover-arrow">
              <span class="text-sm font-semibold">Learn More</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </div>
          </div>

          <!-- Number Badge -->
          <div class="number-badge">
            {{ String(index + 1).padStart(2, '0') }}
          </div>
        </article>
      </div>

      <!-- CTA Section -->
      <div class="mt-20 text-center">
        <div class="inline-block bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 shadow-2xl">
          <h3 class="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p class="text-slate-300 mb-6 max-w-2xl">
            Let's discuss how our integrated services can support your construction and operational needs.
          </p>
          <NuxtLink
            to="/contact"
            class="cta-button"
          >
            Discuss a Project
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
/* Service Card */
.service-card {
  @apply relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-slate-100 transition-all duration-500;
}

.service-card:hover {
  @apply -translate-y-2 shadow-2xl border-orange-200;
}

/* Image Wrapper */
.image-wrapper {
  @apply relative w-full h-56 overflow-hidden;
}

.service-image {
  @apply w-full h-full object-cover transition-all duration-700;
}

.service-card:hover .service-image {
  @apply scale-110;
}

.image-gradient {
  @apply absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent;
}

/* Icon Badge */
.icon-badge {
  @apply absolute bottom-4 left-6 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-xl transition-all duration-500;
}

.service-card:hover .icon-badge {
  @apply scale-110 rotate-6;
}

/* Card Content */
.card-content {
  @apply flex-1 p-6 flex flex-col;
}

/* Service Title */
.service-title {
  @apply text-xl font-bold text-slate-900 mb-2 transition-all duration-300;
}

.service-card:hover .service-title {
  @apply bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent;
}

/* Service Description */
.service-description {
  @apply text-sm text-slate-600 leading-relaxed;
}

/* Service List */
.service-list {
  @apply space-y-3 flex-grow;
}

.service-item {
  @apply flex items-start gap-3 text-sm text-slate-700 transition-all duration-300;
}

.service-card:hover .service-item {
  @apply translate-x-1;
}

.item-bullet {
  @apply flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 transition-all duration-300;
}

.service-card:hover .item-bullet {
  @apply w-2 h-2 bg-orange-600;
}

.item-text {
  @apply leading-relaxed;
}

/* Hover Arrow */
.card-hover-arrow {
  @apply flex items-center gap-2 text-orange-600 font-semibold mt-4 opacity-0 transform translate-x-[-10px] transition-all duration-300;
}

.service-card:hover .card-hover-arrow {
  @apply opacity-100 translate-x-0;
}

/* Number Badge */
.number-badge {
  @apply absolute top-4 right-4 w-12 h-12 bg-slate-900/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center font-black text-sm transition-all duration-500;
}

.service-card:hover .number-badge {
  @apply bg-orange-600 scale-110 rotate-12;
}

/* CTA Button */
.cta-button {
  @apply inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:from-orange-600 hover:to-orange-700;
}

/* Responsive */
@media (max-width: 768px) {
  .image-wrapper {
    @apply h-48;
  }
  
  .card-content {
    @apply p-5;
  }
  
  .service-title {
    @apply text-lg;
  }
  
  .service-description {
    @apply text-xs;
  }
  
  .service-item {
    @apply text-xs;
  }
}
</style>