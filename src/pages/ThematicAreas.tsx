import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Shield, 
  Users, 
  Smartphone, 
  Globe, 
  Leaf, 
  TrendingUp, 
  Plane, 
  Baby, 
  UserPlus 
} from 'lucide-react';
import TiltCard from '../components/TiltCard';

const THEMATIC_AREAS = [
  {
    title: 'Labour rights',
    icon: Shield,
    content: 'Both formal and informal economy workers face several violations of their Labour rights ranging from unfair dismissals/ terminations, precarious working conditions, denial of the right to work, violence and harassment, inequality and discrimination, denial of compensation arising from occupational injuries and illnesses, lack of access to social protection among others. VFL defends and promotes Labour rights and standards in all forms of work through Legal aid and representation, advocacy, campaigns, research, education and strategic litigation among other methods.'
  },
  {
    title: 'Recognition and protection of Informal economy Workers',
    icon: Users,
    content: 'The informal economy constitutes 85% of Uganda’s Labour force according to the Uganda National Labour Force Survey 2016/2017 conducted by Uganda Bureau of Statistics. It is comprised of informal enterprises, Self-employment in informal enterprises, own account workers and wage employment in informal jobs both in the informal and formal enterprises.\n\nThe main defining legal characteristic of workers in the informal economy is their inability to access employment rights in the absence of an exclusive legal relationship of “Employer- employee” yet they face many challenges for instance lack access to social protection, violence and harassment, discrimination, denial of freedom of Association and the right to bargain, denial of property rights and access to public space among others.\n\nVFL therefore defends and promotes the rights and interests of informal economy workers through advocating for their recognition and protection under the law, better legal and policy reforms, legal aid and representation, awareness raising and empowerment on their rights and strategic litigation against unfair and discriminative tendencies.'
  },
  {
    title: 'Protection of Platform workers',
    icon: Smartphone,
    content: 'The platform/gig economy is growing at a high speed globally. The economy has created new forms of employment where workers use digital platforms to access customers. The owners of the digital platforms consider workers using their apps as independent contractors or business partners yet they decide and regulate their terms and conditions of work. In addition, all the risks in this kind of employment arrangement are borne exclusively by the platform workers and not the app owners. VFL seeks to advocate for the recognition and protection of these workers in the law and further empower them through extension of legal aid services and representation, awareness raising and sensitization on their rights and interests.'
  },
  {
    title: 'Decent work in the Global supply chains',
    icon: Globe,
    content: 'Globalization coupled with neo-liberal economic policies has made companies to change the way they do business. Contract Manufacturing, sub-contracting, Outsourcing, Industrial out – production are on the rise. One of the motivations of these new arrangements is exploitation and avoidance of employer liability. VFL therefore focusses on ensuring that decent work is observed even in the supply chains of various corporate entities.'
  },
  {
    title: 'Climate change and Workers',
    icon: Leaf,
    content: 'With the increasing impact of climate change on sustainable development and a call to promote green jobs, workers are key stakeholders in making this a reality. Whereas some workers feel that a transition to greener jobs will lead to many job losses, VFL seeks to reduce this fear by contributing to efforts that promote a just transition to green jobs. In addition, VFL also believes that workers can be used be as agents of environmental conservation. Therefore, we seek to involve workers in the environmental agenda through adequate education and training on the value and benefits of environmental protection and its linkage to sustainable employment and incomes'
  },
  {
    title: 'Trade and Investment Regimes',
    icon: TrendingUp,
    content: 'One of our goals as VFL is to see trade and investment regimes that respect labour rights and value workers’ lives. Many Free Trade Agreement (FTA) have been negotiated and signed but with little or no consideration to the protection of Labour standards. Whereas, some of the FTA’s contain Labour protection clauses, the implementation mechanisms in place are weak and moreover, there is little or no involvement of the Civil Society actors in trade and investment decisions. VFL advocates for fair trade and investment regimes that observe human rights both in their undertakings and supply chains.'
  },
  {
    title: 'Labour Migration and Development',
    icon: Plane,
    content: 'Migration is a global challenges but also an opportunity at the same time in terms of its benefits to development. However, Migrant workers face many challenges ranging from exploitative terms and conditions of service, to violence, harassment, discrimination and sometimes trafficking. It is therefore one of the key focus areas of VFL to ensure safe migration and protection of Migrant workers both in Uganda and abroad.'
  },
  {
    title: 'Elimination of Child Labour',
    icon: Baby,
    content: 'Child Labour remains one of the major hinderances to sustainable development as it has a negative bearing on human capital development. Children involved in Child Labour are denied a right to education and access to gainful jobs on the Labour market and are further exposed to many dangers like child trafficking, commercial sex, and exploitation among others.'
  },
  {
    title: 'Gender and Employment',
    icon: UserPlus,
    content: 'VFL takes cognizant of the various inequalities that occur in employment based on gender especially against women. Women workers face many inequalities ranging from discrimination in accessing jobs, lower wages, sexual harassment and violence among other challenges. We therefore, defend and promote gender equality at the workplace through advocacy, legal aid and representation to the victims, women empowerment programs, strategic litigation among other methods.'
  }
];

const ThematicAreas = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -35, 0],
              rotate: [0, 12, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [0, 45, 0],
              rotate: [0, -18, 0]
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl mb-6 text-white"
            >
              Thematic Areas
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 leading-relaxed"
            >
              Our key thematic focus areas represent the core pillars of our advocacy and support for workers' rights.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-bg-main">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12">
            {THEMATIC_AREAS.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard>
                  <div className="bg-surface p-8 md:p-12 rounded-3xl border border-border-brand shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                        <area.icon size={32} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary dark:text-white">
                          {area.title}
                        </h2>
                        <div className="space-y-4">
                          {area.content.split('\n\n').map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-lg text-text-secondary dark:text-gray-300 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl mb-8 text-white">Support Our Thematic Work</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Your contribution helps us continue our advocacy and support across these critical areas of labour rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-accent px-10 py-4 text-lg w-full sm:w-auto"
              >
                Donate Now
              </motion.button>
            </Link>
            <Link to="/contact?subject=partnership">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all w-full sm:w-auto"
              >
                Partner With Us
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThematicAreas;
