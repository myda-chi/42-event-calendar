export interface Event {
  id: string
  title: string
  description: string
  content: string | null
  image: string | null
  category: string
  location: string
  startDate: string
  endDate: string | null
  price: number
  capacity: number
  attendees: number
  organizer: {
    id: string
    name: string
    image: string | null
    createdAt: Date
    updatedAt: Date
  }
  isFeatured: boolean
  isPublished: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Product {
  id: string
  name: string
  description: string
  fullDescription?: string
  price: number
  image?: string
  images?: string[]
  category: string
  rating: number
  reviewCount: number
  benefits: string[]
  ingredients?: string
  howToUse?: string
}
