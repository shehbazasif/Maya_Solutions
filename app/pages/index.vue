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
      class="relative bg-cover bg-center text-white"
      style="background-image: url(&quot;/images/hero-bg.jpg&quot;)"
    >
      <div
        class="absolute inset-0 bg-gradient-to-b from-emerald-900/80 via-emerald-800/70 to-emerald-700/60"
      ></div>

      <div
        class="relative max-w-7xl mx-auto px-6 md:px-10 py-28 text-center md:text-left"
      >
        <div data-aos="fade-up">
          <p
            class="animate mb-3 inline-flex rounded-full bg-emerald-200/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-100"
          >
            Engineering a Greener, Smarter Future
          </p>

          <h1
            class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Engineering a Greener, Smarter, <br />
            <span class="text-emerald-200">Sustainable Tomorrow</span>
          </h1>

          <p
            class="max-w-2xl text-base md:text-lg text-emerald-100/90 mb-10 leading-relaxed"
          >
            Delivering world-class Environmental, Sustainability, Waste,
            Facilities, and Specialized Support Services across
            <span class="font-semibold text-white">KSA, UK, USA</span> and
            global markets. <br /><br />
            At
            <span class="font-semibold text-white"
              >MaYa Sustainable Solutions</span
            >, we help organizations build compliant, resilient, and
            future-ready projects through innovative, integrated, and
            sustainable solutions.
          </p>

          <div class="flex flex-wrap gap-4 justify-center md:justify-start">
            <NuxtLink
              to="/contact"
              class="rounded-full bg-white text-emerald-800 px-6 py-3 text-xs font-semibold uppercase tracking-wide shadow-md hover:bg-emerald-100 transition"
            >
              Get a Consultation
            </NuxtLink>
            <NuxtLink
              to="/services"
              class="rounded-full border border-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white hover:bg-white hover:text-emerald-700 transition"
            >
              Explore Services
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="max-w-7xl mx-auto px-6 md:px-10 py-24">
      <div data-aos="fade-up">
        <h2 class="text-3xl font-bold text-emerald-800 mb-6">
          About MaYa — Global Presence & Mission
        </h2>
        <p class="text-slate-600 leading-relaxed mb-6">
          MaYa Sustainable Solutions is a multi-disciplinary environmental and
          sustainability consultancy operating across Saudi Arabia, the United
          Kingdom, the United States, and global markets.
        </p>

        <h3 class="text-xl font-semibold text-emerald-700 mb-2">Our Mission</h3>
        <p class="text-slate-600 mb-4 leading-relaxed">
          We empower organizations with high-quality environmental,
          sustainability, water, and waste solutions that protect people,
          enhance performance, and create long-term value.
        </p>

        <h3 class="text-xl font-semibold text-emerald-700 mb-2">Our Vision</h3>
        <p class="text-slate-600 leading-relaxed">
          To create a world where every community, business, and ecosystem
          thrive through responsible engineering, ethical action, and
          sustainable innovation — delivering a greener tomorrow for all.
        </p>
      </div>
    </section>

    <!-- CORE SERVICES -->
    <section class="bg-emerald-200 py-24 px-6 md:px-10">
      <div class="max-w-7xl mx-auto text-center">
        <h2
          data-aos="fade-up"
          class="text-3xl font-bold text-emerald-800 mb-10"
        >
          Core Services Overview
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

    <!-- FOOTER MINI SUMMARY -->
    <section class="bg-slate-900 text-emerald-100 py-10 text-center text-sm">
      <p class="max-w-3xl mx-auto px-6" data-aos="fade-up">
        MaYa Sustainable Solutions delivers trusted, compliant, and
        future-focused environmental, sustainability, waste, facilities, and
        operational services globally. We are committed to excellence,
        innovation, and long-term value.
      </p>
    </section>
  </div>
</template>
