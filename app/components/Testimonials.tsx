"use client"

import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      initials: "SJ",
      quote: "TaskFlow has completely transformed how our team collaborates. We've seen a 40% increase in productivity and our projects are delivered on time, every time.",
      color: "from-blue-500 to-indigo-600",
      image: null
    },
    {
      name: "Mike Chen",
      role: "CEO",
      company: "StartupXYZ",
      initials: "MC",
      quote: "The best project management tool we've ever used. The intuitive interface and powerful features make it indispensable for our growing team.",
      color: "from-purple-500 to-pink-600",
      image: null
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead",
      company: "DesignStudio",
      initials: "ER",
      quote: "Our entire team can't imagine working without TaskFlow anymore. It's become the central hub for all our creative projects.",
      color: "from-green-500 to-emerald-600",
      image: null
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl">
        <div className="absolute top-20 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Loved by teams
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of teams who trust TaskFlow to manage their projects
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-serif shadow-lg">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50K+", label: "Active Users" },
            { number: "99.9%", label: "Uptime" },
            { number: "500K+", label: "Tasks Completed" },
            { number: "150+", label: "Countries" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
