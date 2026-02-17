import React from 'react';
import { Link } from 'react-router-dom';
import { getRooms } from '../constants';
import { RoomCard } from '../components/RoomCard';
import { Wifi, MapPin, Coffee, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const rooms = getRooms(language);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="absolute inset-0 bg-brand-black/60"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-brand-gold text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-in-up">
            {t('hero.welcome')}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')} <br/>
            <span className="text-brand-gold italic">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto font-light">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-brand-gold text-brand-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              {t('hero.book')}
            </Link>
            <Link 
              to="/rooms" 
              className="border border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-brand-black transition-colors"
            >
              {t('hero.view')}
            </Link>
          </div>
        </div>
      </section>

      {/* Features / Amenities */}
      <section className="py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-black mb-4">{t('features.title')}</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <MapPin size={32} />, title: t('features.locTitle'), desc: t('features.locDesc') },
              { icon: <Wifi size={32} />, title: t('features.wifiTitle'), desc: t('features.wifiDesc') },
              { icon: <Coffee size={32} />, title: t('features.foodTitle'), desc: t('features.foodDesc') },
              { icon: <Shield size={32} />, title: t('features.secTitle'), desc: t('features.secDesc') },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="text-brand-gold mb-4 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <p className="text-brand-gold text-sm uppercase tracking-widest font-bold mb-2">{t('rooms.homeSubtitle')}</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-black">{t('rooms.homeTitle')}</h2>
            </div>
            <Link to="/rooms" className="hidden md:block text-brand-black border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors text-sm font-bold uppercase tracking-widest">
              {t('rooms.viewAll')}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.slice(0, 3).map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/rooms" className="text-brand-black border-b-2 border-brand-gold pb-1 text-sm font-bold uppercase tracking-widest">
              {t('rooms.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-darkGray relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-gray-400 mb-8 text-lg">
            {t('cta.subtitle')}
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-brand-gold text-brand-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm"
          >
            {t('cta.btn')}
          </Link>
        </div>
      </section>
    </div>
  );
};