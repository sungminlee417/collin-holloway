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
      className="py-16 sm:py-24 lg:py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 tracking-tight text-slate-900 dark:text-white">
            {musicData.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            {musicData.subtitle}
          </p>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
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

            // Helper function to get platform colors
            const getPlatformColors = (platform: string) => {
              switch (platform.toLowerCase()) {
                case 'spotify': return {
                  bg: 'bg-green-50 dark:bg-green-900/20',
                  hover: 'hover:bg-green-100 dark:hover:bg-green-900/30',
                  border: 'border-green-200 dark:border-green-700',
                  icon: 'text-green-600',
                  button: 'bg-green-600 hover:bg-green-700'
                };
                case 'bandcamp': return {
                  bg: 'bg-blue-50 dark:bg-blue-900/20',
                  hover: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
                  border: 'border-blue-200 dark:border-blue-700',
                  icon: 'text-blue-600',
                  button: 'bg-blue-600 hover:bg-blue-700'
                };
                default: return {
                  bg: 'bg-slate-50 dark:bg-slate-900/20',
                  hover: 'hover:bg-slate-100 dark:hover:bg-slate-900/30',
                  border: 'border-slate-200 dark:border-slate-700',
                  icon: 'text-slate-600',
                  button: 'bg-slate-600 hover:bg-slate-700'
                };
              }
            };

            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
                  {/* Album Cover */}
                  <div className={`relative h-80 lg:h-full lg:min-h-[600px] overflow-hidden ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <Image
                      src={album.cover}
                      alt={`${album.title} album cover`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFskjULyJ2yFbSJeQ8qGefvmckHLGpqUtsHAdCrr8DRHbx4Qq9bE3CFEiMQBHQX7VK+6Hnm4acmFE/ZcpWqtOLlCOAW4Q6b35M8J5Tl3xnXoMjF8q6W7FvKLqHlUmKXjt4Hf/9k="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                        {album.type}
                      </span>
                    </div>
                  </div>

                  {/* Album Info */}
                  <div className={`p-8 lg:p-10 flex flex-col ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
                        {album.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                        {album.description}
                      </p>

                      {/* Featured Track or Additional Info */}
                      {album.featuredTrack || album.additionalInfo ? (
                        <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200/50 dark:border-slate-600/50">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            {album.featuredTrack ? (
                              <>
                                <i className="fas fa-music text-blue-600"></i>
                                Featured Track: {album.featuredTrack}
                              </>
                            ) : (
                              <>
                                <i className="fas fa-users text-purple-600"></i>
                                {album.additionalInfo?.title}
                              </>
                            )}
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {album.featuredTrackDescription || album.additionalInfo?.content}
                          </p>
                        </div>
                      ) : null}
                    </div>

                    {/* Listen Now Section */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                        Listen Now
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {album.listenLinks.map((link, linkIndex) => {
                          const colors = getPlatformColors(link.platform);
                          return (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center justify-between p-4 ${colors.bg} ${colors.hover} rounded-xl border ${colors.border} transition-all duration-200 group`}
                            >
                              <div className="flex items-center gap-3">
                                <i className={`${getPlatformIcon(link.platform)} ${colors.icon} text-xl`}></i>
                                <div>
                                  <div className="font-semibold text-slate-900 dark:text-white">
                                    Play on {link.platform}
                                  </div>
                                  <div className="text-sm text-slate-600 dark:text-slate-300">
                                    {link.platform === 'Bandcamp' ? 'High-quality streaming' : 
                                     link.platform === 'Spotify' ? 'Stream full album' : 'Listen now'}
                                  </div>
                                </div>
                              </div>
                              <i className={`fas fa-play ${colors.icon} group-hover:scale-110 transition-transform`}></i>
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
