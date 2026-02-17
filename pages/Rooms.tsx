import React from 'react';
import { getRooms } from '../constants';
import { RoomCard } from '../components/RoomCard';
import { useLanguage } from '../context/LanguageContext';

export const Rooms: React.FC = () => {
  const { t, language } = useLanguage();
  const rooms = getRooms(language);

  return (
    <div className="pt-20">
      <div className="bg-brand-black py-16 text-center text-white">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{t('rooms.pageTitle')}</h1>
        <p className="text-brand-gold text-sm uppercase tracking-widest">{t('rooms.pageSubtitle')}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 border-l-4 border-brand-gold shadow-sm">
          <h3 className="font-bold text-xl mb-2">{t('rooms.longStayTitle')}</h3>
          <p className="text-gray-600 mb-4">{t('rooms.longStayDesc')}</p>
          <a href="/contact" className="text-brand-gold font-bold hover:underline">{t('rooms.contactMgmt')}</a>
        </div>
      </div>
    </div>
  );
};