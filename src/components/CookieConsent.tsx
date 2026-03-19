import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X, ChevronRight, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const COOKIE_CONSENT_KEY = 'vfl_cookie_consent';

interface ConsentCategory {
  id: string;
  title: string;
  description: string;
  alwaysActive?: boolean;
  enabled: boolean;
}

const CookieConsent = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    const hasConsented = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasConsented) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000); // Show after 3 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const [consents, setConsents] = useState<ConsentCategory[]>([
    {
      id: 'necessary',
      title: 'Necessary',
      description: 'Necessary cookies are essential for the website to function properly. They enable core features such as security, network management, and accessibility. These cookies do not store any personally identifiable information.',
      alwaysActive: true,
      enabled: true,
    },
    {
      id: 'functional',
      title: 'Functional',
      description: 'Functional cookies help the website remember your preferences and provide enhanced features such as language selection or personalized settings. Disabling these cookies may affect certain functionality on the website.',
      enabled: false,
    },
    {
      id: 'analytics',
      title: 'Analytics',
      description: 'Analytics cookies help us understand how visitors interact with the website by collecting anonymous usage information. This helps us improve performance and user experience.',
      enabled: false,
    },
    {
      id: 'marketing',
      title: 'Marketing',
      description: 'Marketing cookies are used to track visitors across websites in order to display relevant advertisements and measure the effectiveness of marketing campaigns.',
      enabled: false,
    },
    {
      id: 'social-media',
      title: 'Social Media',
      description: 'Social media cookies enable sharing content from our website to social platforms and allow interaction with embedded social media features.',
      enabled: false,
    },
  ]);

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  const handleToggleConsent = (id: string) => {
    setConsents(prev => prev.map(c => 
      c.id === id && !c.alwaysActive ? { ...c, enabled: !c.enabled } : c
    ));
  };

  const handleAcceptAll = () => {
    const updatedConsents = consents.map(c => ({ ...c, enabled: true }));
    setConsents(updatedConsents);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(updatedConsents));
    setIsOpen(false);
  };

  const handleRejectAll = () => {
    const updatedConsents = consents.map(c => ({ ...c, enabled: c.alwaysActive ? true : false }));
    setConsents(updatedConsents);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(updatedConsents));
    setIsOpen(false);
  };

  const handleSave = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consents));
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-accent transition-all group"
        aria-label="Cookie Settings"
      >
        <Cookie size={24} className="group-hover:rotate-12 transition-transform" />
      </button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] bg-bg-main"
            >
              {/* Header */}
              <div className="p-6 border-b flex items-center justify-between border-border-brand">
                <h2 className="text-2xl font-bold text-primary dark:text-white">Customize Consent Preferences</h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto flex-grow space-y-6">
                <p className={`leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-text-secondary'
                }`}>
                  We use cookies to help you navigate efficiently and perform certain functions. Detailed information about the cookies we use is available under each consent category below.
                </p>
                <p className={`leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-text-secondary'
                }`}>
                  You can choose which categories you want to allow. Necessary cookies are required for the website to function properly and cannot be disabled.
                </p>

                <div className="space-y-4">
                  {consents.map((category) => (
                    <div key={category.id} className="border rounded-xl overflow-hidden border-border-brand">
                      <div 
                        className="p-4 flex items-center justify-between cursor-pointer transition-colors hover:bg-surface"
                        onClick={() => toggleCategory(category.id)}
                      >
                        <div className="flex items-center gap-3">
                          {expandedCategory === category.id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                          <span className="font-bold text-primary dark:text-white">{category.title}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          {category.alwaysActive ? (
                            <span className="text-secondary font-bold text-sm uppercase">Always Active</span>
                          ) : (
                            <label className="relative inline-flex items-center cursor-pointer" onClick={(e) => e.stopPropagation()}>
                              <input 
                                type="checkbox" 
                                className="sr-only peer" 
                                checked={category.enabled}
                                onChange={() => handleToggleConsent(category.id)}
                              />
                              <div className="w-11 h-6 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent bg-gray-200 dark:bg-gray-700"></div>
                            </label>
                          )}
                        </div>
                      </div>
                      <AnimatePresence>
                        {expandedCategory === category.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 pt-0 text-sm leading-relaxed border-t text-text-secondary dark:text-gray-300 border-border-brand bg-surface/50">
                              {category.description}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t flex flex-col sm:flex-row gap-4 items-center justify-between border-border-brand bg-surface">
                <div className="flex gap-4 w-full sm:w-auto">
                  <button 
                    onClick={handleRejectAll}
                    className="flex-1 sm:flex-none px-6 py-2 border font-bold rounded-xl transition-all border-primary dark:border-white text-primary dark:text-white hover:bg-primary dark:hover:bg-white hover:text-white dark:hover:text-primary"
                  >
                    Reject All
                  </button>
                  <button 
                    onClick={handleSave}
                    className="flex-1 sm:flex-none px-6 py-2 border font-bold rounded-xl transition-all border-primary dark:border-white text-primary dark:text-white hover:bg-primary dark:hover:bg-white hover:text-white dark:hover:text-primary"
                  >
                    Save My Preferences
                  </button>
                </div>
                <button 
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto px-10 py-2 bg-primary text-white font-bold rounded-xl hover:bg-accent transition-all"
                >
                  Accept All
                </button>
              </div>
              
              <div className="py-2 text-center border-t space-y-1 bg-bg-main border-border-brand">
                <p className="text-[10px] uppercase tracking-widest font-bold text-primary dark:text-white">
                  Powered by Voices For Labour
                </p>
                <p className="text-[8px] uppercase tracking-tighter text-text-secondary/60 dark:text-gray-500">
                  Developed by marsrocks Technologies
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;
