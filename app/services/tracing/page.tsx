'use client';

import { useState } from 'react';
import { PenTool, Upload, Download, Clock, Star, CheckCircle } from 'lucide-react';
import ChatWidget from '@/components/ChatWidget';

const sampleImages = [
  {
    id: 1,
    original: 'https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg',
    traced: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    title: 'Logo Design'
  },
  {
    id: 2,
    original: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    traced: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    title: 'Social Media Graphic'
  },
  {
    id: 3,
    original: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg',
    traced: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    title: 'Digital Art'
  }
];

const features = [
  {
    icon: Upload,
    title: 'Easy Upload',
    description: 'Simply upload your image or design file'
  },
  {
    icon: PenTool,
    title: 'Professional Tracing',
    description: 'Expert tracing with precision and quality'
  },
  {
    icon: Download,
    title: 'Multiple Formats',
    description: 'Get your traced design in various formats'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Quick delivery within 24-48 hours'
  }
];

export default function TracingServicePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    fileType: 'image'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <PenTool className="w-12 h-12 text-teal-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tracing Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional tracing for any picture or design. Upload any image or design, and we'll convert it to a high-quality traced version for social media graphics, logos, or digital products.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sample Images */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Before & After Examples
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sampleImages.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {item.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Original</p>
                    <div className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-400 text-sm">Image Placeholder</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Traced Version</p>
                    <div className="w-full h-32 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
                      <span className="text-teal-600 dark:text-teal-400 text-sm">Traced Result</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Process */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Pricing */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Pricing
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Simple Logo</span>
                <span className="text-2xl font-bold text-teal-600">$25</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Complex Design</span>
                <span className="text-2xl font-bold text-teal-600">$50</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Bulk Orders</span>
                <span className="text-2xl font-bold text-teal-600">Custom</span>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              How It Works
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <span className="text-gray-700 dark:text-gray-300">Upload your image</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <span className="text-gray-700 dark:text-gray-300">We trace and convert</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <span className="text-gray-700 dark:text-gray-300">Download your traced design</span>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Get Started Today
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all dark:bg-gray-700 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all dark:bg-gray-700 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all dark:bg-gray-700 dark:text-white"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label htmlFor="fileType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                File Type
              </label>
              <select
                id="fileType"
                name="fileType"
                value={formData.fileType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all dark:bg-gray-700 dark:text-white"
              >
                <option value="image">Image (JPG, PNG)</option>
                <option value="vector">Vector (AI, EPS)</option>
                <option value="other">Other Format</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Project Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none dark:bg-gray-700 dark:text-white"
                placeholder="Describe your project requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <PenTool className="w-5 h-5" />
              <span>Submit Inquiry</span>
            </button>
          </form>
        </div>
      </div>
      <ChatWidget />
    </main>
  );
}
