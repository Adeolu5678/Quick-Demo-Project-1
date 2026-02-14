import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { TESTIMONIALS_DATA } from "../../constants";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-electric font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Loved by
            <span className="gradient-text"> teams worldwide</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            See why thousands of teams trust FlowSync to power their workflows.
          </p>
        </AnimatedSection>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-8 sm:p-12 text-center"
            >
              {/* Quote Icon */}
              <div className="w-16 h-16 rounded-full bg-electric/20 flex items-center justify-center mx-auto mb-8">
                <Quote className="w-8 h-8 text-electric" />
              </div>
              
              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-8">
                &ldquo;{TESTIMONIALS_DATA[current].quote}&rdquo;
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img 
                    src={TESTIMONIALS_DATA[current].avatar} 
                    alt={TESTIMONIALS_DATA[current].author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-electric"
                />
                <div className="text-left">
                  <div className="font-semibold text-white">{TESTIMONIALS_DATA[current].author}</div>
                  <div className="text-white/60 text-sm">{TESTIMONIALS_DATA[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full glass-card hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-electric" : "bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="p-3 rounded-full glass-card hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}