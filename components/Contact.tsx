'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ContactData } from '../lib/markdown';

interface ContactProps {
  contactData: ContactData;
}

export default function Contact({ contactData }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      if (!publicKey || !serviceId || !templateId) {
        throw new Error('EmailJS configuration is missing. Please contact the site administrator.');
      }

      // Initialize EmailJS with your public key
      emailjs.init(publicKey);
      
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          inquiry_type: formData.inquiryType,
          date: formData.date,
          message: formData.message,
          to_email: contactData.email
        }
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', inquiryType: '', date: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight text-slate-900 dark:text-white">{contactData.title}</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {contactData.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 p-12 rounded-2xl border border-slate-200/50 dark:border-slate-600/50 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-base font-semibold mb-4 text-slate-900 dark:text-white">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900/10 dark:focus:ring-slate-400/20 focus:border-slate-900 dark:focus:border-slate-400 transition-all duration-200 text-slate-900 dark:text-white"
                  placeholder="Your name"
                  autoComplete="name"
                  aria-describedby="name-help"
                />
                <div id="name-help" className="sr-only">Enter your full name</div>
              </div>
              <div>
                <label className="block text-base font-semibold mb-4 text-slate-900 dark:text-white">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900/10 dark:focus:ring-slate-400/20 focus:border-slate-900 dark:focus:border-slate-400 transition-all duration-200 text-slate-900 dark:text-white"
                  placeholder="your@email.com"
                  autoComplete="email"
                  aria-describedby="email-help"
                />
                <div id="email-help" className="sr-only">Enter a valid email address</div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-base font-semibold mb-4 text-slate-900 dark:text-white">Inquiry Type</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900/10 dark:focus:ring-slate-400/20 focus:border-slate-900 dark:focus:border-slate-400 transition-all duration-200 text-slate-900 dark:text-white"
                >
                  <option value="">Select an option</option>
                  {contactData.inquiryTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-base font-semibold mb-4 text-slate-900 dark:text-white">Date (if applicable)</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900/10 dark:focus:ring-slate-400/20 focus:border-slate-900 dark:focus:border-slate-400 transition-all duration-200 text-slate-900 dark:text-white [color-scheme:light] dark:[color-scheme:dark]"
                />
              </div>
            </div>
            <div>
              <label className="block text-base font-semibold mb-4 text-slate-900 dark:text-white">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900/10 dark:focus:ring-slate-400/20 focus:border-slate-900 dark:focus:border-slate-400 transition-all duration-200 resize-none text-slate-900 dark:text-white"
                placeholder="Tell me about your event or project..."
              />
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/50 rounded-xl text-green-700 dark:text-green-300">
                <div className="flex items-center gap-2">
                  <i className="fas fa-check-circle"></i>
                  <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-xl text-red-700 dark:text-red-300">
                <div className="flex items-center gap-2">
                  <i className="fas fa-exclamation-circle"></i>
                  <span>Sorry, there was an error sending your message. Please try again or email directly.</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-5 px-8 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}