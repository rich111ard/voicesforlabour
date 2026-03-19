import React from 'react';
import { motion } from 'motion/react';
import { Users, FileText, Briefcase, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Governance = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [0, 40, 0],
              rotate: [0, -15, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl mb-6 text-white"
            >
              Governance & Administration
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 leading-relaxed"
            >
              VFL has proper governance structures that facilitate a smooth running of its activities and attainment of its objectives.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Governance Content */}
      <section className="section-padding bg-bg-main">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface p-8 rounded-3xl border border-border-brand"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Annual General Meeting</h3>
              <p className="text-text-secondary dark:text-gray-400 leading-relaxed">
                This is the supreme organ of VFL and it is held every year. It is a policy making organ that considers several organizational policies, financial audits and the annual budget of VFL.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-surface p-8 rounded-3xl border border-border-brand"
            >
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6">
                <FileText size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Board of Directors</h3>
              <p className="text-text-secondary dark:text-gray-400 leading-relaxed">
                VFL is managed by a board of Directors who undertake several functions as per VFL'S constitution for instance formulating and recommending policies, activities and strategies, determining the method of work, appointment and approval of Auditors among others.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-surface p-8 rounded-3xl border border-border-brand"
            >
              <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Secretariat</h3>
              <p className="text-text-secondary dark:text-gray-400 leading-relaxed">
                The Secretariat is responsible for the day to today running of the organization. It comprises of VFL staff headed by the Executive Director.
              </p>
            </motion.div>
          </div>

          {/* Potential Partners */}
          <div className="max-w-4xl mx-auto bg-surface rounded-[3rem] p-10 md:p-16 border border-border-brand relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                  <Heart size={24} />
                </div>
                <h2 className="text-3xl font-bold dark:text-white">Potential Partners</h2>
              </div>
              <p className="text-xl text-text-secondary dark:text-gray-400 leading-relaxed mb-10">
                VFL seeks partnerships and the support of well-wishers, Donors, National and International NGO's in the fulfillment of their mission of defending and promoting the social, economic, and Political rights of workers.
              </p>
              <Link to="/contact?subject=partnership" className="btn-primary inline-flex items-center gap-2">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Governance;
