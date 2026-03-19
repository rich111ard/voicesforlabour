import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, FileCheck, ClipboardList, BarChart3, BookOpen, ShieldCheck, Filter } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import Counter from '../components/Counter';

const FILTERS = [
  'All',
  'Research reports',
  'Fact sheets',
  'Policy Briefs',
  'Annual Reports',
  'Position Papers',
  'Model Workplace Policies'
];

const RESOURCE_CATEGORIES = [
  {
    title: 'Research reports',
    description: 'In-depth analysis and findings on labour market trends and worker rights.',
    icon: <BarChart3 className="text-accent" size={32} />,
    count: 12,
    category: 'Research reports'
  },
  {
    title: 'Fact sheets',
    description: 'Quick reference guides and statistics on key labour issues.',
    icon: <FileText className="text-accent" size={32} />,
    count: 24,
    category: 'Fact sheets'
  },
  {
    title: 'Policy Briefs',
    description: 'Summaries of policy recommendations and legislative updates.',
    icon: <ClipboardList className="text-accent" size={32} />,
    count: 8,
    category: 'Policy Briefs'
  },
  {
    title: 'Annual Reports',
    description: 'Our yearly progress, impact assessments, and financial transparency.',
    icon: <BookOpen className="text-accent" size={32} />,
    count: 5,
    category: 'Annual Reports'
  },
  {
    title: 'Position Papers',
    description: 'Formal statements of our stance on critical labour developments.',
    icon: <FileCheck className="text-accent" size={32} />,
    count: 15,
    category: 'Position Papers'
  },
  {
    title: 'Model Workplace Policies',
    description: 'Templates and best practices for creating fair and safe work environments.',
    icon: <ShieldCheck className="text-accent" size={32} />,
    count: 10,
    category: 'Model Workplace Policies'
  }
];

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      navigate(`/contact?subject=update&email=${encodeURIComponent(email)}`);
    } else {
      alert('Please enter your email to proceed.');
    }
  };

  useEffect(() => {
    const hash = location.hash.replace('#', '').toLowerCase();
    const matchedFilter = FILTERS.find(f => f.toLowerCase().replace(/\s+/g, '-') === hash);
    if (matchedFilter) {
      setActiveFilter(matchedFilter);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  const filteredCategories = activeFilter === 'All' 
    ? RESOURCE_CATEGORIES 
    : RESOURCE_CATEGORIES.filter(cat => cat.category === activeFilter);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-48 pb-20 bg-primary text-white overflow-hidden">
        {/* 3D Floating Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [0, 40, 0],
              rotate: [0, -15, 0]
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-6 text-white">Resources</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Access our library of research, policy analysis, and practical tools designed to empower workers and inform advocates.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-bg-main border-b border-border-brand sticky top-[80px] z-30 shadow-sm transition-colors duration-300">
        <div className="container-custom overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-4 min-w-max pb-2 md:pb-0">
            <div className="flex items-center gap-2 text-text-secondary dark:text-gray-400 mr-4">
              <Filter size={18} />
              <span className="font-bold uppercase text-xs tracking-wider">Filter By:</span>
            </div>
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all border ${
                  activeFilter === filter
                    ? 'bg-accent border-accent text-white shadow-lg shadow-accent/20'
                    : 'bg-surface border-border-brand text-text-secondary hover:border-accent hover:text-accent'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories Grid */}
      <section className="section-padding bg-surface dark:bg-[#151821] min-h-[600px]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCategories.map((category, index) => (
                <TiltCard key={category.title}>
                    <Link
                      to={`/resources/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-bg-main p-8 rounded-3xl shadow-sm border border-border-brand hover:shadow-md transition-all group cursor-pointer h-full block"
                    >
                    <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-primary">{category.title}</h3>
                      <span className="bg-surface text-text-secondary text-xs font-bold px-3 py-1 rounded-full border border-border-brand">
                        <Counter value={category.count} /> Files
                      </span>
                    </div>
                    <p className="text-text-secondary dark:text-gray-400 leading-relaxed mb-6">
                      {category.description}
                    </p>
                    <div className="text-accent font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Browse Category <span>→</span>
                    </div>
                  </Link>
                </TiltCard>
              ))}
            </AnimatePresence>
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-secondary text-xl">No resources found in this category.</p>
              <button 
                onClick={() => setActiveFilter('All')}
                className="mt-4 text-accent font-bold underline"
              >
                Show all resources
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">Stay Informed</h2>
          <p className="text-xl text-white/70 mb-10">
            Subscribe to receive our latest reports, policy updates, and resources directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 w-full">
              <input 
                type="email" 
                placeholder="Your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent"
              />
              <button type="submit" className="btn-accent px-8 py-4">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
