import { Suspense } from "react"
import type { Metadata } from "next"
import { getAllEvents } from "@/lib/data"
import EventCard from "@/components/event-card"
import EventsFilter from "@/components/events-filter"
import EventsSearch from "@/components/events-search"
import { Skeleton } from "@/components/ui/skeleton"
import ExportEventsButton from "@/components/export-events-button"

export const metadata: Metadata = {
  title: "Events | EventHub",
  description: "Browse and discover upcoming events",
}

export default async function EventsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const category = typeof searchParams.category === "string" ? searchParams.category : undefined
  const query = typeof searchParams.q === "string" ? searchParams.q : undefined

  const events = await getAllEvents()

  // Filter events based on search parameters
  const filteredEvents = events.filter((event) => {
    // Filter by category if provided
    if (category && event.category.toLowerCase() !== category.toLowerCase()) {
      return false
    }

    // Filter by search query if provided
    if (query) {
      const searchQuery = query.toLowerCase()
      return (
        event.title.toLowerCase().includes(searchQuery) ||
        event.description.toLowerCase().includes(searchQuery) ||
        event.location.toLowerCase().includes(searchQuery)
      )
    }

    return true
  })

  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Discover Events</h1>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-64 flex-shrink-0">
          <EventsFilter />
        </div>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="flex-1">
              <EventsSearch />
            </div>
            <ExportEventsButton events={filteredEvents} />
          </div>

          <div className="mt-6">
            <Suspense fallback={<EventsGridSkeleton />}>
              {filteredEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No events found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

function EventsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <div className="p-4">
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-4" />
              <Skeleton className="h-4 w-1/2 mb-6" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        ))}
    </div>
  )
}
