"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CalendarIcon, Clock, MapPin, Users, DollarSign, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn, formatDate } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

export default function EventForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [isPublished, setIsPublished] = useState(true)
  const [isFeatured, setIsFeatured] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    toast({
      title: "Event created",
      description: "Your event has been successfully created.",
    })

    // Redirect to admin dashboard
    router.push("/admin")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="glass-card mb-6">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title</Label>
                <Input id="title" placeholder="Enter event title" required className="bg-background/40" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter event description"
                  required
                  className="min-h-32 bg-background/40"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select required>
                  <SelectTrigger id="category" className="bg-background/40">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="glass-card">
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="meetup">Meetup</SelectItem>
                    <SelectItem value="tech-talk">Tech Talk</SelectItem>
                    <SelectItem value="hackathon">Hackathon</SelectItem>
                    <SelectItem value="conference">Conference</SelectItem>
                    <SelectItem value="social">Social</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="location" placeholder="Enter event location" required className="pl-10 bg-background/40" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Date & Time</Label>
                <div className="flex gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "justify-start text-left font-normal bg-background/40",
                          !startDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? formatDate(startDate.toISOString()) : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="glass-card p-0" align="start">
                      <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                  <div className="relative flex-1">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="time" className="pl-10 bg-background/40" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>End Date & Time</Label>
                <div className="flex gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "justify-start text-left font-normal bg-background/40",
                          !endDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? formatDate(endDate.toISOString()) : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="glass-card p-0" align="start">
                      <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                  <div className="relative flex-1">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="time" className="pl-10 bg-background/40" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="capacity">Capacity</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="capacity"
                    type="number"
                    placeholder="Max attendees"
                    min="1"
                    required
                    className="pl-10 bg-background/40"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="price"
                    type="number"
                    placeholder="0 for free"
                    min="0"
                    step="0.01"
                    required
                    className="pl-10 bg-background/40"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <div className="relative">
                  <ImageIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="image" placeholder="Image URL" className="pl-10 bg-background/40" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <Switch id="published" checked={isPublished} onCheckedChange={setIsPublished} />
                <Label htmlFor="published">Publish immediately</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="featured" checked={isFeatured} onCheckedChange={setIsFeatured} />
                <Label htmlFor="featured">Feature on homepage</Label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button variant="outline" type="button" onClick={() => router.push("/admin")} className="bg-background/40">
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting} className="bg-accent hover:bg-accent/90 text-accent-foreground">
          {isSubmitting ? "Creating..." : "Create Event"}
        </Button>
      </div>
    </form>
  )
}
