'use client'

import { motion } from 'framer-motion'
import { Quote, Play, Star } from 'lucide-react'
import { useState } from 'react'

// Individual Testimonial Card Component
function TestimonialCard({
  testimonial,
  index,
  size = 'normal'
}: {
  testimonial: any
  index: number
  size?: 'normal' | 'large' | 'video'
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 ${size === 'large' ? 'md:col-span-2' : ''
        } ${size === 'video' ? 'md:row-span-2' : ''}`}
    >
      {/* Quote Icon */}
      {!testimonial.isVideo && (
        <motion.div
          animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Quote className="w-10 h-10 text-blue-200 mb-4" />
        </motion.div>
      )}

      {/* Video Thumbnail */}
      {testimonial.isVideo ? (
        <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group cursor-pointer">
          {/* Video Preview Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
            <img
              src={testimonial.videoThumbnail || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"}
              alt={testimonial.name}
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Play Button Overlay */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer group-hover:bg-red-600 transition-colors duration-300"
          >
            <Play className="w-8 h-8 text-red-600 group-hover:text-white ml-1" fill="currentColor" />
          </motion.div>

          {/* Video Label */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-900">Watch video review</span>
          </div>

          {/* Author Info on Video */}
          <div className="absolute top-6 left-6 flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white font-bold`}>
              {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
              <p className="text-xs text-gray-600">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Testimonial Text */}
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            "{testimonial.quote}"
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
            >
              {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
            </motion.div>
            <div>
              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
              >
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              </motion.div>
            ))}
          </div>
        </>
      )}

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-bl-full opacity-50"></div>
    </motion.div>
  )
}

// Floating Dots Decoration
function FloatingDots() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, 0]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute -left-20 top-1/4 w-32 h-32 opacity-30"
    >
      <div className="grid grid-cols-3 gap-3">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "John D.",
      role: "Marketing Lead",
      quote: "This task manager has completely transformed the way my team works. We now collaborate in real-time and always meet deadlines.",
      avatarColor: "from-cyan-400 to-blue-500",
      isVideo: false
    },
    {
      name: "Sarah W.",
      role: "Freelance Designer",
      quote: "An essential tool for anyone looking to manage their tasks better.",
      avatarColor: "from-pink-400 to-rose-500",
      isVideo: false
    },
    {
      name: "Sam J.",
      role: "Project Coordinator",
      quote: "The built-in analytics give me a complete overview of our team's productivity.",
      avatarColor: "from-yellow-400 to-orange-500",
      isVideo: false
    },
    {
      name: "David K.",
      role: "Product Manager",
      quote: "The time-tracking feature has been a game-changer for my freelance projects. It helps me stay organized and productive.",
      avatarColor: "from-purple-400 to-indigo-500",
      isVideo: true,
      videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Davida T.",
      role: "Operations Manager",
      quote: "I love how easy it is to create and assign tasks. The platform's interface makes work feel less overwhelming.",
      avatarColor: "from-amber-400 to-orange-500",
      isVideo: false
    },
    {
      name: "Alex M.",
      role: "Freelance Developer",
      quote: "TaskFlow's integration capabilities are outstanding. It seamlessly connects with all the tools we use daily.",
      avatarColor: "from-emerald-400 to-green-500",
      isVideo: false
    },
  ]

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Floating Decorations */}
      <FloatingDots />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-purple-100 border border-purple-200 rounded-full text-purple-700 text-sm font-semibold mb-4"
          >
            Testimonials
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            People just like you
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              are already using TaskFlow
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their workflow with TaskFlow
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {/* Row 1 - 3 cards */}
          <TestimonialCard testimonial={testimonials[0]} index={0} size="normal" />
          <TestimonialCard testimonial={testimonials[1]} index={1} size="normal" />
          <TestimonialCard testimonial={testimonials[2]} index={2} size="normal" />

          {/* Row 2 - Video takes 2 rows, 2 cards stack on right */}
          <TestimonialCard testimonial={testimonials[3]} index={3} size="video" />
          <TestimonialCard testimonial={testimonials[4]} index={4} size="normal" />
          <TestimonialCard testimonial={testimonials[5]} index={5} size="normal" />
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white rounded-3xl shadow-xl border border-gray-200"
        >
          {[
            { label: "Active Users", value: "10,000+", icon: "👥" },
            { label: "5-Star Reviews", value: "2,450", icon: "⭐" },
            { label: "Countries", value: "50+", icon: "🌍" },
            { label: "Satisfaction", value: "98%", icon: "💯" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Want to share your experience?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
            Submit Your Review
            <Star className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
