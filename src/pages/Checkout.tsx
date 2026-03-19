import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CreditCard, Lock, ShieldCheck, ArrowLeft, Heart, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import TiltCard from '../components/TiltCard';

const Checkout = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const donationData = location.state || {
    amount: '$100',
    frequency: 'One-time',
    name: '',
    email: ''
  };

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20">
      <div className="container-custom max-w-6xl">
        <div className="mb-8">
          <Link to="/donate" className="flex items-center gap-2 text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">
            <ArrowLeft size={20} />
            Back to Donation
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Payment Form */}
          <div className="lg:col-span-2 space-y-8">
            <TiltCard>
              <div className="bg-bg-main p-8 rounded-3xl shadow-sm border border-border-brand">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-primary">
                  <CreditCard className="text-secondary" />
                  Payment Information
                </h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-primary">Cardholder Name</label>
                      <input 
                        type="text" 
                        defaultValue={donationData.name}
                        placeholder="John Doe"
                        className="w-full bg-surface border border-border-brand rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-primary">Email Address</label>
                      <input 
                        type="email" 
                        defaultValue={donationData.email}
                        placeholder="john@example.com"
                        className="w-full bg-surface border border-border-brand rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-primary">Card Number</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="0000 0000 0000 0000"
                        className="w-full bg-surface border border-border-brand rounded-xl px-4 py-3 pl-12 focus:outline-none focus:border-primary"
                      />
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-primary">Expiry Date</label>
                      <input 
                        type="text" 
                        placeholder="MM/YY"
                        className="w-full bg-surface border border-border-brand rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-primary">CVC</label>
                      <input 
                        type="text" 
                        placeholder="123"
                        className="w-full bg-surface border border-border-brand rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="hidden md:block"></div>
                  </div>

                  <div className="pt-4">
                    <button className="btn-accent w-full py-4 text-lg flex items-center justify-center gap-2">
                      Complete Donation of {donationData.amount}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-4 text-text-secondary dark:text-gray-400 text-sm pt-4">
                    <div className="flex items-center gap-1">
                      <Lock size={14} />
                      Secure SSL Encryption
                    </div>
                    <div className="flex items-center gap-1">
                      <ShieldCheck size={14} />
                      PCI Compliant
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>

            <div className="bg-bg-main p-8 rounded-3xl shadow-sm border border-border-brand">
              <h3 className="text-xl font-bold mb-4 text-primary">Billing Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Street Address" 
                  className="w-full bg-surface border border-border-brand rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
                />
                <input 
                  type="text" 
                  placeholder="City" 
                  className="w-full bg-surface border border-border-brand rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
                />
                <input 
                  type="text" 
                  placeholder="State / Province" 
                  className="w-full bg-surface border border-border-brand rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
                />
                <input 
                  type="text" 
                  placeholder="ZIP / Postal Code" 
                  className="w-full bg-surface border border-border-brand rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Right: Summary */}
          <div className="lg:col-span-1">
            <TiltCard>
              <div className="bg-bg-main p-8 rounded-3xl shadow-xl border border-border-brand sticky top-32">
                <h3 className="text-2xl font-bold mb-8 text-primary">Donation Summary</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-border-brand">
                    <span className="text-text-secondary">Amount</span>
                    <span className="font-bold text-primary text-xl">{donationData.amount}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border-brand">
                    <span className="text-text-secondary">Frequency</span>
                    <span className="font-bold text-primary">{donationData.frequency}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border-brand">
                    <span className="text-text-secondary">Impact</span>
                    <span className="font-bold text-secondary">High</span>
                  </div>
                </div>

                <div className="bg-surface p-6 rounded-2xl mb-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-bg-main rounded-full flex items-center justify-center shrink-0 text-accent shadow-sm">
                      <Heart size={20} fill="currentColor" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1 text-primary">Your Impact</h4>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        This donation will help provide legal support for up to 5 workers facing unfair dismissal.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-text-secondary dark:text-gray-400">
                    <CheckCircle2 className="text-secondary" size={14} />
                    Tax-deductible receipt will be sent to your email.
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-secondary dark:text-gray-400">
                    <CheckCircle2 className="text-secondary" size={14} />
                    Secure payment processed by Stripe.
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
