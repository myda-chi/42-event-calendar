export default function ProductLabel({ productName, category }: { productName: string; category?: string }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm text-sm text-gray-700 rounded-md p-2">
      {productName}
      {category && <div className="text-xs text-gray-500">{category}</div>}
    </div>
  )
}
