<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const isOpen = ref(false);
const isScrolled = ref(false);

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/who-we-are", label: "Who we are" },
  { to: "/services", label: "Services" },
  { to: "/sectors", label: "Sectors" },
  { to: "/global-presence", label: "Global presence" },
  { to: "/contact", label: "Contact" },
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header class="sticky top-0 z-30">
    <!-- Utility bar -->
    <div
      class="hidden border-b border-slate-100 bg-slate-900/95 text-[11px] text-slate-100 md:block"
    >
      <div
        class="mx-auto flex items-center justify-between px-4 py-1.5 lg:px-6"
      >
        <div class="flex items-center gap-4">
          <span class="font-medium tracking-wide text-emerald-300">
            MaYa Sustainable Solutions
          </span>
          <span class="h-3 w-px bg-slate-600" />
          <span class="text-slate-300">
            Environmental • Sustainability • Waste • FM • Equipment
          </span>
        </div>
        <div class="flex items-center gap-4">
          <a href="mailto:info@maya-intl.com" class="hover:text-emerald-300">
            info@maya-intl.com
          </a>
          <span class="h-3 w-px bg-slate-600" />
          <span>+1234556</span>
        </div>
      </div>
    </div>

    <!-- Main nav -->
    <div
      :class="[
        'border-b bg-white/80 backdrop-blur transition-shadow',
        isScrolled ? 'shadow-sm border-slate-200' : 'border-slate-100',
      ]"
    >
      <div class="mx-auto flex items-center justify-between px-8 py-8 lg:px-6">
        <!-- Logo / brand -->
        <NuxtLink to="/" class="flex items-center gap-3" @click="closeMenu">
          <div
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-lg font-semibold text-white"
          >
            M
          </div>
          <div class="leading-tight">
            <div class="text-sm font-semibold tracking-wide text-slate-900">
              MaYa Sustainable Solutions
            </div>
            <p class="text-[11px] text-slate-500">
              Global environmental & FM partner
            </p>
          </div>
        </NuxtLink>

        <!-- Desktop nav -->
        <nav
          class="hidden items-center gap-6 text-[15px] font-bold text-slate-700 md:flex"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="relative pb-1"
          >
            <span
              class="rounded-full px-2.5 py-1 uppercase tracking-wide hover:text-emerald-700"
            >
              {{ link.label }}
            </span>
            <span
              class="pointer-events-none absolute inset-x-2.5 -bottom-px hidden h-[2px] rounded-full bg-emerald-600 md:group-[.router-link-active]:block"
            />
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm shadow-emerald-300/60 hover:bg-emerald-700"
          >
            Request a consultation
          </NuxtLink>
        </nav>

        <!-- Mobile menu button -->
        <button
          class="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white p-2 text-slate-700 md:hidden"
          @click="toggleMenu"
        >
          <span class="sr-only">Toggle navigation</span>
          <!-- Hamburger / close icon -->
          <svg
            v-if="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile nav -->
      <div v-if="isOpen" class="border-t border-slate-200 bg-white md:hidden">
        <nav
          class="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-700 lg:px-6"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="rounded-full px-3 py-2 hover:bg-emerald-50 hover:text-emerald-700"
            active-class="bg-emerald-50 text-emerald-700"
            @click="closeMenu"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="mt-1 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm shadow-emerald-300/60 hover:bg-emerald-700"
            @click="closeMenu"
          >
            Request a consultation
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>
