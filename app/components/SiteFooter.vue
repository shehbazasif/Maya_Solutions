<script setup lang="ts">
const currentYear = new Date().getFullYear();

const quickLinks = [
  { label: "Who we are", to: "/who-we-are" },
  { label: "Services", to: "/services" },
  { label: "Sectors", to: "/sectors" },
  { label: "Global presence", to: "/global-presence" },
  { label: "Contact", to: "/contact" },
];

const serviceHighlights = [
  "Environmental compliance & permitting",
  "Sustainability & ESG advisory",
  "Waste management",
  "Facilities management",
  "Equipment & operational support",
];

const offices = [
  {
    name: "Saudi Arabia",
    city: "Riyadh",
    note: "Operational hub for KSA projects",
  },
  {
    name: "United Kingdom",
    city: "London",
    note: "Consulting, ESG & FM partnerships",
  },
  {
    name: "United States",
    city: "Texas",
    note: "Consulting & technical services",
  },
];
</script>

<template>
  <footer class="mt-auto border-t border-slate-200 bg-slate-900 text-slate-100">
    <div class="mx-auto px-4 py-10 lg:px-6">
      <div
        class="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_repeat(2,minmax(0,1fr))]"
      >
        <!-- Brand / summary -->
        <div>
          <div class="flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-lg font-semibold text-slate-900"
            >
              M
            </div>
            <div>
              <p class="text-sm font-semibold tracking-wide">
                MaYa Sustainable Solutions
              </p>
              <p class="text-[11px] text-slate-300">
                Environmental • Sustainability • Waste • FM • Equipment
              </p>
            </div>
          </div>
          <p class="mt-4 max-w-md text-sm text-slate-300">
            MaYa Sustainable Solutions supports organisations across Saudi
            Arabia, the United Kingdom and the United States with integrated
            environmental, sustainability, waste, FM and equipment services.
          </p>
          <div class="mt-4 text-sm">
            <p>
              <span class="font-semibold text-slate-50">Email:</span>
              <a
                href="mailto:info@maya-intl.com"
                class="ml-1 text-emerald-300 hover:text-emerald-200"
              >
                info@maya-intl.com
              </a>
            </p>
            <p class="mt-1">
              <span class="font-semibold text-slate-50">Phone:</span>
              <span class="ml-1">+1234556</span>
            </p>
          </div>
        </div>

        <!-- Quick links & services -->
        <div class="space-y-6 text-sm">
          <div>
            <h3
              class="text-xs font-semibold uppercase tracking-wide text-slate-300"
            >
              Navigation
            </h3>
            <ul class="mt-3 space-y-1.5">
              <li v-for="link in quickLinks" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  class="text-slate-300 hover:text-emerald-300"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h3
              class="text-xs font-semibold uppercase tracking-wide text-slate-300"
            >
              Key services
            </h3>
            <ul class="mt-3 space-y-1.5 text-slate-300">
              <li
                v-for="item in serviceHighlights"
                :key="item"
                class="flex gap-2"
              >
                <span
                  class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Offices -->
        <div class="text-sm">
          <h3
            class="text-xs font-semibold uppercase tracking-wide text-slate-300"
          >
            Offices
          </h3>
          <ul class="mt-3 space-y-3">
            <li v-for="office in offices" :key="office.name">
              <p class="font-semibold text-slate-50">
                {{ office.name }}
              </p>
              <p class="text-[13px] text-emerald-300">
                {{ office.city }}
              </p>
              <p class="text-[12px] text-slate-300">
                {{ office.note }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-slate-800 bg-slate-950">
      <div
        class="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-[11px] text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-6"
      >
        <p>
          © {{ currentYear }} MaYa Sustainable Solutions. All rights reserved.
        </p>
        <p>
          Brand palette: navy, green & white – reflecting trust, sustainability
          and clarity.
        </p>
      </div>
    </div>
  </footer>
</template>
