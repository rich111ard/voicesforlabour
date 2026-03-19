import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ShieldCheck, Globe, Users, ArrowRight, CheckCircle2, ChevronDown, CreditCard, Phone, X } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import Counter from '../components/Counter';

const Donate = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedAmount, setSelectedAmount] = useState('$100');
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('One-time');
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mtn' | 'airtel' | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (showPaymentModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPaymentModal]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const validateInitialForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (selectedAmount === 'Other' && (!customAmount || parseFloat(customAmount) <= 0)) {
      newErrors.amount = 'Please enter a valid amount';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDonateClick = () => {
    if (validateInitialForm()) {
      setShowPaymentModal(true);
    }
  };

  const handlePaymentMethodSelect = (method: 'card' | 'mtn' | 'airtel') => {
    if (method === 'card') {
      const finalAmount = selectedAmount === 'Other' ? `$${customAmount}` : selectedAmount;
      navigate('/checkout', { 
        state: { 
          amount: finalAmount, 
          frequency,
          name: formData.name,
          email: formData.email
        } 
      });
    } else {
      setPaymentMethod(method);
      setErrors({}); // Clear errors when switching to mobile money
    }
  };

  const handleMobileMoneyPayment = () => {
    if (!phoneNumber.trim()) {
      setErrors({ phone: 'Phone number is required' });
      return;
    }
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
    setPaymentMethod(null);
    setPhoneNumber('');
    setIsSuccess(false);
    setErrors({});
  };

  const faqs = [
    { q: "Is my donation tax-deductible?", a: "Yes, Voices For Labour is a registered 501(c)(3) non-profit organization, and all donations are tax-deductible to the extent allowed by law." },
    { q: "Can I donate in memory of someone?", a: "Absolutely. You can specify memorial details in the 'Other' donation field or contact our support team directly." },
    { q: "How can I cancel a monthly donation?", a: "You can manage or cancel your recurring donations at any time through the link provided in your initial confirmation email or by contacting us." },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-48 pb-32 bg-accent text-white overflow-hidden">
        {/* 3D Floating Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -40, 0],
              rotate: [0, 20, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [0, 50, 0],
              rotate: [0, -25, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-3xl"
          />
        </div>

        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/seed/donate-hero/1920/1080" alt="Donate" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container-custom relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-surface text-accent rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl"
          >
            <Heart size={40} fill="currentColor" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl mb-6 text-white">Support Labour Rights</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Your contribution directly empowers workers, funds legal advocacy, and helps us influence policies that protect worker dignity worldwide.
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-4xl mb-8">Why Your Support Matters</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <TiltCard>
                    <div className="flex gap-4 h-full">
                      <div className="w-12 h-12 bg-surface rounded-xl shadow-sm flex items-center justify-center shrink-0 text-secondary border border-border-brand">
                        <ShieldCheck size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 dark:text-white">Legal Advocacy</h4>
                        <p className="text-text-secondary dark:text-gray-400">We provide legal representation for workers facing unfair dismissal or exploitation.</p>
                      </div>
                    </div>
                  </TiltCard>
                  <TiltCard>
                    <div className="flex gap-4 h-full">
                      <div className="w-12 h-12 bg-surface rounded-xl shadow-sm flex items-center justify-center shrink-0 text-secondary border border-border-brand">
                        <Globe size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 dark:text-white">Policy Influence</h4>
                        <p className="text-text-secondary dark:text-gray-400">Funding research and lobbying efforts to improve national and international labour laws.</p>
                      </div>
                    </div>
                  </TiltCard>
                  <TiltCard>
                    <div className="flex gap-4 h-full">
                      <div className="w-12 h-12 bg-surface rounded-xl shadow-sm flex items-center justify-center shrink-0 text-secondary border border-border-brand">
                        <Users size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 dark:text-white">Worker Training</h4>
                        <p className="text-text-secondary dark:text-gray-400">Educational workshops to help workers understand their rights and organize effectively.</p>
                      </div>
                    </div>
                  </TiltCard>
                  <TiltCard>
                    <div className="flex gap-4 h-full">
                      <div className="w-12 h-12 bg-surface rounded-xl shadow-sm flex items-center justify-center shrink-0 text-secondary border border-border-brand">
                        <Heart size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 dark:text-white">Emergency Support</h4>
                        <p className="text-text-secondary dark:text-gray-400">Direct aid for workers and families in crisis due to workplace accidents or systemic abuse.</p>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </div>

              <div className="bg-bg-main p-10 rounded-3xl border border-border-brand shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Transparency & Trust</h3>
                <p className="text-text-secondary mb-8">
                  We are committed to the highest standards of financial transparency. <Counter value="90%" /> of every donation goes directly to our advocacy and support programs.
                </p>
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <CheckCircle2 className="text-secondary" size={20} />
                    Registered
                  </div>
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <CheckCircle2 className="text-secondary" size={20} />
                    Audited Annually
                  </div>
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <CheckCircle2 className="text-secondary" size={20} />
                    Secure Payments
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-1">
              <TiltCard>
                <div className="bg-bg-main p-8 rounded-3xl shadow-xl border border-border-brand sticky top-32">
                  <h3 className="text-2xl font-bold mb-8 text-center dark:text-white">Make a Donation</h3>
                  
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {['$25', '$50', '$100', '$250', '$500', 'Other'].map((amount) => (
                      <button 
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`py-3 rounded-xl font-bold border transition-all ${
                          selectedAmount === amount 
                            ? 'bg-primary text-white border-primary shadow-lg' 
                            : 'bg-surface text-text-secondary border-border-brand hover:border-primary'
                        }`}
                      >
                        {amount}
                      </button>
                    ))}
                  </div>

                  <AnimatePresence>
                    {selectedAmount === 'Other' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mb-6 overflow-hidden"
                      >
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-bold">$</span>
                          <input 
                            type="number" 
                            placeholder="Enter amount" 
                            value={customAmount}
                            onChange={(e) => {
                              setCustomAmount(e.target.value);
                              if (errors.amount) setErrors({ ...errors, amount: '' });
                            }}
                            className={`w-full bg-surface border rounded-xl px-4 py-3 pl-8 focus:outline-none transition-colors ${errors.amount ? 'border-red-500 focus:border-red-500' : 'border-border-brand focus:border-primary'}`}
                          />
                        </div>
                        {errors.amount && <p className="text-red-500 text-xs mt-1 ml-1">{errors.amount}</p>}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="space-y-4 mb-8">
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setFrequency('One-time')}
                        className={`flex-1 py-3 rounded-xl font-bold transition-all ${frequency === 'One-time' ? 'bg-secondary text-white' : 'bg-surface text-text-secondary border border-border-brand'}`}
                      >
                        One-time
                      </button>
                      <button 
                        onClick={() => setFrequency('Monthly')}
                        className={`flex-1 py-3 rounded-xl font-bold transition-all ${frequency === 'Monthly' ? 'bg-secondary text-white' : 'bg-surface text-text-secondary border border-border-brand'}`}
                      >
                        Monthly
                      </button>
                    </div>
                    <div className="space-y-1">
                      <input 
                        type="text" 
                        placeholder="Enter name" 
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full bg-surface border rounded-xl px-4 py-3 focus:outline-none transition-colors ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-border-brand focus:border-primary'}`}
                      />
                      {errors.name && <p className="text-red-500 text-[10px] ml-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-1">
                      <input 
                        type="email" 
                        placeholder="enter email" 
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full bg-surface border rounded-xl px-4 py-3 focus:outline-none transition-colors ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-border-brand focus:border-primary'}`}
                      />
                      {errors.email && <p className="text-red-500 text-[10px] ml-1">{errors.email}</p>}
                    </div>
                  </div>

                  <button 
                    onClick={handleDonateClick}
                    className="btn-accent w-full py-4 text-lg flex items-center justify-center gap-2"
                  >
                    Donate Now <ArrowRight size={20} />
                  </button>

                  <p className="text-xs text-text-secondary dark:text-gray-500 text-center mt-6">
                    By donating, you agree to our Terms of Service and Privacy Policy. All donations are tax-deductible.
                  </p>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Method Modal */}
      {isMounted && createPortal(
        <AnimatePresence>
          {showPaymentModal && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closePaymentModal}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-bg-main w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden border border-border-brand"
              >
                <div className="p-8">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-bold dark:text-white">
                      {isSuccess ? 'Thank You!' : paymentMethod ? 'Enter Phone Number' : 'Select Payment Method'}
                    </h3>
                    <button 
                      onClick={closePaymentModal}
                      className="p-2 hover:bg-surface rounded-full transition-colors text-text-secondary z-10"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {isSuccess ? (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={48} />
                      </div>
                      <h4 className="text-xl font-bold mb-4 dark:text-white">Payment Successful</h4>
                      <p className="text-text-secondary dark:text-gray-400 mb-8">
                        Your donation of {selectedAmount === 'Other' ? `$${customAmount}` : selectedAmount} has been received. A receipt has been sent to {formData.email}.
                      </p>
                      <button 
                        onClick={closePaymentModal}
                        className="btn-primary w-full py-4"
                      >
                        Close
                      </button>
                    </div>
                  ) : paymentMethod ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 p-4 bg-surface rounded-2xl border border-border-brand">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden ${paymentMethod === 'mtn' ? 'bg-[#FFCC00]' : 'bg-[#E40000]'}`}>
                          <img 
                            src={paymentMethod === 'mtn' 
                              ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MTN_Logo.svg/2048px-MTN_Logo.svg.png' 
                              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Airtel_logo.svg/2560px-Airtel_logo.svg.png'
                            } 
                            alt={paymentMethod}
                            className="w-8 h-8 object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold uppercase dark:text-white">{paymentMethod} Pay</h4>
                          <p className="text-xs text-text-secondary">Mobile Money Payment</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-text-primary dark:text-gray-300">Phone Number</label>
                        <div className="relative">
                          <input 
                            type="tel" 
                            placeholder="e.g. +256 700 000 000" 
                            value={phoneNumber}
                            onChange={(e) => {
                              setPhoneNumber(e.target.value);
                              if (errors.phone) setErrors({ ...errors, phone: '' });
                            }}
                            className={`w-full bg-surface border rounded-xl px-4 py-4 pl-12 focus:outline-none transition-colors ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-border-brand focus:border-primary'}`}
                          />
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
                        <p className="text-xs text-text-secondary">A prompt will be sent to this number to authorize the deduction.</p>
                      </div>

                      <button 
                        onClick={handleMobileMoneyPayment}
                        disabled={isProcessing}
                        className="btn-accent w-full py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isProcessing ? 'Processing...' : `Pay ${selectedAmount === 'Other' ? `$${customAmount}` : selectedAmount}`}
                        {!isProcessing && <ArrowRight size={20} />}
                      </button>
                      
                      <button 
                        onClick={() => setPaymentMethod(null)}
                        className="w-full text-center text-sm font-bold text-text-secondary hover:text-primary transition-colors"
                      >
                        Change Payment Method
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <button 
                        onClick={() => handlePaymentMethodSelect('card')}
                        className="w-full flex items-center justify-between p-6 bg-surface hover:bg-white border border-border-brand rounded-2xl transition-all group hover:shadow-md"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                            <CreditCard size={24} />
                          </div>
                          <div className="text-left">
                            <h4 className="font-bold dark:text-white">Credit / Debit Card</h4>
                            <p className="text-xs text-text-secondary">Visa, Mastercard, etc.</p>
                          </div>
                        </div>
                        <ArrowRight size={20} className="text-text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </button>

                      <button 
                        onClick={() => handlePaymentMethodSelect('mtn')}
                        className="w-full flex items-center justify-between p-6 bg-surface hover:bg-white border border-border-brand rounded-2xl transition-all group hover:shadow-md"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#FFCC00] rounded-xl flex items-center justify-center overflow-hidden">
                            <img 
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MTN_Logo.svg/2048px-MTN_Logo.svg.png" 
                              alt="MTN" 
                              className="w-8 h-8 object-contain"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="text-left">
                            <h4 className="font-bold dark:text-white">MTN Pay</h4>
                            <p className="text-xs text-text-secondary">Mobile Money</p>
                          </div>
                        </div>
                        <ArrowRight size={20} className="text-text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </button>

                      <button 
                        onClick={() => handlePaymentMethodSelect('airtel')}
                        className="w-full flex items-center justify-between p-6 bg-surface hover:bg-white border border-border-brand rounded-2xl transition-all group hover:shadow-md"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#E40000] rounded-xl flex items-center justify-center overflow-hidden">
                            <img 
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Airtel_logo.svg/2560px-Airtel_logo.svg.png" 
                              alt="Airtel" 
                              className="w-8 h-8 object-contain filter brightness-0 invert"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="text-left">
                            <h4 className="font-bold dark:text-white">Airtel Pay</h4>
                            <p className="text-xs text-text-secondary">Mobile Money</p>
                          </div>
                        </div>
                        <ArrowRight size={20} className="text-text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="bg-surface p-4 text-center border-t border-border-brand">
                  <p className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">
                    Secure Payment Gateway
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-surface rounded-2xl border border-border-brand overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full p-6 text-left flex items-center justify-between group"
                >
                  <h4 className={`text-lg font-bold transition-colors ${openFaq === i ? 'text-accent' : 'text-primary group-hover:text-accent'}`}>
                    {faq.q}
                  </h4>
                  <ChevronDown 
                    size={20} 
                    className={`text-text-secondary transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-accent' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="h-px bg-border-brand mb-6" />
                        <p className="text-text-secondary leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
