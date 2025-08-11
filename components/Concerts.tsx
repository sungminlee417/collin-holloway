"use client";

import { motion } from "framer-motion";
import { ConcertData } from "../lib/markdown";

interface ConcertsProps {
  concertsData: ConcertData;
}

export default function Concerts({ concertsData }: ConcertsProps) {
  return (
    <section className="py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20 lg:mb-28"
        >
          <h2 className="font-serif font-medium text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-slate-900 dark:text-white italic">
            Concerts
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Upcoming Concerts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-wide text-slate-900 dark:text-white mb-12 italic">
              Upcoming Events
            </h3>
            <div className="space-y-12">
              {concertsData.upcoming.map((concert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.7, 
                    ease: [0.25, 0.1, 0.25, 1] 
                  }}
                  className="group border-b border-slate-200/50 dark:border-slate-800/50 pb-8 last:border-0 hover:border-[#c88240]/30 dark:hover:border-[#c88240]/30 transition-all duration-500"
                >
                  <div className="flex flex-col gap-6">
                    <div>
                      <h4 className="font-serif text-lg sm:text-xl font-medium text-slate-900 dark:text-white mb-4 tracking-wide group-hover:text-[#c88240] transition-colors duration-300">
                        {concert.title}
                      </h4>
                      <div className="text-sm text-slate-600 dark:text-slate-400 space-y-3 font-light">
                        {concert.date && (
                          <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-[#c88240] rounded-full opacity-80"></div>
                            <span className="tracking-wide">
                              {concert.date} {concert.time && `• ${concert.time}`}
                            </span>
                          </div>
                        )}
                        {concert.location && (
                          <div className="pl-5 text-slate-500 dark:text-slate-500 tracking-wide">
                            {concert.location}
                          </div>
                        )}
                      </div>
                    </div>
                    {concert.description && (
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed tracking-wide pl-5">
                        {concert.description}
                      </p>
                    )}
                    {concert.buttonText && (
                      <button
                        onClick={() =>
                          document
                            .querySelector(concert.buttonLink)
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="self-start text-xs font-medium uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300 hover:text-[#c88240] dark:hover:text-[#c88240] transition-all duration-300 border-b border-transparent hover:border-[#c88240] pb-1 ml-5"
                      >
                        {concert.buttonText}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Past Performances */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-wide text-slate-900 dark:text-white mb-12 italic">
              Past Performances
            </h3>
            <div className="space-y-10">
              {concertsData.pastPerformances?.map((performance, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.08, 
                    duration: 0.6, 
                    ease: [0.25, 0.1, 0.25, 1] 
                  }}
                  className="group border-b border-slate-200/50 dark:border-slate-800/50 pb-6 last:border-0 hover:border-[#c88240]/20 dark:hover:border-[#c88240]/20 transition-all duration-500"
                >
                  <div className="flex flex-col gap-4">
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-medium text-slate-900 dark:text-white mb-2 tracking-wide group-hover:text-[#c88240] transition-colors duration-300">
                        {performance.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-500 mb-3">
                        <div className="w-1 h-1 bg-[#c88240] rounded-full opacity-60"></div>
                        <span className="tracking-wider uppercase">
                          {performance.type}
                        </span>
                        {performance.location && (
                          <>
                            <span>•</span>
                            <span className="tracking-wide">{performance.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                    {performance.description && (
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed tracking-wide pl-4">
                        {performance.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}