"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import type { Event } from "@/lib/types"

interface RegisterEventButtonProps {
  event: Event
}

export default function RegisterEventButton({ event }: RegisterEventButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [ticketCount, setTicketCount] = useState("1")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleRegister = async () => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsOpen(false)

    toast({
      title: "Registration successful!",
      description: `You have registered for ${event.title}`,
    })

    // In a real app, you would redirect to a confirmation page
    // router.push(`/events/${event.id}/confirmation`)
  }

  const ticketOptions = Array.from({ length: 10 }, (_, i) => (i + 1).toString())
  const totalPrice = event.price * Number.parseInt(ticketCount || "1")

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">Register Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register for Event</DialogTitle>
          <DialogDescription>Complete your registration for {event.title}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tickets" className="text-right">
              Tickets
            </Label>
            <Select value={ticketCount} onValueChange={setTicketCount}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select number of tickets" />
              </SelectTrigger>
              <SelectContent>
                {ticketOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {event.price > 0 && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Price</Label>
              <div className="col-span-3">${totalPrice.toFixed(2)}</div>
            </div>
          )}

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="Your full name" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" type="email" placeholder="Your email address" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleRegister} disabled={isLoading}>
            {isLoading ? "Processing..." : "Complete Registration"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
