
import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setFadeOut(true), 500);
          setTimeout(onComplete, 1200);
          return 100;
        }
        return prev + 1.5;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-[#0b0b0b] flex flex-col items-center justify-center transition-all duration-1000 ${fadeOut ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
      <div className="mb-8">
        <div className="w-12 h-12 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-sm rotate-45 animate-pulse"></div>
      </div>
      <h1 className="text-4xl font-bold tracking-[0.5em] mb-4 text-white">VELORA</h1>
      <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-white transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-white/30">Constructing Luxury {Math.floor(progress)}%</p>
    </div>
  );
};

export default LoadingScreen;
