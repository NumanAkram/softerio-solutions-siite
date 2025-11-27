"use client";

import { useEffect, useState } from "react";
import { Users, BarChart3, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 232,
    label: "Happy Clients",
    description: "Trusted by businesses worldwide",
    slideDirection: "left",
  },
  {
    icon: BarChart3,
    number: 521,
    label: "Completed Projects",
    description: "Successfully delivered with excellence",
    slideDirection: "bottom",
  },
  {
    icon: Clock,
    number: 453,
    label: "Hours of Support",
    description: "Dedicated customer service",
    slideDirection: "right",
  },
];

export default function Statistics() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("statistics-section");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.number / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 20);
    });
  };

  const getSlideAnimation = (direction: string, index: number) => {
    const baseClasses = "transform transition-all duration-1000 ease-out";
    const delay = index * 200; // Staggered animation

    if (!isVisible) {
      switch (direction) {
        case "left":
          return `${baseClasses} -translate-x-full opacity-0`;
        case "right":
          return `${baseClasses} translate-x-full opacity-0`;
        case "bottom":
          return `${baseClasses} translate-y-full opacity-0`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }

    return `${baseClasses} translate-x-0 translate-y-0 opacity-100`;
  };

  return (
    <section
      id="statistics-section"
      className="py-12 sm:py-16 lg:py-20 xl:py-12 2xl:py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-110 group relative overflow-hidden ${getSlideAnimation(
                stat.slideDirection,
                index
              )}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Card Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-4xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                  {counters[index]}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 transition-colors duration-300">
                  {stat.label}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {stat.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-teal-500 group-hover:to-blue-600 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        {/* <div className="mt-20 pt-16 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60 dark:opacity-40">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="text-center">
                <div className="h-12 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-400 dark:text-gray-500">
                    COMPANY
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
