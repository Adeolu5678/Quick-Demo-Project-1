import React from "react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background Gradient Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-electric via-purple-500 to-electric bg-[length:200%_200%] animate-gradient-shift" />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-navy/40" />
            
            {/* Content */}
            <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to transform your workflow?
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Join 10,000+ teams already using FlowSync to ship faster.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#pricing"
                  className="px-8 py-4 bg-white text-navy font-semibold rounded-xl hover:bg-white/90 transition-all duration-200 hover:shadow-lg flex items-center gap-2 group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}