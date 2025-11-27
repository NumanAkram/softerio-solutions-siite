'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is web domain and hosting?',
    answer: 'A web domain is your website\'s address on the internet, while hosting is the service that stores your website files and makes them accessible online. Think of a domain as your home address and hosting as the actual house where your belongings (website files) are stored.'
  },
  {
    question: 'Which server is best for websites, Linux or Windows?',
    answer: 'Both Linux and Windows servers have their advantages. Linux servers are generally more cost-effective, secure, and perform better for web hosting. Windows servers are better if you need specific Microsoft technologies like ASP.NET or MS SQL Server. For most websites, Linux is the preferred choice.'
  },
  {
    question: 'Google Cloud or Amazon server: which is better and faster?',
    answer: 'Both Google Cloud Platform (GCP) and Amazon Web Services (AWS) offer excellent performance and reliability. AWS has a larger market share and more services, while GCP often provides better pricing and superior data analytics tools. The choice depends on your specific needs, budget, and technical requirements.'
  },
  {
    question: 'Why is organic SEO important for all businesses?',
    answer: 'Organic SEO is crucial because it helps your business appear in search results naturally, without paying for ads. It builds long-term credibility, drives targeted traffic, provides better ROI than paid advertising, and helps establish your brand as an authority in your industry. Good SEO ensures sustainable online visibility and growth.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-12 2xl:py-10 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-10 2xl:mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your questions answered clearly and effectively
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">Q</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-teal-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-teal-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 animate-fade-in-up">
                  <div className="pl-12">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}