'use client';

import Contact from '@/components/Contact';
import ChatWidget from '@/components/ChatWidget';

export default function QuotesPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 xl:py-20 2xl:py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 dark:from-black dark:via-gray-900 dark:to-teal-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl mb-6">
            Get Your
          </h1>
          <h2 className="text-4xl lg:text-6xl font-bold text-teal-400 leading-tight drop-shadow-2xl mb-8">
            Free Quote
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            Ready to start your project? Let's discuss your requirements and provide you with a detailed quote tailored to your needs.
          </p>
        </div>
        
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Contact Section */}
      <Contact />
      <ChatWidget />
    </main>
  );
}
