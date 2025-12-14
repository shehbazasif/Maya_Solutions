<script setup lang="ts"></script>

<template>
  <section
    class="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] md:items-start"
  >
    <div>
      <p class="text-xs font-semibold uppercase tracking-wide text-emerald-700">
        Contact
      </p>
      <h1
        class="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
      >
        Let’s talk about your project.
      </h1>
      <p class="mt-3 text-sm text-slate-700">
        Share an outline of your requirements and locations, and our team will
        come back to you with tailored options and next steps.
      </p>

      <div class="mt-6 space-y-2 text-sm text-slate-800">
        <p>
          <span class="font-semibold">Email:</span>
          <a
            href="mailto:info@maya-intl.com"
            class="ml-1 text-emerald-700 hover:underline"
          >
            info@maya-intl.com
          </a>
          <span class="ml-1 text-xs text-slate-500">(placeholder)</span>
        </p>
        <p>
          <span class="font-semibold">Phone:</span>
          <span class="ml-1">+1234556</span>
        </p>
        <p>
          <span class="font-semibold">Website:</span>
          <span class="ml-1">www.maya.intl.com (under development)</span>
        </p>
        <p class="mt-3 text-xs text-slate-500">
          Primary locations: Riyadh (Saudi Arabia), London (United Kingdom),
          Texas (United States).
        </p>
      </div>
    </div>

    <div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 class="mb-3 text-sm font-semibold text-slate-900">Send us a brief</h2>
      <form class="space-y-3 text-sm">
        <div>
          <label class="mb-1 block text-xs font-semibold text-slate-700">
            Name
          </label>
          <input
            type="text"
            class="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label class="mb-1 block text-xs font-semibold text-slate-700">
            Company / organisation
          </label>
          <input
            type="text"
            class="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white"
            placeholder="Company name"
          />
        </div>
        <div>
          <label class="mb-1 block text-xs font-semibold text-slate-700">
            Email
          </label>
          <input
            type="email"
            class="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label class="mb-1 block text-xs font-semibold text-slate-700">
            How can we help?
          </label>
          <textarea
            rows="4"
            class="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white"
            placeholder="Briefly describe your project, locations, and required services."
          />
        </div>
        <button
          type="button"
          class="mt-1 w-full rounded-full bg-emerald-600 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-sm shadow-emerald-300/60 hover:bg-emerald-700"
        >
          Submit enquiry (placeholder)
        </button>
        <p class="mt-1 text-[10px] text-slate-500">
          This form is a static placeholder. Connect it to your preferred
          backend or form service to start receiving enquiries.
        </p>
      </form>
    </div>
  </section>
</template>
