import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye, Heart } from 'lucide-react';
import TypingText from '../components/TypingText';
import TiltCard from '../components/TiltCard';
import Counter from '../components/Counter';

const Objectives = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-48 pb-32 bg-primary text-white overflow-hidden">
        {/* 3D Floating Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 15, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [0, 40, 0],
              rotate: [0, -20, 0]
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 left-1/4 w-[25rem] h-[25rem] bg-secondary/10 rounded-full blur-3xl"
          />
        </div>

        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/about-bg/1920/1080" alt="About" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container-custom relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl mb-6 text-white"
          >
            Our <TypingText texts={['Story', 'Mission', 'Vision', 'Values']} className="text-accent" />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 leading-relaxed"
          >
            Founded in response to the worker injustices of the COVID-19 pandemic, VFL is dedicated to defending the rights and dignity of workers across Uganda.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/story/800/1000" 
                alt="Our Story" 
                className="rounded-3xl shadow-2xl w-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-2xl text-white hidden md:block">
                <p className="text-4xl font-bold mb-1">
                  Est. 2020
                </p>
                <p className="font-medium">Founded in Uganda</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl">Who We Are</h2>
              <p className="text-lg text-text-secondary dark:text-gray-400 leading-relaxed">
                Voices for Labour (VFL) is a civil society organization founded in April 2020 by a group of passionate Labour activists and Lawyers. The organization was formally incorporated in Uganda as a company limited by guarantee and having no share capital (Not for profit).
              </p>
              <p className="text-lg text-text-secondary dark:text-gray-400 leading-relaxed">
                The formation of VFL was driven by the widespread worker injustices exacerbated by the COVID-19 pandemic, including mass layoffs, unlawful salary deductions, and unfair dismissals. The growing prevalence of informal employment within the formal sector, alongside unregulated new forms of work such as digital labour platforms, temporary agency work, outsourcing, and subcontracting, further expose workers to vulnerability.
              </p>
              <p className="text-lg text-text-secondary dark:text-gray-400 leading-relaxed">
                Uganda’s current labour laws remain inadequate in addressing these evolving employment trends. Traditionally designed for bilateral employment relationships, they fail to regulate complex work arrangements, such as triangular employment structures where multiple employers operate within a single workplace. This regulatory gap leaves workers unprotected, increasing job insecurity and precarity.
              </p>
              <p className="text-lg text-text-secondary dark:text-gray-400 leading-relaxed">
                Additionally, globalization and neoliberal economic policies have deepened employment inequalities, disproportionately affecting women and youth, who face limited access to decent jobs, job security, and fair wages. The informal economy remains largely unprotected, with existing legal frameworks overlooking the rights and needs of informal workers.
              </p>
              <p className="text-lg text-text-secondary dark:text-gray-400 leading-relaxed font-medium border-l-4 border-accent pl-6 italic">
                In response to these challenges, VFL was established as a strong advocate for workers’ rights, aiming to address labour injustices through accessible justice, strategic litigation, research, advocacy, campaigns, education, and training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="bg-surface section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <TiltCard>
              <div className="bg-bg-main p-10 rounded-3xl shadow-sm border border-border-brand h-full">
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-text-secondary leading-relaxed">
                  To defend and promote the rights and interests of workers across both the formal and informal economy, ensuring fair treatment, protection, and dignity at work through accessible justice, strategic litigation, research, and advocacy.
                </p>
              </div>
            </TiltCard>
            <TiltCard>
              <div className="bg-bg-main p-10 rounded-3xl shadow-sm border border-border-brand h-full">
                <div className="w-14 h-14 bg-secondary text-white rounded-2xl flex items-center justify-center mb-6">
                  <Eye size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-text-secondary leading-relaxed">
                  VFL’s vision is a society where workers are valued, recognized, protected and respected.
                </p>
              </div>
            </TiltCard>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Values</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              The core principles that guide our actions and decisions every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'VFL commits to serve efficiently and effectively as a means of achieving its objectives and as such regular self-assessment, monitoring and evaluation remains a guiding tool.'
              },
              {
                title: 'Team work',
                description: 'At VFL, we believe that working in isolation is self-defeating and counterproductive. As such, while we value individual knowledge, we commit to building synergies, to enable our beneficiaries and stakeholders be part of our vision, mission, growth and ownership for sustainability.'
              },
              {
                title: 'Committed to the vulnerable groups',
                description: 'It is our passion to serve the voiceless and those in dire need of our assistance. We are committed to being their mouthpiece and transformation of their well-being.'
              },
              {
                title: 'Stewardship and Integrity',
                description: 'At VFL we believe that all organization resources are a gift to achieve work progress and as such we proclaim pro-activeness in usage, while keeping sustainability in mind, with openness and transparency in our reporting.'
              },
              {
                title: 'Professionalism',
                description: 'At VFL, we adhere to the highest professional standards in the management of our programmes'
              },
              {
                title: 'Transparency and Accountability',
                description: 'VFL operations shall continuously be guided by the value of openness. The information about our operations shall be availed for scrutiny by stakeholders as the guiding rules so provide.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-main p-8 rounded-2xl border border-border-brand hover:border-accent transition-colors group"
              >
                <h4 className="text-xl font-bold mb-4 text-primary dark:text-white group-hover:text-accent transition-colors">
                  {value.title}
                </h4>
                <p className="text-text-secondary dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-bg-main border-t border-border-brand">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Partners</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We collaborate with international organizations and networks to strengthen labour rights advocacy globally.
            </p>
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
    </div>
  );
};

export default Objectives;
