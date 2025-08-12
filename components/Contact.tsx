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
    <section id="contact" className="py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20 lg:mb-28"
        >
          <h2 className="font-serif font-medium text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-slate-900 dark:text-white italic">Contact</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          className="space-y-12"
        >
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="block font-serif text-lg font-medium text-slate-900 dark:text-white italic">Name *</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-slate-300 dark:border-slate-700 focus:outline-none focus:border-[#c88240] dark:focus:border-[#c88240] transition-all duration-500 text-slate-900 dark:text-white text-lg tracking-wide placeholder-slate-400 dark:placeholder-slate-500"
                    placeholder="Your name"
                    autoComplete="name"
                    aria-describedby="name-help"
                  />
                </div>
                <div id="name-help" className="sr-only">Enter your full name</div>
              </div>
              <div className="space-y-4">
                <label className="block font-serif text-lg font-medium text-slate-900 dark:text-white italic">Email *</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-slate-300 dark:border-slate-700 focus:outline-none focus:border-[#c88240] dark:focus:border-[#c88240] transition-all duration-500 text-slate-900 dark:text-white text-lg tracking-wide placeholder-slate-400 dark:placeholder-slate-500"
                    placeholder="your@email.com"
                    autoComplete="email"
                    aria-describedby="email-help"
                  />
                </div>
                <div id="email-help" className="sr-only">Enter a valid email address</div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="block font-serif text-lg font-medium text-slate-900 dark:text-white italic">Inquiry Type</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-slate-300 dark:border-slate-700 focus:outline-none focus:border-[#c88240] dark:focus:border-[#c88240] transition-all duration-500 text-slate-900 dark:text-white text-lg tracking-wide"
                >
                  <option value="">Select an option</option>
                  {contactData.inquiryTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-4">
                <label className="block font-serif text-lg font-medium text-slate-900 dark:text-white italic">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-slate-300 dark:border-slate-700 focus:outline-none focus:border-[#c88240] dark:focus:border-[#c88240] transition-all duration-500 text-slate-900 dark:text-white text-lg tracking-wide [color-scheme:light] dark:[color-scheme:dark]"
                />
              </div>
            </div>
            <div className="space-y-4">
              <label className="block font-serif text-lg font-medium text-slate-900 dark:text-white italic">Message *</label>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-slate-300 dark:border-slate-700 focus:outline-none focus:border-[#c88240] dark:focus:border-[#c88240] transition-all duration-500 resize-none text-slate-900 dark:text-white text-lg tracking-wide placeholder-slate-400 dark:placeholder-slate-500"
                  placeholder="Tell me about your event or project..."
                />
              </div>
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 border-l-2 border-[#c88240] bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300"
              >
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-[#c88240]"></i>
                  <span className="font-serif italic">Message sent successfully! I&rsquo;ll get back to you soon.</span>
                </div>
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 border-l-2 border-red-400 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300"
              >
                <div className="flex items-center gap-3">
                  <i className="fas fa-exclamation-circle text-red-400"></i>
                  <span className="font-serif italic">Sorry, there was an error sending your message. Please try again or email directly.</span>
                </div>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-6 px-10 font-medium tracking-[0.2em] uppercase text-xs hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-500 border-b-2 border-[#c88240] hover:border-[#a73d3d] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4 bulge-bg magnetic"
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