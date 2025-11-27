'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Design: Trends to Watch in 2024",
    excerpt: "Explore the latest web design trends that will dominate the digital landscape in 2024, from AI-powered interfaces to sustainable design practices.",
    image: "/images/tech-pattern.webp",
    date: "January 15, 2024",
    category: "Web Design",
    author: "Daniel Martin"
  },
  {
    id: 2,
    title: "Building Responsive Websites: Best Practices",
    excerpt: "Learn the essential techniques and best practices for creating truly responsive websites that work seamlessly across all devices and screen sizes.",
    image: "/images/tech-pattern2.webp",
    date: "January 10, 2024",
    category: "Development",
    author: "Daniel Martin"
  },
  {
    id: 3,
    title: "UI/UX Design Principles for Better User Experience",
    excerpt: "Discover the fundamental principles of UI/UX design that can significantly improve user engagement and satisfaction on your digital products.",
    image: "/images/hero-bg.webp",
    date: "January 5, 2024",
    category: "UI/UX",
    author: "Daniel Martin"
  }
];

export default function PortfolioBlog() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="section blog-section py-20 bg-white dark:bg-gray-900 relative overflow-hidden" id="blog">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className={`heading text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
            latest <span className="text-teal-500">blog</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 relative group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                animationDelay: `${(index + 1) * 200}ms`
              }}
            >
              {/* Animated Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400 transition-all duration-500 rounded-2xl"></div>
              
              {/* Blog Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Category Badge with Animation */}
                <div className="absolute top-4 left-4 transform group-hover:scale-110 transition-transform duration-300">
                  <span className="bg-gradient-to-r from-teal-500 to-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6 relative">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-blue-50/50 dark:from-teal-900/20 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center space-x-1 group-hover:text-teal-500 transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center space-x-1 group-hover:text-teal-500 transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span>{post.author}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-teal-500 transition-all duration-300 transform group-hover:scale-105">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {post.excerpt}
                  </p>

                  {/* Enhanced Read More Button */}
                  <a
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium transition-all duration-300 group-hover:scale-105"
                  >
                    <span className="relative">
                      Read More
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></div>
                    </span>
                    <svg 
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
            </article>
          ))}
        </div>

        {/* Enhanced View All Posts Button */}
        <div className={`text-center mt-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '800ms' }}>
          <a
            href="/blog"
            className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg relative overflow-hidden group"
          >
            <span className="relative z-10">View All Posts</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
