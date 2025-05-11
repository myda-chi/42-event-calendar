import type { Metadata } from "next"
import { products } from "@/lib/products"
import ProductCard from "@/components/product-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Products | Pure Glow Skincare",
  description: "Browse our collection of natural skincare products",
}

export default function ProductsPage() {
  // Get unique categories
  const categories = Array.from(new Set(products.map((product) => product.category)))

  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">Our Products</h1>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="justify-start w-full overflow-x-auto">
          <TabsTrigger value="all">All Products</TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
