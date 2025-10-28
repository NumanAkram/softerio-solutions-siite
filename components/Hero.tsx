'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );
  
    const heroSection = document.getElementById("home");
    if (heroSection) observer.observe(heroSection);
  
    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 dark:from-black dark:via-gray-900 dark:to-teal-900 overflow-hidden transition-colors duration-300"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          style={{
            backgroundAttachment: "fixed",
          }}
        />
      </div>

      {/* Particles Container */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        {isHeroVisible && (   
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              background: { color: { value: "transparent" } },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: { enable: true, mode: "push" },
                  onHover: { enable: true, mode: "repulse" },
                },
                modes: {
                  push: { quantity: 1 },
                  repulse: { distance: 50, duration: 0.4 },
                },
              },
              particles: {
                color: { value: "#FFFFFF" },
                links: {
                  color: "#60A5FA",
                  distance: 120,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: { enable: true },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: { default: "bounce" },
                  random: false,
                  speed: 1.5,
                  straight: false,
                },
                number: {
                  density: { enable: true, area: 800 },
                  value: 80,
                },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 5 } },
              },
              detectRetina: true,
            }}
            className="absolute inset-0 h-full w-full"
          />
        )}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      {/* Blur Effects for Depth */}
      <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-3xl bg-blue-500/10"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl bg-indigo-500/10"></div>

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-6 md:pr-8 lg:pr-14 max-w-[40.2rem] pt-20 ml-16">
            <h1 className="text-[30px] sm:text-[38px] md:text-[40px] lg:text-[45px] font-semibold leading-tight animate-fade-in-up [animation-delay:100ms]">
              <span className="text-white">Delivering </span>
              <span className="text-teal-400">Soft IT Solutions</span>
            </h1>
            <p className="text-lg text-white animate-fade-in-up [animation-delay:300ms]">
              Softerio Solutions provides customizable, SEO-friendly software solutions tailored to your business needs. We turn your ideas into exceptional digital experiences.
            </p>
          </div>

          {/* Right Content - Card with Hover Effect */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}