"use client"

import Image from "next/image"
import { useState } from "react"
import ProductLabel from "@/components/product-label"

interface BrandedProductImageProps {
  src: string
  alt: string
  category?: string
  width?: number
  height?: number
  className?: string
  showLabel?: boolean
  labelPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

export default function BrandedProductImage({
  src,
  alt,
  category,
  width = 400,
  height = 400,
  className = "",
  showLabel = true,
  labelPosition = "bottom-right",
}: BrandedProductImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  const positionClasses = {
    "top-left": "top-3 left-3",
    "top-right": "top-3 right-3",
    "bottom-left": "bottom-3 left-3",
    "bottom-right": "bottom-3 right-3",
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setImageLoaded(true)}
      />

      {showLabel && (
        <div className={`absolute ${positionClasses[labelPosition]} max-w-[80%]`}>
          <ProductLabel productName={alt} category={category} />
        </div>
      )}
    </div>
  )
}
