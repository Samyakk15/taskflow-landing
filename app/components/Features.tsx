import type React from "react"

import { Users, CheckSquare, Zap } from "lucide-react"

interface FeatureCard {
  icon: React.ReactNode
  title: string
  description: string
}

const features: FeatureCard[] = [
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Real-Time Collaboration",
    description: "Work together seamlessly with live updates and instant notifications",
  },
  {
    icon: <CheckSquare className="w-8 h-8 text-blue-600" />,
    title: "Smart Task Management",
    description: "Organize, prioritize, and track tasks with our intelligent system",
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: "Powerful Integrations",
    description: "Connect with your favorite tools and automate workflows",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">TaskFlow Features</h2>
          <p className="text-lg text-gray-600">Everything you need to manage your tasks efficiently</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

