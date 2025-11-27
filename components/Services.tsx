"use client";

import { useState } from 'react';
import { Lightbulb, Monitor, TrendingUp, Cloud, Shield, Share2, PenTool, X, Laptop, Megaphone } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: Lightbulb,
    title: "Application Design",
    description:
      "We craft stunning, user-friendly applications that make your vision come to life.",
    color: "text-teal-500",
    details: "Our application design service focuses on creating intuitive, responsive, and visually appealing applications. We use modern design principles and user experience best practices to ensure your app not only looks great but also provides an exceptional user journey. From wireframing to final design, we handle every aspect of the design process."
  },
  {
    icon: Laptop,
    title: "Web Design & Development",
    description:
      "We craft responsive websites with modern design and seamless functionality, optimized for performance and user experience.",
    color: "text-teal-500",
    details: "Our web design and development service delivers cutting-edge websites that combine stunning aesthetics with powerful functionality. We create responsive, mobile-first designs that work seamlessly across all devices. Our development process includes modern frameworks, SEO optimization, performance tuning, and ongoing maintenance to ensure your website stays ahead of the competition."
  },
  {
    icon: Monitor,
    title: "Web Hosting",
    description:
      "Powerful, secure hosting services that ensure your site runs smoothly, 24/7.",
    color: "text-teal-500",
    details: "We provide reliable web hosting solutions with 99.9% uptime guarantee. Our hosting services include SSD storage, automatic backups, SSL certificates, and 24/7 technical support. Whether you need shared hosting, VPS, or dedicated servers, we have the perfect solution for your website's needs."
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description:
      "Enhance your online presence and drive traffic with our expert SEO strategies.",
    color: "text-teal-500",
    details: "Our SEO optimization services help improve your website's search engine rankings and drive organic traffic. We conduct comprehensive keyword research, optimize on-page elements, build quality backlinks, and provide detailed analytics reports. Our strategies are designed to deliver long-term, sustainable results."
  },
  {
    icon: Cloud,
    title: "Cloud Hosting",
    description:
      "Next-generation cloud hosting for scalability and speed in your digital projects.",
    color: "text-teal-500",
    details: "Experience the power of cloud hosting with our scalable solutions. We offer auto-scaling, load balancing, and global CDN distribution to ensure your applications perform optimally worldwide. Our cloud infrastructure is built for reliability, security, and cost-effectiveness."
  },
  {
    icon: Shield,
    title: "Data Security",
    description:
      "Protect your business data with our high-level security measures and protocols.",
    color: "text-teal-500",
    details: "Safeguard your valuable business data with our comprehensive security solutions. We implement multi-layered security protocols including encryption, firewall protection, regular security audits, and compliance with industry standards. Your data security is our top priority."
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Build a community around your brand with customized social media strategies.",
    color: "text-teal-500",
    details: "Create meaningful connections with your audience through our strategic social media management. We develop engaging content, manage community interactions, run targeted campaigns, and provide detailed performance analytics. Let us help you build a strong social media presence."
  },
  {
    icon: PenTool,
    title: "Tracing Service",
    description:
      "Professional tracing for any picture or design with fast turnaround and affordable pricing.",
    color: "text-teal-500",
    details: "Transform any image or design into a high-quality traced version perfect for social media graphics, logos, or digital products. Our expert tracing service converts your designs to vector format with precision and quality. We offer multiple output formats, 24-48 hour turnaround, and competitive pricing starting at $25."
  },
  {
    icon: Megaphone,
    title: "Ads Management Service",
    description:
      "Professional Google Ads and Meta Ads management for maximum ROI. We handle setup, optimization, targeting, and performance tracking.",
    color: "text-teal-500",
    details: "Our comprehensive ads management service covers all aspects of digital advertising. We handle Google Ads (Search, Display, Shopping, Video) and Meta Ads (Facebook, Instagram) with expert optimization strategies. Our team manages keyword research, ad creation, bid management, A/B testing, and performance analytics to maximize your advertising ROI. We provide detailed reporting and continuous optimization to ensure your campaigns perform at their best."
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-12 2xl:py-10 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300 w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full">
        <Image
          src="/images/tech-pattern.webp"
          alt="Tech Pattern Background"
          fill
          className="object-cover opacity-10 dark:opacity-5"
          priority
        />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0 w-full">
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-teal-100/20 dark:bg-teal-900/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100/20 dark:bg-blue-900/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-full overflow-hidden">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-10 2xl:mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Services We Offer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Explore our creative solutions that make a real difference.
          </p>
        </div>

        {/* Services Grid - 3 cards per row, centered */}
        <div className="flex justify-center px-4 sm:px-6 md:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl w-full">
            {services.map((service, index) => (
              <div
                key={index}
                 className={`service-card bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg group cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-0 hover:z-10 flex flex-col items-center text-center ${
                   index === 2 ? "transform-none" : "rotate-[-3deg]"
                 }`}
                 style={{
                   width: "100%",
                   maxWidth: "320px",
                   height: "auto",
                   minHeight: "320px",
                 }}
              >
                <div className="mb-3 flex flex-col items-center">
                  <div className="service-icon w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <service.icon className={`w-9 h-9 ${service.color}`} />
                  </div>
                  <h3 className="service-title text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                <button 
                  onClick={() => openModal(service)}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 text-base mt-auto"
                >
                  EXPLORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
                  <selectedService.icon className={`w-6 h-6 ${selectedService.color}`} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  {selectedService.title}
                </h2>
              </div>
              <button
                onClick={closeModal}
                className="w-8 h-8 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6 transition-colors duration-300">
                {selectedService.details}
              </p>
              
              {/* Service Features */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 transition-colors duration-300">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">What's Included</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 transition-colors duration-300">
                    <li>• Professional consultation</li>
                    <li>• Quality assurance</li>
                    <li>• Ongoing support</li>
                    <li>• Detailed reporting</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 transition-colors duration-300">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Delivery Time</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 transition-colors duration-300">
                    <li>• Standard: 3-5 business days</li>
                    <li>• Express: 1-2 business days</li>
                    <li>• Rush: Same day (if available)</li>
                  </ul>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  Get Started
                </button>
                <button className="flex-1 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
