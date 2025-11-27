"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PortfolioHero from "./PortfolioHero";
import PortfolioAbout from "./PortfolioAbout";
import PortfolioBlog from "./PortfolioBlog";
import {
  PortfolioItem,
  filterPortfolioByCategory,
  getUniqueCategories,
} from "./portfolioUtils";

// Extended portfolio data with more random images
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "ExactFlow",
    category: "web development",
    image: "/images/projects/exactflow.webp",
    languages: "next.js, typescript, python",
    duration: "5 months",
    budget: "$48000",
    previewUrl: "https://www.exact-solutions.com/",
    dataSize: "1200x800",
  },
  {
    id: 2,
    title: "BigSystema",
    category: "web development",
    image: "/images/projects/bigsystema.webp",
    languages: "vue.js, nuxt 3, typescript, laravel",
    duration: "6 months",
    budget: "$58000",
    previewUrl: "https://preview_of_project.com",
    dataSize: "1200x800",
  },
  {
    id: 3,
    title: "FormBrick",
    category: "web development",
    image: "/images/projects/formbricks.webp",
    languages: "next.js, typescript, prisma, tailwind",
    duration: "7 months",
    budget: "$65000",
    previewUrl: "https://formbricks.com/",
    dataSize: "1200x800",
  },
  {
    id: 4,
    title: "BehindWords",
    category: "web development",
    image: "/images/projects/behindwords.webp",
    languages: "react, node.js, typescript, postgresql",
    duration: "6 months",
    budget: "$52000",
    previewUrl: "https://preview_of_project.com",
    dataSize: "1200x800",
  },
  {
    id: 5,
    title: "HackerNews Clone",
    category: "web development",
    image: "/images/projects/SebastienChopin.webp",
    languages: "nuxt.js, vue.js, typescript",
    duration: "4 months",
    budget: "$42000",
    previewUrl: "https://preview_of_project.com",
    dataSize: "1200x800",
  },
  {
    id: 6,
    title: "Nuxt DevTools",
    category: "development tools",
    image: "/images/projects/devTTools.webp",
    languages: "nuxt.js, vue.js, typescript, unoCSS",
    duration: "6 months",
    budget: "$55000",
    previewUrl: "https://preview_of_project.com",
    dataSize: "1200x800",
  },
  {
    id: 7,
    title: "Scikit-learn ML",
    category: "machine learning",
    image: "/images/projects/sklearn.webp",
    languages: "python, numpy, scipy, cython",
    duration: "8 months",
    budget: "$75000",
    previewUrl: "https://preview_of_project.com",
    dataSize: "1200x800",
  },
  {
    id: 8,
    title: "ExactSolution 2",
    category: "web development",
    image: "/images/projects/exactsolution2.webp",
    languages: "next.js, typescript, python",
    duration: "5 months",
    budget: "$48000",
    previewUrl: "https://preview_of_project.com",
    dataSize: "1200x800",
  },
  {
    id: 9,
    title: "Mobile App",
    category: "mobile development",
    image: "/images/projects/mob-app.webp",
    client: "App Company",
    languages: "react native, nest.js, typescript",
    duration: "4 months",
    budget: "$35000",
    previewUrl: "https://preview_of_project.com",
    dataSize: "600x800",
  },
  {
    id: 10,
    title: "Exactflow",
    category: "web development",
    image: "/images/projects/sixn.webp",
    client: "Exactflow",
    languages: "angular, node.js, typescript, mongodb",
    duration: "6 months",
    budget: "$55000",
    previewUrl: "https://www.exactflow.pl/en",
    dataSize: "1200x800",
  },
  {
    id: 11,
    title: "Signin - QEF",
    category: "web development",
    image: "/images/projects/5n.webp",
    client: "QEF",
    languages: "react, node.js, typescript, mongodb",
    duration: "5 months",
    budget: "$48000",
    previewUrl: "https://qef-fe.vercel.app/",
    dataSize: "1200x800",
  },
  {
    id: 12,
    title: "Saksfifthavenue",
    category: "web development",
    image: "/images/projects/4n.webp",
    client: "Saks Fifth Avenue",
    languages: "laravel, php, mysql, javascript",
    duration: "8 months",
    budget: "$75000",
    previewUrl: "https://www.saksfifthavenue.com/",
    dataSize: "1200x800",
  },
  {
    id: 13,
    title: "Janjapan",
    category: "web development",
    image: "/images/projects/threen.webp",
    client: "Jan Japan",
    languages: "angular, node.js, typescript, mongodb",
    duration: "7 months",
    budget: "$65000",
    previewUrl: "https://janjapan.com/",
    dataSize: "1200x800",
  },
  {
    id: 14,
    title: "Jantrading",
    category: "web development",
    image: "/images/projects/twon.webp",
    client: "Jan Trading",
    languages: "react, node.js, typescript, mongodb",
    duration: "6 months",
    budget: "$52000",
    previewUrl: "http://jantradingco.jp/",
    dataSize: "1200x800",
  },
  {
    id: 15,
    title: "Samsungnac",
    category: "web development",
    image: "/images/projects/onen.webp",
    client: "Samsung NAC",
    languages: "python, django, postgresql, react",
    duration: "9 months",
    budget: "$85000",
    previewUrl: "http://samsungnac.co.za/",
    dataSize: "1200x800",
  },
  {
    id: 16,
    title: "Nowfluence",
    category: "web development",
    image: "/images/projects/44.webp",
    client: "Nowfluence",
    languages: "laravel, php, mysql, vue.js",
    duration: "6 months",
    budget: "$58000",
    previewUrl: "https://app.nowfluence.co/",
    dataSize: "1200x800",
  },
  {
    id: 17,
    title: "Getcontractorplus",
    category: "web development",
    image: "/images/projects/45.webp",
    client: "Contractor Plus",
    languages: "python, django, postgresql, react",
    duration: "8 months",
    budget: "$72000",
    previewUrl: "https://app.dev.getcontractorplus.com/auth/login",
    dataSize: "1200x800",
  },
  {
    id: 18,
    title: "Janslawfirm",
    category: "web development",
    image: "/images/projects/46.webp",
    client: "Jans Law Firm",
    languages: "angular, node.js, typescript, mongodb",
    duration: "7 months",
    budget: "$68000",
    previewUrl: "https://janslawfirm.co.uk/",
    dataSize: "1200x800",
  },
  {
    id: 19,
    title: "Zoho",
    category: "web development",
    image: "/images/projects/47.webp",
    client: "Zoho",
    languages: "python, django, postgresql, react",
    duration: "10 months",
    budget: "$95000",
    previewUrl: "https://www.zoho.com/",
    dataSize: "1200x800",
  },
  {
    id: 20,
    title: "Onlinelegaladvise",
    category: "web development",
    image: "/images/projects/445.webp",
    client: "Online Legal Advice",
    languages: "react, node.js, typescript, mongodb",
    duration: "6 months",
    budget: "$55000",
    previewUrl: "https://onlinelegaladvise.com/",
    dataSize: "1200x800",
  },
  {
    id: 21,
    title: "Servrhotels",
    category: "web development",
    image: "/images/projects/446.webp",
    client: "Servr Hotels",
    languages: "python, django, postgresql, react",
    duration: "8 months",
    budget: "$78000",
    previewUrl: "https://servrhotels.com/",
    dataSize: "1200x800",
  },
  {
    id: 22,
    title: "Mobile App 2",
    category: "mobile development",
    image: "/images/projects/mbl_app2.webp",
    client: "Mobile Company",
    languages: "react native, node.js, typescript",
    duration: "5 months",
    budget: "$45000",
    previewUrl: "https://mobile-app-2.com/",
    dataSize: "600x800",
  },
  {
    id: 23,
    title: "E-commerce Platform",
    category: "web development",
    image: "/images/projects/one.webp",
    client: "E-commerce Corp",
    languages: "react, node.js, mongodb, typescript",
    duration: "7 months",
    budget: "$65000",
    previewUrl: "https://ecommerce-platform.com/",
    dataSize: "1200x800",
  },
  {
    id: 24,
    title: "Social Media App",
    category: "web development",
    image: "/images/projects/two.webp",
    client: "Social Media Inc",
    languages: "vue.js, node.js, postgresql, typescript",
    duration: "8 months",
    budget: "$72000",
    previewUrl: "https://social-media-app.com/",
    dataSize: "1200x800",
  },
  {
    id: 25,
    title: "Dashboard System",
    category: "web development",
    image: "/images/projects/three.webp",
    client: "Dashboard Corp",
    languages: "angular, node.js, mysql, typescript",
    duration: "6 months",
    budget: "$58000",
    previewUrl: "https://dashboard-system.com/",
    dataSize: "1200x800",
  },
  {
    id: 26,
    title: "Booking Platform",
    category: "web development",
    image: "/images/projects/project-1.webp",
    client: "Booking Company",
    languages: "react, python, django, postgresql",
    duration: "9 months",
    budget: "$85000",
    previewUrl: "https://booking-platform.com/",
    dataSize: "1200x800",
  },
  {
    id: 27,
    title: "Payment Gateway",
    category: "web development",
    image: "/images/projects/project-2.webp",
    client: "Payment Corp",
    languages: "node.js, react, mongodb, typescript",
    duration: "7 months",
    budget: "$68000",
    previewUrl: "https://payment-gateway.com/",
    dataSize: "1200x800",
  },
  {
    id: 28,
    title: "Learning Management",
    category: "web development",
    image: "/images/projects/six.webp",
    client: "Education Corp",
    languages: "react, node.js, postgresql, typescript",
    duration: "10 months",
    budget: "$95000",
    previewUrl: "https://learning-management.com/",
    dataSize: "1200x800",
  },
  {
    id: 29,
    title: "Project Management",
    category: "web development",
    image: "/images/projects/5.webp",
    client: "Project Corp",
    languages: "vue.js, node.js, mysql, typescript",
    duration: "8 months",
    budget: "$75000",
    previewUrl: "https://project-management.com/",
    dataSize: "1200x800",
  },
  {
    id: 30,
    title: "Inventory System",
    category: "web development",
    image: "/images/projects/eight.webp",
    client: "Inventory Corp",
    languages: "angular, node.js, mongodb, typescript",
    duration: "6 months",
    budget: "$55000",
    previewUrl: "https://inventory-system.com/",
    dataSize: "1200x800",
  },
  {
    id: 31,
    title: "CRM Platform",
    category: "web development",
    image: "/images/projects/nine.webp",
    client: "CRM Company",
    languages: "react, python, django, postgresql",
    duration: "9 months",
    budget: "$82000",
    previewUrl: "https://crm-platform.com/",
    dataSize: "1200x800",
  },
  {
    id: 32,
    title: "Analytics Dashboard",
    category: "web development",
    image: "/images/projects/ten.webp",
    client: "Analytics Corp",
    languages: "vue.js, node.js, mysql, typescript",
    duration: "7 months",
    budget: "$65000",
    previewUrl: "https://analytics-dashboard.com/",
    dataSize: "1200x800",
  },
  {
    id: 33,
    title: "Chat Application",
    category: "web development",
    image: "/images/projects/eleven.webp",
    client: "Chat Corp",
    languages: "react, node.js, socket.io, mongodb",
    duration: "6 months",
    budget: "$58000",
    previewUrl: "https://chat-application.com/",
    dataSize: "1200x800",
  },
  {
    id: 34,
    title: "File Management",
    category: "web development",
    image: "/images/projects/twelve.webp",
    client: "File Corp",
    languages: "angular, node.js, aws s3, postgresql",
    duration: "8 months",
    budget: "$72000",
    previewUrl: "https://file-management.com/",
    dataSize: "1200x800",
  },
  {
    id: 35,
    title: "Task Management",
    category: "web development",
    image: "/images/projects/thirteen.webp",
    client: "Task Corp",
    languages: "react, node.js, redis, postgresql",
    duration: "7 months",
    budget: "$68000",
    previewUrl: "https://task-management.com/",
    dataSize: "1200x800",
  },
];

export default function PortfolioMain() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [isVisible, setIsVisible] = useState(false);

  // Filter projects by category
  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
    const filtered = filterPortfolioByCategory(portfolioItems, category);
    setFilteredItems(filtered);
  };

  // Animation effect when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Get unique categories
  const categories = getUniqueCategories(portfolioItems);

  return (
    <div className="portfolio-main">
      {/* Hero Section */}
      <div id="home">
        <PortfolioHero />
      </div>

      {/* About Section */}
      <div id="about">
        <PortfolioAbout />
      </div>

      {/* Portfolio Section */}
      <div
        id="work"
        className="section work-section py-20 bg-white dark:bg-gray-900"
      >
        <div id="work-content">
          {/* Heading */}
          <div
            className={`heading text-left text-center md:text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              my <span className="text-teal-500">portfolio</span>
            </h2>
          </div>

          {/* Filter Buttons */}
          <div
            className={`flex flex-wrap justify-start md:justify-center gap-4 mb-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  activeCategory === category
                    ? "bg-teal-500 text-white shadow-lg"
                    : "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 hover:bg-teal-200 dark:hover:bg-teal-800"
                }`}
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid Container */}
          <div className="portfolio-container">
            {/* Portfolio Grid - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative group transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{
                    animationDelay: `${(index + 1) * 150}ms`,
                  }}
                >
                  {/* Portfolio Item Card */}
                  <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                    {/* Project Main Image */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Hover Overlay with Details - Inside the card */}
                      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <h3 className="text-xl font-bold mb-4">
                            {item.title}
                          </h3>

                          <div className="space-y-2 text-sm mb-6">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Framework:</span>
                              <span className="text-teal-300 ml-2">
                                {item.languages}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Duration:</span>
                              <span className="text-teal-300 ml-2">
                                {item.duration}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Budget:</span>
                              <span className="text-teal-300 ml-2">
                                {item.budget}
                              </span>
                            </div>
                          </div>

                          {/* Preview Button */}
                          <a
                            href={item.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform"
                          >
                            View Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div id="blog">
        <PortfolioBlog />
      </div>
    </div>
  );
}
