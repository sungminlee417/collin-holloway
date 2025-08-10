"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
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
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
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
                <div className="inline-flex items-center px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-slate-200/50 text-slate-700 rounded-full text-sm font-medium shadow-sm">
                  🎸 Classical Guitarist
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="block text-slate-900 mb-2 leading-tight">Collin</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight py-2">
                    Holloway
                  </span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Crafting intimate musical moments through beautiful tone and
                  little-known repertoire, bringing poetry to life through the
                  classical guitar.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button
                  className="group bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium sm:font-semibold hover:bg-slate-800 transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform-gpu"
                  onClick={() =>
                    document
                      .getElementById("music")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <i className="fas fa-play group-hover:scale-110 transition-transform"></i>
                  Listen Now
                </button>

                <button
                  className="group border-2 border-slate-300 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium sm:font-semibold hover:border-slate-400 hover:bg-white/50 transition-all duration-200 hover:-translate-y-0.5 transform-gpu"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Book Performance
                </button>
              </div>

              <div className="flex justify-center lg:justify-start items-center gap-8 pt-4">
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  Follow
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://www.youtube.com/@collinholloway1929"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200/50 text-slate-600 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md"
                  >
                    <i className="fab fa-youtube text-lg"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/collinhollowayguitar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200/50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md"
                  >
                    <i className="fab fa-facebook text-lg"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/collinhollowayguitar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200/50 text-slate-600 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md"
                  >
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                  <a
                    href="https://collinholloway.bandcamp.com/album/a-musical-portrait"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200/50 text-slate-600 hover:bg-slate-100 hover:border-slate-300 transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md"
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
                    src="/Head Shot 1.jpg"
                    alt="Collin Holloway - Classical Guitarist"
                    fill
                    className="object-cover w-full h-full"
                    priority
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
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Scroll
          </span>
          <i className="fas fa-chevron-down text-slate-400 animate-bounce"></i>
        </div>
      </motion.div>
    </section>
  );
}
