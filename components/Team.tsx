'use client';

import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const teamMembers = [
  {
    name: 'Jhone Bi',
    role: 'Application Manager',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    social: {
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Sani Awesome',
    role: 'Social Media',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    social: {
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Andrio Willi',
    role: 'Content Writer',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    social: {
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Afa Jonson',
    role: 'Business Manager',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    social: {
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      instagram: '#'
    }
  }
];

export default function Team() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-12 2xl:py-10 bg-teal-500 dark:bg-teal-600 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-10 2xl:mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Team
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Meet the experts who bring our vision to life
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {member.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {member.role}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a
                  href={member.social.twitter}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={member.social.facebook}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={member.social.linkedin}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.social.instagram}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}