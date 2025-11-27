"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import {
  Brain,
  Cpu,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Globe,
  Users,
  ArrowRight,
  Play,
  CheckCircle,
  Code,
  BarChart3,
  Settings,
  Rocket,
} from "lucide-react";
import ChatWidget from "@/components/ChatWidget";

export default function AIPage() {
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

    const heroSection = document.getElementById("ai-hero");
    if (heroSection) observer.observe(heroSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  const aiServices = [
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description:
        "Custom ML models and algorithms tailored to your business needs",
      features: [
        "Predictive Analytics",
        "Pattern Recognition",
        "Data Classification",
      ],
    },
    {
      icon: Cpu,
      title: "AI-Powered Automation",
      description: "Streamline operations with intelligent automation systems",
      features: [
        "Process Automation",
        "Workflow Optimization",
        "Smart Decision Making",
      ],
    },
    {
      icon: Zap,
      title: "Natural Language Processing",
      description:
        "Advanced text analysis and language understanding capabilities",
      features: [
        "Sentiment Analysis",
        "Text Classification",
        "Language Translation",
      ],
    },
    {
      icon: Target,
      title: "Computer Vision",
      description: "Image and video analysis for enhanced business insights",
      features: ["Object Detection", "Facial Recognition", "Quality Control"],
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions",
      features: [
        "Market Analysis",
        "Risk Assessment",
        "Performance Prediction",
      ],
    },
    {
      icon: Shield,
      title: "AI Security",
      description: "Protect your systems with intelligent threat detection",
      features: [
        "Anomaly Detection",
        "Fraud Prevention",
        "Security Monitoring",
      ],
    },
  ];

  const aiTechnologies = [
    { name: "TensorFlow", icon: Code, color: "from-orange-500 to-red-600" },
    { name: "PyTorch", icon: Brain, color: "from-red-500 to-orange-600" },
    { name: "OpenAI GPT", icon: Globe, color: "from-blue-500 to-purple-600" },
    {
      name: "Computer Vision",
      icon: Target,
      color: "from-green-500 to-blue-600",
    },
    { name: "NLP", icon: Zap, color: "from-purple-500 to-pink-600" },
    {
      name: "Deep Learning",
      icon: Cpu,
      color: "from-indigo-500 to-purple-600",
    },
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Increased Efficiency",
      description:
        "Automate repetitive tasks and boost productivity by up to 300%",
    },
    {
      icon: BarChart3,
      title: "Better Insights",
      description:
        "Gain deeper understanding of your data and customer behavior",
    },
    {
      icon: Users,
      title: "Enhanced Customer Experience",
      description:
        "Personalize interactions and provide 24/7 intelligent support",
    },
    {
      icon: TrendingUp,
      title: "Cost Reduction",
      description: "Reduce operational costs through intelligent automation",
    },
  ];

  const stats = [
    { number: "95%", label: "Accuracy Rate", icon: Target },
    { number: "300%", label: "Efficiency Boost", icon: TrendingUp },
    { number: "24/7", label: "Availability", icon: Settings },
    { number: "50%", label: "Cost Reduction", icon: TrendingUp },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden max-w-full">
      {/* Hero Section */}
      <section
        id="ai-hero"
        className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 dark:from-black dark:via-gray-900 dark:to-teal-900 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900"></div>
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

        <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-8 relative z-10">
          <div className="relative min-h-screen flex items-center justify-center max-w-full overflow-hidden">
            
            {/* Background - AI Visualization (Behind) - Only on Mobile/Tablet */}
            <div className="absolute inset-0 flex items-center justify-center opacity-70 md:opacity-80 lg:hidden pointer-events-none z-0">
              <div className="relative w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] bg-slate-800/60 rounded-full shadow-2xl shadow-teal-500/30 backdrop-blur-md">
                {/* Central AI Core */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 bg-gradient-to-br from-teal-400 via-teal-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-teal-500/70 ring-4 ring-teal-400/30">
                    <Brain className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 text-white drop-shadow-lg" />
                  </div>
                </motion.div>

                {/* Orbiting Elements */}
                {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 15 + index * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0"
                    style={{
                      transformOrigin: "center",
                    }}
                  >
                    <div
                      className="absolute w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full shadow-2xl shadow-teal-400/80 ring-2 ring-teal-400/50"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-120px)`,
                      }}
                    />
                  </motion.div>
                ))}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="3,3"
                    animate={{
                      strokeDashoffset: [0, 6],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#14b8a6"
                        stopOpacity="0.9"
                      />
                      <stop
                        offset="100%"
                        stopColor="#3b82f6"
                        stopOpacity="0.9"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Foreground - Text Content (On Top - Mobile/Tablet) */}
            <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center md:text-left space-y-6 sm:space-y-8 lg:hidden">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-fade-in-up [animation-delay:100ms] text-shadow-lg">
                <span className="text-white drop-shadow-2xl">Artificial </span>
                <span className="text-teal-400 drop-shadow-2xl">Intelligence</span>
              </h1>
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-white leading-relaxed animate-fade-in-up [animation-delay:300ms] max-w-3xl mx-auto md:mx-0 drop-shadow-lg">
                Transform your business with cutting-edge AI solutions. From
                machine learning to automation, we deliver intelligent systems
                that drive growth and innovation.
              </p>
              <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-5 animate-fade-in-up [animation-delay:500ms] justify-center md:justify-start items-center md:items-start w-full max-w-2xl mx-auto md:mx-0">
                <button 
                  className="bg-teal-500 hover:bg-teal-600 text-white px-6 xs:px-8 sm:px-10 py-3 xs:py-4 sm:py-5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50 flex items-center justify-center gap-2 sm:gap-3 text-sm xs:text-base sm:text-lg whitespace-nowrap shadow-xl"
                >
                  <span className="flex items-center justify-center gap-2 sm:gap-3">
                    Explore AI Solutions
                    <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  </span>
                </button>
                <button 
                  onClick={() => (window.location.href = "/video")}
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 xs:px-8 sm:px-10 py-3 xs:py-4 sm:py-5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 sm:gap-3 text-sm xs:text-base sm:text-lg whitespace-nowrap shadow-xl cursor-pointer"
                >
                  <span className="flex items-center justify-center gap-2 sm:gap-3">
                    <Play className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    Watch Demo
                  </span>
                </button>
              </div>
            </div>

            {/* Desktop Layout (Side by Side) - Only on Desktop */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center w-full relative z-20">
              {/* Left: Text Content */}
              <div className="space-y-6 pr-14 max-w-2xl text-left flex flex-col items-start">
                <h1 className="text-4xl xl:text-[45px] font-bold leading-tight animate-fade-in-up [animation-delay:100ms]">
                  <span className="text-white">Artificial </span>
                  <span className="text-teal-400">Intelligence</span>
                </h1>
                <p className="text-lg text-white leading-relaxed animate-fade-in-up [animation-delay:300ms]">
                  Transform your business with cutting-edge AI solutions. From
                  machine learning to automation, we deliver intelligent systems
                  that drive growth and innovation.
                </p>
                <div className="flex flex-row gap-4 animate-fade-in-up [animation-delay:500ms] justify-start items-start">
                  <button 
                    className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 flex items-center justify-center gap-2 text-base whitespace-nowrap"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Explore AI Solutions
                      <ArrowRight className="w-5 h-5 flex-shrink-0" />
                    </span>
                  </button>
                  <button 
                    onClick={() => (window.location.href = "/video")}
                    className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-base whitespace-nowrap cursor-pointer"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Play className="w-5 h-5 flex-shrink-0" />
                      Watch Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right: AI Visualization Card */}
              <div className="relative w-full flex items-center justify-end">
                <div className="relative rounded-full bg-slate-800/30 backdrop-blur-sm p-6">
                  <div className="relative w-[360px] h-[360px] xl:w-[384px] xl:h-[384px]">
                    {/* Central AI Core */}
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-teal-500/50">
                        <Brain className="w-16 h-16 text-white" />
                      </div>
                    </motion.div>

                    {/* Orbiting Elements */}
                    {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                      <motion.div
                        key={index}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 15 + index * 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0"
                        style={{
                          transformOrigin: "center",
                        }}
                      >
                        <div
                          className="absolute w-4 h-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full shadow-lg"
                          style={{
                            top: "50%",
                            left: "50%",
                            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-120px)`,
                          }}
                        />
                      </motion.div>
                    ))}

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="35"
                        stroke="url(#gradient-desktop)"
                        strokeWidth="0.5"
                        fill="none"
                        strokeDasharray="2,2"
                        animate={{
                          strokeDashoffset: [0, 4],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <defs>
                        <linearGradient
                          id="gradient-desktop"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#14b8a6"
                            stopOpacity="0.6"
                          />
                          <stop
                            offset="100%"
                            stopColor="#3b82f6"
                            stopOpacity="0.6"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-12 2xl:py-10 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-10 2xl:mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              AI-Powered Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our comprehensive range of artificial intelligence
              services designed to transform your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <CheckCircle className="w-4 h-4 text-teal-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-12 2xl:py-10 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-10 2xl:mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Cutting-Edge AI Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We leverage the latest advancements in artificial intelligence to
              deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div
                  className={`bg-gradient-to-br ${tech.color} rounded-2xl p-8 text-center text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                >
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                  <p className="text-white/80 text-sm">
                    Advanced implementation and optimization
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-12 2xl:py-10 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-10 2xl:mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose AI Solutions?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the transformative power of artificial intelligence in
              your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-12 2xl:py-10 bg-gradient-to-br from-slate-900 to-teal-900 dark:from-black dark:to-teal-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-10 2xl:mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              AI Success Metrics
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real results from our AI implementations across various industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-10 h-10 text-teal-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-12 2xl:py-10 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how artificial intelligence can revolutionize your
              operations and drive unprecedented growth
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center w-full max-w-md sm:max-w-none mx-auto">
              <button
                onClick={() => (window.location.href = "/services")}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto whitespace-nowrap"
              >
                <span className="flex items-center justify-center gap-2">
                  Start AI Journey
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                </span>
              </button>
              <button
                onClick={() => (window.location.href = "/quotes")}
                className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center text-sm sm:text-base w-full sm:w-auto whitespace-nowrap"
              >
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <ChatWidget />
    </main>
  );
}
