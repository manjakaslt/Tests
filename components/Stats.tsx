
import React, { useEffect, useState, useRef } from 'react';

const StatCard: React.FC<{ target: number, label: string, suffix?: string }> = ({ target, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-center p-8">
      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">{count}{suffix}</h2>
      <p className="text-xs uppercase tracking-[0.3em] text-white/40">{label}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-white/2">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <StatCard target={150} label="Ad Spend Managed" suffix="M+" />
        <StatCard target={12} label="Average ROI" suffix="X" />
        <StatCard target={45} label="Global Partners" suffix="" />
        <StatCard target={98} label="Success Rate" suffix="%" />
      </div>
    </section>
  );
};

export default Stats;
