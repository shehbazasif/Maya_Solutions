<script setup lang="ts">
const serviceGroups = [
  {
    title: "Environmental services",
    description:
      "End-to-end environmental support across planning, construction and operations.",
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
    items: [
      "Hard FM: MEP maintenance, HVAC, electrical systems, civil works",
      "Soft FM: Cleaning, landscaping & general maintenance",
    ],
  },
  {
    title: "Equipment & operational support",
    description:
      "Reliable equipment and manpower tailored to project and operational needs.",
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
  <section class="bg-emerald-50 py-20 px-5 md:px-10">
    <!-- Header -->
    <div class="mb-12 max-w-5xl mx-auto text-center">
      <p
        class="text-sm font-semibold uppercase tracking-widest text-emerald-700"
      >
        Services
      </p>
      <h1 class="mt-2 text-4xl md:text-5xl font-bold text-slate-900">
        What We Do
      </h1>
      <p class="mt-4 text-slate-700 text-base md:text-lg">
        From early-stage advisory to ongoing operations support, we deliver
        integrated services for construction, industrial, commercial, and
        government clients.
      </p>
    </div>

    <!-- Service Cards Grid -->
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      <article
        v-for="group in serviceGroups"
        :key="group.title"
        class="relative flex flex-col rounded-3xl border border-emerald-100 bg-white shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
      >
        <!-- Top Gradient / Accent -->
        <div
          class="absolute -top-2 left-0 w-20 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 rounded-full"
        ></div>

        <div class="p-6 flex flex-col h-full">
          <!-- Title -->
          <h2 class="text-lg font-semibold text-emerald-800">
            {{ group.title }}
          </h2>
          <p class="text-sm text-slate-600 ">{{ group.description }}</p>

          <!-- Items List -->
          <ul class="mt-7 space-y-2 text-sm text-slate-700">
            <li
              v-for="item in group.items"
              :key="item"
              class="flex items-start gap-3"
            >
              <!-- Custom icon / bullet -->
              <span
                class="flex-shrink-0 m h-3 w-3 rounded-full bg-emerald-600"
              ></span>
              <span class="text-sm text-slate-700 ">{{
                item
              }}</span>
            </li>
          </ul>
        </div>
      </article>
    </div>

    <!-- CTA Button at Bottom -->
    <div class="mt-12 text-center">
      <NuxtLink
        to="/contact"
        class="inline-block rounded-full bg-green-600 text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-emerald-700 transition-colors duration-300"
      >
        Discuss a Project
      </NuxtLink>
    </div>
  </section>
</template>
