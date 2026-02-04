<script setup lang="ts">
import { ref } from 'vue'

const showSuccess = ref(false)

const handleSubmit = async (e: Event) => {
  e.preventDefault()

  const form = e.target as HTMLFormElement
  const formData = new FormData(form)

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  })

  if (res.ok) {
    form.reset()
    showSuccess.value = true

    setTimeout(() => {
      showSuccess.value = false
    }, 3000)
  }
}

const contactInfo = [
  {
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>`,
    label: "Email",
    value: "info@mayassc.com",
    href: "mailto:info@mayassc.com"
  },
  {
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>`,
    label: "Phone",
    value: "+966 53 100 8586",
    href: "tel:+966531008586"
  },
  {
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
    </svg>`,
    label: "Website",
    value: "www.mayassc.com",
    href: "https://www.mayassc.com"
  }
]
</script>

<template>
  <section class="relative py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 overflow-hidden">
    <!-- Background Decorations -->
    <div class="absolute top-20 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

    <div class="relative max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12 lg:mb-16">
        <div class="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-5 py-2 rounded-full mb-6 shadow-lg">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          <span class="font-bold text-xs uppercase tracking-widest">Get In Touch</span>
        </div>
        
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-slate-900">
          Let's Talk About Your
          <span class="block bg-gradient-to-r from-emerald-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
            Project
          </span>
        </h1>
        
        <p class="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          Share your requirements and our team will come back with tailored solutions
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
        
        <!-- Left Column - Contact Info -->
        <div class="space-y-6">
          <!-- Contact Cards -->
          <div class="space-y-4">
            <div 
              v-for="info in contactInfo" 
              :key="info.label"
              class="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-5 rounded-2xl border-2 border-slate-200 transition-all duration-300 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 text-white rounded-xl flex items-center justify-center" v-html="info.icon"></div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">{{ info.label }}</p>
                <a 
                  v-if="info.href"
                  :href="info.href" 
                  class="text-base font-semibold text-slate-900 hover:text-emerald-600 transition-colors break-all"
                >
                  {{ info.value }}
                </a>
                <p v-else class="text-base font-semibold text-slate-900">
                  {{ info.value }}
                  <span v-if="info.note" class="text-xs text-slate-500 ml-1">{{ info.note }}</span>
                </p>
              </div>
            </div>
          </div>

          <!-- Locations -->
          <div class="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-2xl border-2 border-emerald-200">
            <div class="flex items-center gap-2 mb-4">
              <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wide">Our Locations</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="bg-white px-4 py-2 rounded-full text-sm font-semibold text-slate-700 border-2 border-emerald-200">🇸🇦 Riyadh</span>
              <span class="bg-white px-4 py-2 rounded-full text-sm font-semibold text-slate-700 border-2 border-emerald-200">🇬🇧 London</span>
              <span class="bg-white px-4 py-2 rounded-full text-sm font-semibold text-slate-700 border-2 border-emerald-200">🇺🇸 Texas</span>
            </div>
          </div>
        </div>

        <!-- Right Column - Form -->
        <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border-2 border-slate-200 shadow-xl">
          <h2 class="text-2xl font-bold text-slate-900 mb-2">Send Us a Brief</h2>
          <p class="text-sm text-slate-600 mb-6">Fill out the form and we'll respond promptly</p>
          
          <form class="space-y-4" @submit="handleSubmit">
            <input type="hidden" name="access_key" value="58bbf341-9481-4df9-af44-b883074eaaeb" />

            <!-- Name -->
            <div>
              <label class="block text-sm font-bold text-slate-900 mb-2">
                Name <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                class="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
                placeholder="Your full name"
              />
            </div>

            <!-- Company -->
            <div>
              <label class="block text-sm font-bold text-slate-900 mb-2">
                Company / Organisation
              </label>
              <input
                type="text"
                name="company"
                class="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
                placeholder="Company name"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-bold text-slate-900 mb-2">
                Email <span class="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                class="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
                placeholder="you@example.com"
              />
            </div>

            <!-- Message -->
            <div>
              <label class="block text-sm font-bold text-slate-900 mb-2">
                How Can We Help? <span class="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                name="message"
                required
                class="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/20 resize-none"
                placeholder="Briefly describe your project requirements..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-95"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Success Notification -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div
        v-if="showSuccess"
        class="fixed bottom-6 right-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 max-w-sm"
      >
        <div class="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <div>
          <p class="font-bold">Success!</p>
          <p class="text-sm text-emerald-100">Request submitted successfully</p>
        </div>
      </div>
    </transition>
  </section>
</template>