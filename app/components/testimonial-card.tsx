interface TestimonialCardProps {
  name: string
  title: string
  quote: string
  rating: number
  initials: string
}

export default function TestimonialCard({ name, title, quote, rating, initials }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      {/* Avatar */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
          {initials}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 text-base leading-relaxed">
        {quote}
      </p>
    </div>
  )
}

