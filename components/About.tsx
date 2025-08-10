'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { AboutData } from '../lib/markdown';

interface AboutProps {
  aboutData: AboutData;
}

export default function About({ aboutData }: AboutProps) {

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
            className="relative aspect-[4/5] overflow-hidden rounded-xl lg:rounded-2xl shadow-lg lg:shadow-2xl lg:sticky lg:top-8"
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
            {/* Bio content from CMS */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:dark:text-white [&>h2]:mt-8 [&>h2]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>li]:text-slate-700 [&>li]:dark:text-slate-300 [&>strong]:text-slate-900 [&>strong]:dark:text-white"
                dangerouslySetInnerHTML={{ __html: aboutData.content }}
              />
            </div>


            {/* Skills Cards - Dynamic from CMS */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-10">
              {aboutData.skills.map((skill, index) => {
                const colors = [
                  'from-blue-500 to-indigo-600',
                  'from-emerald-500 to-teal-600', 
                  'from-amber-500 to-orange-600',
                  'from-purple-500 to-violet-600'
                ];
                return (
                  <motion.div
                    key={skill.skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="bg-slate-50 dark:bg-slate-800 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md lg:hover:shadow-lg transition-all duration-200 transform-gpu"
                  >
                    <div className={`bg-gradient-to-br ${colors[index % colors.length]} w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center mb-4 lg:mb-6 shadow-md lg:shadow-lg`}>
                      <i className={`${skill.icon} text-white text-lg lg:text-xl`}></i>
                    </div>
                    <h4 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 text-slate-900 dark:text-white">{skill.skill}</h4>
                  </motion.div>
                );
              })}
            </div>

            {/* Achievements Timeline */}
            {aboutData.achievements && aboutData.achievements.length > 0 && (
              <div className="mt-12 lg:mt-16">
                <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Recent Achievements</h3>
                <div className="space-y-4">
                  {aboutData.achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.achievement}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200/50 dark:border-slate-700/50"
                    >
                      <div className="bg-gradient-to-br from-slate-500 to-slate-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-semibold">{achievement.year}</span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300">{achievement.achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}