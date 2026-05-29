<script setup lang="ts">
const currentYear = new Date().getFullYear();

const quickLinks = [
  { label: "Who we are", to: "/who-we-are" },
  { label: "Services", to: "/services" },
  { label: "Sectors", to: "/sectors" },
  { label: "Global presence", to: "/global-presence" },
  { label: "Contact", to: "/contact" },
];

const services = [
  { name: "Construction Site Support & Finishing Works", icon: "🏗️" },
  { name: "Facilities Management & Utilities", icon: "⚙️" },
  { name: "Landscaping & External Works", icon: "🌿" },
  { name: "Environmental Services & Compliance", icon: "🌍" },
  { name: "Waste Management & Sustainable Solutions", icon: "♻️" },
];

const offices = [
  {
    flag: "🇸🇦",
    country: "Saudi Arabia",
    city: "Riyadh",
    note: "Operational Hub",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    city: "London",
    note: "European Operations",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    flag: "🇺🇸",
    country: "United States",
    city: "Texas",
    note: "Americas Hub",
    gradient: "from-orange-500 to-red-500",
  },
];

const socialLinks = [
  { name: "LinkedIn", icon: "linkedin", href: "#" },
  { name: "Twitter", icon: "twitter", href: "#" },
  { name: "Facebook", icon: "facebook", href: "#" },
];
</script>

<template>
  <footer class="relative mt-auto bg-slate-900 text-slate-100 overflow-hidden">
    <!-- Background Decorations -->
    <div
      class="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
    ></div>

    <!-- Main Footer Content -->
    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg"
            >
              <image src="images/logo.png" alt="MaYa Logo" class="w-8 h-8" />
            </div>
            <div>
              <p class="text-lg font-black text-white">MaYa</p>
              <p class="text-xs text-emerald-400 font-semibold">
                Sustainable Solutions
              </p>
            </div>
          </div>

          <p class="text-sm text-slate-300 leading-relaxed mb-6">
            Delivering integrated construction support, facilities management,
            landscaping, environmental compliance, and sustainable solutions
            across three continents.
          </p>

          <!-- Contact Info -->
          <div class="space-y-3">
            <a
              href="mailto:info@mayassc.com"
              class="flex items-center gap-3 text-sm text-slate-300 hover:text-emerald-400 transition-colors group"
            >
              <div
                class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span class="font-semibold">info@mayassc.com</span>
            </a>

            <a
              href="tel:+966531008586"
              class="flex items-center gap-3 text-sm text-slate-300 hover:text-emerald-400 transition-colors group"
            >
              <div
                class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <span class="font-semibold">+966 53 100 8586</span>
            </a>
          </div>
        </div>

        <!-- Quick Links Column -->
        <div>
          <h3
            class="text-sm font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2"
          >
            <div
              class="w-1 h-4 bg-gradient-to-b from-emerald-500 to-green-500 rounded-full"
            ></div>
            Quick Links
          </h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
              >
                <svg
                  class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services Column -->
        <div>
          <h3
            class="text-sm font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2"
          >
            <div
              class="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"
            ></div>
            Our Services
          </h3>
          <ul class="space-y-3">
            <li
              v-for="service in services"
              :key="service.name"
              class="flex items-start gap-2 text-sm text-slate-300"
            >
              <span class="flex-shrink-0 text-base">{{ service.icon }}</span>
              <span class="leading-relaxed">{{ service.name }}</span>
            </li>
          </ul>
        </div>

        <!-- Offices Column -->
        <div>
          <h3
            class="text-sm font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2"
          >
            <div
              class="w-1 h-4 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"
            ></div>
            Global Offices
          </h3>
          <ul class="space-y-4">
            <li v-for="office in offices" :key="office.country" class="group">
              <div
                class="flex items-start gap-3 p-3 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors"
              >
                <div class="text-2xl">{{ office.flag }}</div>
                <div>
                  <p class="font-bold text-white text-sm">
                    {{ office.country }}
                  </p>
                  <p class="text-xs text-emerald-400 font-semibold">
                    {{ office.city }}
                  </p>
                  <p class="text-xs text-slate-400 mt-1">{{ office.note }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Social Links & Newsletter -->
      <div class="mt-12 pt-8 border-t border-slate-800">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <!-- Social Links -->
          <div class="flex items-center gap-4">
            <p class="text-sm font-semibold text-slate-400">Follow Us:</p>
            <div class="flex gap-3">
              <a
                href="#"
                class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-emerald-500 hover:to-green-500 transition-all duration-300 group"
              >
                <svg
                  class="w-5 h-5 text-slate-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 group"
              >
                <svg
                  class="w-5 h-5 text-slate-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500 transition-all duration-300 group"
              >
                <svg
                  class="w-5 h-5 text-slate-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Certifications/Badges -->
          <div class="flex items-center gap-4">
            <div
              class="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700"
            >
              <p class="text-xs text-slate-400 font-semibold">ISO Certified</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-slate-800 bg-slate-950">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400"
        >
          <p>
            © {{ currentYear }} MaYa Sustainable Solutions. All rights reserved.
          </p>
          <div class="flex gap-6">
            <a href="/privacy" class="hover:text-emerald-400 transition-colors"
              >Privacy Policy</a
            >
            <a href="/terms" class="hover:text-emerald-400 transition-colors"
              >Terms of Service</a
            >
            <a href="/cookies" class="hover:text-emerald-400 transition-colors"
              >Cookie Policy</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
