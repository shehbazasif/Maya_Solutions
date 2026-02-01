export interface ServicePageProps {
  hero: {
    title: string
    subtitle: string
    image: string
    badge?: string
  }
  about: {
    heading: string
    description: string
    features: Array<{
      title: string
      description: string
      icon: string
    }>
  }
  services: {
    heading: string
    items: Array<{
      title: string
      description: string
      points: string[]
    }>
  }
  benefits?: {
    heading: string
    items: string[]
  }
}