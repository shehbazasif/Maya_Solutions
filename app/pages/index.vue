<template>
  <main class="maya-sustainable-landing">
    <!-- Definition-Lead Section: Sabse pehle AI bots isko read karenge -->
    <header class="hero-section">
      <div class="container">
        <h1>Maya Solution Sustainable</h1>
        <p class="lead-definition">
          Maya Solution Sustainable delivers integrated construction site support, facility management, and comprehensive environmental ESG frameworks across multiple sectors.
        </p>
      </div>
    </header>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container stats-grid">
        <div v-for="stat in keyStats" :key="stat.label" class="stat-card">
          <span class="stat-value">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- Services Grid (Structured for AI Crawlers) -->
    <section class="services-section">
      <div class="container">
        <h2>Our Core Service Lines</h2>
        <div class="services-grid">
          <article v-for="service in services" :key="service.title" class="service-card">
            <img :src="service.image" :alt="service.title" class="service-img" />
            <div class="service-content">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// --- Slider & Interval Logic (Aapka Base Code) ---
const currentSlide = ref(0);
let intervalId = null;

const nextSlide = () => {
  // Assuming you have a slides array length, adjust if needed
  currentSlide.value = (currentSlide.value + 1) % 3; 
};

const goToSlide = (index) => {
  currentSlide.value = index;
  resetInterval();
};

const resetInterval = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(nextSlide, 5000);
};

onMounted(() => {
  intervalId = setInterval(nextSlide, 5000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});

// --- Data Arrays ---
const keyStats = [
  { label: "Countries", value: "3+" },
  { label: "Core Service Lines", value: "5" },
  { label: "Sectors Served", value: "10+" },
];

const services = [
  {
    title: "Integrated Construction Site Support",
    image: "/images/construction-integration.jpg",
    description: "Expert site support for active construction and fit-out stages. From finishing works to civil rectification, we deliver coordination and execution without main contractor responsibility.",
  },
  {
    title: "Facilities Management",
    image: "/images/facility_management.jpg",
    description: "Professional landscaping and external works aligned with construction schedules. Soft and hard landscaping, defect rectification, and seamless handover assistance.",
  },
  {
    title: "Landscaping & External Works Support",
    image: "/images/Landscapping-cardimages.jpg",
    description: "Professional landscaping and external works aligned with construction schedules. Soft and hard landscaping, defect rectification, and seamless handover assistance.",
  },
  {
    title: "Environmental Services",
    image: "/images/Environmental-Services.jpg",
    description: "Environmental assessments, compliance management, monitoring, permitting, audits, and remediation oversight.",
  },
  {
    title: "Sustainability & ESG",
    image: "/images/sustainable-development-goals-still-life.jpg",
    description: "ESG strategy, carbon reduction, LEED, Mostadam, and Envision certification support for sustainable growth.",
  },
  {
    title: "Waste Management",
    image: "/images/waste-management.jpg",
    description: "Innovative waste collection, recycling, segregation, and zero-waste compliance programs.",
  },
  {
    title: "Specialized Equipment & Support",
    image: "/images/special-equipments.jpg",
    description: "Provision of environmental monitoring equipment, machinery, and on-site operational support.",
  },
];

// --- GEO & AI-SEO Optimizations (Nuxt 4 Composables) ---
useSeoMeta({
  title: 'Maya Solution Sustainable | Integrated Construction & ESG Support',
  description: 'Maya Solution Sustainable offers certified construction site support, facilities management, waste management, and global ESG consultancy.',
  ogTitle: 'Maya Solution Sustainable',
  ogDescription: 'Providing environmental compliance, specialized equipment, and structural site support across 3+ countries.',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Maya Solution Sustainable",
        "description": "Specialized provider for integrated construction site support, landscaping, waste management, and corporate ESG compliance solutions.",
        "knowsAbout": [
          "Integrated Construction Support",
          "Facilities Management",
          "Environmental Services & Audits",
          "Sustainability & ESG Strategy",
          "Waste Management Compliance",
          "LEED and Mostadam Certification"
        ]
      })
    }
  ]
})
</script>

<style scoped>
/* Basic scannable styles to help maintain visual layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.lead-definition {
  font-size: 1.3rem;
  line-height: 1.6;
  max-width: 800px;
}
.stats-grid, .services-grid {
  display: grid;
  gap: 20px;
}
.stats-grid {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.services-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.service-card {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
}
.service-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.service-content {
  padding: 15px;
}
</style>