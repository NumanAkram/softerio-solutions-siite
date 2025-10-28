"use client";

import { useState } from "react"; 
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingPlans from "@/components/PricingPlans";
import Testimonials from "@/components/Testimonials";
import Statistics from "@/components/Statistics";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <PricingPlans />
      <Testimonials />
      <Statistics />
      {/* <Team /> */}
      {/* <FAQ /> */}
      <Contact />
      <ChatWidget />
    </main>
  );
}
