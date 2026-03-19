import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ArrowRight, Filter } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import Counter from '../components/Counter';

const Programs = () => {
  const [filter, setFilter] = useState('all');
  const location = useLocation();
  
  useEffect(() => {
    const hash = location.hash.replace('#', '').toLowerCase();
    if (hash && categories.includes(hash)) {
      setFilter(hash);
      // Scroll to top or to the grid if needed
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  const categories = ['all', ...new Set(PROJECTS.map(p => p.category.toLowerCase()))];
  
  const filteredPrograms = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.toLowerCase() === filter);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-48 pb-20 bg-surface overflow-hidden">
        {/* 3D Floating Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [0, 30, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-6 text-text-primary dark:text-white">Our Programs</h1>
            <p className="text-xl text-text-secondary dark:text-gray-400 leading-relaxed">
              VFL implements a comprehensive range of programs designed to protect workers' rights, influence policy, and empower communities through accessible justice and strategic advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-bg-main border-b border-border-brand sticky top-[80px] z-30 shadow-sm transition-colors duration-300">
        <div className="container-custom flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-text-secondary dark:text-gray-400 mr-4">
            <Filter size={18} />
            <span className="font-bold uppercase text-xs tracking-wider">Filter By:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold capitalize transition-all ${
                filter === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-bg-main text-text-secondary border border-border-brand hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPrograms.map((project) => (
              <TiltCard key={project.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="card group h-full flex flex-col"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                        {project.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        project.status === 'ongoing' ? 'bg-accent text-white' : 'bg-secondary text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary dark:text-gray-400 mb-8 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-auto">
                      <button className="btn-outline w-full flex items-center justify-center gap-2">
                        View Program Details <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Summary CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center max-w-4xl">
          <h2 className="text-4xl text-white mb-8">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <p className="text-5xl font-bold text-accent mb-2">
                <Counter value="50+" />
              </p>
              <p className="text-white/70">Programs Completed</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-accent mb-2">
                <Counter value="10+" />
              </p>
              <p className="text-white/70">Partner NGOs</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-accent mb-2">
                <Counter value="1M+" />
              </p>
              <p className="text-white/70">Lives Impacted</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-accent mb-2">
                <Counter value="15+" />
              </p>
              <p className="text-white/70">Policy Wins</p>
            </div>
          </div>
          <Link to="/donate">
            <button className="btn-accent px-10 py-4 text-lg">Support Our Work</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Programs;
