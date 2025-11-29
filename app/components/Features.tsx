"use client"

import { Zap, Users, Lock, BarChart3, Globe, Smartphone } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized infrastructure",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time updates and notifications",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and security to keep your data safe",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Get deep insights with powerful analytics and reporting tools",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Access",
      description: "Access your work from anywhere with our cloud-based platform",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Ready",
      description: "Native mobile apps for iOS and Android keep you productive on the go",
      gradient: "from-rose-400 to-red-500"
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-gray-100 opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm mb-4">
            FEATURES
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Everything you need to
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              succeed together
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features to help your team collaborate more effectively and ship faster than ever
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl`}></div>
              
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-4 flex items-center text-indigo-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm">Learn more</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg">
            Explore All Features →
          </button>
        </div>
      </div>
    </section>
  )
}
