import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const Team = () => {
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
            className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          />
        </div>
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/team-bg/1920/1080" alt="Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container-custom relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl mb-6 text-white"
          >
            Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 leading-relaxed"
          >
            Meet the dedicated individuals driving our mission forward with passion and expertise.
          </motion.p>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Kagoye Robinah', 
                role: 'Executive Director', 
                slug: 'kagoye-robinah',
                bio: 'Kagoye Robinah is the founder and Executive Director of Voices for Labour.',
                img: 'https://picsum.photos/seed/robinah/400/500' 
              },
              { 
                name: 'Amoding Esther', 
                role: 'Director of Programs', 
                slug: 'amoding-esther',
                bio: 'Amoding Esther is the Director of programs at VFL. Esther is an experienced program manager.',
                img: 'https://picsum.photos/seed/esther/400/500' 
              },
              { 
                name: 'Asiimwe Bosco', 
                role: 'Legal Aid & Strategic Litigation', 
                slug: 'asiimwe-bosco',
                bio: 'Asiimwe Bosco heads the department of Legal aid and Strategic Litigation.',
                img: 'https://picsum.photos/seed/bosco/400/500' 
              },
              { 
                name: 'Wakabehenda Theopista', 
                role: 'Research & Policy Officer', 
                slug: 'wakabehenda-theopista',
                bio: 'Wakabehenda Theopista is a research and Policy Officer at VFL.',
                img: 'https://picsum.photos/seed/theopista/400/500' 
              },
              { 
                name: 'Nabirye Suzan', 
                role: 'Legal Aid & Strategic Litigation', 
                slug: 'nabirye-suzan',
                bio: 'Nabirye Suzan is a legal assistant in the legal aid and Strategic Litigation department.',
                img: 'https://picsum.photos/seed/suzan/400/500' 
              },
              { 
                name: 'David Lakuch Okongo', 
                role: 'Communications & I.T Specialist', 
                slug: 'david-lakuch-okongo',
                bio: 'David Lakuch Okongo is a communications and I.T specialist at VFL.',
                img: 'https://picsum.photos/seed/okongo/400/500' 
              },
              { 
                name: 'Nabawanuka Joan', 
                role: 'Administrative Assistant', 
                slug: 'nabawanuka-joan',
                bio: 'Nabawanuka Joan is the administrative assistant at VFL. She is well-experienced in office management.',
                img: 'https://picsum.photos/seed/joan/400/500' 
              },
              { 
                name: 'Wakida David', 
                role: 'Office Assistant', 
                slug: 'wakida-david',
                bio: 'Wakida David works as an office assistant at VFL. He is very enthusiastic and dedicated.',
                img: 'https://picsum.photos/seed/wakida/400/500' 
              },
              { 
                name: 'Nanyange Tracy', 
                role: 'Assistant Policy & Research Officer', 
                slug: 'nanyange-tracy',
                bio: 'Tracy’s expertise spans across employment Law, Pension Advisory and research.',
                img: 'https://picsum.photos/seed/tracy/400/500' 
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
                  <p className="text-secondary font-semibold text-sm mb-4 uppercase tracking-wider">{member.role}</p>
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

export default Team;
