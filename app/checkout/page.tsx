"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Check, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"

export default function CheckoutPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isClient, setIsClient] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  // Use useCart hook
  const { items, clearCart } = useCart()

  // Only access cart after component has mounted
  const [cartItems, setCartItems] = useState<any[]>([])
  const [subtotal, setSubtotal] = useState(0)

  // Use useCart hook only after component has mounted on client
  useEffect(() => {
    setIsClient(true)

    // This will only run on the client side
    try {
      setCartItems(items)

      const calculatedSubtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
      setSubtotal(calculatedSubtotal)
    } catch (error) {
      console.error("Error accessing cart:", error)
    }
  }, [items])

  // If not mounted yet, show loading state
  if (!isClient) {
    return <div className="container max-w-4xl px-4 py-12 mx-auto">Loading checkout...</div>
  }

  // If cart is empty and not in completed state, redirect
  if (cartItems.length === 0 && !orderComplete) {
    router.push("/products")
    return null
  }

  const shipping = 5.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setOrderComplete(true)

      // Clear cart after order is complete
      if (isClient) {
        try {
          clearCart()
        } catch (error) {
          console.error("Error clearing cart:", error)
        }
      }

      toast({
        title: "Order Placed Successfully",
        description: "Thank you for your purchase!",
        duration: 5000,
      })
    }, 2000)
  }

  if (orderComplete) {
    return (
      <div className="container max-w-4xl px-4 py-12 mx-auto">
        <div className="p-8 text-center bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-800">Order Confirmed!</h1>
          <p className="mb-6 text-gray-600">
            Thank you for your purchase. We've received your order and will process it right away. You'll receive a
            confirmation email shortly.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild className="bg-pink-600 hover:bg-pink-700">
              <a href="/">Return to Home</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/products">Continue Shopping</a>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container max-w-6xl px-4 py-12 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">Checkout</h1>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-gray-800">Shipping Information</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <Input id="first-name" placeholder="Your first name" required />
                </div>

                <div>
                  <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <Input id="last-name" placeholder="Your last name" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email address" required />
              </div>

              <div>
                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-700">
                  Address
                </label>
                <Input id="address" placeholder="Street address" required />
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-700">
                    City
                  </label>
                  <Input id="city" placeholder="City" required />
                </div>

                <div>
                  <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-700">
                    State
                  </label>
                  <Input id="state" placeholder="State" required />
                </div>

                <div>
                  <label htmlFor="zip" className="block mb-2 text-sm font-medium text-gray-700">
                    ZIP Code
                  </label>
                  <Input id="zip" placeholder="ZIP Code" required />
                </div>
              </div>

              <Separator />

              <h2 className="mb-6 text-xl font-semibold text-gray-800">Payment Information</h2>

              <div>
                <label htmlFor="card-number" className="block mb-2 text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <div className="relative">
                  <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                  <CreditCard className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <label htmlFor="expiry" className="block mb-2 text-sm font-medium text-gray-700">
                    Expiration Date
                  </label>
                  <Input id="expiry" placeholder="MM/YY" required />
                </div>

                <div>
                  <label htmlFor="cvc" className="block mb-2 text-sm font-medium text-gray-700">
                    CVC
                  </label>
                  <Input id="cvc" placeholder="123" required />
                </div>
              </div>

              <div>
                <label htmlFor="name-on-card" className="block mb-2 text-sm font-medium text-gray-700">
                  Name on Card
                </label>
                <Input id="name-on-card" placeholder="Full name as displayed on card" required />
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700" disabled={isProcessing}>
                  {isProcessing ? "Processing..." : `Complete Order • AED ${total.toFixed(2)}`}
                </Button>
                <p className="mt-2 text-xs text-center text-gray-500">
                  This is a simulation. No actual payment will be processed.
                </p>
              </div>
            </form>
          </div>
        </div>

        <div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">Order Summary</h2>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium text-gray-800">AED {(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-medium text-gray-800">AED {subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Shipping</p>
                <p className="font-medium text-gray-800">AED {shipping.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Tax</p>
                <p className="font-medium text-gray-800">AED {tax.toFixed(2)}</p>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex justify-between">
              <p className="text-lg font-semibold text-gray-800">Total</p>
              <p className="text-lg font-semibold text-gray-800">AED {total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
