"use client"

import { useState } from "react"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    // Add the product to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }

    toast({
      title: "Added to cart",
      description: `${quantity} ${quantity === 1 ? "item" : "items"} of ${product.name} added to your cart.`,
      duration: 3000,
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <label htmlFor="quantity" className="font-medium text-gray-700">
          Quantity:
        </label>
        <select
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <Button onClick={handleAddToCart} size="lg" className="w-full bg-pink-600 hover:bg-pink-700">
        <ShoppingBag className="w-5 h-5 mr-2" />
        Add to Cart
      </Button>
    </div>
  )
}
