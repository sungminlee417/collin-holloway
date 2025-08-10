'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { GalleryData } from '../lib/markdown';

interface GalleryProps {
  galleryData: GalleryData;
}

export default function Gallery({ galleryData }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCaption, setSelectedCaption] = useState<string | null>(null);

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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 tracking-tight text-slate-900 dark:text-white">{galleryData.title}</h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              {galleryData.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {galleryData.images.map((image, index) => (
              <motion.button
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group cursor-pointer w-full text-left focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 rounded-lg sm:rounded-xl lg:rounded-2xl"
                onClick={() => {
                  setSelectedImage(image.src);
                  setSelectedCaption(image.caption || null);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedImage(image.src);
                    setSelectedCaption(image.caption || null);
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
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm font-medium bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.caption}
                    </div>
                  )}
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
          onClick={() => {
            setSelectedImage(null);
            setSelectedCaption(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setSelectedImage(null);
              setSelectedCaption(null);
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
            {selectedCaption && (
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-lg font-medium bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg">
                  {selectedCaption}
                </p>
              </div>
            )}
            <button
              className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              onClick={() => {
                setSelectedImage(null);
                setSelectedCaption(null);
              }}
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