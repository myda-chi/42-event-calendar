"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [adminKey, setAdminKey] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, you would call your authentication API
      // For demo purposes, we'll just simulate a login with a fixed admin credential
      if (email === "admin@42abudhabi.ae" && password === "admin-secret-password" && adminKey === "42-admin-key") {
        // Set a cookie for admin authentication
        document.cookie = "admin_token=your-secret-admin-token; path=/; max-age=86400; secure; samesite=strict"

        toast({
          title: "Login successful",
          description: "Welcome back, admin!",
        })

        // Redirect to admin dashboard
        router.push("/admin")
      } else {
        toast({
          title: "Login failed",
          description: "Invalid credentials. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Login error",
        description: "An error occurred during login. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex items-center justify-center min-h-[80vh] py-12">
      <Card className="glass-card w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          <CardDescription className="text-center">Enter your credentials to access the admin panel</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@42abudhabi.ae"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/40"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-background/40"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-key">Admin Key</Label>
              <Input
                id="admin-key"
                type="password"
                placeholder="Special admin access key"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                required
                className="bg-background/40"
              />
            </div>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-sm text-center text-muted-foreground">
            <Link href="/" className="text-accent hover:underline">
              Return to Home
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
