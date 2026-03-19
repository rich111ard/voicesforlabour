import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, Linkedin, Twitter } from 'lucide-react';

const teamData = {
  'kagoye-robinah': {
    name: 'Kagoye Robinah',
    role: 'Executive Director',
    img: 'https://picsum.photos/seed/robinah/600/800',
    bio: [
      "Kagoye Robinah is the founder and Executive Director of Voices for Labour. She is a lawyer with expertise in Labour and Employment Law for over 10 years. She brings a wealth of experience from the Labour movement where she has served as a legal advisor for National Organization of Trade Unions (NOTU), Uganda Nurses and Midwives Union and an intern with Industri-all Global Union in Geneva, Switzerland. Robinah also worked with Mushabe, Munungu & Co. Advocates, Musangala Advocates & Solicitors and Tuhimbise & co. Advocates as a legal associate specializing in Labour and Employment Law. She has further undertaken several consultancies with Platform for Vendors in Uganda (PLAVU) and Solidarity Centre, Washington D.C.",
      "Robinah is a member of the International Lawyers Assisting Workers (ILAW) and African Labour Law Society.",
      "She holds a Master of Arts degree in Labour Policies and Globalisation from University of Kassel and Berlin School of Economics and Law. She is also a graduate of Bachelor of Laws (Hons) from Makerere University, Kampala and holds a Post Graduate Diploma in Legal Practice from Law Development Centre."
    ],
    email: 'robinah@voicesforlabour.org',
    linkedin: '#',
    twitter: '#'
  },
  'asiimwe-bosco': {
    name: 'Asiimwe Bosco',
    role: 'Legal Aid & Strategic Litigation',
    img: 'https://picsum.photos/seed/bosco/600/800',
    bio: [
      "Asiimwe Bosco heads the department of Legal aid and Strategic Litigation at VFL. He is an Advocate of the High Court of Uganda and Subbordinate Courts. Bosco brings vast experience and Knowledge from legal practice. Bosco worked with Foundation for Human Rights Initiative as a legal Intern and as an Advocate in Tuhimbise& Co. Advocates where he specialized in commercial law, corporate governance, Labour Law and construction Law. He is also a member of the Benevolent Fund Committee of the Uganda Law Society.",
      "He holds a bachelor of Laws degree from Makerere University Kampala and a Post Graduate Diploma in Legal Practice from Law Development Centre."
    ],
    email: 'bosco@voicesforlabour.org',
    linkedin: '#',
    twitter: '#'
  },
  'amoding-esther': {
    name: 'Amoding Esther',
    role: 'Director of Programs',
    img: 'https://picsum.photos/seed/esther/600/800',
    bio: [
      "Amoding Esther is the Director of programs at VFL. Esther is an experienced Manager with excellent interpersonal and communications skills. She has a teachable spirit and is result oriented . Esther worked with Uganda Workers Education Association as a Monitoring and Evaluation officer for close to 6 years where she successfully carried out project monitoring and evaluation activities. She also worked with Home Sweet Home, Uganda as an assistant administrator/Records Manager from the year 2013 to 2014.",
      "Esther holds a degree in bachelors of Management science from Kyambogo University, Uganda."
    ],
    email: 'esther@voicesforlabour.org',
    linkedin: '#',
    twitter: '#'
  },
  'wakabehenda-theopista': {
    name: 'Wakabehenda Theopista',
    role: 'Research & Policy Officer',
    img: 'https://picsum.photos/seed/theopista/600/800',
    bio: [
      "Wakabehenda Theopista is a research and Policy Officer at VFL. She is an Advocate of the High Court of Uganda and all Subordinate courts. Theopista is a well experienced researcher and legal practitioner. She has worked with Rwabogo & Co. Advocates as an Advocate with a specialty in Labour and Employment. She is also a member of International Lawyers Assisting Workers Network (ILAW), Uganda Law Society and the East African Law Society.",
      "She holds a bachelor of laws degree from Makerere University, Kampala and a Post Graduate Diploma in Legal Practice from Law Development Centre."
    ],
    email: 'theopista@voicesforlabour.org',
    linkedin: '#',
    twitter: '#'
  },
  'nabirye-suzan': {
    name: 'Nabirye Suzan',
    role: 'Legal Aid & Strategic Litigation',
    img: 'https://picsum.photos/seed/suzan/600/800',
    bio: [
      "Nabirye Suzan is a legal assistant in the legal aid and Strategic litigation department at VFL. She brings a wealth of experience from the Labour movement. Suzan has worked with Central Organization of Free Trade Unions (COFTU) as a legal clerk in its legal aid department for over 8 years. She is also a panelist on the Industrial Court of Uganda.",
      "Suzan holds a diploma in Law from Law Development Centre and a Diploma in Industrial Relations Management form Avance International University."
    ],
    email: 'suzan@voicesforlabour.org',
    linkedin: '#',
    twitter: '#'
  },
  'nabawanuka-joan': {
    name: 'Nabawanuka Joan',
    role: 'Administrative Assistant',
    img: 'https://picsum.photos/seed/joan/600/800',
    bio: [
      "Nabawanuka Joan is the administrative assistant at VFL. She a well–experienced administrator having worked with Kampala Capital City Authority for close to 3 years with similar administrative roles. Joan holds a diploma in Business administration at YMCA, Wandegeya."
    ],
    email: 'joan@voicesforlabour.org',
    linkedin: '#',
    twitter: '#'
  },
  'wakida-david': {
    name: 'Wakida David',
    role: 'Office Assistant',
    img: 'https://picsum.photos/seed/wakida/600/800',
    bio: [
      "Wakida David works as an office assistant at VFL. He is very enthusiastic about his work and has a teachable spirit.",
      "David possesses a Uganda Advanced certificate of Education from Forest hill college, Mukono and Uganda certificate of Education from Good Shepherd High school, Bweyogerere."
    ],
    email: 'david@voicesforlabour.org',
    linkedin: '#',
    twitter: '#'
  },
  'nanyange-tracy': {
    name: 'Nanyange Tracy',
    role: 'Assistant Policy & Research Officer',
    img: 'https://picsum.photos/seed/tracy/600/800',
    bio: [
      "Nanyange Tracy is a distinguished Assistant Policy and Research Officer at Organization, where she plays a pivotal role in shaping policies and providing expert research insights. Tracy’s expertise spans across Employment Law, Pension Advisory, and International Law Advisory, with a specialization in both contentious and non-contentious aspects of employment law and employee benefits.",
      "She is also well-versed in Human Rights Law and serves as a trusted advisor in corporate and commercial matters, litigation, and alternative dispute resolution. With a strong interest in cutting-edge industries such as energy, oil and gas, and artificial intelligence, Tracy continues to contribute thought leadership in these rapidly evolving sectors."
    ],
    email: 'tracy@voicesforlabour.org',
    linkedin: '#',
    twitter: '#'
  },
  'david-lakuch-okongo': {
    name: 'David Lakuch Okongo',
    role: 'Communications & I.T Specialist',
    img: 'https://picsum.photos/seed/okongo/600/800',
    bio: [
      "David Lakuch Okongo is a communications and I.T specialist at VFL. He manages the organization's digital presence and technical infrastructure."
    ],
    email: 'okongo@voicesforlabour.org',
    linkedin: '#',
    twitter: '#'
  },
  'awelo-sarah-asiimwe': {
    name: 'Awelo Sarah Asiimwe',
    role: 'Chairperson, Board of Directors',
    img: 'https://picsum.photos/seed/awelo/600/800',
    bio: [
      "Awelo Sarah Asiimwe is the Chairperson, Board of Directors of VFL and our Legal and strategy advisor. She is an Advocate of the High Court of Uganda and all the subordinate courts. Sarah is also a senior partner with Nansubuga & Awelo Co. Advocates. She is a dedicated legal and project management practitioner with over eight year’s career experience in the non- for profit sector with a thematic bias in human rights, natural resource governance, rule of law, access to justice, governance and democracy. She possesses strong program conceptual, design, implementation and evaluation skills, good leadership, interpersonal, management and communication skills.",
      "She brings to VFL a wealth of experience, expertise and skills having worked and consulted with a number of organizations.",
      "Sarah worked with Platform for Labour Action as a Legal officer from 2008 to 2010 where she provided legal aid and representation to the vulnerable and marginalized workers. In the year 2011 to 2018, she served as a senior Legal officer with Uganda Christian Lawyer’s Fraternity where she provided legal advice, technical support and mentoring to project staff, volunteers and UCLF partners. She has also previously taught law at Kampala International University and undertaken several consultancies with Action Aid International, Avocats Sans Frontieres, Justice Centers, Uganda, Platform for Labour Action and Legal Aid Service Providers Network (LASPNET).",
      "Sarah holds a Bachelor of laws degree from Makerere University and a Post Graduate Diploma in Legal Practice from Law Development Centre."
    ],
    email: 'sarah@voicesforlabour.org',
    linkedin: '#',
    twitter: '#'
  },
  'john-osapiri': {
    name: 'John Osapiri',
    role: 'Vice Chairperson, Board of Directors',
    img: 'https://picsum.photos/seed/osapiri/600/800',
    bio: [
      "John Osapiri is a co- founder and the Vice Chairperson, Board of Directors of VFL. He is a seasoned Christian lawyer, researcher, academician, author, an apostle and evangelist. John is passionate about the market-place ministry, empowering church leaders, raising servant leaders, Christian evangelism, NGO management and Regional integration law.",
      "John is the Chief Executive Officer of Uganda Christian Lawyers’ Fraternity, a Christian lawyers’ membership Non-Governmental Organisation, a legal aid service provider and a rights organisation.",
      "John worked with the Presidential Commission of Inquiry into the Laws, Processes and Procedures on Land Acquisition, Administration, Management and Registration in Uganda as a Consultant in Research and Mediations. He is the also the National Coordinator of Zoe Life Theological College USA in Uganda and is a lecturer of law at Nkumba University.",
      "John is a founder member of the Tanzania Christian Lawyers’ Fraternity, Destiny4kids Uganda, Everlasting Hope Uganda, International Ministers’ Platform Uganda and Grace Life World Inc.",
      "John is an Oak-seed of the Leadership Development Program of Compassion International and Transforming Nations alliance Uganda.",
      "John holds a Master of Laws from the University of Dar es Salaam, a Bachelor of Laws from Nkumba University; a Diploma in Christian Counselling and Evangelism and a Certificate in Christian Leadership. He is currently following a Masters of Divinity at Zoe Life Theological College, USA."
    ],
    email: 'john@voicesforlabour.org',
    linkedin: '#',
    twitter: '#'
  },
  'labwot-susan': {
    name: 'Labwot Susan',
    role: 'Board Member',
    img: 'https://picsum.photos/seed/labwot/600/800',
    bio: [
      "Labwot Susan is a Board Member of VFL. She is an enrolled Advocate of the High Court of Uganda with extensive experience in Human rights and policy advocacy, women’s rights and gender equality, governance, and accountability. She has worked as a Programme Coordinator on women’s leadership and democratic governance at Uganda Women’s Network (UWONET), FIDA-Uganda, and the Rosa Feminist movement in Ireland.",
      "For the past 12 years, Susan has collaborated in the development, implementation, and evaluation of large-scale programmes and policies and has built a well-rounded profile of critical analysis, stakeholder engagement, communication skills, and financial shrewdness, and partnership.",
      "Susan has worked with development partners such as UNWOMEN, United Nations Population Fund, Irish Aid, USAID, Dan Church Aids, Robert Bosch Foundation, Oxfam, GIZ, Diakonia-Sweden, and Domestic Governance Facility (Basket grant of 7 European countries including Austria, Denmark, Ireland, the Netherlands, Norway, Sweden, the United Kingdom, and the European Union) and local governments to ensure budgets and developments are gender-responsive to contemporary gender inequalities.",
      "Susan holds a Master’s degree in International Human Rights Law and Public Policy from University College Cork-Ireland, a Master of Arts in Local Governance and Human Rights from Uganda Martyrs University-Uganda, a Bachelor of Laws from Makerere University-Uganda and a Post Graduate Diploma in Legal Practice."
    ],
    email: 'susan@voicesforlabour.org',
    linkedin: '#',
    twitter: '#'
  },
  'oloo-zachariah': {
    name: 'Oloo Zachariah',
    role: 'Treasurer, Board of Directors',
    img: 'https://picsum.photos/seed/oloo/600/800',
    bio: [
      "Oloo Zachariah is a co- founder of VFL and the Treasurer, Board of Directors. He is very passionate about workers’ rights. Zachariah is a well experienced manager and a communication specialist who brings on board a wealth of knowledge and skills from the corporate sector. He has worked with Ezee money Ltd in different ranks ranging from a customer operations manager to a field supervisor.",
      "He has received various trainings in financial management and is currently pursuing his bachelor’s degree in Journalism and Mass Communication from UMCAT School"
    ],
    email: 'zachariah@voicesforlabour.org',
    linkedin: '#',
    twitter: '#'
  },
  'kikekon-joshua': {
    name: 'Kikekon Joshua',
    role: 'Board Member',
    img: 'https://picsum.photos/seed/kikekon/600/800',
    bio: [
      "Kikekon Joshua is a Board Member of VFL. He is an HR/Employment Relations professional with over three years of hands-on experience on employment issues and Human Resources. His areas of expertise include Human Resources and Employment Relations.",
      "Joshua holds a Masters in Labour Policies and Globalisation from University of Kassel and The Berlin School of Economics and Law, Germany and a Masters in Human Resource and Industrial Relations and Personnel Management from Lagos State University, Nigeria."
    ],
    email: 'joshua@voicesforlabour.org',
    linkedin: '#',
    twitter: '#'
  },
  'achen-evelyn': {
    name: 'Achen Evelyn',
    role: 'Board Secretary',
    img: 'https://picsum.photos/seed/achen/600/800',
    bio: [
      "Achen Evelyn is the Board secretary of VFL. She is an experienced Lawyer with a passion in Labour and employment, Environment, child and women rights. She brings a wealth of experience from private legal practice having worked with various law firms in Uganda. Evelyn worked with Matovu & Co. Advocates and Namuli & Co. Advocates as a legal Associate. She is currently the head of Legal and Human Resources in Boundless development, Uganda.",
      "She holds a bachelor of laws from Makerere University, Kampala"
    ],
    email: 'evelyn@voicesforlabour.org',
    linkedin: '#',
    twitter: '#'
  },
  'mwijuka-jesca': {
    name: 'Mwijuka Jesca',
    role: 'Board Member',
    img: 'https://picsum.photos/seed/mwijuka/600/800',
    bio: [
      "Mwijuka Jesca is a Board Member and an advisor on informal economy workers. She is a God fearing, principled, young and energetic lady with knowledge and experience in leadership, bargaining and negotiations, defending, protecting, and advocating for workers’ rights.",
      "Jesca is the deputy General Secretary of Uganda Markets and Allied Employees Union, a Board Member representing informal economy workers at National Organization of Trade Unions (NOTU) and a General secretary of workers in informal economy network (WIEN). She is also currently a female workers’ councilor at Mbarara City Council. Jesca brings a wealth of knowledge and experience on the informal economy.",
      "She holds a diploma in Labour studies from Labour College of East Africa."
    ],
    email: 'jesca@voicesforlabour.org',
    linkedin: '#',
    twitter: '#'
  },
  'christopher-david-lwebuga': {
    name: 'Christopher David Lwebuga',
    role: 'Legal Professional',
    img: 'https://picsum.photos/seed/lwebuga/600/800',
    bio: [
      "Christopher David Lwebuga is a dedicated legal professional specializing in Labour Law, Policy, and Employee Rights. He provides strategic legal guidance to ensure the protection of workers' interests."
    ],
    email: 'lwebuga@voicesforlabour.org',
    linkedin: '#',
    twitter: '#'
  }
};

const TeamMemberDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = teamData[slug as keyof typeof teamData];

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-bg-main">
        <h2 className="text-3xl font-bold mb-4">Member not found</h2>
        <Link to="/team" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Team
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-48 pb-20 bg-secondary text-white overflow-hidden">
        <div className="container-custom relative z-10">
          <Link to="/team" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Team
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-4 text-white">{member.name}</h1>
            <p className="text-xl text-primary font-bold uppercase tracking-wider">{member.role}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-bg-main">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Image & Sidebar */}
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-border-brand mb-8"
              >
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <div className="bg-surface p-8 rounded-3xl border border-border-brand">
                <h4 className="text-xl font-bold mb-6">Contact Info</h4>
                <div className="space-y-4">
                  <a href={`mailto:${member.email}`} className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors">
                    <div className="w-10 h-10 bg-bg-main rounded-xl flex items-center justify-center border border-border-brand">
                      <Mail size={18} />
                    </div>
                    <span className="truncate">{member.email}</span>
                  </a>
                  <div className="flex gap-4 mt-6">
                    <a href={member.linkedin} className="w-12 h-12 bg-bg-main rounded-xl flex items-center justify-center border border-border-brand hover:bg-primary hover:text-white transition-all">
                      <Linkedin size={20} />
                    </a>
                    <a href={member.twitter} className="w-12 h-12 bg-bg-main rounded-xl flex items-center justify-center border border-border-brand hover:bg-primary hover:text-white transition-all">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-8">Biography</h3>
              <div className="prose prose-lg max-w-none text-text-secondary">
                {member.bio.map((para, i) => (
                  <p key={i} className="mb-6 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-primary/5 rounded-3xl border border-primary/10">
                <h4 className="text-xl font-bold mb-4 text-primary">Expertise</h4>
                <div className="flex flex-wrap gap-3">
                  {['Labour Law', 'Employment Law', 'Legal Practice', 'Policy Research', 'Strategic Litigation'].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-surface rounded-full text-sm font-semibold border border-border-brand shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamMemberDetail;
