
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-32 px-8 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-5 mb-10 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-sm rotate-45 group-hover:rotate-[135deg] transition-transform duration-1000 shadow-[0_0_20px_rgba(168,85,247,0.2)]"></div>
              <div className="flex flex-col">
                <div className="flex">
                  {"VELORA".split("").map((char, i) => (
                    <span key={i} className="text-2xl font-black tracking-[0.3em] text-white group-hover:text-purple-400 transition-colors duration-500" style={{ transitionDelay: `${i * 30}ms` }}>
                      {char}
                    </span>
                  ))}
                </div>
                <span className="text-[7px] uppercase tracking-[1em] text-white/30 font-bold -mt-1 group-hover:text-white/50 transition-colors">Creative Agency</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-10 max-w-sm leading-[1.1]">Architecting the future of prestige.</h2>
            <div className="flex space-x-8">
              {['Instagram', 'LinkedIn', 'Twitter'].map(s => (
                <a key={s} href="#" className="text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-1">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-purple-500 mb-10 font-black">Inquiries</h4>
            <ul className="space-y-6 text-sm font-medium">
              <li>
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Email us</p>
                <a href="mailto:hello@velora.com" className="text-lg hover:text-purple-400 transition-colors">hello@velora.com</a>
              </li>
              <li>
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Visit us</p>
                <span className="text-white/70">5th Avenue, NYC</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-purple-500 mb-10 font-black">Directory</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest font-bold">
              <li><a href="#work" className="text-white/40 hover:text-white transition-colors">Selected Work</a></li>
              <li><a href="#services" className="text-white/40 hover:text-white transition-colors">Capability</a></li>
              <li><a href="#ai-strategist" className="text-white/40 hover:text-white transition-colors">AI Architect</a></li>
              <li><a href="#about" className="text-white/40 hover:text-white transition-colors">The Lab</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[9px] uppercase tracking-[0.4em] text-white/20">
          <p>© 2024 VELORA PRESTIGE ADVISORY. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
