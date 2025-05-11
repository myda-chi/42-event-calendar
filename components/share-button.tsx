"use client"

import { useState } from "react"
import { Share2, Check, Copy, Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from "@/hooks/use-toast"

interface ShareButtonProps {
  url?: string
  title?: string
  description?: string
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

export default function ShareButton({
  url,
  title = "42 Events Calendar",
  description = "Check out this event!",
  className,
  variant = "outline",
  size = "icon",
}: ShareButtonProps) {
  const [isCopied, setIsCopied] = useState(false)

  // Use the current URL if none is provided
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "")

  const encodedUrl = encodeURIComponent(shareUrl)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%20${encodedUrl}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setIsCopied(true)
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      })

      // Reset the copied state after 2 seconds
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy the URL manually.",
        variant: "destructive",
      })
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          <Share2 className="h-4 w-4" />
          <span className="sr-only">Share</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-card">
        <DropdownMenuItem onClick={copyToClipboard} className="cursor-pointer">
          {isCopied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
          Copy link
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Facebook className="mr-2 h-4 w-4" />
            Facebook
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Twitter className="mr-2 h-4 w-4" />
            Twitter
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href={shareLinks.email} className="flex items-center">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
