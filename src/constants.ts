import { Project, BlogPost, GalleryItem } from './types';

export const LOGO_URL = "https://voicesforlabour.org/wp-content/uploads/2023/04/Voices-For-Labour-Logo-Final-01.png";

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Legal aid and representation',
    description: 'Legal aid is the pillar of the justice system and contributes to accessible justice and rule of law especially to the vulnerable groups. At VFL, we provide legal aid and representation to vulnerable workers both in the formal and informal economy including communities affected by environmental degradation.',
    image: 'https://picsum.photos/seed/legal/800/600',
    category: 'Legal Aid',
    status: 'ongoing',
  },
  {
    id: '2',
    title: 'Advocacy and Campaigns',
    description: 'Our advocacy programs and campaigns give workers a voice and bring to light issues affecting them in addition to making Employers a accountable and strategically framing their plight to the policy and decision makers.',
    image: 'https://picsum.photos/seed/advocacy/800/600',
    category: 'Advocacy',
    status: 'ongoing',
  },
  {
    id: '3',
    title: 'Strategic Corporate research',
    description: 'VFL embraces strategic corporate research to facilitate well informed decisions, policy debates/dialogues, campaigns and advocacy and further to build on knowledge sharing in the world of work.',
    image: 'https://picsum.photos/seed/research/800/600',
    category: 'Research',
    status: 'ongoing',
  },
  {
    id: '4',
    title: 'Worker empowerment and capacity building',
    description: 'At VFL, we believe workers who are knowledgeable about their rights and interests can stand up against any form of exploitation. We therefore build the capacity of workers through awareness raising, education and training.',
    image: 'https://picsum.photos/seed/empowerment/800/600',
    category: 'Empowerment',
    status: 'ongoing',
  },
  {
    id: '5',
    title: 'Strategic litigation',
    description: 'Strategic litigation is one of the effective legal tools of challenging unfair and out-dated policies, laws and practices. VFL uses this tool to challenge unfair work place practices, laws and policies in favour of workers.',
    image: 'https://picsum.photos/seed/litigation/800/600',
    category: 'Legal Aid',
    status: 'ongoing',
  },
  {
    id: '6',
    title: 'Policy briefs and dialogue',
    description: 'Through our research department, VFL writes position papers and policy briefs to inform dialogue and reforms on issues affecting workers.',
    image: 'https://picsum.photos/seed/policy/800/600',
    category: 'Policy',
    status: 'ongoing',
  },
  {
    id: '7',
    title: 'Partnerships and Coalition Building',
    description: 'We believe that for the voice of workers to be heard, we need to work with other like-minded partners in order to build collective power towards the advancement of worker\'s rights.',
    image: 'https://picsum.photos/seed/partnerships/800/600',
    category: 'Partnerships',
    status: 'ongoing',
  },
  {
    id: '8',
    title: 'Community dialogues and Empowerment',
    description: 'VFL believes in strategic framing of workers\' issues to the community in order to mobilize their support towards the protection of workers\' rights and interests.',
    image: 'https://picsum.photos/seed/community/800/600',
    category: 'Empowerment',
    status: 'ongoing',
  },
  {
    id: '9',
    title: 'Economic empowerment and Livelihood support services',
    description: 'VFL trains workers especially those in the informal sector on viable income generating activities and further mobilizes funds to support start-ups for vulnerable workers.',
    image: 'https://picsum.photos/seed/livelihood/800/600',
    category: 'Livelihood',
    status: 'ongoing',
  },
  {
    id: '10',
    title: 'Mentorship programmes',
    description: 'VFL conducts awareness and sensitization of workers\' rights in schools and universities as part of its empowerment and mentorship programme.',
    image: 'https://picsum.photos/seed/mentorship/800/600',
    category: 'Mentorship',
    status: 'ongoing',
  },
  {
    id: '11',
    title: 'Environmental Conservation',
    description: 'In an effort to protect the environment, VFL mobilizes and sensitizes workers about good workplace practices that conserve the environment.',
    image: 'https://picsum.photos/seed/environment/800/600',
    category: 'Environment',
    status: 'ongoing',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Labour Rights in a Digital Age',
    excerpt: 'How automation and AI are reshaping the landscape of worker protections and what we must do.',
    content: `
      <p>As we navigate the third decade of the 21st century, the intersection of technology and labour rights has become one of the most pressing issues of our time. The rapid advancement of artificial intelligence (AI) and automation is not just changing how we work; it's fundamentally altering the power dynamics between employers and employees.</p>
      
      <h3>The Rise of Algorithmic Management</h3>
      <p>One of the most significant shifts is the rise of algorithmic management. In the gig economy and increasingly in traditional sectors, software is now responsible for assigning tasks, monitoring performance, and even making termination decisions. This "management by code" often lacks transparency and can lead to dehumanizing work conditions where workers are treated as mere data points.</p>
      
      <blockquote>
        "The challenge is not to stop technology, but to ensure that its benefits are shared equitably and that it doesn't become a tool for exploitation."
      </blockquote>
      
      <h3>Protecting the Digital Worker</h3>
      <p>To address these challenges, we need a new framework for digital labour rights. This includes:</p>
      <ul>
        <li><strong>Right to Explanation:</strong> Workers should have the right to understand how algorithms are making decisions that affect their livelihoods.</li>
        <li><strong>Data Privacy:</strong> Strict limits on the collection and use of worker data for surveillance purposes.</li>
        <li><strong>Human-in-the-Loop:</strong> Ensuring that significant decisions, especially those regarding discipline or termination, always involve human oversight.</li>
      </ul>
      
      <p>At Voices for Labour, we are actively campaigning for legislative reforms that bring our labour laws into the digital age. We believe that technology should empower workers, not displace or diminish them.</p>
    `,
    date: 'March 10, 2026',
    author: 'Sarah Jenkins',
    image: 'https://picsum.photos/seed/future/800/600',
    category: 'Thought Leadership',
  },
  {
    id: '2',
    title: 'Success Story: Victory for Textile Workers',
    excerpt: 'A landmark agreement reached after months of advocacy and community engagement.',
    content: `
      <p>After a grueling eight-month campaign, the textile workers of the Eastern Industrial Zone have achieved a historic victory. This week, a new collective bargaining agreement was signed, marking a significant turning point for over 5,000 workers in the region.</p>
      
      <h3>The Struggle for Fair Wages</h3>
      <p>The campaign began last July when workers organized to protest stagnant wages and unsafe working conditions. Despite facing significant pressure and threats of layoffs, the workers remained united, supported by local community leaders and international labour organizations.</p>
      
      <p>Our team at Voices for Labour provided legal aid and strategic communication support throughout the process. We helped frame the workers' demands not just as a labor dispute, but as a fundamental human rights issue.</p>
      
      <h3>Key Wins in the New Agreement</h3>
      <p>The new contract includes several landmark provisions:</p>
      <ul>
        <li><strong>25% Wage Increase:</strong> A significant boost that brings wages in line with the current cost of living.</li>
        <li><strong>Safety Committees:</strong> The establishment of worker-led safety committees with the power to halt production in case of immediate danger.</li>
        <li><strong>Childcare Support:</strong> A new fund to provide childcare subsidies for working parents.</li>
      </ul>
      
      <p>This victory proves that when workers stand together and have the right support, they can overcome even the most daunting challenges. It serves as a beacon of hope for workers across the country.</p>
    `,
    date: 'February 28, 2026',
    author: 'David Chen',
    image: 'https://picsum.photos/seed/victory/800/600',
    category: 'Updates',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    url: 'https://picsum.photos/seed/event1/1200/800',
    thumbnail: 'https://picsum.photos/seed/event1/400/300',
    title: 'Annual Labour Summit 2025',
    description: 'Leaders and activists gathered to discuss policy changes.',
    category: 'Events',
  },
  {
    id: '2',
    type: 'video',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://picsum.photos/seed/video1/400/300',
    title: 'Voices of the Workers',
    description: 'A documentary short on the daily lives of factory workers.',
    category: 'Videos',
  },
  {
    id: '3',
    type: 'image',
    url: 'https://picsum.photos/seed/press1/1200/800',
    thumbnail: 'https://picsum.photos/seed/press1/400/300',
    title: 'New Policy Announcement',
    description: 'Official press release regarding the new labour laws.',
    category: 'Press Release',
  },
  {
    id: '4',
    type: 'video',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://picsum.photos/seed/podcast1/400/300',
    title: 'Episode 45: Worker Rights',
    description: 'Our weekly podcast discussing current labour issues.',
    category: 'Podcast',
  },
  {
    id: '5',
    type: 'image',
    url: 'https://picsum.photos/seed/news1/1200/800',
    thumbnail: 'https://picsum.photos/seed/news1/400/300',
    title: 'Global Labour Trends',
    description: 'External news coverage of our recent campaigns.',
    category: 'News Links',
  },
  {
    id: '6',
    type: 'image',
    url: 'https://picsum.photos/seed/gallery1/1200/800',
    thumbnail: 'https://picsum.photos/seed/gallery1/400/300',
    title: 'Fieldwork in Nairobi',
    description: 'Capturing the impact of our local initiatives.',
    category: 'Our Gallery',
  },
];

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  fileUrl: string;
  thumbnail: string;
  date: string;
}

export const RESOURCES: ResourceItem[] = [
  {
    id: '1',
    title: 'Labour Rights Report 2025',
    description: 'A comprehensive study on the state of worker rights globally.',
    category: 'Research reports',
    fileUrl: '#',
    thumbnail: 'https://picsum.photos/seed/report1/400/500',
    date: 'Jan 2025'
  },
  {
    id: '2',
    title: 'Minimum Wage Fact Sheet',
    description: 'Essential data on minimum wage standards across different sectors.',
    category: 'Fact sheets',
    fileUrl: '#',
    thumbnail: 'https://picsum.photos/seed/fact1/400/500',
    date: 'Feb 2025'
  },
  {
    id: '3',
    title: 'Workplace Safety Policy Brief',
    description: 'Recommendations for improving safety protocols in industrial settings.',
    category: 'Policy Briefs',
    fileUrl: '#',
    thumbnail: 'https://picsum.photos/seed/policy1/400/500',
    date: 'Mar 2025'
  },
  {
    id: '4',
    title: 'Annual Impact Report 2024',
    description: 'Reviewing our achievements and challenges over the past year.',
    category: 'Annual Reports',
    fileUrl: '#',
    thumbnail: 'https://picsum.photos/seed/annual1/400/500',
    date: 'Dec 2024'
  },
  {
    id: '5',
    title: 'Position on Digital Labour',
    description: 'Our official stance on the gig economy and digital platform work.',
    category: 'Position Papers',
    fileUrl: '#',
    thumbnail: 'https://picsum.photos/seed/position1/400/500',
    date: 'Apr 2025'
  },
  {
    id: '6',
    title: 'Fair Recruitment Policy',
    description: 'A model policy for ethical recruitment and hiring practices.',
    category: 'Model Workplace Policies',
    fileUrl: '#',
    thumbnail: 'https://picsum.photos/seed/model1/400/500',
    date: 'May 2025'
  },
];
