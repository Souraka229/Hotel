import React, { useState } from 'react';
import { ReservationForm } from '../types';
import { HOTEL_ADDRESS, HOTEL_EMAIL, HOTEL_PHONE, getRooms } from '../constants';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const rooms = getRooms(language);

  const [formData, setFormData] = useState<ReservationForm>({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'single-deluxe',
    guests: 1,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Reservation Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-20">
      <div className="bg-brand-black py-12 text-center text-white">
        <h1 className="font-serif text-4xl font-bold">{t('contact.pageTitle')}</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <div>
            <h2 className="font-serif text-2xl font-bold mb-6 text-brand-black">{t('contact.touchTitle')}</h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-brand-gold/10 p-3 rounded-full text-brand-gold">
                   <MapPin size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">{t('contact.addressTitle')}</h4>
                    <p className="text-gray-600">{HOTEL_ADDRESS}</p>
                    <p className="text-xs text-gray-500 mt-1">{t('contact.addressDesc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-gold/10 p-3 rounded-full text-brand-gold">
                   <Phone size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">{t('contact.phoneTitle')}</h4>
                    <p className="text-gray-600">{HOTEL_PHONE}</p>
                    <p className="text-xs text-gray-500 mt-1">{t('contact.phoneDesc')}</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="bg-brand-gold/10 p-3 rounded-full text-brand-gold">
                   <Mail size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">{t('contact.emailTitle')}</h4>
                    <p className="text-gray-600">{HOTEL_EMAIL}</p>
                </div>
              </div>
            </div>

            {/* Simulated Google Map */}
            <div className="w-full h-64 bg-gray-200 rounded-sm overflow-hidden relative group">
               <img 
                 src="https://static.vecteezy.com/system/resources/previews/000/552/397/original/map-location-vector.jpg" 
                 alt="Map Placeholder" 
                 className="w-full h-full object-cover opacity-80"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                   <a 
                     href="https://maps.google.com/?q=Cotonou" 
                     target="_blank" 
                     rel="noreferrer"
                     className="bg-white px-6 py-2 shadow-lg font-bold text-sm text-brand-black hover:bg-brand-gold transition-colors"
                   >
                     {t('contact.mapBtn')}
                   </a>
               </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-white p-8 shadow-xl border-t-4 border-brand-gold">
            <h2 className="font-serif text-2xl font-bold mb-2 text-brand-black">{t('contact.formTitle')}</h2>
            <p className="text-gray-500 text-sm mb-6">{t('contact.formSubtitle')}</p>

            {submitted ? (
              <div className="bg-green-50 text-green-800 p-6 rounded text-center animate-pulse">
                <CheckCircle size={48} className="mx-auto mb-4" />
                <h3 className="font-bold text-xl">{t('contact.successTitle')}</h3>
                <p>{t('contact.successDesc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                     <label className="block text-xs font-bold uppercase text-gray-500 mb-1">{t('contact.labels.name')}</label>
                     <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-gold" placeholder={t('contact.placeholders.name')} />
                   </div>
                   <div>
                     <label className="block text-xs font-bold uppercase text-gray-500 mb-1">{t('contact.labels.phone')}</label>
                     <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-gold" placeholder={t('contact.placeholders.phone')} />
                   </div>
                </div>

                <div>
                   <label className="block text-xs font-bold uppercase text-gray-500 mb-1">{t('contact.labels.email')}</label>
                   <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-gold" placeholder={t('contact.placeholders.email')} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                     <label className="block text-xs font-bold uppercase text-gray-500 mb-1">{t('contact.labels.checkIn')}</label>
                     <input required type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-gold" />
                   </div>
                   <div>
                     <label className="block text-xs font-bold uppercase text-gray-500 mb-1">{t('contact.labels.checkOut')}</label>
                     <input required type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-gold" />
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                     <label className="block text-xs font-bold uppercase text-gray-500 mb-1">{t('contact.labels.roomType')}</label>
                     <select name="roomType" value={formData.roomType} onChange={handleChange} className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-gold bg-white">
                        {rooms.map(r => (
                            <option key={r.id} value={r.id}>{r.name} ({r.price.toLocaleString()} {r.currency})</option>
                        ))}
                     </select>
                   </div>
                   <div>
                     <label className="block text-xs font-bold uppercase text-gray-500 mb-1">{t('contact.labels.guests')}</label>
                     <input required type="number" min="1" max="5" name="guests" value={formData.guests} onChange={handleChange} className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-gold" />
                   </div>
                </div>

                <div>
                   <label className="block text-xs font-bold uppercase text-gray-500 mb-1">{t('contact.labels.special')}</label>
                   <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-gold" placeholder={t('contact.placeholders.special')}></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-black text-white font-bold uppercase tracking-widest py-4 hover:bg-brand-gold transition-colors">
                  {t('contact.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};