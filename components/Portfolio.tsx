"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { X } from "lucide-react";

// Show 6 different items for home page (2 rows - all unique cards)
const homePageItems = [
  // First row - 3 unique cards
  {
    id: 1,
    title: "LEGAL MOMO",
    category: "web development",
    image: "/images/legal momo.jpg",
    client: "ExactFlow Corp",
    languages: "next.js, typescript, python",
    duration: "5 months",
    budget: "$48000",
    link: "#",
    dataSize: "1200x800",
    description:
      "Created an advanced web platform for attorneys using FastAPI, Python, Next.js, and TypeScript, facilitating streamlined legal document handling and smart case analysis via automation.",
  },
  {
    id: 2,
    title: "Mr Singh's",
    category: "web development",
    image: "/images/mr-sing,s.webp",
    client: "BigSystema Inc",
    languages: "vue.js, nuxt 3, typescript, laravel",
    duration: "6 months",
    budget: "$58000",
    link: "https://mrsinghspizza.co.uk/food",
    dataSize: "1200x800",
    description:
      "Built with React, Laravel, and MySQL, this full-stack app delivers a smooth, dynamic web interface, secure backend, and robust relational data management for a pizza restaurant chain.",
  },
  {
    id: 3,
    title: "ZYAPPY Web",
    category: "web development",
    image: "/images/zyapy-web.webp",
    client: "FormBrick Ltd",
    languages: "next.js, typescript, prisma, tailwind",
    duration: "7 months",
    budget: "$65000",
    link: "#",
    dataSize: "1200x800",
    description:
      "Built with Vue.js, Laravel, and MySQL, this modern web app delivers a reactive UI, secure server-side API, and efficient relational data storage for seamless user experience.",
  },
  // Second row - 3 different cards
  {
    id: 4,
    title: "ZYAPPY Mobile-app",
    category: "mobile application",
    image: "/images/zyappy-mobile-app.webp",
    client: "BehindWords Corp",
    languages: "react, node.js, typescript, postgresql",
    duration: "6 months",
    budget: "$52000",
    link: "#",
    dataSize: "1200x800",
    description:
      "ZYAPPY is a mobile app built with React Native, Nest.js, Firebase, and PostgreSQL, enabling seamless ordering, real-time updates, and secure data management for on-the-go users.",
  },
  {
    id: 5,
    title: "Exactflow",
    category: "web development",
    image: "/images/sixn.webp",
    client: "HackerNews Inc",
    languages: "nuxt.js, vue.js, typescript",
    duration: "4 months",
    budget: "$42000",
    link: "https://www.exactflow.pl/en",
    dataSize: "1200x800",
    description:
      "Created four advanced chatbots using Python, Django, React, and Node.js to streamline HR, customer service, sales, and support interactions with dynamic, context-driven responses in real time.",
  },
  {
    id: 6,
    title: "Shawarma Store",
    category: "mobile application",
    image: "/images/shawarma-store.webp",
    client: "Nuxt Corp",
    languages: "nuxt.js, vue.js, typescript, unoCSS",
    duration: "6 months",
    budget: "$55000",
    link: "#",
    dataSize: "1200x800",
    description:
      "Shawarma Store is a mobile app built with React Native, Node.js, Firebase, and MySQL, enabling seamless ordering, real-time updates, and secure data management for food delivery services.",
  },
  {
    id: 7,
    title: "Signin - QEF",
    category: "web development",
    image: "/images/5n.webp",
    link: "https://qef-fe.vercel.app/",
    techStack: "Python Generative-AI LangChain OpenAI API",
    description:
      "Developed using Python, LangChain, and FastAPI, this project utilizes Generative AI to provide context-aware, real-time chatbot automation across various domains.",
    budget: "$55000",
    client: "QEF Corp",
    languages: "python, langchain, fastapi, openai api",
    duration: "6 months",
  },
  {
    id: 9,
    title: "Janjapan",
    category: "web development",
    image: "/images/threen.webp",
    link: "https://janjapan.com/",
    techStack: "PHP Laravel Vue Node",
    description:
      "Built flexible, secure, and scalable web applications with PHP, Laravel, Vue.js, and Node.js, guaranteeing smooth front-end interaction and optimized back-end performance.",
    budget: "$45000",
    client: "Jan Japan Inc",
    languages: "php, laravel, vue.js, node.js",
    duration: "5 months",
  },
  {
    id: 10,
    title: "Jantrading",
    category: "web development",
    image: "/images/twon.webp",
    link: "http://jantradingco.jp/",
    techStack: "Laravel React Vue Node.js PHP",
    description:
      "Developed using Laravel, React, Vue.js, Node.js, and PHP to provide quick, secure, and interactive user experiences with real-time capabilities and smooth integration.",
    budget: "$48000",
    client: "Jan Trading Co",
    languages: "laravel, react, vue.js, node.js, php",
    duration: "5 months",
  },
  {
    id: 11,
    title: "Samsungnac",
    category: "web development",
    image: "/images/onen.webp",
    link: "http://samsungnac.co.za/",
    techStack: "Python Django React.js Node.js",
    description:
      "Created four smart chatbots with Python, Django, React, and Node.js to automate HR, customer service, sales, and support dialogues with real-time, context-sensitive replies.",
    budget: "$52000",
    client: "Samsung NAC",
    languages: "python, django, react.js, node.js",
    duration: "6 months",
  },
  {
    id: 12,
    title: "Global Esales",
    category: "web development",
    image: "/images/global-united-esales.webp",
    link: "https://guesb2b.com/auth/sign-in",
    techStack:
      "React.js Next.js Tailwind-CSS TypeScript Node.js Express.js MongoDB Redis",
    description:
      "Experienced in building dynamic web applications using React.js, Next.js, Tailwind CSS, TypeScript, Node.js, Express.js, MongoDB, and Redis for scalable, high-performance solutions.",
    budget: "$65000",
    client: "Global United Esales",
    languages:
      "react.js, next.js, tailwind css, typescript, node.js, express.js, mongodb, redis",
    duration: "7 months",
  },
  {
    id: 13,
    title: "Janslawfirm",
    category: "website design",
    image: "/images/46.webp",
    link: "https://janslawfirm.co.uk/",
    techStack: "HTML5 CSS3 JavaScript .net C#",
    description:
      "Frontend built with HTML5, CSS3, and JavaScript. Backend powered by PHP with WordPress CMS for content management and dynamic functionality.",
    budget: "$35000",
    client: "Jans Law Firm",
    languages: "html5, css3, javascript, .net, c#, php, wordpress",
    duration: "4 months",
  },
  {
    id: 14,
    title: "Nowfluence",
    category: "web development",
    image: "/images/44.webp",
    link: "https://app.nowfluence.co/",
    techStack: "React TypeScript Tailwind-CSS Node.js Express.js",
    description:
      "Developed a campaign management dashboard using React, TypeScript, and Tailwind CSS for the frontend, with Node.js/Express backend handling real-time data processing.",
    budget: "$58000",
    client: "Nowfluence Inc",
    languages: "react, typescript, tailwind css, node.js, express.js",
    duration: "6 months",
  },
  {
    id: 15,
    title: "Getcontractorplus",
    category: "web development",
    image: "/images/45.webp",
    link: "https://app.dev.getcontractorplus.com/auth/login",
    techStack: "React TypeScript Tailwind-CSS Next.js",
    description:
      "Frontend built with React, TypeScript, and Tailwind CSS using Next.js framework. Backend powered by Node.js with Express.js, exposing REST APIs for client-server communication.",
    budget: "$60000",
    client: "Contractor Plus",
    languages: "react, typescript, tailwind css, next.js, node.js, express.js",
    duration: "6 months",
  },
  {
    id: 16,
    title: "Zoho",
    category: "web development",
    image: "/images/47.webp",
    link: "https://www.zoho.com/",
    techStack:
      "HTML5 CSS3 JavaScript React Java Node.js Cloud-Infrastructure-(AWS/Azure)",
    description:
      "Frontend built with HTML5, CSS3, JavaScript, and React for dynamic user interfaces. Backend powered by Java and Node.js with cloud infrastructure on AWS/Azure for scalability.",
    budget: "$75000",
    client: "Zoho Corporation",
    languages: "html5, css3, javascript, react, java, node.js, aws, azure",
    duration: "8 months",
  },
  {
    id: 17,
    title: "Onlinelegaladvise",
    category: "website design",
    image: "/images/445.webp",
    link: "https://onlinelegaladvise.com/",
    techStack: "HTML5 CSS3 JavaScript jQuery PHP MySQL",
    description:
      "Frontend built with HTML5, CSS3, JavaScript, and jQuery for interactive web pages. Backend powered by PHP with MySQL database for data management and server-side processing.",
    budget: "$32000",
    client: "Online Legal Advise",
    languages: "html5, css3, javascript, jquery, php, mysql",
    duration: "3 months",
  },
  {
    id: 18,
    title: "Servrhotels",
    category: "website design",
    image: "/images/446.webp",
    link: "https://servrhotels.com/",
    techStack: "HTML5 CSS3 JavaScript React Node.js Express.js",
    description:
      "Frontend built with HTML5, CSS3, JavaScript, and React for dynamic user interfaces. Backend powered by Node.js with Express.js framework for server-side processing and API management.",
    budget: "$42000",
    client: "Servr Hotels",
    languages: "html5, css3, javascript, react, node.js, express.js",
    duration: "4 months",
  },
  {
    id: 19,
    title: "Jan Japan Invoice",
    category: "web development",
    image: "/images/project-1.webp",
    link: "http://imgup.jan-japan.com/jans_invoice/",
    techStack: "Express.js React.js Node.js",
    description:
      "Proficient in developing scalable, high-performance applications using Express.js for backend, React.js for dynamic UIs, and Node.js for server-side development.",
    budget: "$38000",
    client: "Jan Japan",
    languages: "express.js, react.js, node.js",
    duration: "4 months",
  },
  {
    id: 20,
    title: "Barney's",
    category: "web development",
    image: "/images/project-2.webp",
    link: "#",
    techStack: "Linux Apache MySQL PHP",
    description:
      "Skilled in developing robust web applications using Linux for server management, Apache for web hosting, MySQL for databases, and PHP for dynamic server-side scripting.",
    budget: "$28000",
    client: "Barney's Restaurant",
    languages: "linux, apache, mysql, php",
    duration: "3 months",
  },
  {
    id: 21,
    title: "Grand Royale Group",
    category: "website design",
    image: "/images/grandroyale (1).jpg",
    link: "https://grandroyalegroup.com.au/",
    techStack:
      "WordPress Elemento-PRO Contact-Form-7 AI-Chatbot Ajax-Search-Lite",
    description:
      "Grand Royale Group provides B2B hospitality training via immersive WordPress simulations covering hotel management, events, and service excellence.",
    budget: "$40000",
    client: "Grand Royale Group",
    languages: "wordpress, elemento-pro, php, javascript",
    duration: "4 months",
  },
  {
    id: 22,
    title: "Ormith",
    category: "website design",
    image: "/images/ormith.webp",
    link: "https://ormith.com/",
    techStack: "WordPress Elementor Contact-Form-7 WooCommerce-WP Mail-SMTP",
    description:
      "A WordPress e-commerce site Ormith specializing in high-quality adhesive and sticky pad products for home and industrial use.",
    budget: "$35000",
    client: "Ormith",
    languages: "wordpress, elementor, woocommerce, php, javascript",
    duration: "4 months",
  },
  {
    id: 23,
    title: "Saksfifthavenue",
    category: "web development",
    image: "/images/4n.webp",
    link: "https://www.saksfifthavenue.com/",
    techStack:
      "React.js Next.js Tailwind CSS TypeScript Node.js Express.js MongoDB",
    description:
      "Experienced in building dynamic web applications using React.js, Next.js, Tailwind CSS, TypeScript, Node.js, Express.js, MongoDB, and Redis for scalable, high-performance solutions.",
    budget: "$70000",
    client: "Saks Fifth Avenue",
    languages:
      "react.js, next.js, tailwind css, typescript, node.js, express.js, mongodb",
    duration: "8 months",
  },
];

export default function Portfolio() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(homePageItems);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Filter projects by category - flexible function that works with any items with category property
  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredItems(homePageItems);
    } else {
      const filtered = homePageItems.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredItems(filtered);
    }
  };

  // Navigate to portfolio page projects section
  const handleLoadMore = () => {
    router.push("/portfolio#work");
  };

  // Animation effect when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Get unique categories from homePageItems
  const categories = [
    "All",
    ...Array.from(new Set(homePageItems.map((item) => item.category))),
  ];

  // Handle modal open
  const handleOpenModal = (item: any) => {
    setSelectedProject(item);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-12 2xl:py-10 bg-gray-100 dark:bg-gray-900 transition-all duration-500 w-full overflow-hidden flex justify-center">
      <div className="w-full max-w-[1920px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-left md:text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-10 2xl:mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
           <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300 leading-tight">
             My{" "}
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300">
               Portfolio
             </span>
           </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-start md:justify-center gap-3 sm:gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? "bg-gray-800 dark:bg-teal-600 text-white shadow-lg shadow-gray-800/25 dark:shadow-teal-600/25"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid Container */}
        <div className="portfolio-container">
          {/* Portfolio Grid - Responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative group transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                 {/* Portfolio Item Card */}
                 <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gray-800/20 dark:group-hover:shadow-teal-600/20 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  {/* Project Main Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-all duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback to a default image if the original fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/tech-pattern.webp";
                      }}
                    />

                    {/* Hover Overlay with Details */}
                    <div
                      className={`absolute top-0 inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent transition-all duration-500 ${
                        hoveredItem === item.id ? "opacity-100" : "opacity-0"
                      } flex items-end justify-center`}
                    >
                      <div className="text-white text-center px-6 pb-1 w-full">
                        <h3 className="text-xl font-bold mb-4 text-white">
                          {item.title}
                        </h3>

                        <div className="space-y-3 text-sm">
                          {/* <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-2">
                            <span className="font-medium text-gray-200">
                              Client:
                            </span>
                            <span className="text-gray-300 font-semibold">
                              {item.client}
                            </span>
                          </div> */}
                          <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-2">
                            <span className="font-medium text-gray-200">
                              Tech:
                            </span>
                            <span className="text-gray-300 font-semibold text-right max-w-[120px] truncate">
                              {item.languages}
                            </span>
                          </div>
                          <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-2">
                            <span className="font-medium text-gray-200">
                              Duration:
                            </span>
                            <span className="text-gray-300 font-semibold">
                              {item.duration}
                            </span>
                          </div>
                          <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-2">
                            <span className="font-medium text-gray-200">
                              Budget:
                            </span>
                            <span className="text-gray-300 font-semibold">
                              {item.budget}
                            </span>
                          </div>
                        </div>

                        {/* View Project Button */}
                        <button
                          onClick={() => handleOpenModal(item)}
                          className="mt-4 bg-gray-800 dark:bg-teal-600 hover:bg-gray-700 dark:hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform"
                        >
                          View Project
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-4 bg-white dark:bg-gray-800">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        {/* <div
          className={`text-center mt-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ animationDelay: "900ms" }}
        >
          <button
            onClick={handleLoadMore}
            className="bg-gray-800 dark:bg-teal-600 hover:bg-gray-700 dark:hover:bg-teal-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-gray-800/25 dark:shadow-teal-600/25 transform"
          >
            Load More Projects
          </button>
        </div> */}
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              {/* Project Image */}
              <div className="relative w-full h-48 sm:h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/tech-pattern.webp";
                  }}
                />
              </div>

              {/* Project Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedProject.title}
              </h2>

              {/* Project Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  About This Project
                </h3>
                {selectedProject.description ? (
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                    {selectedProject.description}
                  </p>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 italic">
                    No description available for this project.
                  </p>
                )}
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {selectedProject.category && (
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Category:
                    </span>
                    <p className="text-gray-900 dark:text-white capitalize">
                      {selectedProject.category}
                    </p>
                  </div>
                )}
                {selectedProject.techStack && (
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Tech Stack:
                    </span>
                    <p className="text-gray-900 dark:text-white">
                      {selectedProject.techStack}
                    </p>
                  </div>
                )}
                {selectedProject.languages && (
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Languages:
                    </span>
                    <p className="text-gray-900 dark:text-white">
                      {selectedProject.languages}
                    </p>
                  </div>
                )}
                {selectedProject.duration && (
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Duration:
                    </span>
                    <p className="text-gray-900 dark:text-white">
                      {selectedProject.duration}
                    </p>
                  </div>
                )}
                {selectedProject.budget && (
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Budget:
                    </span>
                    <p className="text-gray-900 dark:text-white">
                      {selectedProject.budget}
                    </p>
                  </div>
                )}
              </div>

              {/* Open Project Link Button or Localhost Message */}
              {selectedProject.link && selectedProject.link !== "#" ? (
                <div className="flex justify-center sm:justify-start">
                  <Link
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform inline-flex items-center gap-2"
                  >
                    Open Project
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                </div>
              ) : (
                <div className="flex justify-center sm:justify-start">
                  <div className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    Available on localhost
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
