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
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
  };

  const scaleIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Content container */}
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center py-20 lg:py-0">
            {/* Left column - Content */}
            <motion.div
              variants={slideIn}
              initial="initial"
              animate="animate"
              className="space-y-12 lg:space-y-16 text-center lg:text-left order-2 lg:order-1"
            >
              <div className="space-y-10">
                <h1 className="font-serif font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-none">
                  <span className="block text-slate-900 dark:text-white italic">
                    {heroData.name.split(' ')[0]}
                  </span>
                  <span className="block text-slate-900 dark:text-white italic -mt-2">
                    {heroData.name.split(' ')[1]}
                  </span>
                </h1>

                <div className="relative">
                  <p className="text-base sm:text-lg lg:text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light tracking-wide">
                    {heroData.description}
                  </p>
                  <div className="w-12 h-px bg-[#c88240] mt-6 mx-auto lg:mx-0"></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <button
                  className="group relative overflow-hidden bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-5 font-medium tracking-[0.2em] uppercase text-xs border-b-2 border-[#c88240] hover:border-[#a73d3d] bulge-bg magnetic transition-all duration-500"
                  onClick={() =>
                    document
                      .querySelector(heroData.primaryButtonLink)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span className="relative z-10">{heroData.primaryButtonText}</span>
                </button>

                <button
                  className="group border border-slate-300/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 px-10 py-5 font-medium tracking-[0.2em] uppercase text-xs hover:border-[#c88240]/50 dark:hover:border-[#c88240]/50 hover:text-[#c88240] dark:hover:text-[#c88240] morph-border magnetic transition-all duration-500"
                  onClick={() =>
                    document
                      .querySelector(heroData.secondaryButtonLink)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {heroData.secondaryButtonText}
                </button>
              </div>

              <div className="flex justify-center lg:justify-start items-center gap-10 pt-8">
                <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">
                  Follow
                </span>
                <div className="w-8 h-px bg-slate-300 dark:bg-slate-700"></div>
                <div className="flex gap-6">
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 dark:text-slate-500 hover:text-[#c88240] dark:hover:text-[#c88240] transition-all duration-300"
                    aria-label="Visit Collin Holloway's YouTube channel"
                  >
                    <i className="fab fa-youtube text-lg"></i>
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 dark:text-slate-500 hover:text-[#c88240] dark:hover:text-[#c88240] transition-all duration-300"
                    aria-label="Visit Collin Holloway's Facebook page"
                  >
                    <i className="fab fa-facebook text-lg"></i>
                  </a>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 dark:text-slate-500 hover:text-[#c88240] dark:hover:text-[#c88240] transition-all duration-300"
                    aria-label="Visit Collin Holloway's Instagram profile"
                  >
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                  <a
                    href={siteConfig.social.bandcamp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 dark:text-slate-500 hover:text-[#c88240] dark:hover:text-[#c88240] transition-all duration-300"
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
              <div className="relative max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={heroData.image}
                    alt={`${heroData.name}, ${heroData.subtitle.toLowerCase()}, holding guitar and smiling`}
                    fill
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFskjULyJ2yFbSJeQ8qGefvmckHLGpqUtsHAdCrr8DRHbx4Qq9bE3CFEiMQBHQX7VK+6Hnm4acmFE/ZcpWqtOLlCOAW4Q6b35M8J5Tl3xnXoMjF8q6W7FvKLqHlUmKXjt4Hf/9k="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  <div className="absolute inset-0 border-2 border-transparent hover:border-[#c88240]/20 transition-all duration-700"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-8 bg-slate-300 dark:bg-slate-700"></div>
          <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] writing-mode-vertical-rl">
            Scroll
          </span>
        </div>
      </motion.div>
    </section>
  );
}
