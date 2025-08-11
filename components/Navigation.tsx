'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SiteConfig } from '../lib/markdown';

interface NavigationProps {
  siteConfig: SiteConfig;
}

export default function Navigation({ siteConfig }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (isOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  // Add scroll prevention to backdrop only, don't change body
  useEffect(() => {
    if (isOpen) {
      // Add event listeners to prevent scrolling on the backdrop
      const preventScroll = (e: WheelEvent | TouchEvent) => {
        if ((e.target as Element)?.closest('.backdrop')) {
          e.preventDefault();
        }
      };
      
      document.addEventListener('wheel', preventScroll, { passive: false });
      document.addEventListener('touchmove', preventScroll, { passive: false });
      
      return () => {
        document.removeEventListener('wheel', preventScroll);
        document.removeEventListener('touchmove', preventScroll);
      };
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Hamburger Menu Button */}
      <div className={`fixed top-8 right-8 z-50 transition-all duration-500 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`menu-button group relative p-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-300/30 dark:border-slate-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white dark:hover:bg-slate-950 hover:border-[#c88240]/30 bulge-bg magnetic`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className="block w-6 h-0.5 bg-slate-700 dark:bg-slate-300 group-hover:bg-[#c88240] -translate-y-1.5 transition-all duration-300" />
            <span className="block w-6 h-0.5 bg-slate-700 dark:bg-slate-300 group-hover:bg-[#c88240] transition-all duration-300" />
            <span className="block w-6 h-0.5 bg-slate-700 dark:bg-slate-300 group-hover:bg-[#c88240] translate-y-1.5 transition-all duration-300" />
          </div>
          
          {/* Floating label - shows when closed */}
          <div className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-medium uppercase tracking-[0.2em] shadow-xl whitespace-nowrap transition-all duration-500 ${isOpen ? 'opacity-0 pointer-events-none translate-x-2' : 'opacity-0 group-hover:opacity-100 translate-x-0'}`}>
            Menu
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-slate-900 dark:border-l-white border-y-4 border-y-transparent"></div>
          </div>
        </button>
      </div>

      {/* Mobile/Tablet Slide-in Menu */}
      <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="backdrop absolute inset-0 bg-black/50 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)}
        />
        
        {/* Slide-in Menu */}
        <div 
          id="mobile-menu"
          className={`mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-slate-950 shadow-2xl transform transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="menu-title"
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-8 border-b border-slate-200/50 dark:border-slate-800/50">
            <div className="flex items-center gap-6">
              <div id="menu-title" className="font-serif text-xl font-medium text-slate-900 dark:text-white italic">Navigation</div>
              <button
                onClick={toggleTheme}
                className="p-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-500 border border-transparent hover:border-[#c88240]/30 group"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <i className="fas fa-moon text-slate-600 dark:text-slate-300 text-base group-hover:text-[#c88240] transition-colors duration-300"></i>
                ) : (
                  <i className="fas fa-sun text-slate-600 dark:text-slate-300 text-base group-hover:text-[#c88240] transition-colors duration-300"></i>
                )}
              </button>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 border border-transparent hover:border-[#c88240]/30"
              aria-label="Close menu"
            >
              <i className="fas fa-times text-slate-600 dark:text-slate-300 text-lg hover:text-[#c88240] transition-colors duration-300"></i>
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col p-8 space-y-6">
            <a 
              href="#home" 
              onClick={handleLinkClick}
              className="group relative py-4 text-slate-700 dark:text-slate-300 hover:text-[#c88240] dark:hover:text-[#c88240] transition-colors duration-500 bulge-bg magnetic"
            >
              <span className="font-serif text-lg font-medium tracking-wide italic">Home</span>
              <span className="absolute bottom-2 left-0 right-0 h-px bg-[#c88240] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
            </a>
            
            <a 
              href="#about" 
              onClick={handleLinkClick}
              className="group relative py-4 text-slate-700 dark:text-slate-300 hover:text-[#c88240] dark:hover:text-[#c88240] transition-colors duration-500 bulge-bg magnetic"
            >
              <span className="font-serif text-lg font-medium tracking-wide italic">Bio</span>
              <span className="absolute bottom-2 left-0 right-0 h-px bg-[#c88240] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
            </a>
            
            <a 
              href="#concerts" 
              onClick={handleLinkClick}
              className="group relative py-4 text-slate-700 dark:text-slate-300 hover:text-[#c88240] dark:hover:text-[#c88240] transition-colors duration-500 bulge-bg magnetic"
            >
              <span className="font-serif text-lg font-medium tracking-wide italic">Concerts</span>
              <span className="absolute bottom-2 left-0 right-0 h-px bg-[#c88240] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
            </a>
            
            <a 
              href="#music" 
              onClick={handleLinkClick}
              className="group relative py-4 text-slate-700 dark:text-slate-300 hover:text-[#c88240] dark:hover:text-[#c88240] transition-colors duration-500 bulge-bg magnetic"
            >
              <span className="font-serif text-lg font-medium tracking-wide italic">Discography</span>
              <span className="absolute bottom-2 left-0 right-0 h-px bg-[#c88240] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
            </a>
            
            <a 
              href="#videos" 
              onClick={handleLinkClick}
              className="group relative py-4 text-slate-700 dark:text-slate-300 hover:text-[#c88240] dark:hover:text-[#c88240] transition-colors duration-500 bulge-bg magnetic"
            >
              <span className="font-serif text-lg font-medium tracking-wide italic">Videos</span>
              <span className="absolute bottom-2 left-0 right-0 h-px bg-[#c88240] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
            </a>
            
            <a 
              href="#gallery" 
              onClick={handleLinkClick}
              className="group relative py-4 text-slate-700 dark:text-slate-300 hover:text-[#c88240] dark:hover:text-[#c88240] transition-colors duration-500 bulge-bg magnetic"
            >
              <span className="font-serif text-lg font-medium tracking-wide italic">Gallery</span>
              <span className="absolute bottom-2 left-0 right-0 h-px bg-[#c88240] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
            </a>
          </div>

          {/* Contact CTA */}
          <div className="p-8 mt-auto border-t border-slate-200/50 dark:border-slate-800/50">
            <a 
              href="#contact" 
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-4 w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-6 px-8 font-medium tracking-[0.2em] uppercase text-xs hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-500 border-b-2 border-[#c88240] hover:border-[#a73d3d] bulge-bg magnetic"
            >
              <i className="fas fa-envelope"></i>
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 p-8 pt-6">
            <a 
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer" 
              className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-[#c88240] dark:hover:text-[#c88240] transition-all duration-300 text-slate-600 dark:text-slate-400 border border-transparent hover:border-[#c88240]/30"
              aria-label="Visit Collin Holloway's YouTube channel"
            >
              <i className="fab fa-youtube text-lg"></i>
            </a>
            <a 
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer" 
              className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-[#c88240] dark:hover:text-[#c88240] transition-all duration-300 text-slate-600 dark:text-slate-400 border border-transparent hover:border-[#c88240]/30"
              aria-label="Visit Collin Holloway's Facebook page"
            >
              <i className="fab fa-facebook text-lg"></i>
            </a>
            <a 
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer" 
              className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-[#c88240] dark:hover:text-[#c88240] transition-all duration-300 text-slate-600 dark:text-slate-400 border border-transparent hover:border-[#c88240]/30"
              aria-label="Visit Collin Holloway's Instagram profile"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a 
              href={siteConfig.social.bandcamp}
              target="_blank"
              rel="noopener noreferrer" 
              className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-[#c88240] dark:hover:text-[#c88240] transition-all duration-300 text-slate-600 dark:text-slate-400 border border-transparent hover:border-[#c88240]/30"
              aria-label="Listen to Collin Holloway's music on Bandcamp"
            >
              <i className="fab fa-bandcamp text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}