import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Star } from "lucide-react"

import { products } from "@/lib/products"
import AddToCartButton from "@/components/add-to-cart-button"
import ProductCard from "@/components/product-card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BrandedProductImage from "@/components/branded-product-image"

interface ProductPageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return {
      title: "Product Not Found | Pure Glow Skincare",
    }
  }

  return {
    title: `${product.name} | Pure Glow Skincare`,
    description: product.description,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
        {product.images && product.images.length > 0 ? (
          <div className="grid gap-4">
            <div className="relative overflow-hidden bg-gray-100 rounded-lg aspect-square">
              <BrandedProductImage
                src={product.images[0] || product.image}
                alt={product.name}
                className="w-full h-full"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((img, index) => (
                <button key={index} className="relative overflow-hidden border rounded-md w-20 h-20">
                  <BrandedProductImage
                    src={img || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative overflow-hidden bg-gray-100 rounded-lg aspect-square">
            <BrandedProductImage
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full"
            />
          </div>
        )}

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

          <div className="flex items-center mt-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < product.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">{product.reviewCount} reviews</span>
          </div>

          <span className="mb-6 text-2xl font-bold text-gray-900">AED {product.price.toFixed(2)}</span>

          <p className="mb-6 text-gray-600">{product.description}</p>

          <div className="mb-6">
            <h3 className="mb-2 font-medium text-gray-800">Key Benefits:</h3>
            <ul className="pl-5 space-y-1 text-gray-600 list-disc">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <AddToCartButton product={product} />
        </div>
      </div>

      <Separator className="my-12" />

      <Tabs defaultValue="description" className="max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
          <TabsTrigger value="how-to-use">How to Use</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-6">
          <div className="prose prose-pink max-w-none">
            <p>{product.fullDescription || product.description}</p>
          </div>
        </TabsContent>
        <TabsContent value="ingredients" className="mt-6">
          <div className="prose prose-pink max-w-none">
            <p>{product.ingredients || "Ingredients information coming soon."}</p>
          </div>
        </TabsContent>
        <TabsContent value="how-to-use" className="mt-6">
          <div className="prose prose-pink max-w-none">
            <p>{product.howToUse || "Usage instructions coming soon."}</p>
          </div>
        </TabsContent>
      </Tabs>

      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-8 text-2xl font-bold text-center text-gray-800">You May Also Like</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
