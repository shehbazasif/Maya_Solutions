<script setup lang="ts">
const hoveredReason = ref<number | null>(null);
const hoveredIndustry = ref<number | null>(null);

const reasons = [
  {
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>`,
    title: "Global Compliance Expertise",
    description:
      "Full compliance with Saudi NCEC, UK EPA, and US EPA environmental standards",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>`,
    title: "Proven Track Record",
    description:
      "Successfully delivered giga-projects and government programs across multiple sectors",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
    </svg>`,
    title: "Multi-Disciplinary Expertise",
    description:
      "Construction support, FM, landscaping, environmental, and sustainability specialists",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
    </svg>`,
    title: "Transparent Communication",
    description:
      "Clear reporting, regular updates, and open dialogue throughout project lifecycle",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
    </svg>`,
    title: "Safety & Quality Focus",
    description:
      "Rigorous safety protocols and quality assurance delivering long-term value",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>`,
    title: "Rapid Mobilization",
    description:
      "Fast deployment capabilities with global reach across three continents",
    gradient: "from-pink-500 to-rose-500",
  },
];

const industries = [
  {
    name: "Construction & Infrastructure",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>`,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Industrial & Manufacturing",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
    </svg>`,
    gradient: "from-emerald-500 to-green-500",
  },
  {
    name: "Real Estate & Urban Development",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
    </svg>`,
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Oil, Gas & Energy",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>`,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "Government & Municipalities",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
    </svg>`,
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    name: "Utilities & Power",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
    </svg>`,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    name: "Transportation & Logistics",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
    </svg>`,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Education & Healthcare",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
    </svg>`,
    gradient: "from-green-500 to-emerald-500",
  },
];
const locations = [
  { city: "Riyadh", country: "Saudi Arabia", flag: "🇸🇦" },
  { city: "London", country: "United Kingdom", flag: "🇬🇧" },
  { city: "Texas", country: "United States", flag: "🇺🇸" },
];

// SEO
useSeoMeta({
  title: "Maya Solutions - Construction, FM & Environmental Services",
  description:
    "Expert site support, facilities management, landscaping, and environmental compliance services for construction and infrastructure projects worldwide.",
  keywords:
    "construction services, facilities management, site support, landscaping, environmental compliance, finishing works, FM services",
  ogTitle: "Maya Solutions - Professional Construction & FM Services",
  ogDescription:
    "Providing comprehensive site support, facilities management, and environmental solutions for construction projects.",
  ogImage: "/images/og-home.jpg",
  canonical: "https://www.mayassc.com/",
});

const hoveredCard = ref<string | null>(null);
const currentSlide = ref(0);
let intervalId: number | null | undefined = null;
const activeCard = ref<number | null>(null);
const slides = [
  {
    id: 1,
    title: "Construction Site Support & Finishing Works",
    description:
      "Expert site support for active construction and fit-out stages. From finishing works to civil rectification, we deliver coordination and execution without main contractor responsibility.",
    keywords: [
      "Fit-Out Works",
      "Site Coordination",
      "Finishing Support",
      "Civil Works",
    ],
    image: "/images/Construction-site-hero.jpeg",
  },
  {
    id: 2,
    title: "Facilities Management & Utilities Support",
    description:
      "Comprehensive FM and utilities services ensuring safe, functional, and compliant assets throughout project lifecycle. From preventive maintenance to operational readiness.",
    keywords: ["FM Support", "Site Utilities", "Maintenance", "Compliance"],
    image: "images/facility_management.jpg",
  },
  {
    id: 3,
    title: "Landscaping & External Works Support",
    description:
      "Professional landscaping and external works aligned with construction schedules. Soft and hard landscaping, defect rectification, and seamless handover assistance.",
    keywords: [
      "Landscaping",
      "External Works",
      "Site Integration",
      "Green Spaces",
    ],
    image: "images/landscaping-hero.jpeg",
  },
  {
    id: 3,
    title: "Environmental Services & Compliance",
    description:
      "Specialized environmental services ensuring regulatory compliance and sustainable practices. Assessments, monitoring, remediation, and reporting tailored to project needs.",
    keywords: [
      "environmental Services",
      " Compliance",
      " Monitoring",
      " Remediation",
    ],
    image: "images/Environmental_hero_image.jpg",
  },
  {
    id: 3,
    title: "Sustainability & ESG Consulting",
    description:
      " Specialized Sustainability and ESG services promoting responsible growth. Strategy development, certification support, carbon management, and reporting aligned with global standards.",
    keywords: [
      "Sustainability",
      "ESG Consulting",
      "Carbon Management",
      "Reporting",
    ],
    image: "images/esg-hero.jpg",
  },
];

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
  resetInterval();
};

const resetInterval = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(nextSlide, 5000);
};

onMounted(() => {
  intervalId = setInterval(nextSlide, 5000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
const keyStats = [
  { label: "Countries", value: "3+" },
  { label: "Core Service Lines", value: "5" },
  { label: "Sectors Served", value: "10+" },
];

const services = [
  {
    title: "Integrated Construction Site Support",
    image: "/images/construction-integration.jpg",
    description:
      "Expert site support for active construction and fit-out stages. From finishing works to civil rectification, we deliver coordination and execution without main contractor responsibility.",
  },
  {
    title: "Facilities Management",
    image: "/images/facility_management.jpg",
    description:
      "Professional landscaping and external works aligned with construction schedules. Soft and hard landscaping, defect rectification, and seamless handover assistance.",
  },
  {
    title: "Landscaping & External Works Support",
    image: "/images/Landscapping-cardimages.jpg",
    description:
      "Professional landscaping and external works aligned with construction schedules. Soft and hard landscaping, defect rectification, and seamless handover assistance.",
  },
  {
    title: "Environmental Services",
    image: "/images/Environmental-Services.jpg",
    description:
      "Environmental assessments, compliance management, monitoring, permitting, audits, and remediation oversight.",
  },
  {
    title: "Sustainability & ESG",
    image: "/images/sustainable-development-goals-still-life.jpg",
    description:
      "ESG strategy, carbon reduction, LEED, Mostadam, and Envision certification support for sustainable growth.",
  },
  {
    title: "Waste Management",
    image: "/images/waste-management.jpg",
    description:
      "Innovative waste collection, recycling, segregation, and zero-waste compliance programs.",
  },
  {
    title: "Specialized Equipment & Support",
    image: "/images/special-equipments.jpg",
    description:
      "Provision of environmental monitoring equipment, machinery, and on-site operational support.",
  },
];
</script>

<template>
  <div class="text-slate-800 overflow-hidden">
    <!-- HERO SECTION -->
    <section class="relative w-full h-screen overflow-hidden">
      <div class="relative w-full h-full">
        <!-- Background Slides -->
        <transition-group name="fade" tag="div" class="absolute inset-0">
          <div
            v-for="(slide, index) in slides"
            :key="slide.id"
            v-show="currentSlide === index"
            class="absolute inset-0 bg-cover bg-center bg-no-repeat"
            :style="{ backgroundImage: `url(${slide.image})` }"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/40"
            ></div>
          </div>
        </transition-group>

        <!-- Content -->
        <div
          class="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 md:px-12 text-white pt-20 md:pt-0"
        >
          <transition name="slide-up" mode="out-in">
            <div :key="currentSlide" class="mb-6 md:mb-8">
              <h1
                class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 max-w-4xl drop-shadow-lg"
              >
                {{ slides[currentSlide]?.title }}
              </h1>
              <p
                class="text-base sm:text-lg md:text-xl leading-relaxed mb-4 md:mb-6 max-w-3xl text-white/95 drop-shadow-md"
              >
                {{ slides[currentSlide]?.description }}
              </p>
              <div class="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                <span
                  v-for="keyword in slides[currentSlide]?.keywords"
                  :key="keyword"
                  class="bg-white/20 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-white/30 transition-all duration-300 hover:bg-white/30 hover:-translate-y-1 cursor-default"
                >
                  {{ keyword }}
                </span>
              </div>
            </div>
          </transition>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
            <a
              href="https://wa.me/966531008586"
              target="_blank"
              class="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold rounded-full uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              WhatsApp Us
            </a>
            <a
              href="/contact"
              class="inline-flex items-center justify-center bg-black text-white hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold rounded-full uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg"
            >
              Get Quotation
            </a>
          </div>

          <!-- Bottom Info Badge -->
          <span
            class="inline-block bg-white/20 mb-12 backdrop-blur-md px-4 py-1 md:px-5 md:py-2.5 rounded-full text-[10px] md:text-sm font- border border-white/30 transition-all duration-300 hover:bg-white/30 cursor-default max-w-fit"
          >
            Riyadh‑based | Fast mobilization | Construction‑focused | VAT
            compliant
          </span>

          <!-- Slide Indicators -->
          <div
            class="absolute bottom-6 md:bottom-12 left-6 md:left-12 lg:left-1/2 lg:-translate-x-1/2 flex gap-3 md:gap-4"
          >
            <button
              v-for="(slide, index) in slides"
              :key="slide.id"
              @click="goToSlide(index)"
              :class="[
                'h-2 md:h-3 rounded-full border-2 border-white transition-all duration-300 hover:bg-white/70 hover:scale-110',
                currentSlide === index
                  ? 'w-8 md:w-10 bg-white'
                  : 'w-2 md:w-3 bg-white/40',
              ]"
              :aria-label="`Go to slide ${index + 1}`"
            ></button>
          </div>
        </div>
      </div>
    </section>
    <!-- ABOUT -->
    <section
      class="relative max-w-7xl mx-auto py-20 px-6 md:px-8 overflow-hidden"
    >
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          class="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-float"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float-delay"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow"
        ></div>
      </div>

      <!-- Section Header -->
      <div class="relative text-center mb-16">
        <h1 class="text-6xl md:text-7xl font-black mb-4 font-serif">
          <span
            class="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent"
          >
            About Us
          </span>
        </h1>
      </div>

      <!-- Cards Grid -->
      <div class="relative grid md:grid-cols-2 gap-8 mt-12">
        <!-- Card 1: Our Mission -->
        <div
          class="group card-hover"
          @mouseenter="hoveredCard = 'mission'"
          @mouseleave="hoveredCard = null"
        >
          <div class="card-container mission-card">
            <!-- Animated Border Gradient -->
            <div class="card-border-gradient"></div>

            <!-- Card Content -->
            <div class="card-content">
              <!-- Icon Container with Animated Ring -->
              <div class="icon-wrapper">
                <div class="icon-ring icon-ring-1"></div>
                <div class="icon-ring icon-ring-2"></div>
                <div
                  class="icon-container bg-gradient-to-br from-green-400 to-emerald-600"
                >
                  <svg
                    class="w-10 h-10 text-white"
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
              </div>

              <!-- Content -->
              <h3
                class="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent"
              >
                Our Mission
              </h3>

              <p class="text-gray-700 leading-relaxed mb-6 text-base">
                We support construction and operational teams by delivering
                finishing works, FM utilities, landscaping, and environmental
                compliance services — with clear accountability, practical
                execution, and measurable results.
              </p>

              <!-- Feature Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="tag tag-green">Execution</span>
                <span class="tag tag-blue">Compliance</span>
                <span class="tag tag-orange">Results</span>
              </div>

              <!-- CTA Button -->
              <a
                href="/who-we-are"
                class="w-60 bg-emerald-600 hover:bg-emerald-700 text-white text-center py-4 px-7 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg"
              >
                <span class="z-10 flex items-center gap-2">
                  Explore More
                  <svg
                    class="h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <!-- Decorative Corner Elements -->
            <div class="corner-decoration top-left"></div>
            <div class="corner-decoration bottom-right"></div>
          </div>
        </div>

        <!-- Card 2: Our Vision -->
        <div
          class="group card-hover"
          @mouseenter="hoveredCard = 'vision'"
          @mouseleave="hoveredCard = null"
        >
          <div class="card-container vision-card">
            <!-- Animated Border Gradient -->
            <div class="card-border-gradient"></div>

            <!-- Card Content -->
            <div class="card-content">
              <!-- Icon Container with Animated Ring -->
              <div class="icon-wrapper">
                <div class="icon-ring icon-ring-1"></div>
                <div class="icon-ring icon-ring-2"></div>
                <div
                  class="icon-container bg-gradient-to-br from-blue-400 to-blue-600"
                >
                  <svg
                    class="w-10 h-10 text-white"
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
              </div>

              <!-- Content -->
              <h3
                class="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
              >
                Our Vision
              </h3>

              <p class="text-gray-700 leading-relaxed mb-6 text-base">
                To set the standard for integrated construction site support and
                compliant operations, delivering projects efficiently from Saudi
                Arabia to international markets.
              </p>

              <!-- Feature Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="tag tag-blue">Innovation</span>
                <span class="tag tag-green">Integration</span>
                <span class="tag tag-red">Excellence</span>
              </div>

              <!-- CTA Button -->
              <a
                href="/who-we-are"
                class="w-60 bg-blue-600 hover:bg-blue-700 text-white text-center py-4 px-7 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg"
              >
                <span class="relative z-10 flex items-center gap-2">
                  Explore More
                  <svg
                    class="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <!-- Decorative Corner Elements -->
            <div class="corner-decoration top-left"></div>
            <div class="corner-decoration bottom-right"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE SERVICES -->
    <section class="pb-24 pt-12 px-6 md:px-10">
      <div class="max-w-7xl mx-auto text-center">
        <h2
          data-aos="fade-up"
          class="text-5xl font-bold text-emerald-800 mb-10"
        >
          CORE SERVICES OVERVIEW
        </h2>

        <div
          class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up"
        >
          <div
            v-for="service in services"
            :key="service.title"
            class="group bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden hover:-translate-y-2 transition-transform"
          >
            <img
              :src="service.image"
              :alt="service.title"
              class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="p-6 text-left">
              <h3 class="font-semibold text-lg text-emerald-700 mb-2">
                {{ service.title }}
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- How we Support Construction Project section -->
    <section
      class="relative py-20 px-6 md:px-8 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5"></div>

      <div class="relative max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full mb-6 shadow-lg"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
              />
            </svg>
            <span class="font-semibold text-sm tracking-wide"
              >OUR APPROACH</span
            >
          </div>

          <h2 class="text-5xl md:text-6xl font-black mb-6">
            <span
              class="bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent"
            >
              How We Support
            </span>
            <br />
            <span
              class="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent"
            >
              Construction Projects
            </span>
          </h2>

          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From site mobilization to final handover, we deliver comprehensive
            support services that keep your construction projects running
            smoothly and efficiently.
          </p>
        </div>

        <!-- Support Services Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <!-- Service Card 1 -->
          <div
            class="support-card group"
            @mouseenter="activeCard = 1"
            @mouseleave="activeCard = null"
          >
            <div class="card-inner">
              <!-- Icon -->
              <div class="icon-box bg-gradient-to-br from-blue-500 to-blue-700">
                <svg
                  class="w-8 h-8 text-white"
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

              <!-- Content -->
              <h3 class="card-title">Site Mobilization & Setup Support</h3>
              <p class="card-description">
                Rapid deployment and comprehensive site establishment services
                to get your project started efficiently and safely.
              </p>

              <!-- Hover Indicator -->
              <div class="card-arrow">
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- Service Card 2 -->
          <div
            class="support-card group"
            @mouseenter="activeCard = 2"
            @mouseleave="activeCard = null"
          >
            <div class="card-inner">
              <!-- Icon -->
              <div
                class="icon-box bg-gradient-to-br from-green-500 to-emerald-700"
              >
                <svg
                  class="w-8 h-8 text-white"
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

              <!-- Content -->
              <h3 class="card-title">Finishing, FM & Landscaping Execution</h3>
              <p class="card-description">
                Professional execution of fit-out works, facilities management
                services, and landscape installations to project standards.
              </p>

              <!-- Hover Indicator -->
              <div class="card-arrow">
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- Service Card 3 -->
          <div
            class="support-card group"
            @mouseenter="activeCard = 3"
            @mouseleave="activeCard = null"
          >
            <div class="card-inner">
              <!-- Icon -->
              <div
                class="icon-box bg-gradient-to-br from-emerald-500 to-green-700"
              >
                <svg
                  class="w-8 h-8 text-white"
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

              <!-- Content -->
              <h3 class="card-title">
                Environmental & Waste Compliance Systems
              </h3>
              <p class="card-description">
                Complete environmental management and waste handling systems
                ensuring full regulatory compliance and sustainability.
              </p>

              <!-- Hover Indicator -->
              <div class="card-arrow">
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- Service Card 4 -->
          <div
            class="support-card group"
            @mouseenter="activeCard = 4"
            @mouseleave="activeCard = null"
          >
            <div class="card-inner">
              <!-- Icon -->
              <div
                class="icon-box bg-gradient-to-br from-orange-500 to-red-600"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>

              <!-- Content -->
              <h3 class="card-title">Weekly Site Reporting & Photo Logs</h3>
              <p class="card-description">
                Detailed weekly documentation including progress reports,
                photographic records, and comprehensive site activity logs.
              </p>

              <!-- Hover Indicator -->
              <div class="card-arrow">
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- Service Card 5 -->
          <div
            class="support-card group lg:col-span-2"
            @mouseenter="activeCard = 5"
            @mouseleave="activeCard = null"
          >
            <div class="card-inner">
              <!-- Icon -->
              <div
                class="icon-box bg-gradient-to-br from-purple-500 to-indigo-700"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <!-- Content -->
              <h3 class="card-title">
                Flexible Short-Term or Long-Term Engagement
              </h3>
              <p class="card-description">
                Adaptable service packages designed to meet your project
                timeline, whether you need temporary support for critical phases
                or comprehensive long-term partnership throughout your entire
                construction lifecycle.
              </p>

              <!-- Hover Indicator -->
              <div class="card-arrow">
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="mt-16 text-center">
          <div
            class="inline-flex flex-col md:flex-row items-center gap-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl"
          >
            <div class="text-left">
              <h3 class="text-2xl font-bold text-white mb-2">
                Ready to streamline your project?
              </h3>
              <p class="text-gray-300">
                Let's discuss how we can support your construction needs.
              </p>
            </div>
            <a href="/contact" class="cta-button whitespace-nowrap">
              Get Started Today
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
    <!-- WHY CLIENTS CHOOSE US -->
    <section
      class="relative py-20 px-6 md:px-10 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/20"
    >
      <!-- Background Elements -->
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
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
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="font-bold text-xs uppercase tracking-widest"
              >Why MaYa</span
            >
          </div>

          <h2 class="text-4xl md:text-5xl font-black mb-6 text-slate-900">
            Why Clients Choose
            <span
              class="block bg-gradient-to-r from-emerald-600 via-blue-600 to-green-600 bg-clip-text text-transparent"
            >
              MaYa Solutions
            </span>
          </h2>

          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            Delivering excellence across construction support, facilities
            management, and environmental services
          </p>
        </div>

        <!-- Reasons Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(reason, index) in reasons"
            :key="reason.title"
            class="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-slate-200 transition-all duration-500 hover:border-emerald-300 hover:shadow-xl hover:-translate-y-2"
            @mouseenter="hoveredReason = index"
            @mouseleave="hoveredReason = null"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <!-- Gradient Overlay -->
            <div
              :class="[
                'absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500',
                reason.gradient,
              ]"
            ></div>

            <!-- Icon -->
            <div
              :class="[
                'relative mb-4 w-14 h-14 rounded-xl bg-gradient-to-br text-white flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6',
                reason.gradient,
              ]"
              v-html="reason.icon"
            ></div>

            <!-- Content -->
            <div class="relative">
              <h3
                class="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors"
              >
                {{ reason.title }}
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                {{ reason.description }}
              </p>
            </div>

            <!-- Check Mark -->
            <div
              class="absolute top-4 right-4 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              <svg
                class="w-4 h-4 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries We Serve -->
    <section
      class="relative py-20 px-6 md:px-10 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-[0.02]">
        <div
          class="absolute inset-0"
          style="
            background-image: radial-gradient(
              circle,
              #000 1px,
              transparent 1px
            );
            background-size: 30px 30px;
          "
        ></div>
      </div>

      <div class="relative max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-full mb-6 shadow-lg"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="font-bold text-xs uppercase tracking-widest"
              >Sectors</span
            >
          </div>

          <h2 class="text-4xl md:text-5xl font-black mb-6 text-slate-900">
            Industries We
            <span
              class="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent"
            >
              Serve & Support
            </span>
          </h2>

          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            Providing specialized construction, FM, landscaping, and
            environmental solutions across diverse sectors
          </p>
        </div>

        <!-- Industries Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(industry, index) in industries"
            :key="industry.name"
            class="group relative bg-white rounded-2xl p-6 border-2 border-slate-200 transition-all duration-500 hover:border-blue-300 hover:shadow-xl hover:-translate-y-2"
            @mouseenter="hoveredIndustry = index"
            @mouseleave="hoveredIndustry = null"
            :style="{ animationDelay: `${index * 80}ms` }"
          >
            <!-- Gradient Background -->
            <div
              :class="[
                'absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500',
                industry.gradient,
              ]"
            ></div>

            <!-- Icon -->
            <div
              :class="[
                'relative mx-auto mb-4 w-16 h-16 rounded-xl bg-gradient-to-br text-white flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110',
                industry.gradient,
              ]"
              v-html="industry.icon"
            ></div>

            <!-- Industry Name -->
            <p
              class="relative text-center font-bold text-slate-900 group-hover:text-blue-600 transition-colors"
            >
              {{ industry.name }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--location Map-->
    <section
      class="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50/30"
    >
      <!-- Background Decorations -->
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      ></div>

      <div class="relative max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <div
            class="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-5 py-2 rounded-full mb-6 shadow-lg"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="font-bold text-xs uppercase tracking-widest"
              >Global Locations</span
            >
          </div>

          <h2
            class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
          >
            <span class="text-slate-900">Where To</span>
            <span
              class="block bg-gradient-to-r from-emerald-600 via-blue-600 to-green-600 bg-clip-text text-transparent"
            >
              Find Us
            </span>
          </h2>

          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            Our global presence enables us to deliver sustainable construction
            solutions across multiple continents
          </p>
        </div>

        <!-- Map Container -->
        <div class="relative">
          <!-- Glow Effect -->
          <div
            class="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-green-500/20 rounded-3xl blur-2xl"
          ></div>

          <!-- Map Card -->
          <div
            class="relative bg-white/90 backdrop-blur-sm rounded-3xl p-3 shadow-2xl border-2 border-slate-200"
          >
            <div class="rounded-2xl overflow-hidden border-2 border-slate-100">
              <NuxtImg
                src="/images/Map_Image.png"
                alt="MaYa Global Locations Map"
                class="w-full h-auto object-cover"
                format="webp"
              />
            </div>
          </div>
        </div>

        <!-- Location Tags -->
        <div class="flex flex-wrap justify-center gap-4 mt-8">
          <div
            v-for="location in locations"
            :key="location.city"
            class="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-slate-200 shadow-lg hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <span class="text-2xl">{{ location.flag }}</span>
            <div>
              <p class="font-bold text-slate-900 text-sm">
                {{ location.city }}
              </p>
              <p class="text-xs text-slate-600">{{ location.country }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute inset-0"
          style="
            background-image: radial-gradient(
              circle,
              #fff 1px,
              transparent 1px
            );
            background-size: 30px 30px;
          "
        ></div>
      </div>

      <!-- Gradient Orbs -->
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      ></div>

      <div class="relative max-w-5xl mx-auto text-center">
        <!-- Icon -->
        <div
          class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl mb-8 shadow-2xl"
        >
          <svg
            class="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>

        <!-- Heading -->
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
        >
          Ready to Build a More
          <span
            class="block bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent"
          >
            Sustainable Future?
          </span>
        </h2>

        <!-- Description -->
        <p
          class="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Our team is here to support your project from advisory to execution
          with comprehensive construction support, FM, landscaping, and
          environmental services.
        </p>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <NuxtLink
            to="/contact"
            class="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300"
          >
            <span>Contact Us Today</span>
            <svg
              class="w-5 h-5 transition-transform group-hover:translate-x-1"
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
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300"
          >
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>Speak With Our Experts</span>
          </NuxtLink>
        </div>

        <!-- Stats or Trust Indicators -->
        <div
          class="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10"
        >
          <div class="text-center">
            <div
              class="text-4xl font-black bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2"
            >
              3+
            </div>
            <p class="text-slate-400 text-sm font-semibold">Countries</p>
          </div>
          <div class="text-center">
            <div
              class="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2"
            >
              5+
            </div>
            <p class="text-slate-400 text-sm font-semibold">Core Services</p>
          </div>
          <div class="text-center">
            <div
              class="text-4xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2"
            >
              24h
            </div>
            <p class="text-slate-400 text-sm font-semibold">Response Time</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped lang="postcss">
/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.6s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
/* Card Container */
.card-container {
  @apply relative bg-white rounded-3xl p-8 h-full transition-all duration-500 overflow-hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

.card-hover:hover .card-container {
  @apply -translate-y-2;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

/* Animated Border Gradient */
.card-border-gradient {
  @apply absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500;
  background: linear-gradient(135deg, #10b981, #3b82f6, #f97316);
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
  padding: 2px;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.card-hover:hover .card-border-gradient {
  @apply opacity-100;
}

.card-content {
  @apply relative z-10 flex flex-col h-full;
}

/* Icon Styling */
.icon-wrapper {
  @apply relative w-20 h-20 mx-auto mb-6;
}

.icon-container {
  @apply relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500;
  transform-style: preserve-3d;
}

.card-hover:hover .icon-container {
  @apply rotate-6 scale-110;
}

.icon-ring {
  @apply absolute inset-0 rounded-2xl border-2 opacity-0 transition-all duration-700;
}

.icon-ring-1 {
  @apply border-green-400;
  animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.icon-ring-2 {
  @apply border-blue-400;
  animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite 1s;
}

.card-hover:hover .icon-ring {
  @apply opacity-100;
}

/* Feature Tags */
.tag {
  @apply px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300;
}

.tag-green {
  @apply bg-green-100 text-green-700 border border-green-300;
}

.tag-blue {
  @apply bg-blue-100 text-blue-700 border border-blue-300;
}

.tag-orange {
  @apply bg-orange-100 text-orange-700 border border-orange-300;
}

.tag-red {
  @apply bg-red-100 text-red-700 border border-red-300;
}

.card-hover:hover .tag {
  @apply scale-105 shadow-md;
}

/* CTA Button */
.cta-button {
  @apply relative mt-auto inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-white overflow-hidden transition-all duration-300;
}

.group-mission {
  @apply bg-gradient-to-r from-green-500 to-emerald-600;
}

.group-vision {
  @apply bg-gradient-to-r from-blue-500 to-cyan-600;
}

.cta-button::before {
  @apply absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300;
  content: "";
}

.group-mission .cta-button::before {
  background: linear-gradient(to right, #059669, #10b981);
}

.group-vision .cta-button::before {
  background: linear-gradient(to right, #2563eb, #06b6d4);
}

.card-hover:hover .cta-button::before {
  @apply opacity-100;
}

.card-hover:hover .cta-button {
  @apply scale-105 shadow-xl;
}

/* Corner Decorations */
.corner-decoration {
  @apply absolute w-20 h-20 opacity-10 transition-all duration-500;
}

.top-left {
  @apply top-0 left-0;
  background: linear-gradient(135deg, #10b981 0%, transparent 50%);
  border-radius: 0 0 100% 0;
}

.bottom-right {
  @apply bottom-0 right-0;
  background: linear-gradient(135deg, transparent 50%, #3b82f6 100%);
  border-radius: 100% 0 0 0;
}

.card-hover:hover .corner-decoration {
  @apply opacity-20 scale-110;
}

/* Animations */
@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes float-delay {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(-5deg);
  }
}

@keyframes ping-slow {
  75%,
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.2;
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delay {
  animation: float-delay 10s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}

/* Responsive */
@media (max-width: 768px) {
  .card-container {
    @apply p-6;
  }
}

.support-card {
  @apply relative h-full;
  perspective: 1000px;
}

.card-inner {
  @apply relative bg-white rounded-2xl p-8 h-full flex flex-col transition-all duration-500 border-2 border-gray-100;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transform-style: preserve-3d;
}

.support-card:hover .card-inner {
  @apply border-orange-200 -translate-y-2;
  box-shadow: 0 20px 40px rgba(251, 146, 60, 0.15);
}

/* Icon Box */
.icon-box {
  @apply w-16 h-16 rounded-xl flex items-center justify-center mb-5 shadow-lg transition-all duration-500;
}

.support-card:hover .icon-box {
  @apply scale-110 rotate-6 shadow-2xl;
  animation: icon-bounce 0.6s ease;
}

@keyframes icon-bounce {
  0%,
  100% {
    transform: scale(1.1) rotate(6deg);
  }
  50% {
    transform: scale(1.15) rotate(12deg);
  }
}

/* Card Title */
.card-title {
  @apply text-xl font-bold text-gray-800 mb-3 transition-colors duration-300;
}

.support-card:hover .card-title {
  @apply bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent;
}

/* Card Description */
.card-description {
  @apply text-gray-600 leading-relaxed flex-grow;
}

/* Card Arrow */
.card-arrow {
  @apply mt-4 flex items-center gap-2 text-orange-600 font-semibold opacity-0 transform translate-x-[-10px] transition-all duration-300;
}

.support-card:hover .card-arrow {
  @apply opacity-100 translate-x-0;
}

/* CTA Button */
.cta-button {
  @apply inline-flex items-center bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105;
}

.cta-button:hover {
  @apply from-orange-600 to-red-700;
}

/* Animations */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .card-inner {
    @apply p-6;
  }

  .icon-box {
    @apply w-14 h-14;
  }

  .card-title {
    @apply text-lg;
  }

  .card-description {
    @apply text-sm;
  }
  keyframes fade-in-up {
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
}
</style>
