import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Shield, Globe, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS, BLOG_POSTS } from '../constants';
import TypingText from '../components/TypingText';
import TiltCard from '../components/TiltCard';
import Counter from '../components/Counter';

const Home = () => {
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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/labour-hero/1920/1080"
            alt="Hero Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
        </div>

        {/* 3D Floating Elements in Hero */}
        <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [0, 30, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 bg-accent text-white rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
              Advocating for Worker Dignity
            </span>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Amplifying the <TypingText 
                texts={['Voices', 'Rights', 'Dignity', 'Future']} 
                className="text-accent" 
              /> that Build our World.
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              Voices for Labour (VFL) is a civil society organization dedicated to defending and promoting the rights of workers across both the formal and informal economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="btn-accent text-center flex items-center justify-center gap-2 text-lg px-8">
                Explore Our Work <ArrowRight size={20} />
              </Link>
              <Link to="/objectives" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-xl font-semibold text-lg text-center hover:bg-white/20 transition-all">
                Our Mission
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-surface section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, label: 'Workers Supported', value: '5k+' },
              { icon: Shield, label: 'Policies Influenced', value: '20+' },
              { icon: MessageSquare, label: 'Advocacy Sessions', value: '200+' },
            ].map((stat, i) => (
              <TiltCard key={i}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-bg-main p-8 rounded-2xl shadow-sm border border-border-brand text-center h-full"
                >
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-primary dark:text-white mb-1">
                    <Counter value={stat.value} />
                  </h3>
                  <p className="text-text-secondary dark:text-gray-400 font-medium">{stat.label}</p>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl mb-4">Featured Programs</h2>
              <p className="text-text-secondary dark:text-gray-400 text-lg">
                Discover how we are making a tangible difference in the lives of workers through targeted advocacy and community-led initiatives.
              </p>
            </div>
            <Link to="/projects" className="btn-outline flex items-center gap-2">
              View All Programs <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <TiltCard key={project.id}>
                <motion.div
                  className="card group h-full flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary dark:text-gray-400 mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-auto">
                      <Link to={`/projects/${project.id}`} className="text-primary dark:text-accent font-bold flex items-center gap-2 hover:text-accent transition-colors">
                        Learn More <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-surface border-y border-border-brand">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-text-secondary mb-4">Our Partners</h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {[
              { name: 'ILAW Network', logo: 'https://www.ilawnetwork.com/wp-content/uploads/2021/04/ILAW_Logo_Horizontal_RGB.png', fallback: 'https://picsum.photos/seed/ilaw/400/200' },
              { name: 'ActionAid', logo: 'https://actionaid.org/sites/default/files/actionaid_logo_red_0.png', fallback: 'https://picsum.photos/seed/actionaid/400/200' },
              { name: 'Friedrich-Ebert-Stiftung', logo: 'https://www.fes.de/fileadmin/user_upload/logos/FES_Logo_blau_RGB.png', fallback: 'https://picsum.photos/seed/fes/400/200' },
              { name: 'International Labour Organization', logo: 'https://www.ilo.org/themes/custom/ilo_theme/logo.svg', fallback: 'https://picsum.photos/seed/ilo/400/200' }
            ].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-40 md:w-52 h-20 flex items-center justify-center p-4 bg-white/50 dark:bg-white/5 rounded-xl backdrop-blur-sm"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                  title={partner.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = partner.fallback;
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-custom">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-16 border border-white/20 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl text-white mb-6">Join the Movement</h2>
              <p className="text-white/80 text-xl mb-0">
                Subscribe to our newsletter to receive updates on our campaigns, success stories, and ways you can get involved in supporting labour rights.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-surface dark:bg-white/10 rounded-xl px-6 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button type="submit" className="btn-accent px-8 py-4">
                  Subscribe Now
                </button>
              </form>
              <p className="text-white/60 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl mb-4">Latest from our Blog</h2>
            <p className="text-text-secondary text-lg">
              Insights, stories, and updates from the frontlines of labour advocacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {BLOG_POSTS.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 group"
              >
                <div className="md:w-1/2 h-64 rounded-2xl overflow-hidden shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
                    <span className="font-bold text-accent uppercase">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="font-bold text-primary flex items-center gap-2 hover:text-accent transition-colors">
                    Read Article <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
