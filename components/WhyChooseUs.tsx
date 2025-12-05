"use client";

import {
  Monitor,
  Settings,
  Lightbulb,
  Truck,
  Users,
  Headphones,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Monitor,
    title: "Experience",
    description:
      "With years of industry expertise, we bring deep knowledge and proven methodologies to every project, ensuring optimal outcomes for your business.",
    color: "bg-blue-500",
  },
  {
    icon: Settings,
    title: "Pricing",
    description:
      "Transparent and competitive pricing models designed to provide exceptional value without compromising on quality or service excellence.",
    color: "bg-red-500",
  },
  {
    icon: Lightbulb,
    title: "Products",
    description:
      "Cutting-edge solutions and innovative products tailored to meet your specific needs, powered by the latest technology and best practices.",
    color: "bg-gray-600",
  },
  {
    icon: Truck,
    title: "Delivery",
    description:
      "Efficient and timely project delivery with agile methodologies, ensuring your solutions are deployed quickly without sacrificing quality.",
    color: "bg-yellow-500",
  },
  {
    icon: Users,
    title: "Approach",
    description:
      "A collaborative, client-centric methodology that prioritizes understanding your goals and delivering customized solutions that drive real results.",
    color: "bg-green-600",
  },
  {
    icon: Headphones,
    title: "Support",
    description:
      "Dedicated 24/7 customer support team ready to assist you at every step, ensuring seamless operations and continuous improvement of your solutions.",
    color: "bg-teal-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-12 2xl:py-10 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300 w-full">
      {/* Background Image on Right Side - Hidden on mobile, visible on larger screens */}
      <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full z-0 max-w-full">
        <Image
          src="/images/tech-pattern2.webp"
          alt="Technology pattern background"
          fill
          className="object-cover opacity-20 dark:opacity-30"
          priority
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-10 2xl:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 transition-colors duration-300">
            We deliver exceptional results through innovative solutions, proven expertise, and unwavering commitment to your success.
          </p>
        </div>

        {/* Centered Content */}
        <div className="flex justify-center">
          <div className="max-w-6xl w-full space-y-8 sm:space-y-10 lg:space-y-12">
            {/* First Row - 2 Icons */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-6 lg:gap-8">
              {/* Left Description + Icon */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 w-full sm:w-auto">
                <div className="max-w-xs sm:max-w-sm lg:max-w-xs text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-teal-500 dark:text-teal-400 mb-2 transition-colors duration-300">
                    Experience
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-sm leading-relaxed transition-colors duration-300">
                    With years of industry expertise, we bring deep knowledge and proven methodologies to every project, ensuring optimal outcomes for your business.
                  </p>
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>

              {/* Right Icon + Description */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 w-full sm:w-auto">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 order-2 sm:order-1">
                  <Settings className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="max-w-xs sm:max-w-sm lg:max-w-xs text-center sm:text-left order-1 sm:order-2">
                  <h3 className="text-lg sm:text-xl font-bold text-teal-500 dark:text-teal-400 mb-2 transition-colors duration-300">
                    Pricing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-sm leading-relaxed transition-colors duration-300">
                    Transparent and competitive pricing models designed to provide exceptional value without compromising on quality or service excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row - 2 Icons */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-6 lg:gap-8">
              {/* Left Description + Icon */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 w-full sm:w-auto">
                <div className="max-w-xs sm:max-w-sm lg:max-w-xs text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-teal-500 dark:text-teal-400 mb-2 transition-colors duration-300">
                    Products
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-sm leading-relaxed transition-colors duration-300">
                    Cutting-edge solutions and innovative products tailored to meet your specific needs, powered by the latest technology and best practices.
                  </p>
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>

              {/* Right Icon + Description */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 w-full sm:w-auto">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 order-2 sm:order-1">
                  <Truck className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="max-w-xs sm:max-w-sm lg:max-w-xs text-center sm:text-left order-1 sm:order-2">
                  <h3 className="text-lg sm:text-xl font-bold text-teal-500 dark:text-teal-400 mb-2 transition-colors duration-300">
                    Delivery
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-sm leading-relaxed transition-colors duration-300">
                    Efficient and timely project delivery with agile methodologies, ensuring your solutions are deployed quickly without sacrificing quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Third Row - 2 Icons */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-6 lg:gap-8">
              {/* Left Description + Icon */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 w-full sm:w-auto">
                <div className="max-w-xs sm:max-w-sm lg:max-w-xs text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-teal-500 dark:text-teal-400 mb-2 transition-colors duration-300">
                    Approach
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-sm leading-relaxed transition-colors duration-300">
                    A collaborative, client-centric methodology that prioritizes understanding your goals and delivering customized solutions that drive real results.
                  </p>
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>

              {/* Right Icon + Description */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 w-full sm:w-auto">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 order-2 sm:order-1">
                  <Headphones className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="max-w-xs sm:max-w-sm lg:max-w-xs text-center sm:text-left order-1 sm:order-2">
                  <h3 className="text-lg sm:text-xl font-bold text-teal-500 dark:text-teal-400 mb-2 transition-colors duration-300">
                    Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-sm leading-relaxed transition-colors duration-300">
                    Dedicated 24/7 customer support team ready to assist you at every step, ensuring seamless operations and continuous improvement of your solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
