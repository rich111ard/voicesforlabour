import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Mail, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';

const StaffLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for login logic
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-surface dark:bg-[#151821] pt-32 pb-20 flex items-center justify-center">
      <div className="container-custom max-w-md w-full">
        <TiltCard>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-bg-main p-10 rounded-3xl shadow-xl border border-border-brand dark:border-gray-800"
          >
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                <Shield size={32} />
              </div>
              <h1 className="text-3xl font-bold text-primary dark:text-white">Staff Sign In</h1>
              <p className="text-text-secondary dark:text-gray-400 mt-2">Enter your credentials to access the dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-primary dark:text-gray-300 flex items-center gap-2">
                  <Mail size={16} />
                  Email Address
                </label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="staff@voicesforlabour.org"
                  className="w-full bg-surface dark:bg-[#151821] border border-border-brand dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-primary dark:text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-text-primary dark:text-gray-300 flex items-center gap-2">
                  <Lock size={16} />
                  Password
                </label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-surface dark:bg-[#151821] border border-border-brand dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-primary dark:text-white"
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-2 text-lg">
                Sign In <ArrowRight size={20} />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-border-brand dark:border-gray-800 text-center">
              <Link to="/" className="text-sm text-text-secondary dark:text-gray-400 hover:text-primary transition-colors">
                Return to Homepage
              </Link>
            </div>
          </motion.div>
        </TiltCard>
      </div>
    </div>
  );
};

export default StaffLogin;
