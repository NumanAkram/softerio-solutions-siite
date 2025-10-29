"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/portfolio/Navbar";
import SeparatorImg from "@/public/images/separator.png";
import AtTheRate from "@/public/icons/at-the-rate.svg";
import Github from "@/public/icons/github.svg";
import LinkedIn from "@/public/icons/linkedin.svg";
import Maintenance from "@/public/icons/maintenance.png";
import BaselineDoubleArrow from "@/public/icons/ic_baseline-double-arrow.svg";
import FacebookIcon from "@/public/icons/facebook.svg";
import LinkedInIcon from "@/public/icons/linkedin-border.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import EmailIcon from "@/public/icons/email.svg";
import WhatsappIcon from "@/public/icons/whatsapp-black.png";

// Form data interface
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const aboutUs = [
  {
    icon: "/icons/design.png",
    title: "D E S I G N",
    description:
      "We create beautiful, user-friendly interfaces that enhance user experience and drive engagement.",
  },
  {
    icon: "/icons/development.png",
    title: "D E V E L O P M E N T",
    description:
      "Our expert developers build robust, scalable applications using the latest technologies and best practices.",
  },
];

// Skills data arrays
const usingNowSkills = [
  { name: "HTML5", icon: "/icons/html.svg" },
  { name: "CSS3", icon: "/icons/css.svg" },
  { name: "SASS", icon: "/icons/sass.svg" },
  { name: "JAVASCRIPT", icon: "/icons/javascript.svg" },
  { name: "REACT", icon: "/icons/react.svg" },
  { name: "BOOTSTRAP", icon: "/icons/bootstrap.svg" },
  { name: "GIT", icon: "/icons/git.png" },
  { name: "FIGMA", icon: "/icons/figma.svg" },
];

const learningSkills = [
  { name: "NODEJS", icon: "/icons/nodejs.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "MONGODB", icon: "/icons/mongodb.svg" },
  { name: "TYPESCRIPT", icon: "/icons/typescript.svg" },
];

const otherSkills = [
  { name: "ENGLISH", icon: "/icons/angielski.png" },
  { name: "HISZPANSKI\nB1/B2", icon: "/icons/hiszpanski.png" },
  { name: "C++", icon: "/icons/c++.png" },
  { name: "C", icon: "/icons/c.png" },
];

export default function PortfolioPage() {
  const [portfolioFilter, setPortfolioFilter] = useState("ALL");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

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

  // Form submission handler
  const onSubmit = (data: FormData) => {
    console.log("Form submitted with data:", data);

    // Reset form after submission
    reset();
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
            //2xl:pl-[13.2rem] xl:pl-[6rem] pl-[5rem]
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
                className="lg:text-6xl text-2xl text-black font-bold mb-2 -mr-7"
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
              <Link
                href="mailto:mnumanakrambhatti@gmail.com"
                className="w-[2.7rem] h-11 bg-[#C4C4C4] flex items-center justify-center hover:bg-gray-400 transition-all duration-300 hover:scale-110"
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)" }}
              >
                <Image src={AtTheRate} alt="Email" className="w-7 h-7" />
              </Link>
              <Link
                href="https://github.com/muhammadnuman-eng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[2.7rem] h-11 bg-[#C4C4C4] flex items-center justify-center hover:bg-gray-400 transition-all duration-300 hover:scale-110"
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)" }}
              >
                <Image src={Github} alt="GitHub" className="w-7 h-7" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/softerio-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[2.7rem] h-11 bg-[#C4C4C4] flex items-center justify-center hover:bg-gray-400 transition-all duration-300 hover:scale-110"
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)" }}
              >
                <Image
                  src={LinkedIn}
                  alt="LinkedIn"
                  className="w-[1.8rem] h-[1.8rem]"
                />
              </Link>
              <Link
                href="https://wa.me/923036057586"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[2.7rem] h-11 bg-[#C4C4C4] flex items-center justify-center hover:bg-gray-400 transition-all duration-300 hover:scale-110"
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)" }}
              >
                <Image
                  src={WhatsappIcon}
                  alt="LinkedIn"
                  className="w-[1.8rem] h-[1.8rem]"
                />
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
          <div className="col-span-8 py-9 pl-[4.5rem]">
            <h3 className="text-2xl font-bold mb-2 tracking-wider">
              SOFTERIO SOLUTIONS
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed py-4">
              We specialize in creating innovative web and mobile solutions that
              drive business growth. Our team of experts delivers cutting-edge
              technology solutions with a focus on user experience and
              performance. From concept to deployment, we transform your vision
              into reality with precision and creativity. Partner with us to
              elevate your digital presence and achieve measurable success.
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

      <div className="bg-[url(/images/aboutme-&-skills-section-bg.svg)] bg-cover bg-center">
        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center pt-28"
        >
          <div className="max-w-4xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block border-[6px] border-black px-16 py-5">
                <h2 className="text-2xl font-bold text-black tracking-[0.3em]">
                  ABOUT ME
                </h2>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[#050505] text-xs py-14 max-w-2xl mx-auto leading-relaxed"
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
                className="border-x-2 border-black text-black text-sm font-semibold transition-all duration-300 px-8 py-1"
              >
                EXPLORE
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
              <Image
                src={SeparatorImg}
                alt="arrow-down"
                width={100}
                height={100}
                className="w-32"
              />
            </motion.div>

            {/* Service Cards - 2 per row with reduced height and increased width */}
            <div className="flex gap-8">
              {aboutUs.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="text-left rounded-lg transition-all duration-300 hover:-translate-y-2 ">
                    <div className="flex items-center">
                      <Image
                        className="w-12 -mr-3"
                        src={service.icon}
                        alt={service.title}
                        width={100}
                        height={100}
                      />

                      <h3 className="font-bold tracking-wider text-black pb-2">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-black text-xs leading-relaxed pl-9">
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
              <div className="group cursor-pointer w-full md:w-1/2 pt-14 pb-10">
                <div className="text-left rounded-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center">
                    <Image
                      className="w-14 h-12 -mr-3"
                      src={Maintenance}
                      alt="icon"
                      width={100}
                      height={100}
                    />

                    <h3 className="mt-2 font-bold tracking-wider text-black">
                      M A I N T E N A N C E
                    </h3>
                  </div>
                  <p className="text-black text-xs leading-relaxed pl-11">
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
              <Image
                src={SeparatorImg}
                alt="arrow-down"
                width={100}
                height={100}
                className="w-32"
              />
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-20">
          <div className="max-w-[47rem] mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block border-[7px] border-black px-[5.3rem] py-5 mb-20">
                <h2 className="text-2xl font-bold text-black tracking-[0.4em]">
                  SKILLS
                </h2>
              </div>
            </motion.div>

            {/* Using Now Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-[7.4rem]"
            >
              <h3 className="text-2xl px-3 font-bold text-black mb-[4.5rem] text-left tracking-[0.2em]">
                USING NOW:
              </h3>
              <div className="grid grid-cols-4 gap-x-24 gap-y-14 place-content-between">
                {usingNowSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-5"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={80}
                      height={80}
                      className="w-auto h-20"
                    />
                    <p className="text-[1.2rem] text-black font-light tracking-[0.1em]">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Learning Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h3 className="text-2xl px-3 font-bold text-black mb-[4.5rem] text-left tracking-[0.2em]">
                LEARNING:
              </h3>
              <div className="grid grid-cols-4 gap-x-24 gap-y-14">
                {learningSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-6"
                  >
                    <Image
                      className="w-auto h-20"
                      src={skill.icon}
                      alt={skill.name}
                      width={100}
                      height={100}
                    />
                    <p className="text-[1.2rem] text-black font-light tracking-[0.1em]">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Other Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl px-3 font-bold text-black mb-[4.5rem] text-left tracking-[0.2em]">
                OTHER SKILLS:
              </h3>
              <div className="grid grid-cols-4 gap-x-24 gap-8">
                {otherSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-5"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={80}
                      height={80}
                      className="w-auto h-20"
                    />
                    <p className="text-[1.2rem] text-black font-light tracking-[0.1em]">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Portfolio Section - Black Background Connected with Portfolio Heading */}
      <section id="portfolio" className="bg-[#1A1A1A]">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-64 bg-cover bg-center bg-[url(/images/portfolio-bg.png)]"
        >
          <div className="flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block border-[7px] border-black px-16 py-3"
            >
              <h2 className="text-2xl font-bold text-black px-4 py-2 tracking-[0.3em]">
                PORTFOLIO
              </h2>
            </motion.div>
          </div>
        </motion.div>

        <div className="">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center pt-8 pb-7"
          >
            <div className=" space-x-12 border-b-2 border-gray-700">
              {["ALL", "CODED", "DESIGNED"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setPortfolioFilter(filter)}
                  className={`px-6 pb-2 text-xs font-semibold tracking-wider transition-all duration-300 relative ${
                    portfolioFilter === filter
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {filter}
                  {portfolioFilter === filter && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#FFFFFF]"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            <AnimatePresence mode="wait">
              {filteredPortfolio.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group cursor-pointer w-full h-80"
                >
                  {/* <div className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"> */}
                    {/* <div className="h-48"> */}
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
                    {/* </div> */}
                  {/* </div> */}
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
            className="text-center py-4"
          >
            <p className="text-gray-300">And many more to come!</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[url(/images/contact-section-bg.svg)] bg-cover bg-center pt-28">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block border-[7px] border-black px-[3.4rem] py-[1.1rem]">
              <h2 className="text-2xl font-bold text-black tracking-[0.3em]">
                CONTACT
              </h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-black text-xs pt-10 pb-4 max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind? Let's collaborate and bring your vision to life. 
            Whether you need web development, mobile applications, or UI/UX design services, 
            Softerio Solutions is here to help. Reach out to us today and let's create 
            something extraordinary together.
          </motion.p>

          {/* Decorative Separator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src={SeparatorImg}
              alt="arrow-down"
              width={100}
              height={100}
              className="w-32"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto text-left pt-20 pb-12"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  {...register("name", { required: "Field is required" })}
                  className="border-b-4 border-l-4 border-black w-full bg-transparent outline-none px-3 pt-2 pb-1 placeholder:pt-2 text-black placeholder:text-xs placeholder:font-bold placeholder-[#8B8B8B]"
                  placeholder="ENTER YOUR NAME*"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  {...register("email", {
                    required: "Field is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full bg-transparent border-b-4 border-l-4 border-black outline-none px-3 pt-2 pb-1 placeholder:pt-2 text-black placeholder:text-xs placeholder:font-bold placeholder-[#8B8B8B]"
                  placeholder="ENTER YOUR EMAIL*"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <input
                  type="tel"
                  {...register("phone")}
                  className="w-full bg-transparent border-b-4 border-l-4 border-black outline-none px-3 pt-2 pb-1 placeholder:pt-2 text-black placeholder:text-xs placeholder:font-bold placeholder-[#8B8B8B]"
                  placeholder="PHONE NUMBER"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  rows={5}
                  {...register("message", { required: "Field is required" })}
                  className="w-full bg-transparent border-b-4 border-l-4 border-black outline-none px-3 pb-1 placeholder:pt-2 text-black placeholder:text-xs placeholder:font-bold placeholder-[#8B8B8B] resize-none"
                  placeholder="YOUR MESSAGE*"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="mx-4 border-x-2 border-black px-10 py-2 text-black text-xs font-semibold tracking-wider hover:opacity-70 transition-opacity duration-300"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="max-w-4xl mx-auto px-8 text-center">
          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <button
              onClick={scrollToTop}
              className="flex flex-col gap-2 items-center justify-center mx-auto text-white hover:opacity-70 transition-opacity duration-300"
            >
              <Image
                src={BaselineDoubleArrow}
                alt="Arrow Up"
                className="w-3 h-3"
              />
              <span className="text-xs font-semibold tracking-wider">
                BACK TO TOP
              </span>
            </button>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center gap-5 mb-8"
          >
            {/* Facebook */}
            <Link
              className="transition-all duration-300"
              href="https://www.facebook.com/share/19g2uGoibD/"
              target="_blank"
            >
              <Image
                src={FacebookIcon}
                alt="Facebook"
                width={100}
                height={100}
                className="w-6 h-6"
              />
            </Link>

            {/* LinkedIn */}
            <Link
              className="transition-all duration-300"
              href="https://www.linkedin.com/in/numan-akram-founder/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={LinkedInIcon}
                alt="linkedin"
                width={100}
                height={100}
                className="w-6 h-6"
              />
            </Link>

            {/* Instagram */}
            <Link
              className="transition-all duration-300"
              href="https://www.instagram.com/numanakram143?utm_source=qr&igsh=MmgzOWtmdG5kb2Jo"
              target="_blank"
            >
              <Image
                className="w-6 h-6"
                src={InstagramIcon}
                alt="instagram"
                width={100}
                height={100}
              />
            </Link>

            {/* Email */}
            <Link
              className=" transition-all duration-300"
              href="mailto:mnumanakrambhatti@gmail.com"
            >
              <Image
                src={EmailIcon}
                alt="email"
                width={100}
                height={100}
                className="w-6 h-6"
              />
            </Link>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-sm text-white"
          >
            ©2020 Numan Akram All Rights Reserved.
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
