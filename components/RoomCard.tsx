import React from 'react';
import { Room } from '../types';
import { Wifi, User, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface RoomCardProps {
  room: Room;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const { t } = useLanguage();
  return (
    <div className="group bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-brand-gold">
      <div className="relative overflow-hidden h-64">
        <img 
          src={room.image} 
          alt={room.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-brand-black text-brand-gold px-3 py-1 text-sm font-bold">
          {room.price.toLocaleString()} {room.currency} {t('rooms.night')}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold text-brand-black mb-2">{room.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{room.description}</p>
        
        <div className="flex items-center justify-between border-t border-gray-100 pt-4 mb-6 text-gray-500 text-xs uppercase tracking-wider">
          <div className="flex items-center gap-1">
            <User size={14} className="text-brand-gold" />
            <span>{room.capacity} {t('rooms.guests')}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize size={14} className="text-brand-gold" />
            <span>{room.size}</span>
          </div>
          <div className="flex items-center gap-1">
            <Wifi size={14} className="text-brand-gold" />
            <span>WiFi</span>
          </div>
        </div>

        <Link 
          to="/contact" 
          className="block w-full bg-brand-black text-white text-center py-3 text-sm font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors"
        >
          {t('rooms.bookBtn')}
        </Link>
      </div>
    </div>
  );
};