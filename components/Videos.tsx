'use client';

import { motion } from 'framer-motion';
import { VideoData } from '../lib/markdown';

interface VideosProps {
  videosData: VideoData;
}

export default function Videos({ videosData }: VideosProps) {

  return (
    <section id="videos" className="py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20 lg:mb-28"
        >
          <h2 className="font-serif font-medium text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-slate-900 dark:text-white italic">Videos</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {videosData.videos.map((video, index) => (
            <motion.div
              key={video.youtubeId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="group space-y-6"
            >
              <div className="aspect-video relative bg-slate-900 overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                  title={`${video.title} - Classical guitar performance by Collin Holloway`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 border border-transparent group-hover:border-[#c88240]/30 transition-all duration-700 pointer-events-none"></div>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-slate-900 dark:text-white tracking-tight italic group-hover:text-[#c88240] transition-colors duration-300">
                  {video.title}
                </h3>
                <div className="w-8 h-px bg-[#c88240] opacity-60 group-hover:opacity-100 group-hover:w-12 transition-all duration-500"></div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed tracking-wide">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mt-20 lg:mt-24"
        >
          <a
            href={videosData.channelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-5 font-medium tracking-[0.2em] uppercase text-xs hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-500 border-b-2 border-[#c88240] hover:border-[#a73d3d] group bulge-bg magnetic"
          >
            <i className="fab fa-youtube text-lg group-hover:scale-110 transition-transform duration-300"></i>
            <span>View More</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}