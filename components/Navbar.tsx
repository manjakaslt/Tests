
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Work', id: 'work' },
    { name: 'Services', id: 'services' },
    { name: 'AI Strategist', id: 'ai-strategist' },
    { name: 'About', id: 'about' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 py-8 px-8 md:px-16 flex justify-between items-center ${isScrolled ? 'bg-[#0b0b0b]/90 backdrop-blur-xl border-b border-white/5 py-5' : 'bg-transparent'}`}>
      {/* Premium Logo Section */}
      <a href="#" className="flex items-center space-x-5 group logo-container relative">
        <div className="relative flex-shrink-0">
          <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 via-purple-400 to-blue-500 rounded-sm rotate-45 group-hover:rotate-[135deg] transition-transform duration-1000 ease-in-out shadow-[0_0_20px_rgba(168,85,247,0.3)]"></div>
          <div className="absolute inset-0 w-8 h-8 bg-purple-500/40 rounded-sm rotate-45 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
        
        <div className="flex flex-col relative">
          <div className="flex overflow-hidden">
            {"VELORA".split("").map((char, i) => (
              <span 
                key={i}
                className="text-xl md:text-2xl font-black tracking-[0.3em] text-white transition-all duration-500 ease-out inline-block group-hover:text-purple-400 group-hover:-translate-y-1"
                style={{ 
                  transitionDelay: `${i * 40}ms`,
                  textShadow: '0 0 20px rgba(168, 85, 247, 0)'
                }}
              >
                {char}
              </span>
            ))}
          </div>
          {/* Subtle underline glow on hover */}
          <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-500 to-transparent transition-all duration-1000 group-hover:w-full opacity-50"></div>
        </div>
        
        {/* Ambient glow behind text */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2 w-32 h-8 bg-purple-600/0 group-hover:bg-purple-600/10 blur-2xl transition-all duration-700 rounded-full pointer-events-none"></div>
      </a>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-12">
        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={`#${item.id}`} 
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-white transition-all duration-300 relative group"
          >
            {item.name}
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-purple-500 transition-all duration-500 group-hover:w-full"></span>
          </a>
        ))}
        
        <a 
          href="#contact" 
          className="px-7 py-3 border border-white/10 text-white text-[9px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-500 relative overflow-hidden group/btn"
        >
          <span className="relative z-10">Contact</span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
        </a>
      </div>

      {/* Mobile Toggle */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white group">
        <div className="flex flex-col space-y-1.5 items-end">
          <span className={`h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`}></span>
          <span className={`h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-5'}`}></span>
          <span className={`h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-3'}`}></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0b0b0b] z-40 flex flex-col items-center justify-center space-y-12 transition-all duration-700 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'} md:hidden`}>
        {navItems.map((item) => (
          <a key={item.name} onClick={() => setIsMenuOpen(false)} href={`#${item.id}`} className="text-4xl font-black tracking-widest text-white/90 hover:text-purple-500 transition-colors">
            {item.name}
          </a>
        ))}
        <a onClick={() => setIsMenuOpen(false)} href="#contact" className="text-4xl font-black tracking-widest text-white/90 hover:text-purple-500 transition-colors">
          Contact
        </a>
        <div className="absolute bottom-12 text-[10px] tracking-[0.5em] text-white/20 uppercase">Velora Agency</div>
      </div>
    </nav>
  );
};

export default Navbar;
