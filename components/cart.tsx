"use client"

import Link from "next/link"
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"
import BrandedProductImage from "@/components/branded-product-image"

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart } = useCart()
  const router = useRouter()

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  const handleCheckout = () => {
    router.push("/checkout")
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-8">
        <ShoppingBag className="w-16 h-16 mb-4 text-gray-300" />
        <h3 className="mb-2 text-xl font-medium text-gray-800">Your cart is empty</h3>
        <p className="mb-6 text-gray-500">Looks like you haven't added any products to your cart yet.</p>
        <Button asChild className="bg-pink-600 hover:bg-pink-700">
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <Button variant="ghost" size="sm" onClick={clearCart} className="text-gray-500 hover:text-red-500">
          <Trash2 className="w-4 h-4 mr-2" />
          Clear
        </Button>
      </div>

      <Separator />

      <div className="flex-1 py-4 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex py-4 border-b border-gray-100">
            <div className="relative w-20 h-20 overflow-hidden rounded-md">
              <BrandedProductImage src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full" />
            </div>

            <div className="flex flex-col flex-1 ml-4">
              <div className="flex justify-between">
                <Link href={`/products/${item.id}`} className="font-medium text-gray-800 hover:text-pink-600">
                  {item.name}
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-6 h-6 text-gray-400 hover:text-red-500"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="sr-only">Remove</span>
                </Button>
              </div>

              <span className="mt-1 text-sm text-gray-500">AED {item.price.toFixed(2)}</span>

              <div className="flex items-center mt-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-6 h-6"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus className="w-3 h-3" />
                  <span className="sr-only">Decrease quantity</span>
                </Button>

                <span className="w-8 mx-2 text-center">{item.quantity}</span>

                <Button
                  variant="outline"
                  size="icon"
                  className="w-6 h-6"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="w-3 h-3" />
                  <span className="sr-only">Increase quantity</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 mt-auto border-t border-gray-200">
        <div className="flex justify-between mb-4">
          <span className="font-medium text-gray-600">Subtotal</span>
          <span className="font-semibold">AED {subtotal.toFixed(2)}</span>
        </div>

        <Button onClick={handleCheckout} className="w-full bg-pink-600 hover:bg-pink-700">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  )
}
