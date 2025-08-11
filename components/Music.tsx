"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MusicData } from "../lib/markdown";

interface MusicProps {
  musicData: MusicData;
}

export default function Music({ musicData }: MusicProps) {
  return (
    <section
      id="music"
      className="py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20 lg:mb-28"
        >
          <h2 className="font-serif font-medium text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-slate-900 dark:text-white italic">
            Discography
          </h2>
        </motion.div>

        <div className="space-y-20 lg:space-y-32">
          {musicData.albums.map((album, index) => {
            // Helper function to get platform icon
            const getPlatformIcon = (platform: string) => {
              switch (platform.toLowerCase()) {
                case 'spotify': return 'fab fa-spotify';
                case 'bandcamp': return 'fab fa-bandcamp';
                case 'apple music': return 'fab fa-apple';
                case 'youtube': return 'fab fa-youtube';
                default: return 'fas fa-music';
              }
            };

            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="group"
              >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
                  {/* Album Cover */}
                  <div className={`relative aspect-square overflow-hidden ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <Image
                      src={album.cover}
                      alt={`${album.title} album cover`}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFskjULyJ2yFbSJeQ8qGefvmckHLGpqUtsHAdCrr8DRHbx4Qq9bE3CFEiMQBHQX7VK+6Hnm4acmFE/ZcpWqtOLlCOAW4Q6b35M8J5Tl3xnXoMjF8q6W7FvKLqHlUmKXjt4Hf/9k="
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                    <div className="absolute top-6 right-6">
                      <span className="inline-block px-4 py-2 bg-black/20 backdrop-blur-sm text-white text-xs font-medium uppercase tracking-[0.2em] border border-white/20">
                        {album.type}
                      </span>
                    </div>
                  </div>

                  {/* Album Info */}
                  <div className={`space-y-8 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="space-y-6">
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 dark:text-white tracking-tight italic">
                        {album.title}
                      </h3>
                      <div className="w-12 h-px bg-[#c88240] opacity-60"></div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed tracking-wide text-lg">
                        {album.description}
                      </p>
                    </div>

                    {/* Featured Track or Additional Info */}
                    {album.featuredTrack || album.additionalInfo ? (
                      <div className="space-y-4 border-l border-[#c88240]/30 pl-6">
                        <h4 className="font-serif text-lg font-medium text-slate-900 dark:text-white italic">
                          {album.featuredTrack ? `Featured: ${album.featuredTrack}` : album.additionalInfo?.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed tracking-wide">
                          {album.featuredTrackDescription || album.additionalInfo?.content}
                        </p>
                      </div>
                    ) : null}

                    {/* Listen Now Section */}
                    <div className="space-y-6">
                      <h4 className="font-serif text-lg font-medium text-slate-900 dark:text-white italic">
                        Listen
                      </h4>
                      <div className="space-y-4">
                        {album.listenLinks.map((link, linkIndex) => {
                          return (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link flex items-center justify-between py-4 border-b border-slate-200/50 dark:border-slate-800/50 hover:border-[#c88240]/50 dark:hover:border-[#c88240]/50 transition-all duration-500"
                            >
                              <div className="flex items-center gap-4">
                                <i className={`${getPlatformIcon(link.platform)} text-slate-400 dark:text-slate-500 text-xl group-hover/link:text-[#c88240] transition-colors duration-300`}></i>
                                <div>
                                  <div className="font-medium text-slate-900 dark:text-white tracking-wide group-hover/link:text-[#c88240] transition-colors duration-300">
                                    {link.platform}
                                  </div>
                                  <div className="text-sm text-slate-500 dark:text-slate-500 tracking-wide">
                                    {link.platform === 'Bandcamp' ? 'High-quality audio' : 
                                     link.platform === 'Spotify' ? 'Stream now' : 'Listen online'}
                                  </div>
                                </div>
                              </div>
                              <div className="w-1 h-1 bg-[#c88240] rounded-full opacity-60 group-hover/link:opacity-100 group-hover/link:scale-125 transition-all duration-300"></div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
