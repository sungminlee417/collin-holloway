"use client";

import { motion } from "framer-motion";
import { ConcertData } from "../lib/markdown";

interface ConcertsProps {
  concertsData: ConcertData;
}

export default function Concerts({ concertsData }: ConcertsProps) {
  // Function to get icon color classes
  const getIconColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "from-blue-500 to-indigo-600",
      emerald: "from-emerald-500 to-teal-600",
      red: "from-red-500 to-pink-600",
      purple: "from-purple-500 to-violet-600",
      amber: "from-amber-500 to-orange-600",
      slate: "from-slate-600 to-slate-800"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight text-slate-900 dark:text-white">
            {concertsData.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {concertsData.subtitle}
          </p>
        </motion.div>

        {/* Upcoming Concerts */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10 text-slate-900 dark:text-white flex items-center gap-3"
          >
            <i className="fas fa-calendar text-blue-600 text-2xl"></i>
            Upcoming Performances
          </motion.h3>

          <div className="space-y-6">
            {concertsData.upcoming.map((concert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-slate-700 p-8 rounded-2xl border border-slate-200/50 dark:border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`bg-gradient-to-br ${getIconColorClasses(concert.iconColor)} p-3 rounded-lg flex-shrink-0 shadow-lg`}>
                        <i className="fas fa-music text-white text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                          {concert.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                          {concert.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                          {concert.date && (
                            <div className="flex items-center gap-1">
                              <i className="fas fa-calendar"></i>
                              <span>{concert.date}</span>
                            </div>
                          )}
                          {concert.time && (
                            <div className="flex items-center gap-1">
                              <i className="fas fa-clock"></i>
                              <span>{concert.time}</span>
                            </div>
                          )}
                          {concert.location && (
                            <div className="flex items-center gap-1">
                              <i className="fas fa-map-marker-alt"></i>
                              <span>{concert.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      onClick={() =>
                        document
                          .querySelector(concert.buttonLink)
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className={`${
                        index === 0 
                          ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900" 
                          : "border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                      } px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-200 flex items-center gap-2`}
                    >
                      <i className="fas fa-external-link-alt"></i>
                      {concert.buttonText}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Highlights */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10 text-slate-900 dark:text-white flex items-center gap-3"
          >
            <i className="fas fa-map-marker-alt text-amber-600 text-2xl"></i>
            Past Performance Highlights
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {concertsData.pastPerformances.map((performance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-slate-700 p-8 rounded-2xl border border-slate-200/50 dark:border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-br ${getIconColorClasses(performance.iconColor)} w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <i className="fas fa-music text-white text-xl"></i>
                </div>
                <h4 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">
                  {performance.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-3">
                  {performance.description}
                </p>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <i className={`fas ${performance.type === 'Ongoing' ? 'fa-calendar' : 'fa-map-marker-alt'} text-xs`}></i>
                  {performance.location || performance.type}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
