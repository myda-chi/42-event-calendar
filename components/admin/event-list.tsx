"use client"

import { useState } from "react"
import Link from "next/link"
import { Edit, Trash2, Eye, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { featuredEvents } from "@/lib/data"
import { formatDate } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface AdminEventListProps {
  filter: "all" | "upcoming" | "past" | "draft"
}

export default function AdminEventList({ filter }: AdminEventListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const { toast } = useToast()
  const [events, setEvents] = useState(featuredEvents)

  // Filter events based on the selected tab
  const filteredEvents = events.filter((event) => {
    // Apply search filter
    if (searchQuery && !event.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    const now = new Date()
    const eventDate = new Date(event.startDate)

    // Apply tab filter
    switch (filter) {
      case "upcoming":
        return eventDate > now && event.isPublished
      case "past":
        return eventDate < now && event.isPublished
      case "draft":
        return !event.isPublished
      default:
        return true
    }
  })

  const handleDeleteEvent = (eventId: string) => {
    // In a real app, you would call an API to delete the event
    setEvents(events.filter((event) => event.id !== eventId))

    toast({
      title: "Event deleted",
      description: "The event has been successfully deleted.",
    })
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <Input
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm bg-background/40"
        />
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10">
            Export
          </Button>
        </div>
      </div>

      <div className="rounded-md border border-border/20 bg-background/20">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-background/40">
              <TableHead>Event</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Attendees</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <TableRow key={event.id} className="hover:bg-background/40">
                  <TableCell className="font-medium">{event.title}</TableCell>
                  <TableCell>{formatDate(event.startDate)}</TableCell>
                  <TableCell>{event.location}</TableCell>
                  <TableCell>
                    {!event.isPublished ? (
                      <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                        Draft
                      </Badge>
                    ) : new Date(event.startDate) > new Date() ? (
                      <Badge variant="outline" className="text-green-500 border-green-500">
                        Upcoming
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-muted-foreground border-muted-foreground">
                        Past
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    {event.attendees}/{event.capacity}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="glass-card">
                        <DropdownMenuItem asChild>
                          <Link href={`/events/${event.id}`} className="flex items-center">
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/events/${event.id}/edit`} className="flex items-center">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <DropdownMenuItem
                              onSelect={(e) => e.preventDefault()}
                              className="flex items-center text-destructive focus:text-destructive"
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="glass-card">
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete the event and remove all
                                associated data.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="bg-background/40">Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDeleteEvent(event.id)}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No events found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
