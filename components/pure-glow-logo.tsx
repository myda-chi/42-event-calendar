interface PureGlowLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  color?: "light" | "dark" | "primary"
}

export default function PureGlowLogo({ className = "", size = "md", color = "primary" }: PureGlowLogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  }

  const colorClasses = {
    light: "text-white",
    dark: "text-gray-800",
    primary: "text-pink-600",
  }

  return (
    <div className={`font-bold ${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      <span>Pure</span>
      <span className="ml-1">Glow</span>
    </div>
  )
}
