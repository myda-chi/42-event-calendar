export interface Event {
  id: string
  title: string
  description: string
  content?: string
  image?: string
  category: string
  location: string
  startDate: string
  endDate?: string
  price: number
  capacity: number
  attendees: number
  organizer: {
    id: string
    name: string
    image?: string
  }
  isFeatured: boolean
  isPublished: boolean
  createdAt: string
  updatedAt: string
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
