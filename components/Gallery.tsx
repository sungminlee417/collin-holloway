'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: '/DSC00023-2.jpg', alt: 'Collin Holloway Performance', delay: 0 },
    { src: '/DSC00168.jpg', alt: 'Collin Holloway Guitar', delay: 0.1 },
    { src: '/L1008655.jpeg', alt: 'Collin Holloway Portrait', delay: 0.2 },
    { src: '/DSC00101.jpg', alt: 'Collin Holloway Concert', delay: 0.3 },
    { src: '/L1008607.jpeg', alt: 'The Muse Duo Performance', delay: 0.4 },
    { src: '/Head Shot 1.jpg', alt: 'Collin Holloway Headshot', delay: 0.5 }
  ];

  return (
    <>
      <section id="gallery" className="py-16 sm:py-24 lg:py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 tracking-tight text-slate-900 dark:text-white">Gallery</h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Behind the scenes and performance moments capturing the artistry and passion of classical guitar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {images.map((image) => (
              <motion.button
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: image.delay, duration: 0.5 }}
                className="group cursor-pointer w-full text-left focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 rounded-lg sm:rounded-xl lg:rounded-2xl"
                onClick={() => setSelectedImage(image.src)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedImage(image.src);
                  }
                }}
                aria-label={`View larger version of ${image.alt}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl bg-slate-100 shadow-md hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-1 lg:hover:-translate-y-2">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setSelectedImage(null);
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-5xl max-h-[90vh] w-full h-full"
          >
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
              sizes="100vw"
            />
            <button
              className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image lightbox"
              autoFocus
            >
              <i className="fas fa-times text-white text-xl"></i>
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}