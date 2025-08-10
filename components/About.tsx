'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 tracking-tight text-slate-900">About Collin</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            A passionate classical guitarist bringing intimate musical moments to life through beautiful tone and rare repertoire
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/5] overflow-hidden rounded-xl lg:rounded-2xl shadow-lg lg:shadow-2xl lg:sticky lg:top-8"
          >
            <Image
              src="/DSC00168.jpg"
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
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Classical guitarist Collin Holloway began playing at the age of nine in his hometown of Oklahoma City. 
                Recognized as a burgeoning talent from an early age (his first solo recital was met with two standing ovations), 
                he studied with Matthew Denman before pursuing his higher education at the Eastman School of Music with 
                Thomas Viloteau and Nicholas Goluses.
              </p>
            </div>

            {/* Expandable full bio */}
            <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="prose prose-lg max-w-none space-y-4">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Upon graduation, he obtained his master&apos;s degree with Dieter Hennings at the University of Kentucky 
                  College of Fine Arts and was selected to study privately with the renowned musician Angelo Gilardino in 
                  Vercelli, Italy.
                </p>
                
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Collin&apos;s performing experience is extensive. He has toured across much of America and Spain as a 
                  soloist and as part of various ensembles in festivals such as Austin City Limits, CHAMBERart Madrid, 
                  and the Celedonio Romero Guitar Institute. Highlights of his career include winning the Haire Guitar 
                  Competition, two consecutive first place finishes at the National Brownsville Guitar Duet Competition, 
                  and being recognized as a &quot;Rising Young Artist&quot; by the Opera Club of the Villages.
                </p>
                
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Most recently, Collin was chosen as a soloist to premiere the work &quot;Malagueña de Jotron&quot; at the 
                  Armstrong Theater with the renowned Los Romeros Guitar Quartet, as well as appearances with the 
                  Juliani Ensemble.
                </p>
                
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  As a musician, Collin strives to bring to life the intimate nature and inherent poetry of the guitar 
                  through a beautiful tone and a sensitive touch. This can be heard throughout his debut album 
                  &quot;A Musical Portrait&quot;, where he performs rare works by Angelo Gilardino and Graciela Agudelo, 
                  amongst other more seminal compositions.
                </p>
                
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  An adamant performer of chamber music, Collin is one half of The Muse Duo. This guitar and piano duo 
                  was formed at the Eastman School of Music with pianist and composer Robert Benedict. Just months after 
                  playing together for the first time, The Muse Duo toured parts of the United States. Currently, the 
                  Muse Duo is championing new music for this rare setting of instruments through the composition of new 
                  works by Robert, as well as premiere performances of these compositions. Their debut album 
                  &quot;Experiments&quot; was released in April 2023.
                </p>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Collin is also a co-founder of the Off the Dock Chamber Music Festival, an intimate festival dedicated 
                  to bringing chamber music to the beautiful Finger Lakes region of New York, providing a platform for 
                  emerging artists and fostering community through music.
                </p>
              </div>
            </div>

            {/* Read More/Less Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
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
                className="bg-slate-50 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-slate-200/50 hover:shadow-md lg:hover:shadow-lg transition-all duration-200 transform-gpu"
              >
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center mb-4 lg:mb-6 shadow-md lg:shadow-lg">
                  <i className="fas fa-graduation-cap text-white text-lg lg:text-xl"></i>
                </div>
                <h4 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 text-slate-900">Education</h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Eastman School of Music, University of Kentucky, Private study in Italy with Angelo Gilardino
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-slate-50 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-slate-200/50 hover:shadow-md lg:hover:shadow-lg transition-all duration-200 transform-gpu"
              >
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center mb-4 lg:mb-6 shadow-md lg:shadow-lg">
                  <i className="fas fa-trophy text-white text-lg lg:text-xl"></i>
                </div>
                <h4 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 text-slate-900">Awards</h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Haire Guitar Competition Winner, National Brownsville Duet Competition, Rising Young Artist
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-slate-50 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-slate-200/50 hover:shadow-md lg:hover:shadow-lg transition-all duration-200 transform-gpu"
              >
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center mb-4 lg:mb-6 shadow-md lg:shadow-lg">
                  <i className="fas fa-microphone text-white text-lg lg:text-xl"></i>
                </div>
                <h4 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 text-slate-900">Performances</h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Austin City Limits, CHAMBERart Madrid, Los Romeros Quartet collaboration
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-slate-50 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-slate-200/50 hover:shadow-md lg:hover:shadow-lg transition-all duration-200 transform-gpu"
              >
                <div className="bg-gradient-to-br from-purple-500 to-violet-600 w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center mb-4 lg:mb-6 shadow-md lg:shadow-lg">
                  <i className="fas fa-music text-white text-lg lg:text-xl"></i>
                </div>
                <h4 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 text-slate-900">Projects</h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
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