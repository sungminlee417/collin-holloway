'use client';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-3 tracking-tight text-white">Collin Holloway</div>
            <p className="text-slate-300 text-lg">Classical Guitarist</p>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="https://www.youtube.com/@collinholloway1929" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-red-500 hover:border-red-500 transition-all duration-200 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <i className="fab fa-youtube text-xl"></i>
            </a>
            <a 
              href="https://www.facebook.com/collinhollowayguitar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-200 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a 
              href="https://www.instagram.com/collinhollowayguitar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-pink-500 hover:border-pink-500 transition-all duration-200 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a 
              href="https://collinholloway.bandcamp.com/album/a-musical-portrait" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-slate-700 hover:border-slate-600 transition-all duration-200 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <i className="fab fa-bandcamp text-xl"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-white/20 mt-16 pt-8 text-center">
          <p className="text-slate-300">&copy; 2024 Collin Holloway. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}