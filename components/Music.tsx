'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Music() {
  return (
    <section id="music" className="py-16 sm:py-24 lg:py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 tracking-tight text-slate-900">Discography</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Explore Collin&apos;s recorded works and musical journey through solo and collaborative performances
          </p>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {/* A Musical Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
              {/* Album Cover */}
              <div className="relative h-80 lg:h-full lg:min-h-[600px] overflow-hidden">
                <Image
                  src="/DSC00101.jpg"
                  alt="A Musical Portrait Album"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    Solo Album
                  </span>
                </div>
              </div>
              
              {/* Album Info */}
              <div className="p-8 lg:p-10 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-slate-900">A Musical Portrait</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Released independently in April 2022. Features solo guitar repertoire including works by Angelo Gilardino, Graciela Agudelo, and Sergio Assad&apos;s &quot;Chuva&quot; from Seis Brevidades. Approximately 45 minutes of intimate classical guitar music.
                  </p>
                  
                  {/* Featured Track Info */}
                  <div className="mb-8 p-6 bg-slate-50 rounded-xl border border-slate-200/50">
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <i className="fas fa-music text-blue-600"></i>
                      Featured Track: &quot;Chuva&quot; by Sergio Assad
                    </h4>
                    <p className="text-sm text-slate-600 italic leading-relaxed">
                      &quot;Inspired by a rainy morning in the Chicago Loop&quot; - Part of Seis Brevidades, written in Chicago and Paris during 2008, dedicated to Odair Assad.
                    </p>
                  </div>
                </div>

                {/* Listen Now Section */}
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-4">Listen Now</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <a 
                      href="https://collinholloway.bandcamp.com/album/a-musical-portrait"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <i className="fab fa-bandcamp text-blue-600 text-xl"></i>
                        <div>
                          <div className="font-semibold text-slate-900">Play on Bandcamp</div>
                          <div className="text-sm text-slate-600">High-quality streaming</div>
                        </div>
                      </div>
                      <i className="fas fa-play text-blue-600 group-hover:scale-110 transition-transform"></i>
                    </a>
                    
                    <a 
                      href="https://open.spotify.com/artist/2jDeAAVPBk5JZMsrCX5B0t"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-green-50 hover:bg-green-100 rounded-xl border border-green-200 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <i className="fab fa-spotify text-green-600 text-xl"></i>
                        <div>
                          <div className="font-semibold text-slate-900">Play on Spotify</div>
                          <div className="text-sm text-slate-600">Stream full album</div>
                        </div>
                      </div>
                      <i className="fas fa-play text-green-600 group-hover:scale-110 transition-transform"></i>
                    </a>
                  </div>
                </div>
                
                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://open.spotify.com/artist/2jDeAAVPBk5JZMsrCX5B0t"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg"
                  >
                    <i className="fab fa-spotify text-lg"></i>
                    Spotify
                  </a>
                  <a 
                    href="https://collinholloway.bandcamp.com/album/a-musical-portrait"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg"
                  >
                    <i className="fab fa-bandcamp text-lg"></i>
                    Bandcamp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experiments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
              {/* Album Info */}
              <div className="p-8 lg:p-10 flex flex-col order-2 lg:order-1">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-slate-900">Experiments</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Guitar and piano duo album with composer Robert Benedict, released in April 2023. Features new music championed by The Muse Duo for this rare instrumental setting.
                  </p>

                  {/* Duo Info */}
                  <div className="mb-8 p-6 bg-slate-50 rounded-xl border border-slate-200/50">
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <i className="fas fa-users text-purple-600"></i>
                      The Muse Duo
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Formed at the Eastman School of Music with pianist and composer Robert Benedict, The Muse Duo champions new music for guitar and piano through composition and premiere performances.
                    </p>
                  </div>
                </div>

                {/* Listen Now Section */}
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-4">Listen Now</h4>
                  <a 
                    href="https://open.spotify.com/album/06Q4h44XDIYrpE0EbGAFMy"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-green-50 hover:bg-green-100 rounded-xl border border-green-200 transition-all duration-200 group w-full"
                  >
                    <div className="flex items-center gap-3">
                      <i className="fab fa-spotify text-green-600 text-xl"></i>
                      <div>
                        <div className="font-semibold text-slate-900">Play on Spotify</div>
                        <div className="text-sm text-slate-600">Full album streaming</div>
                      </div>
                    </div>
                    <i className="fas fa-play text-green-600 group-hover:scale-110 transition-transform"></i>
                  </a>
                </div>
              </div>
              
              {/* Album Cover */}
              <div className="relative h-80 lg:h-full lg:min-h-[600px] overflow-hidden order-1 lg:order-2">
                <Image
                  src="/L1008607.jpeg"
                  alt="Experiments Album - The Muse Duo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    Duo Album
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16 lg:mt-24"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 lg:p-12 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Experience the Music</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Discover the intimate beauty of classical guitar through carefully crafted recordings that bring rare repertoire to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://open.spotify.com/artist/2jDeAAVPBk5JZMsrCX5B0t"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-200 flex items-center justify-center gap-3 hover:shadow-lg"
              >
                <i className="fab fa-spotify text-xl"></i>
                Follow on Spotify
              </a>
              <a
                href="https://collinholloway.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-3 hover:shadow-lg"
              >
                <i className="fab fa-bandcamp text-xl"></i>
                Visit Bandcamp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}