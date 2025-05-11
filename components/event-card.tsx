import Link from "next/link"
import Image from "next/image"
import { CalendarDays, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"
import type { Event } from "@/lib/types"

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  // Calculate days until event
  const today = new Date()
  const eventDate = new Date(event.startDate)
  const daysUntil = Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

  return (
    <Card className="overflow-hidden glass-card">
      <div className="relative aspect-video bg-black flex items-center justify-center">
        <Image
          src={event.image || "/placeholder.svg?height=300&width=600"}
          alt={event.title}
          width={150}
          height={150}
          className="object-contain"
        />
        <div className="absolute top-2 left-2">
          <Badge variant={event.isFeatured ? "default" : "secondary"} className="bg-accent text-accent-foreground">
            {event.category}
          </Badge>
        </div>
        {daysUntil > 0 && daysUntil <= 30 && (
          <div className="absolute top-2 right-2">
            <Badge variant="outline" className="bg-background/60 backdrop-blur-sm text-foreground border-accent">
              in {daysUntil} {daysUntil === 1 ? "day" : "days"}
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <CalendarDays className="mr-1 h-4 w-4" />
          <span>{formatDate(event.startDate)}</span>
          {event.endDate && event.endDate !== event.startDate && <span> - {formatDate(event.endDate)}</span>}
        </div>
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
          <Link href={`/events/${event.id}`} className="hover:text-accent">
            {event.title}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{event.description}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-1 h-4 w-4" />
          <span className="truncate">{event.location}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full bg-accent hover:bg-accent/90">
          <Link href={`/events/${event.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
