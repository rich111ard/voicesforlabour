import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const Board = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-48 pb-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 15, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
          />
        </div>
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/board-bg/1920/1080" alt="Board" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container-custom relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl mb-6 text-white"
          >
            Our Board
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 leading-relaxed"
          >
            Our board members provide strategic guidance and oversight to ensure we achieve our long-term goals.
          </motion.p>
        </div>
      </section>

      {/* Board Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { 
                name: 'Awelo Sarah Asiimwe', 
                role: 'Chairperson', 
                slug: 'awelo-sarah-asiimwe',
                bio: 'Awelo Sarah Asiimwe is the Chairperson, Board of Directors of VFL and our Legal and strategy advisor.',
                img: 'https://picsum.photos/seed/awelo/400/500' 
              },
              { 
                name: 'John Osapiri', 
                role: 'Vice Chairperson', 
                slug: 'john-osapiri',
                bio: 'John Osapiri is a co-founder and the Vice Chairperson, Board of Directors of VFL.',
                img: 'https://picsum.photos/seed/osapiri/400/500' 
              },
              { 
                name: 'Labwot Susan', 
                role: 'Board Member', 
                slug: 'labwot-susan',
                bio: 'Labwot Susan is a Board Member of VFL. She is an enrolled Advocate of the High Court of Uganda.',
                img: 'https://picsum.photos/seed/labwot/400/500' 
              },
              { 
                name: 'Oloo Zachariah', 
                role: 'Co-Founder & Treasurer', 
                slug: 'oloo-zachariah',
                bio: 'Oloo Zachariah is a co-founder of VFL and the Treasurer, Board of Directors.',
                img: 'https://picsum.photos/seed/oloo/400/500' 
              },
              { 
                name: 'Kikekon Joshua', 
                role: 'Board Member', 
                slug: 'kikekon-joshua',
                bio: 'Kikekon Joshua is a Board Member of VFL. He is an HR/Employment Relations professional.',
                img: 'https://picsum.photos/seed/kikekon/400/500' 
              },
              { 
                name: 'Achen Evelyn', 
                role: 'Board Secretary', 
                slug: 'achen-evelyn',
                bio: 'Achen Evelyn is the Board secretary of VFL. She is an experienced Lawyer with a passion in Labour and employment.',
                img: 'https://picsum.photos/seed/achen/400/500' 
              },
              { 
                name: 'Mwijuka Jesca', 
                role: 'Board Member', 
                slug: 'mwijuka-jesca',
                bio: 'Mwijuka Jesca is a Board Member and an advisor on informal economy workers.',
                img: 'https://picsum.photos/seed/mwijuka/400/500' 
              },
              { 
                name: 'Christopher David Lwebuga', 
                role: 'Labour Law, Policy & Employee Rights', 
                slug: 'christopher-david-lwebuga',
                bio: 'Christopher David Lwebuga is a dedicated legal professional specializing in labour law, Policy and Employee Rights.',
                img: 'https://picsum.photos/seed/lwebuga/400/500' 
              },
            ].map((member, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-bg-main p-6 rounded-3xl border border-border-brand hover:shadow-xl transition-all h-full flex flex-col relative"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link 
                      to={`/team/${member.slug}`}
                      className="w-12 h-12 bg-surface text-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                      title="View Profile"
                    >
                      <User size={24} />
                    </Link>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-xl font-bold text-primary dark:text-white">{member.name}</h4>
                    <Link to={`/team/${member.slug}`} className="text-primary hover:text-secondary transition-colors">
                      <User size={18} />
                    </Link>
                  </div>
                  <p className="text-accent font-semibold text-sm mb-4 uppercase tracking-wider">{member.role}</p>
                  <p className="text-text-secondary dark:text-gray-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Board;
