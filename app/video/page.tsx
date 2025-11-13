"use client";

import { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Play } from "lucide-react";

export default function VideoPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const enterFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        // Safari
        (videoRef.current as any).webkitRequestFullscreen();
      } else if ((videoRef.current as any).mozRequestFullScreen) {
        // Firefox
        (videoRef.current as any).mozRequestFullScreen();
      } else if ((videoRef.current as any).msRequestFullscreen) {
        // IE/Edge
        (videoRef.current as any).msRequestFullscreen();
      }
    }
  };

  const handlePlayButtonClick = async () => {
    if (videoRef.current) {
      // Enter fullscreen first
      enterFullscreen();

      // Wait a bit for fullscreen to activate, then play
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
          setIsPlaying(true);
        }
      }, 100);
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Attractive Background with Gradients and Patterns */}
      <div className="fixed inset-0 -z-10">
        {/* Base Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 via-blue-500/20 to-cyan-400/20 dark:from-teal-600/10 dark:via-blue-600/10 dark:to-cyan-600/10 animate-pulse"></div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Decorative Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"></div>
      </div>

      <Header />

      <main className="pt-20 pb-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Softerio Solutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Softerio Solutions is a leading technology company specializing in
              custom software development, web applications, mobile apps, and
              AI-powered solutions. We transform innovative ideas into scalable
              digital products that drive business growth and enhance user
              experiences.
            </p>
          </div>

          {/* Video Container */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
              <div className="aspect-video w-full relative">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  loop
                  playsInline
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                >
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Custom Play Button Overlay - Center */}
                {!isPlaying && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/30 dark:bg-black/40 cursor-pointer z-10 transition-opacity duration-300"
                    onClick={handlePlayButtonClick}
                  >
                    <button
                      className="bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-full p-4 sm:p-6 shadow-2xl transition-all duration-300 hover:scale-110 transform"
                      aria-label="Play video in fullscreen"
                    >
                      <Play
                        className="w-12 h-12 sm:w-16 sm:h-16 text-teal-600 dark:text-teal-400 ml-1"
                        fill="currentColor"
                      />
                    </button>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  About Softerio Solutions
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg mb-6">
                  Softerio Solutions is a dynamic technology firm dedicated to
                  delivering cutting-edge software solutions tailored to meet
                  your business needs. With expertise in web development, mobile
                  applications, AI integration, and cloud services, we help
                  businesses leverage technology to achieve their goals. Our
                  team of skilled developers, designers, and strategists work
                  collaboratively to create innovative solutions that drive
                  digital transformation and business success.
                </p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Our Core Services
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">✓</span>
                      <span>Custom Web Development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">✓</span>
                      <span>Mobile App Development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">✓</span>
                      <span>AI & Machine Learning Solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">✓</span>
                      <span>Cloud Infrastructure & DevOps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">✓</span>
                      <span>UI/UX Design & Branding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">✓</span>
                      <span>E-commerce Solutions</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                      10+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Years of Experience
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                      500+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Happy Clients
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                      1000+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Projects Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
