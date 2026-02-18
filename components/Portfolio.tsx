
import React from 'react';

const projects = [
  { id: 1, title: 'Lunar Collection', category: 'Creative Direction', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Aurelia Scent', category: 'Product Strategy', img: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Veloce Racing', category: 'Digital Campaign', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Nuit Black', category: 'E-commerce', img: 'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&q=80&w=800' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-32 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 space-y-8 md:space-y-0">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4 block">Case Studies</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">The Hall of Victory.</h2>
          </div>
          <button className="px-8 py-4 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            See All Work
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <div key={p.id} className={`group cursor-pointer ${i % 2 !== 0 ? 'md:mt-24' : ''}`}>
              <div className="relative overflow-hidden aspect-[4/5] bg-white/5 mb-8">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <span className="text-xs uppercase tracking-widest text-white/60 mb-2">{p.category}</span>
                  <h3 className="text-3xl font-playfair italic">{p.title}</h3>
                </div>
              </div>
              <div className="flex justify-between items-center px-2">
                <div>
                  <h3 className="text-xl font-medium group-hover:text-purple-400 transition-colors">{p.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-white/30">{p.category}</p>
                </div>
                <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
