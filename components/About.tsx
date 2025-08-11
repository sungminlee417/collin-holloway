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
    <section id="about" className="py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20 lg:mb-28"
        >
          <h2 className="font-serif font-medium text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-slate-900 dark:text-white italic">Bio</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-start">
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="relative aspect-[4/5] overflow-hidden lg:sticky lg:top-16 lg:will-change-transform"
          >
            <Image
              src={aboutData.image}
              alt="Collin Holloway performing"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>

          {/* Right column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
            className="space-y-12 lg:space-y-16"
          >
            {/* Brief intro - always visible */}
            <div className="space-y-6">
              <p className="font-serif text-lg sm:text-xl lg:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed tracking-wide font-light italic">
                {aboutData.bioIntro}
              </p>
              <div className="w-16 h-px bg-[#c88240] opacity-60"></div>
            </div>

            {/* Expandable full bio */}
            <div className={`overflow-hidden transition-all duration-700 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="space-y-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                <div 
                  className="[&>p]:mb-6 [&>p]:text-slate-600 [&>p]:dark:text-slate-400 [&>p]:leading-relaxed [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:font-medium [&>h2]:text-slate-900 [&>h2]:dark:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:italic [&>h3]:font-serif [&>h3]:text-xl [&>h3]:font-medium [&>h3]:text-slate-900 [&>h3]:dark:text-white [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:italic [&>ul]:list-none [&>ul]:pl-0 [&>ul]:space-y-3 [&>ul]:mb-6 [&>li]:text-slate-600 [&>li]:dark:text-slate-400 [&>li]:before:content-['—'] [&>li]:before:text-[#c88240] [&>li]:before:mr-3 [&>li]:before:opacity-60 [&>strong]:text-slate-900 [&>strong]:dark:text-white [&>strong]:font-medium [&>em]:italic [&>em]:text-slate-700 [&>em]:dark:text-slate-300"
                  dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }} 
                />
              </div>
            </div>

            {/* Read More/Less Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group inline-flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-[#c88240] dark:hover:text-[#c88240] font-medium transition-all duration-300 tracking-[0.2em] uppercase text-xs border-b border-transparent hover:border-[#c88240] pb-1"
            >
              <span>{isExpanded ? 'Less' : 'More'}</span>
              <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} text-xs transition-transform group-hover:translate-y-0.5`}></i>
            </button>

            {/* Quick Facts Cards */}
            <div className="grid gap-12 mt-16 lg:mt-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="space-y-4 border-b border-slate-200/50 dark:border-slate-800/50 pb-8"
              >
                <h4 className="font-serif text-lg font-medium text-slate-900 dark:text-white tracking-wide italic">Education</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed tracking-wide">
                  Eastman School of Music, University of Kentucky, Private study in Italy with Angelo Gilardino
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="space-y-4 border-b border-slate-200/50 dark:border-slate-800/50 pb-8"
              >
                <h4 className="font-serif text-lg font-medium text-slate-900 dark:text-white tracking-wide italic">Awards</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed tracking-wide">
                  Haire Guitar Competition Winner, National Brownsville Duet Competition, Rising Young Artist
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="space-y-4 border-b border-slate-200/50 dark:border-slate-800/50 pb-8"
              >
                <h4 className="font-serif text-lg font-medium text-slate-900 dark:text-white tracking-wide italic">Performances</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed tracking-wide">
                  Austin City Limits, CHAMBERart Madrid, Los Romeros Quartet collaboration
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="space-y-4"
              >
                <h4 className="font-serif text-lg font-medium text-slate-900 dark:text-white tracking-wide italic">Projects</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed tracking-wide">
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