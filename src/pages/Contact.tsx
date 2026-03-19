import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    const emailParam = searchParams.get('email');

    if (subjectParam || emailParam) {
      setFormData(prev => {
        const newData = { ...prev };
        
        if (subjectParam === 'partnership') {
          newData.subject = 'Partnership Opportunity';
        } else if (subjectParam === 'donation') {
          newData.subject = 'Donation Question';
        } else if (subjectParam === 'update') {
          newData.subject = 'Keep me updated';
        }
        
        if (emailParam) {
          newData.email = emailParam;
        }
        
        return newData;
      });
    }
  }, [searchParams]);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setResponseMsg('Please fill in all required fields before sending.');
      return;
    }
    
    const recipient = "info@voicesforlabour.org";
    const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n` +
      `---\n` +
      `Sender Contact Details:\n` +
      `Name: ${formData.fullName}\n` +
      `Email: ${formData.email}`
    );
    
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // Show a success state or reset form
    setStatus('success');
    setResponseMsg('Your email app should now open with your message ready to send.');
    setFormData({ fullName: '', email: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-48 pb-20 bg-secondary text-white overflow-hidden">
        {/* 3D Floating Elements */}
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
            <h1 className="text-4xl md:text-6xl mb-6 text-white">Get in Touch</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Have questions about our work or want to get involved? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl mb-8">Contact Information</h2>
              <p className="text-lg text-text-secondary mb-12">
                Our team is here to support you. Reach out through any of the channels below and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-primary shrink-0 border border-border-brand">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Email Us</h4>
                    <p className="text-text-secondary">General Inquiries: info@voicesforlabour.org</p>
                    <p className="text-text-secondary">Media: media@voicesforlabour.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-primary shrink-0 border border-border-brand">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Call Us</h4>
                    <p className="text-text-secondary">Main Office: +256-740-443-780</p>
                    <p className="text-text-secondary">Mon-Fri, 9am - 5pm EAT</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-primary shrink-0 border border-border-brand">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Visit Us</h4>
                    <p className="text-text-secondary">Plot 2352 Block 218 T&N Plaza 4th Floor Rm 31,</p>
                    <p className="text-text-secondary">Najjera Kampala-Uganda</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-surface rounded-3xl border border-border-brand flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold mb-2">Chat on WhatsApp</h4>
                  <p className="text-text-secondary">Instant support for urgent matters.</p>
                </div>
                <a 
                  href="https://wa.me/256740443780" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                  <MessageCircle size={32} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <TiltCard>
              <div className="bg-bg-main p-8 md:p-12 rounded-3xl shadow-xl border border-border-brand h-full">
                <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
                
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={48} />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Thank You!</h4>
                    <p className="text-text-secondary mb-8">{responseMsg}</p>
                    <button 
                      type="button"
                      onClick={() => {
                        setStatus('idle');
                        setResponseMsg('');
                      }}
                      className="btn-primary px-8 py-3 relative z-20"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {status === 'error' && (
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400">
                        <AlertCircle size={20} />
                        <p className="text-sm font-medium">{responseMsg}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">Full Name <span className="text-red-500">*</span></label>
                        <input 
                          type="text" 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          placeholder="Enter name" 
                          className="w-full bg-surface border border-border-brand rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">Email Address <span className="text-red-500">*</span></label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="enter email" 
                          className="w-full bg-surface border border-border-brand rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">Subject</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-surface border border-border-brand rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Report a Case">Report a Case</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                        <option value="Media Request">Media Request</option>
                        <option value="Donation Question">Donation Question</option>
                        <option value="Volunteering">Volunteering</option>
                        <option value="Keep me updated">Keep me updated</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-secondary uppercase tracking-wider">Message <span className="text-red-500">*</span></label>
                      <textarea 
                        rows={5} 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="How can we help you?" 
                        className="w-full bg-surface border border-border-brand rounded-xl px-4 py-3 focus:outline-none focus:border-primary resize-none"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="btn-primary w-full py-4 flex items-center justify-center gap-2"
                    >
                      Send Message <Send size={20} />
                    </button>
                  </form>
                )}
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 w-full bg-surface relative grayscale hover:grayscale-0 transition-all duration-500">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7533!2d32.62580!3d0.3826811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjInNTcuNyJOIDMywrAzNyczMi45IkU!5e0!3m2!1sen!2s!4v1710281457000!5m2!1sen!2s" 
          className="w-full h-full border-0" 
          allowFullScreen 
          loading="lazy"
          title="Office Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
