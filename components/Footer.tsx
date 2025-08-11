'use client';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-24 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="text-center md:text-left">
            <div className="font-serif text-3xl sm:text-4xl font-medium mb-4 tracking-tight text-white italic">Collin Holloway</div>
            <div className="w-16 h-px bg-[#c88240] mb-6 mx-auto md:mx-0 opacity-60"></div>
            <p className="text-slate-400 text-lg font-light tracking-wide">Classical Guitarist</p>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.youtube.com/@collinholloway1929" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 text-slate-400 hover:text-[#c88240] hover:border-[#c88240]/30 transition-all duration-500"
            >
              <i className="fab fa-youtube text-lg"></i>
            </a>
            <a 
              href="https://www.facebook.com/collinhollowayguitar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 text-slate-400 hover:text-[#c88240] hover:border-[#c88240]/30 transition-all duration-500"
            >
              <i className="fab fa-facebook text-lg"></i>
            </a>
            <a 
              href="https://www.instagram.com/collinhollowayguitar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 text-slate-400 hover:text-[#c88240] hover:border-[#c88240]/30 transition-all duration-500"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a 
              href="https://collinholloway.bandcamp.com/album/a-musical-portrait" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 text-slate-400 hover:text-[#c88240] hover:border-[#c88240]/30 transition-all duration-500"
            >
              <i className="fab fa-bandcamp text-lg"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-slate-800/50 mt-20 pt-12 text-center">
          <p className="text-slate-500 font-light tracking-wide text-sm">
            &copy; {new Date().getFullYear()} Collin Holloway. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}