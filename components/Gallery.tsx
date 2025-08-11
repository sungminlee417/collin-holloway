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
      <section id="gallery" className="py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-20 lg:mb-28"
          >
            <h2 className="font-serif font-medium text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-slate-900 dark:text-white italic">Gallery</h2>
          </motion.div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
            {galleryData.images.map((image, index) => (
              <motion.button
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="group cursor-pointer w-full text-left focus:outline-none break-inside-avoid mb-6 lg:mb-8"
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
                <div className="relative overflow-hidden bg-slate-100 group-hover:bg-slate-200 dark:group-hover:bg-slate-800 transition-all duration-500">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 border border-transparent group-hover:border-[#c88240]/30 transition-all duration-500"></div>
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <p className="font-serif italic tracking-wide">{image.caption}</p>
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
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
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
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative max-w-5xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
              sizes="100vw"
            />
            {selectedCaption && (
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <p className="font-serif text-white text-lg italic bg-black/50 backdrop-blur-md px-6 py-3 border border-[#c88240]/30 tracking-wide">
                  {selectedCaption}
                </p>
              </div>
            )}
            <button
              className="absolute top-8 right-8 p-3 bg-black/30 backdrop-blur-md hover:bg-black/50 transition-all duration-300 border border-[#c88240]/30 hover:border-[#c88240]/50 focus:outline-none focus:border-[#c88240]"
              onClick={() => {
                setSelectedImage(null);
                setSelectedCaption(null);
              }}
              aria-label="Close image lightbox"
              autoFocus
            >
              <i className="fas fa-times text-white text-lg"></i>
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}