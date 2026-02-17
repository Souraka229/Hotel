import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { PageRoute } from '../types';
import { HOTEL_PHONE } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const navLinks = [
    { name: t('nav.home'), path: PageRoute.HOME },
    { name: t('nav.rooms'), path: PageRoute.ROOMS },
    { name: t('nav.restaurant'), path: PageRoute.RESTAURANT },
    { name: t('nav.contact'), path: PageRoute.CONTACT },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <span className={`font-serif text-2xl font-bold tracking-wider ${isScrolled ? 'text-brand-gold' : 'text-white'}`}>
              BENIN CITY
            </span>
            <span className={`text-[10px] tracking-[0.3em] uppercase ${isScrolled ? 'text-white' : 'text-gray-200'}`}>
              Center Hotel
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-widest hover:text-brand-gold transition-colors ${
                  location.pathname === link.path ? 'text-brand-gold' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className={`text-sm font-bold flex items-center gap-1 uppercase hover:text-brand-gold transition-colors ${
                isScrolled ? 'text-white' : 'text-white'
              }`}
            >
              <Globe size={14} />
              <span>{language === 'en' ? 'FR' : 'EN'}</span>
            </button>

            <a 
              href={`tel:${HOTEL_PHONE}`}
              className="bg-brand-gold text-brand-black px-6 py-2 rounded-sm font-bold text-sm hover:bg-white transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              <span>{t('nav.book')}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             {/* Mobile Lang Switcher */}
            <button 
              onClick={toggleLanguage}
              className="text-white font-bold text-sm uppercase"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-gold transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute w-full bg-brand-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 border-b border-brand-gold/20' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-medium tracking-wider ${
                location.pathname === link.path ? 'text-brand-gold' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={`tel:${HOTEL_PHONE}`}
            className="mt-4 bg-brand-gold text-brand-black px-8 py-3 rounded-sm font-bold w-full text-center"
          >
            {t('nav.call')}
          </a>
        </div>
      </div>
    </nav>
  );
};