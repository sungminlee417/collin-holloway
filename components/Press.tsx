'use client';

import { motion } from 'framer-motion';

export default function Press() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 tracking-tight text-slate-900">Recognition & Achievements</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Recognition of Collin&apos;s artistry through competitions, festivals, and artistic collaborations
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Competition Achievements */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white to-slate-50 p-8 lg:p-10 rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-8">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-4 rounded-xl flex-shrink-0 shadow-lg">
                <i className="fas fa-trophy text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-900">Competition Success</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl border border-slate-200/50">
                    <h4 className="text-lg font-semibold mb-2 text-slate-900">Haire Guitar Competition</h4>
                    <p className="text-slate-600">Winner</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-slate-200/50">
                    <h4 className="text-lg font-semibold mb-2 text-slate-900">National Brownsville Guitar Duet Competition</h4>
                    <p className="text-slate-600">Two consecutive first place finishes</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Festival Performances */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-gradient-to-br from-white to-slate-50 p-8 lg:p-10 rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-8">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-xl flex-shrink-0 shadow-lg">
                <i className="fas fa-music text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-900">Festival Performances</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl border border-slate-200/50">
                    <h4 className="text-lg font-semibold mb-2 text-slate-900">Austin City Limits</h4>
                    <p className="text-slate-600">Featured performer at America&apos;s renowned music festival</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-slate-200/50">
                    <h4 className="text-lg font-semibold mb-2 text-slate-900">CHAMBERart Madrid</h4>
                    <p className="text-slate-600">International chamber music festival, Spain</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-slate-200/50">
                    <h4 className="text-lg font-semibold mb-2 text-slate-900">Celedonio Romero Guitar Institute</h4>
                    <p className="text-slate-600">Masterclasses and performance with renowned instructors</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-slate-200/50">
                    <h4 className="text-lg font-semibold mb-2 text-slate-900">Armstrong Theater</h4>
                    <p className="text-slate-600">World premiere of &quot;Malagueña de Jotron&quot; with Los Romeros Guitar Quartet</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Artistic Recognition */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-white to-slate-50 p-8 lg:p-10 rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-8">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-xl flex-shrink-0 shadow-lg">
                <i className="fas fa-star text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-900">Artistic Recognition</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl border border-slate-200/50">
                    <h4 className="text-lg font-semibold mb-2 text-slate-900">Rising Young Artist</h4>
                    <p className="text-slate-600 mb-2">Selected by the Opera Club of the Villages for exceptional talent and promising career in classical music</p>
                    <div className="text-sm text-slate-500">Opera Club of the Villages</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-slate-200/50">
                    <h4 className="text-lg font-semibold mb-2 text-slate-900">Collaborative Projects</h4>
                    <p className="text-slate-600 mb-2">Featured collaborations with renowned ensembles including the Juliani Ensemble and Los Romeros Guitar Quartet</p>
                    <div className="text-sm text-slate-500">Various Prestigious Venues</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Press Inquiry CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center pt-12"
          >
            <div className="bg-slate-900 text-white p-8 rounded-2xl inline-block">
              <h3 className="text-xl font-bold mb-4">Media Inquiries</h3>
              <p className="text-slate-300 mb-6 max-w-md">
                For press inquiries, interview requests, or high-resolution photos, please get in touch.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-200 flex items-center gap-2 mx-auto"
              >
                <i className="fas fa-external-link-alt"></i>
                Contact for Press
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}