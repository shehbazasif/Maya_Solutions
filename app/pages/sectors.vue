<script setup lang="ts">
const sectors = [
  "Construction & infrastructure",
  "Industrial & manufacturing",
  "Government & public sector",
  "Utilities & energy",
  "Commercial & real estate",
  "Events & temporary sites",
];
</script>

<template>
  <section>
    <div class="mb-6">
      <p class="text-xs font-semibold uppercase tracking-wide text-emerald-700">
        Sectors
      </p>
      <h1
        class="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
      >
        Sectors we serve
      </h1>
      <p class="mt-3 max-w-2xl text-sm text-slate-700">
        We tailor our services to the specific regulatory, operational and
        stakeholder needs of each sector we work in.
      </p>
    </div>

    <div
      class="grid gap-4 rounded-3xl bg-gradient-to-r from-emerald-50 via-white to-sky-50 p-5 sm:grid-cols-3"
    >
      <div
        v-for="sector in sectors"
        :key="sector"
        class="rounded-2xl border border-transparent bg-white/70 px-4 py-3 text-sm font-medium text-slate-800 shadow-sm shadow-slate-100"
      >
        {{ sector }}
      </div>
    </div>
  </section>
</template>
