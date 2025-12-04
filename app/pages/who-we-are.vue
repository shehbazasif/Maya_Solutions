<script setup lang="ts"></script>

<template>
  <section
    class="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] md:items-start"
  >
    <div>
      <p class="text-xs font-semibold uppercase tracking-wide text-emerald-700">
        Who we are
      </p>
      <h1
        class="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
      >
        A specialist partner for environmental, sustainability and FM services.
      </h1>
      <p class="mt-4 text-sm leading-relaxed text-slate-700">
        MaYa Sustainable Solutions is an international consulting and services
        firm focused on Environmental Compliance, Sustainability Implementation,
        Waste Management, Sustainable Building Construction, and Facilities
        Management.
      </p>
      <p class="mt-4 text-sm leading-relaxed text-slate-700">
        With a strong presence in Saudi Arabia and registered entities in the UK
        and USA, we combine local regulatory knowledge with global best practice
        to deliver dependable, compliant and efficient outcomes across the asset
        lifecycle.
      </p>
      <p class="mt-4 text-sm leading-relaxed text-slate-700">
        Our teams bring hands-on experience of supporting complex construction,
        infrastructure, industrial and public-sector projects – from early-stage
        planning through to operations and optimisation.
      </p>
    </div>

    <div
      class="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-800"
    >
      <h2 class="text-sm font-semibold text-slate-900">
        Why organisations choose MaYa
      </h2>
      <ul class="space-y-2 text-xs text-slate-700">
        <li class="flex gap-2">
          <span class="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-600" />
          Integrated environmental, sustainability, waste management, FM and
          equipment services through a single partner.
        </li>
        <li class="flex gap-2">
          <span class="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-600" />
          Strong understanding of Saudi, UK and US regulatory requirements and
          processes.
        </li>
        <li class="flex gap-2">
          <span class="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-600" />
          Technical specialists with hands-on project delivery experience across
          sectors.
        </li>
        <li class="flex gap-2">
          <span class="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-600" />
          Commitment to practical, implementable solutions – not just reports.
        </li>
        <li class="flex gap-2">
          <span class="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-600" />
          Focus on measurable environmental and ESG performance, aligned with
          client goals.
        </li>
      </ul>

      <NuxtLink
        to="/services"
        class="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-800 hover:border-emerald-600 hover:text-emerald-700"
      >
        Explore our services
      </NuxtLink>
    </div>
  </section>
</template>
