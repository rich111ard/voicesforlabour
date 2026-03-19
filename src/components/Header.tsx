import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Sun, Moon, ChevronDown, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { LOGO_URL } from '../constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const darkHeroPaths = ['/', '/objectives', '/team', '/board', '/resources', '/media-center', '/donate', '/contact', '/thematic-areas'];
  const isDarkHeroPage = darkHeroPaths.includes(location.pathname) || 
                        location.pathname.startsWith('/resources/') || 
                        location.pathname.startsWith('/team/');
  const useWhiteText = (!scrolled && isDarkHeroPage) || theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenu(mobileSubmenu === name ? null : name);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/objectives',
      dropdown: [
        { name: 'Objectives', path: '/objectives' },
        { name: 'Thematic Areas', path: '/thematic-areas' },
        { name: 'Governance', path: '/governance' },
        { name: 'Team', path: '/team' },
        { name: 'Board', path: '/board' },
      ]
    },
    { 
      name: 'Programs', 
      path: '/projects'
    },
    { 
      name: 'Resources', 
      path: '/resources',
      dropdown: [
        { name: 'Reports', path: '/resources#reports' },
        { name: 'Fact Sheet', path: '/resources#fact-sheet' },
        { name: 'Policy Briefs', path: '/resources#policy-briefs' },
        { name: 'Annual Reports', path: '/resources#annual-reports' },
        { name: 'Position Papers', path: '/resources#position-papers' },
        { name: 'Model Workplace Policies', path: '/resources#model-workplace-policies' },
      ]
    },
    { 
      name: 'Media', 
      path: '/media-center',
      dropdown: [
        { name: 'Press Release', path: '/media-center#press-release' },
        { name: 'Videos', path: '/media-center#videos' },
        { name: 'Events', path: '/media-center#events' },
        { name: 'Podcast', path: '/media-center#podcast' },
        { name: 'News Links', path: '/media-center#news-links' },
        { name: 'Our Gallery', path: '/media-center#gallery' },
      ]
    },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg-main shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          {/* Logo Placeholder - In a real app, use the actual logo file */}
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl overflow-hidden">
             <img src={LOGO_URL} alt="Voices for Labour" className="w-full h-full object-contain bg-white dark:bg-gray-200" referrerPolicy="no-referrer" />
          </div>
          <span className={`font-bold text-xl hidden sm:block ${useWhiteText ? 'text-white' : 'text-primary'}`}>
            Voices For Labour
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className={`font-medium transition-colors flex items-center gap-1 group/nav-link ${useWhiteText ? 'text-white' : 'text-text-primary'} ${location.pathname === link.path ? 'text-accent' : ''}`}
              >
                <span className="group-hover/nav-link:!text-accent transition-colors">
                  {link.name}
                </span>
                {link.dropdown && <ChevronDown size={16} className={`transition-transform duration-300 group-hover/nav-link:!text-accent ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
              </Link>

              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 mt-2 w-64 rounded-2xl shadow-xl border overflow-hidden py-2 bg-bg-main border-border-brand"
                    >
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-6 py-3 text-sm font-medium transition-colors border-b last:border-0 flex items-center justify-between group/item text-text-primary dark:text-gray-200 border-border-brand"
                        >
                          <span className="group-hover/item:!text-accent transition-colors">
                            {subItem.name}
                          </span>
                          <span className="opacity-0 group-hover/item:opacity-100 transition-opacity text-accent">→</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${useWhiteText ? 'text-white hover:bg-white/10' : 'text-text-primary hover:bg-surface'}`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <Link to="/donate" className="btn-accent flex items-center gap-2 py-2 px-5">
            <Heart size={18} />
            Donate
          </Link>

          <Link 
            to="/staff-signin" 
            className={`p-2 rounded-full transition-colors ${useWhiteText ? 'text-white hover:bg-white/10' : 'text-text-primary hover:bg-surface'}`}
            aria-label="Staff Sign In"
          >
            <Shield size={20} />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${useWhiteText ? 'text-white' : 'text-text-primary'}`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
          <button className={`${useWhiteText ? 'text-white' : 'text-primary'} p-2`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} className={useWhiteText ? 'text-white' : 'text-primary'} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop to close on click or scroll outside */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[-1] xl:hidden"
              onClick={() => setIsOpen(false)}
              onWheel={() => setIsOpen(false)}
              onTouchMove={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden border-b overflow-y-auto max-h-[calc(100vh-80px)] bg-bg-main border-border-brand"
            >
              <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.path}
                      className="text-lg font-medium text-text-primary dark:text-white group/mobile-main"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="group-hover/mobile-main:!text-accent transition-colors">
                        {link.name}
                      </span>
                    </Link>
                    {link.dropdown && (
                      <button 
                        onClick={() => toggleMobileSubmenu(link.name)}
                        className="p-2 text-text-secondary dark:text-gray-400 hover:text-accent transition-colors"
                      >
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform duration-300 ${mobileSubmenu === link.name ? 'rotate-180' : ''}`} 
                        />
                      </button>
                    )}
                  </div>
                  {link.dropdown && (
                    <AnimatePresence>
                      {mobileSubmenu === link.name && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-4 flex flex-col gap-2 border-l-2 overflow-hidden border-surface"
                        >
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="text-sm font-medium text-text-secondary dark:text-gray-400 py-1 group/mobile-item"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="group-hover/mobile-item:!text-accent transition-colors">
                                {subItem.name}
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              <Link
                to="/donate"
                className="btn-accent text-center flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Heart size={18} />
                Donate Now
              </Link>
              <Link
                to="/staff-signin"
                className="text-center flex items-center justify-center gap-2 py-3 text-text-secondary dark:text-gray-400 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Shield size={18} />
                Staff Sign In
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </header>
  );
};

export default Header;
