'use client';

import Hero from "@/components/layout/Hero";
import Portfolio from "@/components/features/Portfolio";
import About from "@/components/features/About";
import Benefits from "@/components/features/Benefits";
import Contact from "@/components/features/Contact";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* About Section */}
      <About />
      
      {/* Portfolio Section */}
      <Portfolio />
      
      {/* Benefits Section */}
      <Benefits />
      
      {/* Contact Section */}
      <Contact />
    </>
  );
}
