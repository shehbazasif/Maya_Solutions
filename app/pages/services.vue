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
  <section>
    <div
      class="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
    >
      <div>
        <p
          class="text-xs font-semibold uppercase tracking-wide text-emerald-700"
        >
          Services
        </p>
        <h1
          class="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
        >
          What we do
        </h1>
        <p class="mt-3 max-w-2xl text-sm text-slate-700">
          From early-stage advisory to ongoing operations support, we deliver
          integrated services for construction, industrial, commercial and
          government clients.
        </p>
      </div>
      <NuxtLink
        to="/contact"
        class="self-start rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-800 hover:border-emerald-600 hover:text-emerald-700"
      >
        Discuss a project
      </NuxtLink>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <article
        v-for="group in serviceGroups"
        :key="group.title"
        class="flex flex-col rounded-3xl border border-slate-200 bg-white p-5"
      >
        <h2
          class="text-sm font-semibold uppercase tracking-wide text-slate-900"
        >
          {{ group.title }}
        </h2>
        <p class="mt-2 text-xs text-slate-600">
          {{ group.description }}
        </p>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li v-for="item in group.items" :key="item" class="flex gap-2">
            <span
              class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"
            />
            <span>{{ item }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
