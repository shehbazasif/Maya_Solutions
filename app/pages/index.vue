<script setup lang="ts">
const keyStats = [
  { label: "Countries", value: "3+" },
  { label: "Core service lines", value: "5" },
  { label: "Sectors served", value: "10+" },
];
</script>

<template>
  <section
    class="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] md:items-center"
  >
    <div>
      <p
        class="mb-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700"
      >
        Global environmental & sustainability partner
      </p>
      <h1
        class="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
      >
        Integrated solutions for environmental compliance and sustainable
        operations.
      </h1>
      <p class="mb-6 max-w-xl text-sm leading-relaxed text-slate-600">
        MaYa Sustainable Solutions delivers Environmental, Sustainability, Waste
        Management, Facilities Management, and Equipment services across Saudi
        Arabia, the United Kingdom and the United States – helping organisations
        stay compliant, reduce risk, and build resilient assets.
      </p>

      <div class="flex flex-wrap gap-3">
        <NuxtLink
          to="/contact"
          class="rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-sm shadow-emerald-300/60 hover:bg-emerald-700"
        >
          Talk to our team
        </NuxtLink>
        <NuxtLink
          to="/services"
          class="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate-800 hover:border-emerald-600 hover:text-emerald-700"
        >
          Explore services
        </NuxtLink>
      </div>

      <!-- Key stats -->
      <div class="mt-8 grid gap-4 text-sm text-slate-700 sm:grid-cols-3">
        <div
          v-for="stat in keyStats"
          :key="stat.label"
          class="rounded-2xl border border-slate-200 bg-white px-4 py-3"
        >
          <div class="text-lg font-semibold text-emerald-700">
            {{ stat.value }}
          </div>
          <div class="text-xs uppercase tracking-wide text-slate-500">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>

    <!-- Hero side panel -->
    <div
      class="rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-5 shadow-sm"
    >
      <h2
        class="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-800"
      >
        How we support your projects
      </h2>
      <ul class="space-y-3 text-sm text-slate-700">
        <li class="flex gap-3">
          <span
            class="mt-1 h-6 w-6 shrink-0 rounded-full bg-emerald-600/10 text-center text-xs font-semibold leading-6 text-emerald-700"
          >
            01
          </span>
          <div>
            <p class="font-semibold text-slate-900">
              Environmental & regulatory compliance
            </p>
            <p class="text-xs text-slate-600">
              Navigate national and international requirements with clear,
              actionable guidance and robust documentation.
            </p>
          </div>
        </li>
        <li class="flex gap-3">
          <span
            class="mt-1 h-6 w-6 shrink-0 rounded-full bg-emerald-600/10 text-center text-xs font-semibold leading-6 text-emerald-700"
          >
            02
          </span>
          <div>
            <p class="font-semibold text-slate-900">
              Operational efficiency & risk reduction
            </p>
            <p class="text-xs text-slate-600">
              Integrated services that streamline site operations while managing
              environmental and safety risk.
            </p>
          </div>
        </li>
        <li class="flex gap-3">
          <span
            class="mt-1 h-6 w-6 shrink-0 rounded-full bg-emerald-600/10 text-center text-xs font-semibold leading-6 text-emerald-700"
          >
            03
          </span>
          <div>
            <p class="font-semibold text-slate-900">
              Measurable sustainability outcomes
            </p>
            <p class="text-xs text-slate-600">
              From strategy and design to reporting, we embed sustainability and
              ESG into everyday decision-making.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
