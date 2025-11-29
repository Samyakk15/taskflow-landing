'use client'

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 5 users",
        "10 projects",
        "Basic support",
        "5GB storage"
      ],
      buttonText: "Get Started",
      highlighted: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "For growing teams",
      badge: "Most Popular",
      features: [
        "Up to 20 users",
        "Unlimited projects",
        "Priority support",
        "100GB storage",
        "Advanced analytics",
        "Custom integrations"
      ],
      buttonText: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Unlimited projects",
        "24/7 dedicated support",
        "Unlimited storage",
        "Advanced security",
        "Custom training"
      ],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your team. Always flexible to scale.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-blue-600 text-white shadow-2xl scale-105 border-4 border-blue-400'
                  : 'bg-white border-2 border-gray-200 shadow-lg'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-lg ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.period}
                </span>
              </div>

              {/* Button */}
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.buttonText}
              </button>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className={`w-6 h-6 flex-shrink-0 ${plan.highlighted ? 'text-blue-200' : 'text-green-500'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={plan.highlighted ? 'text-blue-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}