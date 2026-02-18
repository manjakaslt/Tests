
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AIStrategist from './components/AIStrategist';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <div id="services" className="fade-in-section">
          <Services />
        </div>

        <div id="work" className="fade-in-section">
          <Portfolio />
        </div>

        <div id="ai-strategist" className="fade-in-section">
          <AIStrategist />
        </div>

        <section id="about" className="py-32 px-8 text-center bg-white/2 fade-in-section">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-[0.4em] text-white/40 mb-8 block">Exclusive Opportunity</span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12">Become the Standard.</h2>
            <p className="text-xl text-white/50 mb-16 max-w-2xl mx-auto">We only partner with 4 new brands per quarter to ensure absolute dominance for our clients.</p>
            <a href="#contact" className="inline-block px-16 py-8 bg-purple-600 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-purple-700 transition-all shadow-[0_0_50px_rgba(168,85,247,0.3)]">
              Request Invitation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
