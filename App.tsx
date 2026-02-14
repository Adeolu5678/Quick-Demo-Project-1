import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { Testimonials } from "./components/sections/Testimonials";
import { Pricing } from "./components/sections/Pricing";
import { CTA } from "./components/sections/CTA";

export default function App() {
  return (
    <main className="min-h-screen bg-navy text-white font-sans selection:bg-electric/30 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}