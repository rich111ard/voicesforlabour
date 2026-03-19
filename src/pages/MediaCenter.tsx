import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../constants';
import { Play, X, Image as ImageIcon, Video, Filter } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const MediaCenter = () => {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '').toLowerCase().replace(/-/g, ' ');
    if (hash && categories.some(c => c.id === hash)) {
      setFilter(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'press release', name: 'Press Release' },
    { id: 'videos', name: 'Videos' },
    { id: 'events', name: 'Events' },
    { id: 'podcast', name: 'Podcast' },
    { id: 'news links', name: 'News Links' },
    { id: 'our gallery', name: 'Our Gallery' },
  ];
  
  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category.toLowerCase() === filter);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    if (selectedItem) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-48 pb-20 bg-primary text-white overflow-hidden">
        {/* 3D Floating Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 8, 0]
            }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [0, 35, 0],
              rotate: [0, -12, 0]
            }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-6 text-white">Media</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              A curated collection of moments from our campaigns, events, and fieldwork around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-bg-main border-b border-border-brand sticky top-[80px] z-30 shadow-sm">
        <div className="container-custom overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-4 min-w-max pb-2 md:pb-0">
            <div className="flex items-center gap-2 text-text-secondary mr-4">
              <Filter size={18} />
              <span className="font-bold uppercase text-xs tracking-wider">Filter By:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all border ${
                  filter === cat.id 
                    ? 'bg-accent border-accent text-white shadow-lg shadow-accent/20' 
                    : 'bg-surface border-border-brand text-text-secondary hover:border-accent hover:text-accent'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Center Grid */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <TiltCard key={item.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-[4/3] shadow-md h-full"
                    onClick={() => setSelectedItem(item)}
                  >
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      {item.type === 'video' ? (
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white shadow-xl">
                          <Play fill="currentColor" size={24} />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                          <ImageIcon size={24} />
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <span className="text-xs font-bold uppercase text-accent mb-1 block">{item.category}</span>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20 bg-bg-main rounded-3xl border border-dashed border-border-brand">
              <p className="text-text-secondary text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {isMounted && createPortal(
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 md:p-10 cursor-pointer"
              onClick={() => setSelectedItem(null)}
            >
              <button 
                className="absolute top-6 right-6 text-white hover:text-accent transition-all p-3 z-[10001] bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md border border-white/20 shadow-2xl cursor-pointer group"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(null);
                }}
                aria-label="Close"
              >
                <X size={32} className="group-hover:scale-110 transition-transform" />
              </button>
              
              <div 
                className="w-full max-w-6xl max-h-full flex flex-col items-center cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedItem.type === 'video' ? (
                  <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                    <iframe 
                      src={selectedItem.url} 
                      className="w-full h-full" 
                      allowFullScreen 
                      title={selectedItem.title}
                    ></iframe>
                  </div>
                ) : (
                  <img 
                    src={selectedItem.url} 
                    alt={selectedItem.title} 
                    className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="mt-8 text-center text-white max-w-2xl">
                  <h3 className="text-3xl font-bold mb-4">{selectedItem.title}</h3>
                  <p className="text-white/70 text-lg">{selectedItem.description}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default MediaCenter;
