import React from "react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { FEATURES_DATA } from "../../constants";
import { Zap, Shield, Users, BarChart, Puzzle, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Shield,
  Users,
  BarChart,
  Puzzle,
  Sparkles,
};

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16 sm:mb-20">
          <span className="text-electric font-semibold text-sm uppercase tracking-wider mb-4 block">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Everything you need to
            <span className="gradient-text"> scale</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Powerful features designed to help your team move faster and stay aligned,
            without the complexity.
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES_DATA.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="glass-card-hover p-8 h-full group">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-electric/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:from-electric/30 group-hover:to-purple-500/30 transition-colors">
                    {Icon && <Icon className="w-7 h-7 text-electric" />}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}