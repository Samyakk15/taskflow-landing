"use client"

import { Check, Sparkles } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "0",
      period: "forever",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members",
        "10 projects",
        "Basic support",
        "5GB storage",
        "Mobile apps",
        "Email notifications"
      ],
      buttonText: "Start Free",
      popular: false,
      buttonStyle: "bg-gray-900 text-white hover:bg-gray-800"
    },
    {
      name: "Professional",
      price: "29",
      period: "per month",
      description: "For growing teams that need more power",
      features: [
        "Up to 20 team members",
        "Unlimited projects",
        "Priority support",
        "100GB storage",
        "Advanced analytics",
        "Custom integrations",
        "API access",
        "Team permissions"
      ],
      buttonText: "Start Free Trial",
      popular: true,
      buttonStyle: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl hover:scale-105"
    },
    {
      name: "Enterprise",
      price: "99",
      period: "per month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited team members",
        "Unlimited projects",
        "24/7 dedicated support",
        "Unlimited storage",
        "Advanced security",
        "Custom training",
        "SLA guarantee",
        "Dedicated account manager"
      ],
      buttonText: "Contact Sales",
      popular: false,
      buttonStyle: "bg-gray-900 text-white hover:bg-gray-800"
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-white"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm mb-4">
            PRICING
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple,{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              transparent pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your team. Always flexible to scale.
          </p>
          
          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1 bg-gray-100 rounded-full">
            <button className="px-6 py-2 rounded-full bg-white shadow-sm font-semibold text-gray-900">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-full font-semibold text-gray-600 hover:text-gray-900">
              Annual
              <span className="ml-2 text-xs text-green-600 font-bold">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-indigo-600 to-purple-600 text-white shadow-2xl scale-105 border-4 border-indigo-400'
                  : 'bg-white border-2 border-gray-200 hover:border-indigo-300 hover:shadow-xl'
              } transition-all duration-300`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-gray-900 font-bold text-sm shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-indigo-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className={`text-6xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-indigo-100' : 'text-gray-600'}`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 mb-8 ${
                plan.popular
                  ? 'bg-white text-indigo-600 hover:shadow-xl hover:scale-105'
                  : plan.buttonStyle
              }`}>
                {plan.buttonText}
              </button>

              {/* Features */}
              <div className="space-y-4">
                <div className={`text-sm font-semibold mb-4 ${plan.popular ? 'text-indigo-100' : 'text-gray-500'}`}>
                  WHAT'S INCLUDED
                </div>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      plan.popular ? 'bg-white/20' : 'bg-indigo-100'
                    }`}>
                      <Check className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-indigo-600'}`} strokeWidth={3} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-indigo-50' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <button className="text-indigo-600 font-semibold hover:text-indigo-700">
            Compare all features →
          </button>
        </div>
      </div>
    </section>
  )
}
