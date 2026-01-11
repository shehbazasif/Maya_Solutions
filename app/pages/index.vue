<script setup lang="ts">
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
    image: "/images/facilitate-management.jpg",
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
    <section
      class="mx-w-5xl relative bg-cover bg-center text-white"
      style="background-image: url('/images/environmental-image.jpg')"
    >
      <div
        class="absolute inset-0 bg-gradient-to-b from-gray-700 via-emerald-800/70 to-white-700/60"
      ></div>

      <div class="relative max-w-7xl mx-auto px-6 md:px-10 py-28 text-center">
        <div data-aos="fade-up">
          <p
            class="mb-3 inline-flex rounded-full bg-emerald-200/20 px-4 py-1 text-xm font-semibold uppercase tracking-wide text-emerald-100"
          >
            Engineering a Greener, Smarter Future
          </p>

          <h1
            class="mb-6 text-4xl md:text-7xl lg:text-7xl font-bold leading-tight"
          >
            Shaping Tomorrow’s <span class="text-green-400">World</span> Through
            <br />
            <span class="text-green-400">Sustainable Tomorrow</span>
          </h1>
          <h1 class="mb-8 text-2xl font-semibold leading-tight">
            We deliver smart, practical environmental solutions that promote
            growth while protecting the planet’s natural balance. Partner with
            us to meet every sustainability goal and ensure long-term
            environmental responsibility.
          </h1>

          <div class="flex flex-wrap gap-4 justify-center">
            <NuxtLink
              to="/contact"
              class="rounded-full bg-green-400 text-white-400 px-6 py-3 text-xl font-bold uppercase tracking-wide shadow-md hover:bg-emerald-900 hover:text-white transition"
            >
              Contact Now!
            </NuxtLink>
            <NuxtLink
              to="/services"
              class="rounded-full border border-white text-white px-6 py-3 text-xl font-bold uppercase tracking-wide shadow-md hover:bg-emerald-900 hover:text-white transition"
            >
              Explore Services
            </NuxtLink>
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

<section class="bg-green-300 py-16 px-5">
  <h1 class="text-4xl font-bold text-emerald-900 text-center mb-4">
    Where To Find Us
  </h1>

  <div class="relative max-w-6xl mx-auto overflow-hidden ">

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
    <!-- FOOTER MINI SUMMARY -->
  </div>
</template>
