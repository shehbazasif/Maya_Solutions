<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const currentSlide = ref(0);
let intervalId: number | null | undefined = null;

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
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
  },
  {
    id: 2,
    title: "Facilities Management & Utilities Support",
    description:
      "Comprehensive FM and utilities services ensuring safe, functional, and compliant assets throughout project lifecycle. From preventive maintenance to operational readiness.",
    keywords: ["FM Support", "Site Utilities", "Maintenance", "Compliance"],
    image:
      "images/facility_management.jpg",
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
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80",
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
    title: "Facilities Management",
    image: "/images/facility_management.jpg",
    description:
      "Sustainable asset management, housekeeping, safety systems, and operational excellence.",
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
          class="relative z-10 flex flex-col justify-center items-start h-full max-w-7xl mx-auto px-12 md:px-6 text-white"
        >
          <transition name="slide-up" mode="out-in">
            <div :key="currentSlide" class="mb-8">
              <h1
                class="text-5xl md:text-4xl sm:text-3xl font-bold leading-tight mb-6 max-w-4xl drop-shadow-lg"
              >
                {{ slides[currentSlide]?.title }}
              </h1>
              <p
                class="text-xl md:text-lg leading-relaxed mb-6 max-w-3xl text-white/95 drop-shadow-md"
              >
                {{ slides[currentSlide]?.description }}
              </p>
              <div class="flex flex-wrap gap-3 mb-8">
                <span
                  v-for="keyword in slides[currentSlide]?.keywords"
                  :key="keyword"
                  class="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/30 transition-all duration-300 hover:bg-white/30 hover:-translate-y-1 cursor-default"
                >
                  {{ keyword }}
                </span>
              </div>
            </div>
          </transition>

          <!-- Static Button -->
          <button
            class="bg-gradient-to-r from-emerald-500 to-green-400 text-white px-10 py-4 text-lg font-semibold rounded-full uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/50 shadow-lg shadow-green-500/40"
          >
            Get Started
          </button>

          <!-- Slide Indicators -->
          <div
            class="absolute bottom-12 left-12 md:left-1/2 md:-translate-x-1/2 flex gap-4"
          >
            <button
              v-for="(slide, index) in slides"
              :key="slide.id"
              @click="goToSlide(index)"
              :class="[
                'h-3 rounded-full border-2 border-white transition-all duration-300 hover:bg-white/70 hover:scale-110',
                currentSlide === index ? 'w-10 bg-white' : 'w-3 bg-white/40',
              ]"
              :aria-label="`Go to slide ${index + 1}`"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="max-w-7xl mx-auto py-16 sm:px-6 md:px-5">
      <h1 class="text-7xl text-center font-bold text-emerald-800 mb-6">
        About Us
      </h1>
      <div class="grid md:grid-cols-2 gap-10 mt-10">
        <!-- Card 1: Our Mission -->
        <div
          class="bg-green-300 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-green-500 transition-smooth rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
          data-aos="fade-up"
        >
          <!-- Top Circle Icon -->
          <div
            class="bg-white text-emerald-700 w-20 h-20 flex items-center justify-center rounded-full mb-6 text-3xl"
          >
            🌱
          </div>
          <!-- Card Heading -->
          <h3 class="text-2xl font-bold mb-4 text-emerald-900">Our Mission</h3>
          <!-- Card Paragraph -->
          <p class="text-emerald-900 mb-6">
            We empower organizations with innovative environmental and
            sustainability solutions that protect people, enhance performance,
            and create lasting value across all sectors.
          </p>
          <!-- Explore More Button -->
          <a
            href="/who-we-are"
            class="bg-white text-green-700 font-semibold px-6 py-2 rounded-full hover:bg-emerald-800 hover:text-white transition-colors"
          >
            Explore More
          </a>
        </div>

        <!-- Card 2: Our Vision -->
        <div
          class="bg-green-300 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-green-500 transition-smooth rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <!-- Top Circle Icon -->
          <div
            class="bg-emerald-200 text-emerald-700 w-20 h-20 flex items-center justify-center rounded-full mb-6 text-3xl"
          >
            🌎
          </div>
          <!-- Card Heading -->
          <h3 class="text-2xl font-bold mb-4 text-emerald-800">Our Vision</h3>
          <!-- Card Paragraph -->
          <p class="text-slate-600 mb-6">
            To create a sustainable world where every community, business, and
            ecosystem thrive through responsible engineering, ethical action,
            and innovative environmental solutions.
          </p>
          <!-- Explore More Button -->
          <a
            href="/who-we-are"
            class="bg-white text-green-700 font-semibold px-6 py-2 rounded-full hover:bg-emerald-800 hover:text-white transition-colors"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>

    <!-- CORE SERVICES -->
    <section class="bg-emerald-50 py-24 px-6 md:px-10">
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

    <!-- WHY CLIENTS CHOOSE US -->
    <section
      class="relative py-24 px-6 md:px-10 bg-gradient-to-br from-white via-emerald-50 to-white"
    >
      <div class="max-w-7xl mx-auto" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-emerald-800 mb-8">
          Why Clients Choose Us
        </h2>
        <ul class="grid gap-4 sm:grid-cols-2 text-slate-700">
          <li
            v-for="reason in [
              'Compliance with global and local environmental standards',
              'Proven track record with giga-projects and government programs',
              'Multi-disciplinary technical expertise',
              'Transparent communication and reporting',
              'Safety, quality, and long-term value focus',
              'Fast mobilization and global reach',
            ]"
            :key="reason"
            class="flex items-start gap-3"
          >
            <span class="text-emerald-600 text-lg">✔</span>
            <span>{{ reason }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- INDUSTRIES -->
    <section class="bg-emerald-50 py-24">
      <div
        class="max-w-7xl mx-auto px-6 md:px-10 text-center"
        data-aos="fade-up"
      >
        <h2 class="text-3xl font-bold text-emerald-800 mb-10">
          Industries We Serve
        </h2>
        <div
          class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-slate-700"
        >
          <div
            v-for="industry in [
              'Construction & Infrastructure',
              'Industrial & Manufacturing',
              'Real Estate & Urban Development',
              'Oil, Gas & Energy',
              'Government & Municipalities',
              'Utilities & Power',
              'Transportation & Logistics',
              'Education & Healthcare',
            ]"
            :key="industry"
            class="bg-white rounded-xl py-6 px-4 shadow-sm border border-emerald-100 hover:shadow-md transition"
          >
            <p class="font-medium">{{ industry }}</p>
          </div>
        </div>
      </div>
    </section>

    <!--location Map-->
    <section class="bg-green-300 py-16 px-5">
      <h1 class="text-4xl font-bold text-emerald-900 text-center mb-4">
        Where To Find Us
      </h1>

      <div class="relative max-w-6xl mx-auto overflow-hidden">
        <!-- Overlay to hide Google map top bar -->
        <div class="absolute top-0 left-0 w-full h-16 bg-green-300 z-10"></div>

        <iframe
          src="https://www.google.com/maps/d/embed?mid=19s4r6ubn65Jvc9urP60AKX0kpzjm47U&ehbc=2E312F"
          class="w-full h-[600px]"
          style=""
          loading="lazy"
        ></iframe>
        <div class="absolute top-0 left-0 w-full h-5 bg-green-300 z-10"></div>
      </div>
    </section>
    <!-- FINAL CTA -->
    <section
      class="bg-gradient-to-r from-emerald-700 to-emerald-500 py-24 text-center text-white"
      data-aos="zoom-in"
    >
      <div class="max-w-3xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-4">
          Ready to Build a More Sustainable Future?
        </h2>
        <p class="mb-8 text-emerald-50">
          Our team is here to support your project from advisory to execution.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink
            to="/contact"
            class="rounded-full bg-white text-emerald-800 px-6 py-3 text-xs font-semibold uppercase tracking-wide hover:bg-emerald-100 transition"
          >
            Contact Us Today
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="rounded-full border border-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white hover:bg-white hover:text-emerald-700 transition"
          >
            Speak With Our Experts
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
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
</style>