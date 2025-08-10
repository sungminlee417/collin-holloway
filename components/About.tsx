'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { AboutData } from '../lib/markdown';

interface AboutProps {
  aboutData: AboutData;
}

export default function About({ aboutData }: AboutProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 tracking-tight text-slate-900 dark:text-white">{aboutData.title}</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            {aboutData.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/5] overflow-hidden rounded-xl lg:rounded-2xl shadow-lg lg:shadow-2xl lg:sticky lg:top-8 lg:will-change-transform"
          >
            <Image
              src={aboutData.image}
              alt="Collin Holloway performing"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </motion.div>

          {/* Right column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Brief intro - always visible */}
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {aboutData.bioIntro}
              </p>
            </div>

            {/* Expandable full bio */}
            <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="prose prose-lg max-w-none space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                <div 
                  className="[&>p]:mb-4 [&>p]:text-slate-700 [&>p]:dark:text-slate-300 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:dark:text-white [&>h2]:mt-6 [&>h2]:mb-3 [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-slate-900 [&>h3]:dark:text-white [&>h3]:mt-5 [&>h3]:mb-2 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:mb-4 [&>li]:text-slate-700 [&>li]:dark:text-slate-300 [&>strong]:text-slate-900 [&>strong]:dark:text-white [&>em]:italic"
                  dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }} 
                />
              </div>
            </div>

            {/* Read More/Less Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
            >
              <span>{isExpanded ? 'Read Less' : 'Read Full Biography'}</span>
              <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} text-sm transition-transform group-hover:translate-y-0.5`}></i>
            </button>


            {/* Quick Facts Cards */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-slate-50 dark:bg-slate-800 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md lg:hover:shadow-lg transition-all duration-200 transform-gpu"
              >
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center mb-4 lg:mb-6 shadow-md lg:shadow-lg">
                  <i className="fas fa-graduation-cap text-white text-lg lg:text-xl"></i>
                </div>
                <h4 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 text-slate-900 dark:text-white">Education</h4>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Eastman School of Music, University of Kentucky, Private study in Italy with Angelo Gilardino
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-slate-50 dark:bg-slate-800 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md lg:hover:shadow-lg transition-all duration-200 transform-gpu"
              >
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center mb-4 lg:mb-6 shadow-md lg:shadow-lg">
                  <i className="fas fa-trophy text-white text-lg lg:text-xl"></i>
                </div>
                <h4 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 text-slate-900 dark:text-white">Awards</h4>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Haire Guitar Competition Winner, National Brownsville Duet Competition, Rising Young Artist
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-slate-50 dark:bg-slate-800 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md lg:hover:shadow-lg transition-all duration-200 transform-gpu"
              >
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center mb-4 lg:mb-6 shadow-md lg:shadow-lg">
                  <i className="fas fa-microphone text-white text-lg lg:text-xl"></i>
                </div>
                <h4 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 text-slate-900 dark:text-white">Performances</h4>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Austin City Limits, CHAMBERart Madrid, Los Romeros Quartet collaboration
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-slate-50 dark:bg-slate-800 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md lg:hover:shadow-lg transition-all duration-200 transform-gpu"
              >
                <div className="bg-gradient-to-br from-purple-500 to-violet-600 w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center mb-4 lg:mb-6 shadow-md lg:shadow-lg">
                  <i className="fas fa-music text-white text-lg lg:text-xl"></i>
                </div>
                <h4 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 text-slate-900 dark:text-white">Projects</h4>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  The Muse Duo, Off the Dock Chamber Festival Co-founder
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}