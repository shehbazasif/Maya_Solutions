<template>
  <div class="flex min-h-screen flex-col bg-slate-50 text-slate-900">
    <MainNav />
    <main
      class="mx-auto w-full flex-1 px-4 pb-16 pt-8 lg:px-6 lg:pt-12"
    >
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
