"use client"

import { CheckIcon } from "lucide-react"

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      price: 0,
      description: "Perfect for small teams",
      features: ["Up to 5 users", "10 projects", "Basic support", "5GB storage"],
      button: "Get Started",
      highlighted: false,
    },
    {
      name: "Professional",
      price: 29,
      description: "Most Popular",
      subDescription: "For growing teams",
      features: [
        "Up to 20 users",
        "Unlimited projects",
        "Priority support",
        "100GB storage",
        "Advanced analytics",
        "Custom integrations",
      ],
      button: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: 99,
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Unlimited projects",
        "24/7 dedicated support",
        "Unlimited storage",
        "Advanced security",
        "Custom training",
      ],
      button: "Contact Sales",
      highlighted: false,
    },
  ]
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground text-balance">
              Choose the perfect plan for your team. Always flexible to scale.
            </p>
          </div>
        </div>
        {/* Pricing Cards */}
        <div className="py-12 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`relative flex flex-col h-full transition-all duration-300 hover:shadow-lg ${
                  tier.highlighted ? "md:scale-105 md:z-10" : "md:pt-6"
                }`}
              >
                {/* Card Container */}
                <div
                  className={`flex flex-col flex-grow rounded-2xl p-8 ${
                    tier.highlighted
                      ? "bg-primary text-primary-foreground border-2 border-primary shadow-xl"
                      : "bg-card text-card-foreground border border-border hover:border-foreground/20"
                  }`}
                >
                  {/* Badge for popular tier */}
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  {/* Tier Name */}
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{tier.name}</h3>
                  {/* Description */}
                  <p
                    className={`text-sm mb-6 ${
                      tier.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {tier.description}
                  </p>
                  {tier.subDescription && (
                    <p
                      className={`text-sm mb-4 ${
                        tier.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {tier.subDescription}
                    </p>
                  )}
                  {/* Pricing */}
                  <div className="mb-6">
                    <span className="text-4xl md:text-5xl font-bold">${tier.price}</span>
                    <span
                      className={`text-sm ml-2 ${
                        tier.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                      }`}
                    >
                      /month
                    </span>
                  </div>
                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-4 rounded-lg font-semibold mb-8 transition-colors duration-200 ${
                      tier.highlighted
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    {tier.button}
                  </button>
                  {/* Features List */}
                  <div className="space-y-4 flex-grow">
                    <p
                      className={`text-sm font-semibold mb-4 ${
                        tier.highlighted ? "text-primary-foreground/90" : "text-foreground"
                      }`}
                    >
                      What's included:
                    </p>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className={`flex items-start gap-3 text-sm ${
                            tier.highlighted ? "text-primary-foreground/90" : "text-card-foreground"
                          }`}
                        >
                          <CheckIcon className="w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={3} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

