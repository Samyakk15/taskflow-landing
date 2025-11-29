"use client"

import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900" />

      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Glassmorphism container */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            Streamline Your Team's Workflow
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
            TaskFlow helps teams collaborate efficiently with real-time updates, task tracking, and seamless integration
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button - Get Started Free */}
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Button - Watch Demo */}
            <button className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              Watch Demo
            </button>
          </div>

          {/* Trust indicator */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-gray-300 mb-4">Trusted by leading teams worldwide</p>
            <div className="flex justify-center items-center gap-8 flex-wrap opacity-70">
              <div className="h-8 w-24 bg-white/10 rounded backdrop-blur-sm" />
              <div className="h-8 w-24 bg-white/10 rounded backdrop-blur-sm" />
              <div className="h-8 w-24 bg-white/10 rounded backdrop-blur-sm" />
              <div className="h-8 w-24 bg-white/10 rounded backdrop-blur-sm" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

