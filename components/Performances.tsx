'use client';

import { motion } from 'framer-motion';

export default function Performances() {
  return (
    <section className="py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight text-slate-900">Notable Performances</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Collin&apos;s performing experience is extensive, including major festivals and collaborations across America and Spain
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-white to-slate-50 p-10 rounded-2xl border border-slate-200/50 hover:shadow-xl hover:shadow-slate-200/20 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="flex items-start gap-8">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className="fas fa-calendar text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-slate-900">Major Festivals</h3>
                <p className="text-slate-600 mb-4 leading-relaxed text-lg">Performed at Austin City Limits, CHAMBERart Madrid, and Celedonio Romero Guitar Institute</p>
                <div className="flex items-center gap-2 text-slate-500">
                  <i className="fas fa-map-marker-alt"></i>
                  <span className="font-medium">International festival circuit</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-gradient-to-r from-white to-slate-50 p-10 rounded-2xl border border-slate-200/50 hover:shadow-xl hover:shadow-slate-200/20 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="flex items-start gap-8">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-4 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className="fas fa-award text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-slate-900">Armstrong Theater Premiere</h3>
                <p className="text-slate-600 mb-4 leading-relaxed text-lg">Chosen as soloist to premiere &quot;Malagueña de Jotron&quot; with Los Romeros Guitar Quartet</p>
                <div className="flex items-center gap-2 text-slate-500">
                  <i className="fas fa-music"></i>
                  <span className="font-medium">World premiere at Armstrong Theater</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-r from-white to-slate-50 p-10 rounded-2xl border border-slate-200/50 hover:shadow-xl hover:shadow-slate-200/20 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="flex items-start gap-8">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-slate-900">Off the Dock Chamber Festival</h3>
                <p className="text-slate-600 mb-4 leading-relaxed text-lg">Co-founder and performer at this intimate chamber music festival dedicated to emerging artists</p>
                <div className="flex items-center gap-2 text-slate-500">
                  <i className="fas fa-map-marker-alt"></i>
                  <span className="font-medium">Skaneateles, NY</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-r from-white to-slate-50 p-10 rounded-2xl border border-slate-200/50 hover:shadow-xl hover:shadow-slate-200/20 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="flex items-start gap-8">
              <div className="bg-gradient-to-br from-purple-500 to-violet-600 p-4 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className="fas fa-music text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-slate-900">Juliani Ensemble</h3>
                <p className="text-slate-600 mb-4 leading-relaxed text-lg">Recent appearances with the renowned Juliani Ensemble, showcasing chamber music collaborations</p>
                <div className="flex items-center gap-2 text-slate-500">
                  <i className="fas fa-users"></i>
                  <span className="font-medium">Ensemble performance</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}