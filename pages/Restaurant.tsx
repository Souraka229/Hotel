import React from 'react';
import { getMenu } from '../constants';
import { Utensils } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Restaurant: React.FC = () => {
  const { t, language } = useLanguage();
  const menu = getMenu(language);

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="relative bg-gray-900 py-24 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
            alt="Restaurant Ambience" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <Utensils size={48} className="mx-auto text-brand-gold mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">{t('restaurant.title')}</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200">
            {t('restaurant.subtitle')}
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6 text-brand-black">{t('restaurant.expTitle')}</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('restaurant.expDesc')}
            </p>
            <div className="mt-6 space-y-2">
              <p className="font-bold text-brand-black">{t('restaurant.breakfast')}:</p> <span className="text-gray-600">06:30 - 10:30</span>
              <p className="font-bold text-brand-black">{t('restaurant.lunch')}:</p> <span className="text-gray-600">12:00 - 15:00</span>
              <p className="font-bold text-brand-black">{t('restaurant.dinner')}:</p> <span className="text-gray-600">19:00 - 22:30</span>
            </div>
          </div>
          <div className="relative h-80 rounded shadow-xl overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
                alt="Food" 
             />
          </div>
        </div>

        {/* Menu Preview */}
        <div className="bg-brand-white p-8 md:p-12 rounded-sm border border-gray-200">
            <h3 className="text-center font-serif text-3xl font-bold mb-10">{t('restaurant.menuTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {menu.map(item => (
                    <div key={item.id} className="flex justify-between items-start border-b border-gray-200 pb-4">
                        <div>
                            <h4 className="font-bold text-brand-black text-lg">{item.name}</h4>
                            <p className="text-gray-500 text-sm italic">{item.description}</p>
                        </div>
                        <div className="text-brand-gold font-bold whitespace-nowrap ml-4">
                            {item.price.toLocaleString()} XOF
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <button className="bg-brand-black text-white px-8 py-3 uppercase text-sm font-bold tracking-widest hover:bg-brand-gold hover:text-brand-black transition-colors">
                    {t('restaurant.download')}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};