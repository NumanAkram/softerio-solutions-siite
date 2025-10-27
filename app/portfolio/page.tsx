"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronUp,
  Code,
  Palette,
  Settings,
  Database,
  Cloud,
  Smartphone,
  Layers,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/portfolio/Navbar";

import AtTheRate from "@/public/icons/at-the-rate.svg";
import Github from "@/public/icons/github.svg";
import LinkedIn from "@/public/icons/linkedin.svg";

export default function PortfolioPage() {
  const [portfolioFilter, setPortfolioFilter] = useState("ALL");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // All portfolio items from the projects folder
  const portfolioItems = [
    {
      id: 1,
      title: "ExactFlow",
      subtitle: "WEB DEVELOPMENT",
      description: "Modern web application with Next.js and Python",
      category: "CODED",
      type: "development",
      image: "/images/projects/exactflow.jpg",
      client: "ExactFlow Corp",
      languages: "next.js, typescript, python",
      duration: "5 months",
      budget: "$48000",
      previewUrl: "https://www.exact-solutions.com/",
    },
    {
      id: 2,
      title: "BigSystema",
      subtitle: "WEB DEVELOPMENT",
      description: "Enterprise system built with Vue.js and Laravel",
      category: "CODED",
      type: "development",
      image: "/images/projects/bigsystema.jpg",
      client: "BigSystema Inc",
      languages: "vue.js, nuxt 3, typescript, laravel",
      duration: "6 months",
      budget: "$58000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 3,
      title: "FormBrick",
      subtitle: "WEB DEVELOPMENT",
      description: "Survey platform with modern tech stack",
      category: "CODED",
      type: "development",
      image: "/images/projects/formbricks.png",
      client: "FormBrick Ltd",
      languages: "next.js, typescript, prisma, tailwind",
      duration: "7 months",
      budget: "$65000",
      previewUrl: "https://formbricks.com/",
    },
    {
      id: 4,
      title: "BehindWords",
      subtitle: "WEB DEVELOPMENT",
      description: "Content management platform",
      category: "CODED",
      type: "development",
      image: "/images/projects/behindwords.png",
      client: "BehindWords Corp",
      languages: "react, node.js, typescript, postgresql",
      duration: "6 months",
      budget: "$52000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 5,
      title: "HackerNews Clone",
      subtitle: "WEB DEVELOPMENT",
      description: "News aggregation platform clone",
      category: "CODED",
      type: "development",
      image: "/images/projects/SebastienChopin.png",
      client: "HackerNews Inc",
      languages: "nuxt.js, vue.js, typescript",
      duration: "4 months",
      budget: "$42000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 6,
      title: "Nuxt DevTools",
      subtitle: "DEVELOPMENT TOOLS",
      description: "Developer tools for Nuxt.js framework",
      category: "CODED",
      type: "tools",
      image: "/images/projects/devTTools.webp",
      client: "Nuxt Corp",
      languages: "nuxt.js, vue.js, typescript, unoCSS",
      duration: "6 months",
      budget: "$55000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 7,
      title: "E-commerce Platform",
      subtitle: "WEB DEVELOPMENT",
      description: "Full-stack e-commerce solution",
      category: "CODED",
      type: "development",
      image: "/images/projects/4.png",
      client: "Tech Startup",
      languages: "react, node.js, mongodb",
      duration: "6 months",
      budget: "$45000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 8,
      title: "Mobile App",
      subtitle: "MOBILE DEVELOPMENT",
      description: "Cross-platform mobile application",
      category: "CODED",
      type: "mobile",
      image: "/images/projects/5.png",
      client: "App Company",
      languages: "react native, firebase",
      duration: "4 months",
      budget: "$35000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 9,
      title: "UI/UX Design",
      subtitle: "DESIGN",
      description: "Modern user interface design",
      category: "DESIGNED",
      type: "design",
      image: "/images/projects/6.png",
      client: "Design Studio",
      languages: "figma, principle",
      duration: "3 months",
      budget: "$28000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 10,
      title: "TechFlow",
      subtitle: "WEB DEVELOPMENT",
      description: "Advanced web application with modern tech stack",
      category: "CODED",
      type: "development",
      image: "/images/projects/one.png",
      client: "Project Corp",
      languages: "react, typescript, node.js",
      duration: "5 months",
      budget: "$40000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 11,
      title: "MobileSync",
      subtitle: "MOBILE APP",
      description: "Cross-platform mobile solution for data synchronization",
      category: "CODED",
      type: "mobile",
      image: "/images/projects/two.png",
      client: "Mobile Inc",
      languages: "flutter, dart, firebase",
      duration: "4 months",
      budget: "$35000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 12,
      title: "CreativeHub",
      subtitle: "WEB DESIGN",
      description: "Creative web design solution for creative agencies",
      category: "DESIGNED",
      type: "design",
      image: "/images/projects/three.png",
      client: "Design Corp",
      languages: "figma, adobe xd",
      duration: "3 months",
      budget: "$25000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 13,
      title: "NextGen",
      subtitle: "WEB DEVELOPMENT",
      description: "Full-stack web application",
      category: "CODED",
      type: "development",
      image: "/images/projects/4n.png",
      client: "Web Corp",
      languages: "next.js, typescript, prisma",
      duration: "6 months",
      budget: "$50000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 14,
      title: "AppMaster",
      subtitle: "MOBILE DEVELOPMENT",
      description: "Native mobile application",
      category: "CODED",
      type: "mobile",
      image: "/images/projects/5n.png",
      client: "Mobile Corp",
      languages: "swift, kotlin, firebase",
      duration: "5 months",
      budget: "$45000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 15,
      title: "EnterprisePro",
      subtitle: "WEB DEVELOPMENT",
      description: "Enterprise web solution",
      category: "CODED",
      type: "development",
      image: "/images/projects/six.png",
      client: "Enterprise Inc",
      languages: "vue.js, laravel, mysql",
      duration: "7 months",
      budget: "$60000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 16,
      title: "BrandVision",
      subtitle: "DESIGN",
      description: "Brand identity design",
      category: "DESIGNED",
      type: "design",
      image: "/images/projects/7.png",
      client: "Brand Corp",
      languages: "photoshop, illustrator",
      duration: "2 months",
      budget: "$20000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 17,
      title: "ShopHub",
      subtitle: "WEB DEVELOPMENT",
      description: "E-commerce platform",
      category: "CODED",
      type: "development",
      image: "/images/projects/eight.png",
      client: "E-commerce Inc",
      languages: "react, node.js, mongodb",
      duration: "6 months",
      budget: "$55000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 18,
      title: "SocialConnect",
      subtitle: "MOBILE APP",
      description: "Social media application",
      category: "CODED",
      type: "mobile",
      image: "/images/projects/nine.png",
      client: "Social Corp",
      languages: "react native, firebase",
      duration: "5 months",
      budget: "$40000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 19,
      title: "ContentPro",
      subtitle: "WEB DEVELOPMENT",
      description: "Content management system",
      category: "CODED",
      type: "development",
      image: "/images/projects/ten.png",
      client: "CMS Corp",
      languages: "wordpress, php, mysql",
      duration: "4 months",
      budget: "$30000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 20,
      title: "DesignSystem",
      subtitle: "DESIGN",
      description: "UI/UX design system",
      category: "DESIGNED",
      type: "design",
      image: "/images/projects/eleven.png",
      client: "Design System Inc",
      languages: "figma, principle",
      duration: "3 months",
      budget: "$25000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 21,
      title: "APIGateway",
      subtitle: "WEB DEVELOPMENT",
      description: "API development platform",
      category: "CODED",
      type: "development",
      image: "/images/projects/twelve.png",
      client: "API Corp",
      languages: "node.js, express, postgresql",
      duration: "5 months",
      budget: "$45000",
      previewUrl: "https://preview_of_project.com",
    },
    {
      id: 22,
      title: "FitTracker",
      subtitle: "MOBILE DEVELOPMENT",
      description: "Fitness tracking app",
      category: "CODED",
      type: "mobile",
      image: "/images/projects/thirteen.png",
      client: "Fitness Inc",
      languages: "flutter, dart, firebase",
      duration: "6 months",
      budget: "$50000",
      previewUrl: "https://preview_of_project.com",
    },
  ];

  const filteredPortfolio =
    portfolioFilter === "ALL"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === portfolioFilter);

  return (
    <div className=" bg-[#D7D7D7]">
      {/* Hero Section - Reduced Height */}
      <section className="">
        {/* <div className="bg-gradient-to-br from-gray-200 to-gray-300"></div> */}
        <Navbar />
        {/* Diagonal Split */}
        <div className="flex h-screen">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-1/2 pt-40  flex flex-col justify-center lg:pl-[13.2rem] md:pl-28 pl-20"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl text-black font-bold mb-3"
            >
              Hi, I am
            </motion.p>

            <div className="pt-10 pb-20">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="lg:text-6xl text-2xl text-black font-bold mb-2"
              >
                Numan Akram
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl text-[#909090] font-bold mb-8"
              >
                CEO of Softerio Solutions
              </motion.p>
            </div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex space-x-6"
            >
              <a
                href="mailto:mnumanakrambhatti@gmail.com"
                className="w-[3.1rem] h-11 bg-[#C4C4C4] flex items-center justify-center hover:bg-gray-400 transition-all duration-300 hover:scale-110"
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)" }}
              >
                <Image src={AtTheRate} alt="Email" className="w-7 h-7" />
              </a>
              <Link
                href="https://github.com/muhammadnuman-eng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[3.1rem] h-11 bg-[#C4C4C4] flex items-center justify-center hover:bg-gray-400 transition-all duration-300 hover:scale-110"
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)" }}
              >
                <Image src={Github} alt="GitHub" className="w-7 h-7" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/softerio-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[3.1rem] h-11 bg-[#C4C4C4] flex items-center justify-center hover:bg-gray-400 transition-all duration-300 hover:scale-110"
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)" }}
              >
                <Image src={LinkedIn} alt="LinkedIn" className="w-8 h-8" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-[77%] bg-black relative overflow-hidden"
            style={{
              clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            {/* <div className="w-full h-full flex items-center justify-center relative"> */}
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-full  flex items-end rounded-lg pt-20"
            >
              <Image
                src="/images/Numan-bg-preview.png"
                alt="Softerio Solutions"
                width={100}
                height={100}
                className="w-[40rem] object-contain"
              />
            </motion.div>

            {/* Quote */}
            {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-12 right-12 bg-white p-3 rounded-lg shadow-lg max-w-xs"
              >
                <p className="text-xs text-gray-600">
                  Transforming ideas into digital reality with cutting-edge
                  technology
                </p>
              </motion.div> */}
            {/* </div> */}
          </motion.div>
        </div>

        {/* Bottom Section - Black Background with Reduced Height */}
      </section>
      <section className="bg-[#1D1D1D] text-white h-[34vh] bg-opacity-100 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-12 gap-4 place-content-between"
        >
          <div className="col-span-8 py-9 pl-[4rem]">
            <h3 className="text-2xl font-bold mb-2 tracking-wider">
              SOFTERIO SOLUTIONS
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed py-4">
            We specialize in creating innovative web and mobile solutions that
              drive business growth. Our team of experts delivers cutting-edge
              technology solutions with a focus on user experience and
              performance. From concept to deployment, we transform your vision into
              reality with precision and creativity. Partner with us to elevate your
              digital presence and achieve measurable success.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className=" border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-4 py-2 border-l-2 border-r-2 text-sm"
            >
              READ MORE
            </button>
          </div>

          <div className="col-span-4 flex justify-end">
            <Image
              className="w-[90%]"
              src="/icons/logo-itb.svg"
              alt="Softerio Solutions"
              width={100}
              height={100}
            />
          </div>
        </motion.div>
      </section>
      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-gray-200 flex flex-col justify-center py-20"
      >
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block border-4 border-black px-12 py-4 mb-8">
              <h2 className="text-2xl font-bold tracking-wider text-black">
                ABOUT US
              </h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Softerio Solutions is a leading technology company specializing in
            web development, mobile applications, and UI/UX design. We help
            businesses transform their digital presence with innovative
            solutions that drive growth and user engagement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <button
              onClick={() =>
                document
                  .getElementById("skills")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-gray-400 text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300 px-8 py-2 rounded"
            >
              EXPLORE SKILLS
            </button>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mb-16"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-px bg-gray-400"></div>
              <div className="w-8 h-8 border-2 border-gray-400 rotate-45"></div>
              <div className="w-16 h-px bg-gray-400"></div>
            </div>
          </motion.div>

          {/* Service Cards - 2 per row with reduced height and increased width */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {[
              {
                icon: <Palette className="w-8 h-8" />,
                title: "DESIGN",
                description:
                  "We create beautiful, user-friendly interfaces that enhance user experience and drive engagement.",
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "DEVELOPMENT",
                description:
                  "Our expert developers build robust, scalable applications using the latest technologies and best practices.",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="text-left p-6 rounded-lg transition-all duration-300 hover:-translate-y-2 h-48">
                  <div className="mb-4 text-gray-600 group-hover:text-black transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-wider text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Third Card - Centered in second row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="group cursor-pointer w-full md:w-1/2">
              <div className="text-left p-6 rounded-lg transition-all duration-300 hover:-translate-y-2 h-48">
                <div className="mb-4 text-gray-600 group-hover:text-black transition-colors duration-300">
                  <Settings className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-wider text-black">
                  MAINTENANCE
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We provide ongoing support and maintenance to ensure your
                  applications run smoothly and efficiently.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-px bg-gray-400"></div>
              <div className="w-8 h-8 border-2 border-gray-400 rotate-45"></div>
              <div className="w-16 h-px bg-gray-400"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block border-4 border-black px-12 py-4 mb-8">
              <h2 className="text-2xl font-bold tracking-wider text-black">
                OUR SKILLS
              </h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We master a wide range of technologies and frameworks to deliver
            cutting-edge solutions for our clients.
          </motion.p>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Frontend Development",
                icon: <Code className="w-8 h-8 text-blue-600" />,
                tech: [
                  "React",
                  "Vue.js",
                  "Next.js",
                  "Nuxt.js",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TypeScript",
                  "Bootstrap",
                  "Sass",
                ],
              },
              {
                name: "Backend Development",
                icon: <Layers className="w-8 h-8 text-green-600" />,
                tech: [
                  "Node.js",
                  "Python",
                  "Laravel",
                  ".NET",
                  "PHP",
                  "Express.js",
                ],
              },
              {
                name: "Mobile Development",
                icon: <Smartphone className="w-8 h-8 text-purple-600" />,
                tech: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
              },
              {
                name: "Database",
                icon: <Database className="w-8 h-8 text-orange-600" />,
                tech: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite"],
              },
              {
                name: "Cloud & DevOps",
                icon: <Cloud className="w-8 h-8 text-indigo-600" />,
                tech: ["AWS", "Azure", "Docker", "Kubernetes", "Git", "CI/CD"],
              },
              {
                name: "Design Tools",
                icon: <Palette className="w-8 h-8 text-pink-600" />,
                tech: [
                  "Figma",
                  "Adobe XD",
                  "Sketch",
                  "Photoshop",
                  "Illustrator",
                ],
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="text-lg font-bold ml-3 text-gray-900">
                    {skill.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Black Background Connected with Portfolio Heading */}
      <section id="portfolio" className="min-h-screen bg-black py-20">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-64 bg-cover bg-center relative mb-16"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600)",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block border-4 border-white px-12 py-4"
            >
              <h2 className="text-2xl font-bold tracking-wider text-black bg-white px-4 py-2">
                PORTFOLIO
              </h2>
            </motion.div>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto px-8">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="bg-gray-800 rounded-lg p-2 flex space-x-1">
              {["ALL", "CODED", "DESIGNED"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setPortfolioFilter(filter)}
                  className={`px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    portfolioFilter === filter
                      ? "bg-white text-black"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <AnimatePresence mode="wait">
              {filteredPortfolio.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/images/projects/4.png";
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-center text-white">
                            <h4 className="text-xl font-bold mb-2">
                              {item.title}
                            </h4>
                            <p className="text-sm mb-4">{item.subtitle}</p>
                            <div className="space-y-2 text-xs mb-4">
                              <div className="flex justify-between">
                                <span>Client:</span>
                                <span className="text-teal-300">
                                  {item.client}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span>Duration:</span>
                                <span className="text-teal-300">
                                  {item.duration}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span>Budget:</span>
                                <span className="text-teal-300">
                                  {item.budget}
                                </span>
                              </div>
                            </div>
                            <div className="flex space-x-4 justify-center">
                              <button className="bg-white text-black hover:bg-gray-200 transition-all duration-300 px-4 py-2 rounded text-sm font-medium">
                                DEMO
                              </button>
                              <button className="border border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-4 py-2 rounded text-sm font-medium">
                                MORE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-gray-500">{item.languages}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* More Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-300 text-lg">And many more to come!</p>
          </motion.div>
        </div>
      </section>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-lg z-50"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
