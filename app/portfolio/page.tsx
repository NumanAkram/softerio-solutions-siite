"use client";

import { useState, useEffect, useMemo } from "react";
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
import PortfolioPicture from "@/public/images/picture.png";

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
  { name: "PYTHON", icon: "/icons/python.png" },
  { name: "REACT NATIVE", icon: "/icons/react-native.png" },
];

const learningSkills = [
  { name: "NODEJS", icon: "/icons/nodejs.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "MONGODB", icon: "/icons/mongodb.svg" },
  { name: "TYPESCRIPT", icon: "/icons/typescript.svg" },
];

const otherSkills = [
  { name: "ENGLISH", icon: "/icons/angielski.png" },
  { name: "ANGULAR", icon: "/icons/angular.png" },
  { name: "ASP.NET", icon: "/icons/asp-dotnet.png" },
  { name: "C#", icon: "/icons/c-sharp.png" },
];

// Portfolio items data
const portfolioItems = [
  {
    id: 1,
    title: "LEGAL MOMO",
    category: "CODED",
    image: "/images/legal momo.jpg",
    link: "#",
    techStack: "Fast-API Python Next.js Typescript",
    description:
      "Created an advanced web platform for attorneys using FastAPI, Python, Next.js, and TypeScript, facilitating streamlined legal document handling and smart case analysis via automation.",
  },
  {
    id: 2,
    title: "Mr Singh's",
    category: "DESIGNED",
    image: "/images/mr-sing,s.jpg",
    link: "https://mrsinghspizza.co.uk/food",
    techStack: "React MySQL Laravel",
    description:
      "Built with React, Laravel, and MySQL, this full-stack app delivers a smooth, dynamic web interface, secure backend, and robust relational data management.",
  },
  {
    id: 3,
    title: "ZYAPPY Web",
    category: "CODED",
    image: "/images/zyapy-web.jpg",
    link: "#",
    techStack: "Vue.js MySQL Laravel",
    description:
      "Built with Vue.js, Laravel, and MySQL, this modern web app delivers a reactive UI, secure server-side API, and efficient relational data storage.",
  },
  {
    id: 4,
    title: "ZYAPPY Mobile-app",
    category: "CODED",
    image: "/images/zyappy-mobile-app.jpg",
    link: "#",
    techStack: "Mobile-app React-Native Nest.js FireBase PostgreSQL",
    description:
      "ZYAPPY is a mobile app built with React Native, Nest.js, Firebase, and PostgreSQL, enabling seamless ordering, real-time updates, and secure data management.",
  },
  {
    id: 5,
    title: "Exactflow",
    category: "CODED",
    image: "/images/sixn.png",
    link: "https://www.exactflow.pl/en",
    techStack: "Python Django React.js Node.js",
    description:
      "Created four advanced chatbots using Python, Django, React, and Node.js to streamline HR, customer service, sales, and support interactions with dynamic, context-driven responses in real time.",
  },
  {
    id: 7,
    title: "Shawarma Store",
    category: "DESIGNED",
    image: "/images/shawarma-store.jpg",
    link: "#",
    techStack: "Mobile-app React-Native Node.js FireBase MySQL",
    description:
      "Shawarma Store is a mobile app built with React Native, Node.js, Firebase, and SQL, enabling seamless ordering, real-time updates, and secure data management.",
  },
  {
    id: 8,
    title: "Signin - QEF",
    category: "CODED",
    image: "/images/5n.png",
    link: "https://qef-fe.vercel.app/",
    techStack: "Python Generative-AI LangChain OpenAI API",
    description:
      "Developed using Python, LangChain, and FastAPI, this project utilizes Generative AI to provide context-aware, real-time chatbot automation across various domains.",
  },
  {
    id: 9,
    title: "Janjapan",
    category: "CODED",
    image: "/images/threen.png",
    link: "https://janjapan.com/",
    techStack: "PHP Laravel Vue Node",
    description:
      "Built flexible, secure, and scalable web applications with PHP, Laravel, Vue.js, and Node.js, guaranteeing smooth front-end interaction and optimized back-end performance.",
  },
  {
    id: 10,
    title: "Jantrading",
    category: "CODED",
    image: "/images/twon.png",
    link: "http://jantradingco.jp/",
    techStack: "Laravel React Vue Node.js PHP",
    description:
      "Developed using Laravel, React, Vue.js, Node.js, and PHP to provide quick, secure, and interactive user experiences with real-time capabilities and smooth integration.",
  },
  {
    id: 11,
    title: "Samsungnac",
    category: "CODED",
    image: "/images/onen.png",
    link: "http://samsungnac.co.za/",
    techStack: "Python Django React.js Node.js",
    description:
      "Created four smart chatbots with Python, Django, React, and Node.js to automate HR, customer service, sales, and support dialogues with real-time, context-sensitive replies.",
  },
  {
    id: 12,
    title: "Global Esales",
    category: "CODED",
    image: "/images/global-united-esales.png",
    link: "https://guesb2b.com/auth/sign-in",
    techStack:
      "React.js Next.js Tailwind-CSS TypeScript Node.js Express.js MongoDB Redis",
    description:
      "Experienced in building dynamic web applications using React.js, Next.js, Tailwind CSS, TypeScript, Node.js, Express.js, MongoDB, and Redis for scalable, high-performance solutions.",
  },
  {
    id: 13,
    title: "Janslawfirm",
    category: "CODED",
    image: "/images/46.png",
    link: "https://janslawfirm.co.uk/",
    techStack: "HTML5 CSS3 JavaScript .net C#",
    description:
      "Frontend built with HTML5, CSS3, and JavaScript. Backend powered by PHP with WordPress CMS for content management and dynamic functionality.",
  },
  {
    id: 14,
    title: "Nowfluence",
    category: "CODED",
    image: "/images/44.png",
    link: "https://app.nowfluence.co/",
    techStack: "React TypeScript Tailwind-CSS Node.js Express.js",
    description:
      "Developed a campaign management dashboard using React, TypeScript, and Tailwind CSS for the frontend, with Node.js/Express backend handling real-time data processing.",
  },
  {
    id: 15,
    title: "Getcontractorplus",
    category: "CODED",
    image: "/images/45.png",
    link: "https://app.dev.getcontractorplus.com/auth/login",
    techStack: "React TypeScript Tailwind-CSS Next.js",
    description:
      "Frontend built with React, TypeScript, and Tailwind CSS using Next.js framework. Backend powered by Node.js with Express.js, exposing REST APIs for client-server communication.",
  },
  {
    id: 16,
    title: "Zoho",
    category: "CODED",
    image: "/images/47.png",
    link: "https://www.zoho.com/",
    techStack:
      "HTML5 CSS3 JavaScript React Java Node.js Cloud-Infrastructure-(AWS/Azure)",
    description:
      "Frontend built with HTML5, CSS3, JavaScript, and React for dynamic user interfaces. Backend powered by Java and Node.js with cloud infrastructure on AWS/Azure for scalability.",
  },
  {
    id: 17,
    title: "Onlinelegaladvise",
    category: "CODED",
    image: "/images/445.png",
    link: "https://onlinelegaladvise.com/",
    techStack: "HTML5 CSS3 JavaScript jQuery PHP MySQL",
    description:
      "Frontend built with HTML5, CSS3, JavaScript, and jQuery for interactive web pages. Backend powered by PHP with MySQL database for data management and server-side processing.",
  },
  {
    id: 18,
    title: "Servrhotels",
    category: "CODED",
    image: "/images/446.png",
    link: "https://servrhotels.com/",
    techStack: "HTML5 CSS3 JavaScript React Node.js Express.js",
    description:
      "Frontend built with HTML5, CSS3, JavaScript, and React for dynamic user interfaces. Backend powered by Node.js with Express.js framework for server-side processing and API management.",
  },
  {
    id: 19,
    title: "Jan Japan Invoice",
    category: "CODED",
    image: "/images/project-1.PNG",
    link: "http://imgup.jan-japan.com/jans_invoice/",
    techStack: "Express.js React.js Node.js",
    description:
      "Proficient in developing scalable, high-performance applications using Express.js for backend, React.js for dynamic UIs, and Node.js for server-side development.",
  },
  {
    id: 20,
    title: "Barney's",
    category: "CODED",
    image: "/images/project-2.PNG",
    link: "#",
    techStack: "Linux Apache MySQL PHP",
    description:
      "Skilled in developing robust web applications using Linux for server management, Apache for web hosting, MySQL for databases, and PHP for dynamic server-side scripting.",
  },
  {
    id: 21,
    title: "Grand Royale Group",
    category: "CODED",
    image: "/images/grandroyale (1).jpg",
    link: "https://grandroyalegroup.com.au/",
    techStack:
      "WordPress Elemento-PRO Contact-Form-7 AI-Chatbot Ajax-Search-Lite",
    description:
      "Grand Royale Group provides B2B hospitality training via immersive WordPress simulations covering hotel management, events, and service excellence.",
  },
  {
    id: 22,
    title: "Ormith",
    category: "CODED",
    image: "/images/ormith.jpg",
    link: "https://ormith.com/",
    techStack: "WordPress Elementor Contact-Form-7 WooCommerce-WP Mail-SMTP",
    description:
      "A WordPress e-commerce site Ormith specializing in high-quality adhesive and sticky pad products for home and industrial use.",
  },
  {
    id: 23,
    title: "Saksfifthavenue",
    category: "CODED",
    image: "/images/4n.png",
    link: "https://www.saksfifthavenue.com/",
    techStack:
      "React.js Next.js Tailwind CSS TypeScript Node.js Express.js MongoDB",
    description:
      "Experienced in building dynamic web applications using React.js, Next.js, Tailwind CSS, TypeScript, Node.js, Express.js, MongoDB, and Redis for scalable, high-performance solutions.",
  },
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

  const filteredPortfolio = useMemo(() => {
    if (portfolioFilter === "ALL") {
      return portfolioItems;
    }
    return portfolioItems.filter((item) => item.category === portfolioFilter);
  }, [portfolioFilter]);

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
                href="https://www.linkedin.com/in/numan-akram-founder/"
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
              className="w-full  flex items-end px-24 rounded-lg pt-20"
            >
              <Image
                src={PortfolioPicture}
                alt="picture"
                width={100}
                height={100}
                className="w-[30rem]"
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
          <div className="col-span-8 py-9 md:pl-[4.5rem] pl-8">
            <h3 className="text-2xl font-bold mb-2 tracking-wider">
              SOFTERIO SOLUTIONS
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed md:py-4 py-2">
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
              <div className="grid md:grid-cols-4 grid-cols-2 gap-x-24 gap-y-14 place-content-between">
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
              <div className="grid md:grid-cols-4 grid-cols-2 gap-x-24 gap-y-14">
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
              <div className="grid md:grid-cols-4 grid-cols-2 gap-x-24 gap-8">
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
                  className="group cursor-pointer w-full h-[19rem]"
                >
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/projects/4.png";
                      }}
                    />
                  </Link>
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
      <section
        className="bg-[url(/images/contact-section-bg.svg)] bg-cover bg-center pt-28"
        id="contact_me"
      >
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
            Have a project in mind? Let&apos;s collaborate and bring your vision
            to life. Whether you need web development, mobile applications, or
            UI/UX design services, Softerio Solutions is here to help. Reach out
            to us today and let&apos;s create something extraordinary together.
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
