'use client';

import { motion } from 'framer-motion';

export default function Concerts() {
  return (
    <section className="py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight text-slate-900">Concerts & Events</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience the intimate beauty of classical guitar through live performances and collaborations
          </p>
        </motion.div>

        {/* Upcoming Concerts */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10 text-slate-900 flex items-center gap-3"
          >
            <i className="fas fa-calendar text-blue-600 text-2xl"></i>
            Upcoming Performances
          </motion.h3>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-lg flex-shrink-0 shadow-lg">
                      <i className="fas fa-music text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-slate-900">The Muse Duo Recital</h4>
                      <p className="text-slate-600 leading-relaxed mb-3">
                        An evening of contemporary works for guitar and piano featuring premieres and favorites from our &ldquo;Experiments&rdquo; album.
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <i className="fas fa-calendar"></i>
                          <span>Check website for dates</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <i className="fas fa-clock"></i>
                          <span>7:30 PM</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>Various Venues</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all duration-200 flex items-center gap-2"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-lg flex-shrink-0 shadow-lg">
                      <i className="fas fa-music text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-slate-900">Off the Dock Chamber Festival</h4>
                      <p className="text-slate-600 leading-relaxed mb-3">
                        Annual chamber music festival co-founded by Collin, featuring intimate performances in the beautiful Finger Lakes region.
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <i className="fas fa-calendar"></i>
                          <span>Summer 2025</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>Skaneateles, NY</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all duration-200"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Past Highlights */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10 text-slate-900 flex items-center gap-3"
          >
            <i className="fas fa-map-marker-alt text-amber-600 text-2xl"></i>
            Past Performance Highlights
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-red-500 to-pink-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <i className="fas fa-music text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-bold mb-3 text-slate-900">Austin City Limits</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Performed at one of America&apos;s most prestigious music festivals, showcasing classical guitar to diverse audiences.
              </p>
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <i className="fas fa-map-marker-alt text-xs"></i>
                Austin, Texas
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <i className="fas fa-music text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-bold mb-3 text-slate-900">CHAMBERart Madrid</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                International festival performance bringing classical guitar to Spanish audiences with contemporary repertoire.
              </p>
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <i className="fas fa-map-marker-alt text-xs"></i>
                Madrid, Spain
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <i className="fas fa-music text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-bold mb-3 text-slate-900">Armstrong Theater</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                World premiere of &ldquo;Malagueña de Jotron&rdquo; with Los Romeros Guitar Quartet at this prestigious venue.
              </p>
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <i className="fas fa-music text-xs"></i>
                World Premiere
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-purple-500 to-violet-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <i className="fas fa-music text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-bold mb-3 text-slate-900">Celedonio Romero Institute</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Masterclass and performance at the renowned guitar institute, studying with masters of the classical guitar.
              </p>
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <i className="fas fa-map-marker-alt text-xs"></i>
                Guitar Institute
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <i className="fas fa-music text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-bold mb-3 text-slate-900">Juliani Ensemble</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Recent collaboration with the renowned chamber ensemble, expanding repertoire and artistic horizons.
              </p>
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <i className="fas fa-music text-xs"></i>
                Chamber Collaboration
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-slate-600 to-slate-800 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <i className="fas fa-music text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-bold mb-3 text-slate-900">Private Recitals</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Intimate solo performances bringing classical guitar to private venues and special events.
              </p>
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <i className="fas fa-calendar text-xs"></i>
                Ongoing
              </div>
            </motion.div>
          </div>
        </div>

        {/* Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center pt-20"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-12 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Book a Performance</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Whether for concerts, private events, weddings, or educational workshops, bring the beauty of classical guitar to your venue.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-200 flex items-center gap-3 mx-auto hover:shadow-lg"
            >
              <i className="fas fa-calendar"></i>
              Schedule a Performance
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}