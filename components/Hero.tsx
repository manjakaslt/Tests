
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => setOpacity(1), 500);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-8" style={{ opacity, transition: 'opacity 1.5s ease-in' }}>
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 text-center max-w-5xl">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] text-white">
          We Build Brands <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/10 italic font-playfair">
            That Print Money.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Velora is a luxury digital marketing agency helping prestige brands scale with performance and creative mastery.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <a href="#contact" className="group relative px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            <span className="relative z-10">Start Your Ascent</span>
          </a>
          
          <a href="#work" className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/5 transition-all duration-300 text-center">
            View Showreel
          </a>
        </div>
      </div>

      {/* Floating stats or labels */}
      <div className="absolute bottom-12 left-12 hidden md:block border-l border-white/20 pl-4">
        <p className="text-[10px] uppercase tracking-widest text-white/30">Trusted By</p>
        <p className="text-sm font-medium">LVMH / ROLEX / TESLA</p>
      </div>
      
      <div className="absolute bottom-12 right-12 hidden md:block border-r border-white/20 pr-4 text-right">
        <p className="text-[10px] uppercase tracking-widest text-white/30">Based In</p>
        <p className="text-sm font-medium">NYC / LONDON / TOKYO</p>
      </div>
    </section>
  );
};

export default Hero;
