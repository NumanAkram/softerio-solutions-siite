"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import heroBgImg from "@/public/images/hero-bg.png";
import heroBgMobileImg from "@/public/images/hero-bg-mobile1.png";

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
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 dark:from-black dark:via-gray-900 dark:to-teal-900 overflow-hidden transition-colors duration-300 w-full"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-60">
        <Image
          className="xl:block hidden w-full h-full object-cover"
          src={heroBgImg}
          alt="hero-image"
          width={100}
          height={100}
        />
        <Image
          className="xl:hidden block w-full h-full object-cover"
          src={heroBgMobileImg}
          alt="hero-image-mobile"
          width={100}
          height={100}
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
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl bg-blue-500/10"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-3xl bg-indigo-500/10"></div>

      {/* Container Wrapper for Content */}
      <div className="w-full flex justify-center relative z-10">
        <div className="w-full max-w-[1920px] px-4 sm:px-6 pt-24 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen w-full">
            {/* Left Content */}
            <div className="order-2 lg:order-1 space-y-4 sm:space-y-6 pr-0 xl:pr-14 w-full max-w-full sm:max-w-[40.2rem] pt-12 sm:pt-16 md:pt-20 ml-0 sm:ml-2 md:ml-6 lg:ml-9 xl:ml-10">
              <h1 className="flex flex-col text-[28px] sm:text-[32px] md:text-[38px] lg:text-[45px] font-semibold leading-tight animate-fade-in-up [animation-delay:100ms]">
                <span className="text-white">Delivering </span>
                <span className="text-teal-400">Soft IT Solutions</span>
              </h1>
              <p className="text-base sm:text-lg text-white animate-fade-in-up [animation-delay:300ms]">
                Softerio Solutions provides customizable, SEO-friendly software
                solutions tailored to your business needs. We turn your ideas into
                exceptional digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
