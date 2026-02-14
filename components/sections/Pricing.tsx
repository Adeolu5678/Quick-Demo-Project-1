import React from "react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { PRICING_TIERS } from "../../constants";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-electric font-semibold text-sm uppercase tracking-wider mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, transparent
            <span className="gradient-text"> pricing</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            No hidden fees. No surprises. Start free and scale when you need to.
          </p>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <AnimatedSection key={tier.name} delay={index * 0.1}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col ${
                  tier.popular
                    ? "bg-gradient-to-b from-electric/20 to-purple-500/10 border-2 border-electric/50"
                    : "glass-card"
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-electric text-white text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Tier Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                  <p className="text-white/60 text-sm">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-white">
                    ${tier.price}
                  </span>
                  <span className="text-white/60">/month</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-electric shrink-0 mt-0.5" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className={`w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-200 block ${
                    tier.popular
                      ? "bg-electric hover:bg-electric-600 text-white hover:shadow-lg hover:shadow-electric/30"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Note */}
        <AnimatedSection className="text-center mt-12">
          <p className="text-white/40 text-sm">
            All plans include 14-day free trial. No credit card required.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}