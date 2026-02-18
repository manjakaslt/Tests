
import React, { useState } from 'react';
import { generateBrandStrategy } from '../services/gemini';
import { BrandStrategy } from '../types';

const AIStrategist: React.FC = () => {
  const [brandName, setBrandName] = useState('');
  const [industry, setIndustry] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<BrandStrategy | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !industry) return;
    setLoading(true);
    try {
      const result = await generateBrandStrategy(brandName, industry);
      setStrategy(result);
    } catch (err) {
      console.error(err);
      alert("Failed to generate strategy. Please check your API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-strategist" className="py-32 px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-blue-400 font-bold mb-4 block">Future of Brand Building</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">AI Strategy Architect.</h2>
          <p className="text-white/50 max-w-xl mx-auto">Get a high-level prestige brand strategy instantly. Our proprietary AI, powered by Velora logic, analyzes your brand's potential.</p>
        </div>

        {!strategy ? (
          <form onSubmit={handleGenerate} className="bg-white/5 border border-white/10 p-12 rounded-3xl backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest text-white/50 block">Brand Name</label>
                <input 
                  type="text" 
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="e.g., L'ELIXIR"
                  className="w-full bg-transparent border-b border-white/20 pb-4 outline-none focus:border-purple-500 transition-colors text-2xl font-playfair"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest text-white/50 block">Industry</label>
                <input 
                  type="text" 
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="e.g., Luxury Skincare"
                  className="w-full bg-transparent border-b border-white/20 pb-4 outline-none focus:border-purple-500 transition-colors text-2xl font-playfair"
                />
              </div>
            </div>

            <button 
              disabled={loading}
              className={`w-full py-6 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-500 ${loading ? 'bg-white/10 text-white/30 cursor-wait' : 'bg-white text-black hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]'}`}
            >
              {loading ? 'Consulting the Oracle...' : 'Architect My Strategy'}
            </button>
          </form>
        ) : (
          <div className="bg-white/5 border border-white/10 p-12 rounded-3xl backdrop-blur-xl animate-fade-in">
            <div className="flex justify-between items-start mb-12">
              <h3 className="text-4xl font-playfair italic">{strategy.name} Strategy</h3>
              <button onClick={() => setStrategy(null)} className="text-xs uppercase tracking-widest text-white/40 hover:text-white">Reset</button>
            </div>

            <div className="space-y-12">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-purple-400 mb-2">Market Positioning</p>
                <p className="text-2xl font-light leading-relaxed">{strategy.positioningStatement}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-purple-400 mb-4">Target Audience</p>
                  <p className="text-white/70 leading-relaxed">{strategy.targetAudience}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-purple-400 mb-4">Visual Direction</p>
                  <p className="text-white/70 leading-relaxed">{strategy.visualIdentityNotes}</p>
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-purple-400 mb-6">Strategic Imperatives</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {strategy.keyTactics.map((tactic, idx) => (
                    <div key={idx} className="flex items-center space-x-4 border border-white/10 p-4 rounded-xl">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium">{tactic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIStrategist;
