import React from 'react';
import { HOTEL_ADDRESS, HOTEL_EMAIL, HOTEL_PHONE } from '../constants';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { PageRoute } from '../types';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-black text-white pt-16 pb-8 border-t border-brand-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-brand-gold mb-4">BENIN CITY CENTER HOTEL</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">{t('footer.explore')}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to={PageRoute.HOME} className="hover:text-brand-gold transition-colors">{t('nav.home')}</Link></li>
              <li><Link to={PageRoute.ROOMS} className="hover:text-brand-gold transition-colors">{t('nav.rooms')}</Link></li>
              <li><Link to={PageRoute.RESTAURANT} className="hover:text-brand-gold transition-colors">{t('nav.restaurant')}</Link></li>
              <li><Link to={PageRoute.CONTACT} className="hover:text-brand-gold transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">{t('footer.contact')}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-gold shrink-0" size={18} />
                <span>{HOTEL_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-gold shrink-0" size={18} />
                <a href={`tel:${HOTEL_PHONE}`} className="hover:text-white">{HOTEL_PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-gold shrink-0" size={18} />
                <a href={`mailto:${HOTEL_EMAIL}`} className="hover:text-white">{HOTEL_EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};