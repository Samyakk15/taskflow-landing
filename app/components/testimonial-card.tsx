import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  title: string
  quote: string
  rating: number
  initials: string
}

export default function TestimonialCard({ name, title, quote, rating, initials }: TestimonialCardProps) {
  return (
    <div className="group bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/50">
      {/* Header with Avatar and Info */}
      <div className="flex items-start gap-4 mb-4">
        {/* Avatar */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
          {initials}
        </div>

        {/* Name and Title */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">{name}</h3>
          <p className="text-sm text-muted-foreground truncate">{title}</p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground leading-relaxed">{quote}</p>
    </div>
  )
}

