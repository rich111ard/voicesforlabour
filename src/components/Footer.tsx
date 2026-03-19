import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { LOGO_URL } from '../constants';

const Footer = () => {
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
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center overflow-hidden">
                <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <span className="font-bold text-xl">Voices For Labour</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              VFL’s mission is to defend and promote the social, economic, and Political rights of workers through accessible justice, strategic litigation, research, advocacy, campaigns, education and training.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.facebook.com/v4labour" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" title="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://x.com/Voicesforlabour" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" title="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" title="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/in/voices-for-labour-vfl-826670226/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" title="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.youtube.com/channel/UCG8hI_OyvB10cL3jcNeLd4g" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" title="YouTube">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" title="TikTok">
                <svg 
                  viewBox="0 0 24 24" 
                  width="18" 
                  height="18" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/objectives" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/thematic-areas" className="text-white/80 hover:text-white transition-colors">Thematic Areas</Link></li>
              <li><Link to="/projects" className="text-white/80 hover:text-white transition-colors">Our Programs</Link></li>
              <li><Link to="/blog" className="text-white/80 hover:text-white transition-colors">Latest News</Link></li>
              <li><Link to="/donate" className="text-white/80 hover:text-white transition-colors">Support Our Work</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0" size={20} />
                <span className="text-white/80">Plot 2352 Block 218 T&N Plaza 4th Floor Rm 31, Najjera Kampala-Uganda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={20} />
                <span className="text-white/80">+256-740-443-780</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={20} />
                <span className="text-white/80">info@voicesforlabour.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Newsletter</h3>
            <p className="text-white/80 mb-4">Stay updated with our latest campaigns and impact stories.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-accent"
              />
              <button type="submit" className="btn-accent w-full">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm space-y-2">
          <p>&copy; {new Date().getFullYear()} Voices For Labour. All rights reserved. | Privacy Policy | Terms of Service</p>
          <p className="text-xs opacity-70">Powered by marsrocks Technologies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
