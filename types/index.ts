export type City = 'San Miguel de Allende' | 'León'

export type Category =
  | 'Restaurante'
  | 'Hotel'
  | 'Galería'
  | 'Spa'
  | 'Boutique'
  | 'Café'
  | 'Club'
  | 'Servicios'
  | 'Real Estate'
  | 'Moda'
  | 'Arte'
  | 'Cultura'
  | 'Música'
  | 'Lifestyle'
  | 'Inversión'
  | 'Experiencias'
  | 'Wellness'
  | 'Eventos'
  | 'Estacionamiento'
  | 'Hacienda'
  | 'Interiorismo'
  | 'Arquitectura'

export type MembershipTier = 'Estrella' | 'Diamante' | 'Founder'

export interface Business {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  story: string
  category: Category
  city: City
  tier: MembershipTier
  coverImage: string
  heroImage: string
  gallery: string[]
  address: string
  neighborhood: string
  phone: string
  email: string
  website?: string
  instagram?: string
  hours: {
    weekdays: string
    weekend: string
    closed?: string
  }
  services: string[]
  tags: string[]
  coordinates: {
    lat: number
    lng: number
  }
  featured: boolean
  since: number
}

export interface Neighborhood {
  id: string
  slug: string
  name: string
  city: City
  image: string
  description: string
  urbanScore: number
  investmentSignal: 'Alto' | 'Medio' | 'Emergente' | 'Consolidado'
  lifestyleProfile: string
  metrics: {
    seguridad: number
    plusvalia: number
    conectividad: number
    gastronomia: number
    cultura: number
    hospitality: number
    vidaSocial: number
    walkability: number
    estetica: number
    inversion: number
    comunidadInt: number
    actividadNocturna: number
  }
  priceRange: string
  propertyTypes: string[]
  highlights: string[]
}

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  city: City | 'Bajío'
  date: string
  readTime: number
  author: string
  image: string
  featured: boolean
}

export interface Event {
  id: string
  name: string
  venue: string
  city: City
  date: string
  time: string
  type: string
  accessLevel: 'Público' | 'Miembros' | 'Privado' | 'Por invitación'
  image: string
  description: string
}

export interface DirectoryCategory {
  id: string
  name: string
  editorialDescription: string
  memberCount: number
  image: string
  badge: 'Curated' | 'Verified' | 'BRAGO Selection' | 'Coming Soon'
  icon: string
  featured: boolean
}

export interface MembershipPlan {
  tier: MembershipTier
  name: string
  priceLabel: string
  monthlyPrice: number | null
  tagline: string
  features: string[]
  highlight?: string
  badge: string
}

export type FilterState = {
  city: City | 'Todas'
  category: Category | 'Todas'
  tier: MembershipTier | 'Todas'
  search: string
}
