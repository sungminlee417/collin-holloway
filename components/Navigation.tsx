'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Hamburger Menu Button */}
      <div className={`fixed top-8 right-8 z-50 transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`menu-button group relative p-4 bg-white/90 backdrop-blur-xl border border-slate-200/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white`}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className="block w-6 h-0.5 bg-slate-700 group-hover:bg-slate-900 -translate-y-1.5 transition-colors" />
            <span className="block w-6 h-0.5 bg-slate-700 group-hover:bg-slate-900 transition-colors" />
            <span className="block w-6 h-0.5 bg-slate-700 group-hover:bg-slate-900 translate-y-1.5 transition-colors" />
          </div>
          
          {/* Floating label - shows when closed */}
          <div className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-sm font-medium rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none translate-x-2' : 'opacity-0 group-hover:opacity-100 translate-x-0'}`}>
            Menu
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-slate-900 border-y-4 border-y-transparent"></div>
          </div>
        </button>
      </div>

      {/* Mobile/Tablet Slide-in Menu */}
      <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)}
        />
        
        {/* Slide-in Menu */}
        <div className={`mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-900">Menu</div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <i className="fas fa-times text-slate-600 text-lg"></i>
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col p-6 space-y-2">
            <a 
              href="#home" 
              onClick={handleLinkClick}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-all duration-200 group"
            >
              <i className="fas fa-home text-slate-400 group-hover:text-slate-600 w-5"></i>
              <span className="font-medium">Home</span>
            </a>
            
            <a 
              href="#about" 
              onClick={handleLinkClick}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-all duration-200 group"
            >
              <i className="fas fa-user text-slate-400 group-hover:text-slate-600 w-5"></i>
              <span className="font-medium">About</span>
            </a>
            
            <a 
              href="#concerts" 
              onClick={handleLinkClick}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-all duration-200 group"
            >
              <i className="fas fa-calendar text-slate-400 group-hover:text-slate-600 w-5"></i>
              <span className="font-medium">Concerts</span>
            </a>
            
            <a 
              href="#press" 
              onClick={handleLinkClick}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-all duration-200 group"
            >
              <i className="fas fa-newspaper text-slate-400 group-hover:text-slate-600 w-5"></i>
              <span className="font-medium">Press</span>
            </a>
            
            <a 
              href="#music" 
              onClick={handleLinkClick}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-all duration-200 group"
            >
              <i className="fas fa-music text-slate-400 group-hover:text-slate-600 w-5"></i>
              <span className="font-medium">Music</span>
            </a>
            
            <a 
              href="#videos" 
              onClick={handleLinkClick}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-all duration-200 group"
            >
              <i className="fas fa-video text-slate-400 group-hover:text-slate-600 w-5"></i>
              <span className="font-medium">Videos</span>
            </a>
            
            <a 
              href="#gallery" 
              onClick={handleLinkClick}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-all duration-200 group"
            >
              <i className="fas fa-images text-slate-400 group-hover:text-slate-600 w-5"></i>
              <span className="font-medium">Gallery</span>
            </a>
          </div>

          {/* Contact CTA */}
          <div className="p-6 mt-auto border-t border-slate-200">
            <a 
              href="#contact" 
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-3 w-full bg-slate-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-slate-800 transition-all duration-200 shadow-lg"
            >
              <i className="fas fa-envelope"></i>
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 p-6 pt-0">
            <a 
              href="https://www.youtube.com/@collinholloway1929"
              target="_blank"
              rel="noopener noreferrer" 
              className="p-3 bg-slate-100 rounded-lg hover:bg-red-50 hover:text-red-600 transition-all duration-200"
            >
              <i className="fab fa-youtube text-lg"></i>
            </a>
            <a 
              href="https://www.facebook.com/collinhollowayguitar/"
              target="_blank"
              rel="noopener noreferrer" 
              className="p-3 bg-slate-100 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
            >
              <i className="fab fa-facebook text-lg"></i>
            </a>
            <a 
              href="https://www.instagram.com/collinhollowayguitar/"
              target="_blank"
              rel="noopener noreferrer" 
              className="p-3 bg-slate-100 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-all duration-200"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a 
              href="https://collinholloway.bandcamp.com/album/a-musical-portrait"
              target="_blank"
              rel="noopener noreferrer" 
              className="p-3 bg-slate-100 rounded-lg hover:bg-slate-200 transition-all duration-200"
            >
              <i className="fab fa-bandcamp text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}