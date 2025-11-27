'use client';

import { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jhone Doe',
    role: 'CFO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    rating: 5,
    text: 'The service was exceptional and exceeded my expectations. Highly recommend!'
  },
  {
    id: 2,
    name: 'Afa Rose',
    role: 'Web Designer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    rating: 5,
    text: 'A seamless experience with outstanding support. Absolutely love it!'
  },
  {
    id: 3,
    name: 'Keena Lara',
    role: 'Store Owner',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    rating: 5,
    text: 'This company truly understands customer needs and delivers with excellence.'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const nextTestimonial = () => {
    const nextIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(nextIndex);
  };

  const prevTestimonial = () => {
    const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    scrollToIndex(prevIndex);
  };

  // Handle scroll to update current index
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-12 2xl:py-10 bg-white dark:bg-gray-800 transition-colors duration-300 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-10 2xl:mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real stories from our satisfied customers
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 px-4 sm:px-6 md:px-0">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
                >
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 sm:p-8 h-full transition-all duration-500 shadow-lg hover:shadow-2xl">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-teal-500 mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>

                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-gray-700 dark:text-gray-300 text-center italic">
                      <span className="text-teal-500 text-2xl">"</span>
                      {testimonial.text}
                      <span className="text-teal-500 text-2xl">"</span>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Hidden on Mobile, Visible on Tablet+ */}
          <button
            onClick={prevTestimonial}
            className="hidden sm:flex absolute left-2 md:left-4 xl:left-0 xl:-translate-x-12 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all z-10 items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-900 dark:text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="hidden sm:flex absolute right-2 md:right-4 xl:right-0 xl:translate-x-12 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all z-10 items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-900 dark:text-white" />
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-teal-500 scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}