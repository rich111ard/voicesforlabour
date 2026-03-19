import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { Search, ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import TiltCard from '../components/TiltCard';

const Blog = () => {
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

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-48 pb-20 bg-surface overflow-hidden">
        {/* 3D Floating Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 15, 0]
            }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [0, 45, 0],
              rotate: [0, -20, 0]
            }}
            transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl mb-6 text-text-primary dark:text-white">Our Blog</h1>
              <p className="text-xl text-text-secondary dark:text-gray-400 leading-relaxed">
                Stay updated with the latest news, insights, and stories from the frontlines of labour rights advocacy.
              </p>
            </div>
            <div className="w-full md:w-80 relative">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-bg-main border border-border-brand rounded-xl px-12 py-3 focus:outline-none focus:border-primary"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-custom">
          <Link to={`/blog/${featuredPost.id}`} className="group">
            <div className="relative rounded-3xl overflow-hidden h-[500px] mb-10">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
                <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-6 inline-block">
                  Featured Article
                </span>
                <h2 className="text-3xl md:text-5xl text-white mb-6 leading-tight">
                  {featuredPost.title}
                </h2>
                <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <User size={16} /> <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} /> <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag size={16} /> <span>{featuredPost.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post) => (
              <TiltCard key={post.id}>
                <motion.article
                  layout
                  className="card group h-full"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-bg-main/90 backdrop-blur-md text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-xs text-text-secondary dark:text-gray-400 mb-4">
                      <Calendar size={14} /> <span>{post.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors leading-tight dark:text-white">
                      {post.title}
                    </h3>
                    <p className="text-text-secondary dark:text-gray-400 mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.id}`} className="font-bold text-primary dark:text-secondary flex items-center gap-2 hover:text-accent transition-colors">
                      Read More <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.article>
              </TiltCard>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <button className="btn-outline px-12">Load More Articles</button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
             
             <div className="relative z-10 max-w-2xl mx-auto">
               <h2 className="text-4xl text-white mb-6">Never Miss an Update</h2>
               <p className="text-white/70 text-lg mb-10">
                 Subscribe to our newsletter and get the latest labour rights news delivered straight to your inbox.
               </p>
               <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-surface rounded-xl px-6 py-4 text-text-primary focus:outline-none"
                  />
                  <button type="submit" className="btn-accent px-10 py-4">Subscribe</button>
               </form>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
