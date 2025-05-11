import { notFound } from "next/navigation"
import Image from "next/image"
import type { Metadata } from "next"
import { CalendarDays, MapPin, Heart, Calendar } from "lucide-react"
import { getEventById } from "@/lib/data"
import { formatDateTime } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import RegisterEventButton from "@/components/register-event-button"
import ShareButton from "@/components/share-button"

interface EventPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const event = await getEventById(params.id)

  if (!event) {
    return {
      title: "Event Not Found | 42 Events Calendar",
    }
  }

  return {
    title: `${event.title} | 42 Events Calendar`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      type: "article",
      url: `https://42events.vercel.app/events/${event.id}`,
      images: [
        {
          url: event.image || "/images/42-abu-dhabi-logo.png",
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: event.description,
      images: [event.image || "/images/42-abu-dhabi-logo.png"],
    },
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const event = await getEventById(params.id)

  if (!event) {
    notFound()
  }

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-6 bg-black flex items-center justify-center">
            <Image
              src={event.image || "/placeholder.svg?height=600&width=1200"}
              alt={event.title}
              width={250}
              height={250}
              className="object-contain"
            />
          </div>

          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge>{event.category}</Badge>
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex items-center text-muted-foreground">
              <CalendarDays className="mr-2 h-5 w-5" />
              <div>
                <p className="font-medium text-foreground">Date & Time</p>
                <p>{formatDateTime(event.startDate)}</p>
                {event.endDate && event.endDate !== event.startDate && <p>to {formatDateTime(event.endDate)}</p>}
              </div>
            </div>

            <div className="flex items-center text-muted-foreground">
              <MapPin className="mr-2 h-5 w-5" />
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p>{event.location}</p>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">About this event</h2>
            <div dangerouslySetInnerHTML={{ __html: event.content || event.description }} />
          </div>

          <Separator className="my-8" />

          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-medium">Organized by:</h3>
            <div className="flex items-center">
              {event.organizer.image ? (
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-2">
                  <Image
                    src={event.organizer.image || "/placeholder.svg"}
                    alt={event.organizer.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                  <span className="text-primary font-bold">{event.organizer.name.charAt(0)}</span>
                </div>
              )}
              <span>{event.organizer.name}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="glass-card rounded-lg border p-6">
              <RegisterEventButton event={event} />

              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
                <ShareButton title={event.title} description={event.description} className="rounded-full" />
                <Button variant="outline" size="icon" className="rounded-full">
                  <Calendar className="h-4 w-4" />
                  <span className="sr-only">Add to calendar</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
