"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeroData, SiteConfig } from "../lib/markdown";

interface HeroProps {
  heroData: HeroData;
  siteConfig: SiteConfig;
}

export default function Hero({ heroData, siteConfig }: HeroProps) {
  const slideIn = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Content container */}
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center py-20 lg:py-0">
            {/* Left column - Content */}
            <motion.div
              variants={slideIn}
              initial="initial"
              animate="animate"
              className="space-y-8 lg:space-y-10 text-center lg:text-left order-2 lg:order-1"
            >
              <div className="space-y-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="block text-slate-900 dark:text-white leading-tight">
                    {heroData.name.split(' ')[0]}
                  </span>
                  <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight py-2">
                    {heroData.name.split(' ')[1]}
                  </span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {heroData.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button
                  className="group bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium sm:font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform-gpu"
                  onClick={() =>
                    document
                      .querySelector(heroData.primaryButtonLink)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <i className="fas fa-play group-hover:scale-110 transition-transform"></i>
                  {heroData.primaryButtonText}
                </button>

                <button
                  className="group border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium sm:font-semibold hover:border-slate-400 dark:hover:border-slate-500 hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-200 hover:-translate-y-0.5 transform-gpu"
                  onClick={() =>
                    document
                      .querySelector(heroData.secondaryButtonLink)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {heroData.secondaryButtonText}
                </button>
              </div>

              <div className="flex justify-center lg:justify-start items-center gap-8 pt-4">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Follow
                </span>
                <div className="flex gap-3">
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-600/50 text-slate-600 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 hover:border-red-200 dark:hover:border-red-500/50 transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md"
                    aria-label="Visit Collin Holloway's YouTube channel"
                  >
                    <i className="fab fa-youtube text-lg"></i>
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-600/50 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-500/50 transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md"
                    aria-label="Visit Collin Holloway's Facebook page"
                  >
                    <i className="fab fa-facebook text-lg"></i>
                  </a>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-600/50 text-slate-600 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-200 dark:hover:border-pink-500/50 transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md"
                    aria-label="Visit Collin Holloway's Instagram profile"
                  >
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                  <a
                    href={siteConfig.social.bandcamp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-600/50 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 hover:border-slate-300 dark:hover:border-slate-500/50 transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md"
                    aria-label="Listen to Collin Holloway's music on Bandcamp"
                  >
                    <i className="fab fa-bandcamp text-lg"></i>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right column - Image */}
            <motion.div
              variants={scaleIn}
              initial="initial"
              animate="animate"
              className="relative order-1 lg:order-2"
            >
              <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                  <Image
                    src={heroData.image}
                    alt={`${heroData.name}, ${heroData.subtitle.toLowerCase()}, holding guitar and smiling`}
                    fill
                    className="object-cover w-full h-full"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFskjULyJ2yFbSJeQ8qGefvmckHLGpqUtsHAdCrr8DRHbx4Qq9bE3CFEiMQBHQX7VK+6Hnm4acmFE/ZcpWqtOLlCOAW4Q6b35M8J5Tl3xnXoMjF8q6W7FvKLqHlUmKXjt4Hf/9k="
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 via-transparent to-transparent" />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-indigo-200/30 to-blue-300/30 rounded-full blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Scroll
          </span>
          <i className="fas fa-chevron-down text-slate-400 dark:text-slate-500 animate-bounce"></i>
        </div>
      </motion.div>
    </section>
  );
}
