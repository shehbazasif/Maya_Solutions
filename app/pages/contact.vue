<script setup lang="ts">
import Contact from "~/components/Contact.vue";
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mb-10 text-center">
      <p class="text-xs font-semibold uppercase tracking-wide text-emerald-700">
        Contact
      </p>
      <h1
        class="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
      >
        Get in touch with MaYa Solutions
      </h1>
      <p class="mt-4 max-w-2xl mx-auto text-sm text-slate-600">
        Fill out the form or use the contact details below to request a
        consultation, project estimate, or follow-up from our global team.
      </p>
    </div>

    <Contact />
  </main>
</template>
