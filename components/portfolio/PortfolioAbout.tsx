'use client';

import Image from 'next/image';

export default function PortfolioAbout() {
  return (
    <div className="section about-section py-20 bg-white dark:bg-gray-900" id="about">
      <div id="about-content">
        {/* Heading */}
        <div className="heading text-left text-center md:text-center mb-16">
          <h2 className="text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
            about <span className="text-teal-500">me</span>
          </h2>
        </div>

        {/* Personal Infos */}
        <div className="container mx-auto px-6">
          <div className="infos-holder flex flex-col lg:flex-row items-center gap-12">
            {/* Photo */}
            <div className="w-full lg:w-5/12">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/projects/profile.webp"
                  alt="Numan - Full Stack Developer"
                  width={450}
                  height={550}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-7/12">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                I'm Numan, a passionate Full-Stack Developer and UI/UX Designer with expertise in modern web technologies. Specializing in creating innovative digital solutions that drive business growth and user engagement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Personal Info List 1 */}
                <div className="personal-list-container">
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <span className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">Birthdate: </span>
                        <span className="text-gray-600 dark:text-gray-400">May 2000</span>
                      </div>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-.8-.4L2.2 10.4A1 1 0 013 6z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">Nationality: </span>
                        <span className="text-gray-600 dark:text-gray-400">Pakistani</span>
                      </div>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">Experience: </span>
                        <span className="text-gray-600 dark:text-gray-400">8 years</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Personal Info List 2 */}
                <div className="personal-list-container">
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <span className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 011.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">Phone: </span>
                        <span className="text-gray-600 dark:text-gray-400">+92 3036057586</span>
                      </div>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">Address: </span>
                        <span className="text-gray-600 dark:text-gray-400">Lahore, Pakistan</span>
                      </div>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">Email: </span>
                        <span className="text-gray-600 dark:text-gray-400">hr@softeriosolutions.com</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
