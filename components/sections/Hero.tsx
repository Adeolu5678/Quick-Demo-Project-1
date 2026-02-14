import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-electric/20 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(79, 109, 245, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(79, 109, 245, 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white/70">Now with AI-powered insights</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">Ship faster with</span>
            <br />
            <span className="gradient-text">unified workflows</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10"
          >
            The all-in-one platform for teams who want to collaborate seamlessly,
            automate the mundane, and focus on what matters most.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#pricing"
              className="btn-primary flex items-center justify-center gap-2 group"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="btn-secondary flex items-center justify-center gap-2 group">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>

          {/* Abstract Graphic / Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Glow behind */}
            <div className="absolute inset-0 bg-gradient-to-t from-electric/20 via-transparent to-transparent blur-3xl -z-10" />
            
            {/* Dashboard Card */}
            <div className="glass-card p-2 sm:p-4 rounded-2xl">
              <div className="bg-navy rounded-xl overflow-hidden">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 rounded-lg bg-white/5 text-xs text-white/40">
                      app.flowsync.io/dashboard
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {/* Stats */}
                    {[
                      { label: "Active Projects", value: "24", change: "+3" },
                      { label: "Team Members", value: "12", change: "+2" },
                      { label: "Tasks Completed", value: "847", change: "+156" },
                    ].map((stat, i) => (
                      <div key={i} className="glass-card p-4">
                        <div className="text-sm text-white/50 mb-1">{stat.label}</div>
                        <div className="flex items-end gap-2">
                          <span className="text-2xl font-bold text-white">{stat.value}</span>
                          <span className="text-sm text-green-400">{stat.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Chart Placeholder */}
                  <div className="glass-card p-4 h-48 flex items-end gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-electric to-purple-500 rounded-t"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-white/40 mb-4">Trusted by teams at</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {["Stripe", "Notion", "Figma", "Linear", "Vercel"].map((company) => (
                <span key={company} className="text-lg font-semibold text-white/70">
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}