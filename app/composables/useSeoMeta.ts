/**
 * Composable for managing SEO meta tags across pages
 */

interface SEOOptions {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  canonical?: string;
  robots?: string;
}

export const useSeoMeta = (options: SEOOptions) => {
  const {
    title,
    description,
    ogTitle = title,
    ogDescription = description,
    ogImage = '/images/og-image.jpg',
    ogType = 'website',
    keywords = '',
    canonical = '',
    robots = 'index, follow'
  } = options;

  const baseUrl = 'https://www.mayassc.com';

  const meta = [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'robots', content: robots },
    { name: 'language', content: 'English' },
    
    // Open Graph
    { property: 'og:type', content: ogType },
    { property: 'og:title', content: ogTitle },
    { property: 'og:description', content: ogDescription },
    { property: 'og:image', content: ogImage },
    { property: 'og:site_name', content: 'Maya Solutions' },
    { property: 'og:url', content: baseUrl },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: ogTitle },
    { name: 'twitter:description', content: ogDescription },
    { name: 'twitter:image', content: ogImage },

    // Additional
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#10b981' },
  ];

  const link: any[] = [];
  if (canonical) {
    link.push({ rel: 'canonical', href: canonical });
  }

  return useHead({
    title,
    meta,
    link
  });
};
