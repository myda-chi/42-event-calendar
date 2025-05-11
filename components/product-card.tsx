"use client"

import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"
import BrandedProductImage from "@/components/branded-product-image"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addItem(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    })
  }

  return (
    <div className="overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg group hover:shadow-md">
      <Link href={`/products/${product.id}`} className="block overflow-hidden">
        <div className="relative aspect-square overflow-hidden">
          <BrandedProductImage src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full" />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="mb-1 text-lg font-medium text-gray-800 transition-colors hover:text-pink-600">
            {product.name}
          </h3>
        </Link>
        <p className="mb-2 text-sm text-gray-500">{product.category}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">AED {product.price.toFixed(2)}</span>
          <Button size="sm" onClick={handleAddToCart} className="bg-pink-600 hover:bg-pink-700">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}
