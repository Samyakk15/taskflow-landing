import TestimonialCard from "./testimonial-card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Product Manager at TechCorp",
    quote: "TaskFlow transformed how our team collaborates. Productivity increased by 40%!",
    rating: 5,
    initials: "SJ",
  },
  {
    id: 2,
    name: "Mike Chen",
    title: "CEO at StartupXYZ",
    quote: "The best project management tool we've ever used. Intuitive and powerful.",
    rating: 5,
    initials: "MC",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Team Lead at DesignStudio",
    quote: "Our team can't imagine working without TaskFlow anymore. Highly recommended!",
    rating: 5,
    initials: "ER",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
        Loved by teams worldwide
      </h2>
      <p className="text-xl text-gray-600 text-center mb-12">
        Join thousands of teams using TaskFlow to streamline their workflow
      </p>
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
      </div>
    </section>
  )
}

