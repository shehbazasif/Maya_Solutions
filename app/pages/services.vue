<script setup lang="ts">
// SEO
useSeoMeta({
  title: "Our Services",
  description:
    "Comprehensive construction site support, facilities management, landscaping, environmental compliance, and utility services tailored to your project needs.",
  keywords:
    "construction services, facilities management, FM services, site support, landscaping, environmental services, finishing works",
  ogTitle: "Professional Services | Maya Solutions",
  ogDescription:
    "Expert construction site support, FM services, landscaping, and environmental compliance solutions.",
  ogImage: "/images/og-services.jpg",
});

useHead({
  link: [{ rel: "canonical", href: "https://www.mayassc.com/services" }],
});

const serviceGroups = [
  {
    title: "Construction & Finishing Works Support",
    description:
      "Expert site support for active construction and fit-out stages. From finishing works to civil rectification, we deliver coordination and execution.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    items: [
      "Finishing and fit-out works support",
      "Civil works and rectification activities",
      "Fit-out and refurbishment coordination",
      "Interface management between trades",
      "Short-term and long-term site support packages",
    ],
  },
  {
    title: "Facilities Management (FM) & Utilities",
    description:
      "Hard and soft FM services to keep assets safe, functional, and compliant throughout the project lifecycle.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    items: [
      "Hard FM: MEP maintenance, HVAC, electrical systems, civil works",
      "Soft FM: Cleaning, landscaping & general maintenance",
      "Temporary and permanent site utilities",
      "Water supply and utility coordination",
      "Preventive and reactive maintenance",
    ],
  },
  {
    title: "Landscaping & External Works Support",
    description:
      "Professional landscaping and external works aligned with construction schedules and site requirements.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
    items: [
      "Soft and hard landscaping support",
      "External works coordination",
      "Defect rectification and maintenance support",
      "Landscape establishment and handover assistance",
      "Integration with overall site operations",
    ],
  },
  {
    title: "Environmental & Sustainability Compliance",
    description:
      "End-to-end environmental support and practical sustainability advisory integrated into everyday operations.",
    image: "images/Environmental-Services.jpg",
    items: [
      "Environmental permitting and compliance monitoring",
      "ESIA / EIA studies and reporting",
      "Construction Environmental Management Plans",
      "Corporate sustainability strategy",
      "LEED construction credits compliance assurance",
      "ESG advisory & reporting",
    ],
  },
  {
    title: "Waste Management",
    description:
      "Safe, compliant and efficient waste management for complex assets and construction projects.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    items: [
      "Waste collection & transport",
      "Hazardous and non-hazardous waste handling",
      "Recycling solutions",
      "Waste minimisation & resource recovery programmes",
      "Site waste management systems",
    ],
  },
  {
    title: "Equipment & Operational Support",
    description:
      "Reliable equipment and manpower tailored to project and operational needs.",
    image: "images/equipment-services.jpg",
    items: [
      "Construction machinery & equipment rental",
      "Water tankers, sewage tankers, loaders, forklifts",
      "Drinking water delivery",
      "Skilled manpower supply",
      "On-site operational support",
    ],
  },
];
</script>

<template>
  <section class="relative py-20 px-5 md:px-10 overflow-hidden bg-white">
    <!-- Subtle Background -->
    <div class="absolute inset-0 bg-slate-50"></div>

    <div class="relative max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-16 text-center">
        <div
          class="inline-flex items-center gap-2 bg-slate-800 text-white px-5 py-2 rounded-md mb-5 text-xs font-bold uppercase tracking-widest"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Our Services</span>
        </div>

        <h1 class="text-5xl md:text-6xl font-black mb-5 text-slate-900">
          What We Do
        </h1>

        <p
          class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
        >
          From early-stage advisory to ongoing operations support, we deliver
          integrated services for construction, industrial, commercial, and
          government clients.
        </p>
      </div>

      <!-- Service Cards Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 rounded-full">
        <div
          v-for="(group, index) in serviceGroups"
          :key="group.title"
          class="service-card group rounded-xl overflow-hidden"
        >
          <!-- Image Container -->
          <div class="image-wrapper">
            <img :src="group.image" :alt="group.title" class="service-image" />
            <div class="image-overlay"></div>

            <!-- Number Badge -->
            <div class="number-badge">
              {{ String(index + 1).padStart(2, "0") }}
            </div>
          </div>

          <!-- Content -->
          <div class="card-content">
            <!-- Title & Description -->
            <div class="mb-5">
              <h2 class="service-title">
                {{ group.title }}
              </h2>
              <p class="service-description">
                {{ group.description }}
              </p>
            </div>

            <!-- Items List -->
            <ul class="service-list">
              <li v-for="item in group.items" :key="item" class="service-item">
                {{ item }}
              </li>
            </ul>
            <!-- Explore Button -->
            <a
              href="/contact"
              class="explore-button inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border border-white/10 bg-white/5 text-white/90 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 active:translate-y-0"
            >
              Explore Services
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mx-w-7xl mt-20 text-center">
        <div class="bg-slate-900 rounded-lg p-10 shadow-xl">
          <h3 class="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p class="text-slate-300 mb-6 max-w-2xl">
            Let's discuss how our integrated services can support your
            construction and operational needs.
          </p>
          <a href="/contact" class="cta-button rounded-full hover:bg-slate-700">
            Discuss a Project
            <svg
              class="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
/* Service Card */
.service-card {
  @apply relative flex flex-col bg-white border-2 border-slate-200 overflow-hidden transition-all duration-300;
}

.service-card:hover {
  @apply border-slate-400 shadow-lg;
}

/* Image Wrapper */
.image-wrapper {
  @apply relative w-full h-56 overflow-hidden bg-slate-100;
}

.service-image {
  @apply w-full h-full object-cover transition-all duration-500;
}

.service-card:hover .service-image {
  @apply scale-105 opacity-90;
}

.image-overlay {
  @apply absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/60;
}

/* Number Badge */
.number-badge {
  @apply absolute top-4 right-4 w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-black text-sm transition-all duration-300;
}

.service-card:hover .number-badge {
  @apply bg-slate-800;
}

/* Card Content */
.card-content {
  @apply flex-1 p-6 flex flex-col bg-white;
}

/* Service Title */
.service-title {
  @apply text-xl font-bold text-slate-900 mb-3 leading-tight;
}

/* Service Description */
.service-description {
  @apply text-sm text-slate-600 leading-relaxed;
}

/* Service List */
.service-list {
  @apply space-y-2 mb-6 flex-grow border-l-2 border-slate-200 pl-4;
}

.service-item {
  @apply text-sm text-slate-700 leading-relaxed;
}

/* Explore Button */
.explore-button {
  @apply inline-flex items-center gap-2 text-slate-900 font-semibold text-sm border-b-2 border-slate-900 pb-1 transition-all duration-300 hover:text-slate-700 hover:border-slate-700;
}

/* CTA Button */
.cta-button {
  @apply inline-flex items-center bg-white text-slate-900 px-8 py-4 font-bold text-lg border-2 border-white transition-all duration-300 hover:bg-slate-800 hover:text-white;
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

useHead({ title: 'Construction & FM Services | Maya Solutions', meta: [ { name:
'description', content: 'Expert site support, facilities management, and
construction services...' }, { property: 'og:title', content: 'Construction & FM
Services | Maya Solutions' }, { property: 'og:description', content: '...' }, ]
})
