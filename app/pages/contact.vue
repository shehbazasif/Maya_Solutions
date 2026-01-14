<script setup lang="ts">
const showSuccess = ref(false);

const handleSubmit = async (e: Event) => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    form.reset();              // ✅ clear form
    showSuccess.value = true;  // ✅ show popup

    setTimeout(() => {
      showSuccess.value = false;
    }, 3000);
  }
};

</script>

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
            info@mayassc.com
          </a>
          <span class="ml-1 text-xs text-slate-500">(placeholder)</span>
        </p>
        <p>
          <span class="font-semibold">Phone:</span>
          <span class="ml-1">+966 53 100 8586</span>
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
      <form
  class="space-y-3 text-sm"
  @submit="handleSubmit"
>
  <!-- REQUIRED -->
  <input
    type="hidden"
    name="access_key"
    value="58bbf341-9481-4df9-af44-b883074eaaeb"
  />

  <div>
    <label class="mb-1 block text-xs font-semibold text-slate-700">
      Name
    </label>
    <input
      type="text"
      name="name"
      required
      class="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2"
      placeholder="Your full name"
    />
  </div>

  <div>
    <label class="mb-1 block text-xs font-semibold text-slate-700">
      Company / organisation
    </label>
    <input
      type="text"
      name="company"
      class="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2"
      placeholder="Company name"
    />
  </div>

  <div>
    <label class="mb-1 block text-xs font-semibold text-slate-700">
      Email
    </label>
    <input
      type="email"
      name="email"
      required
      class="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2"
      placeholder="you@example.com"
    />
  </div>

  <div>
    <label class="mb-1 block text-xs font-semibold text-slate-700">
      How can we help?
    </label>
    <textarea
      rows="4"
      name="message"
      required
      class="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2"
      placeholder="Briefly describe your project."
    />
  </div>

  <button
    type="submit"
    class="mt-1 w-full rounded-full bg-emerald-600 px-4 py-2.5
           text-xs font-semibold uppercase tracking-wide text-white
           hover:bg-emerald-700 transition-all duration-300"
  >
    Submit enquiry
  </button>
</form>

<!-- ✅ SUCCESS POPUP -->
<div
  v-if="showSuccess"
  class="fixed bottom-6 right-6 rounded-xl bg-emerald-600
         px-4 py-3 text-xs font-semibold text-white shadow-lg"
>
  ✅ Request submitted successfully
</div>

    </div>
  </section>
</template>
