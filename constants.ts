import { Room, MenuItem } from './types';
import { Language } from './context/LanguageContext';

export const HOTEL_PHONE = "+229 01 97 09 22 55"; 
export const HOTEL_EMAIL = "reservations@benincitycenterhotel.com";
export const HOTEL_ADDRESS = "Avenue Jean-Paul II, Cotonou, Benin";

// Internal data structure for multilingual support
const ROOMS_DATA = [
  {
    id: 'single-deluxe',
    name: { en: 'Deluxe Single', fr: 'Simple Deluxe' },
    description: { 
      en: 'Perfect for the solo business traveler. Features a workspace, high-speed Wi-Fi, and a premium queen-sized bed.',
      fr: 'Parfait pour le voyageur d\'affaires solo. Dispose d\'un espace de travail, Wi-Fi haut débit et un lit queen-size premium.'
    },
    price: 45000,
    currency: 'XOF',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop',
    capacity: 1,
    size: '25m²',
    features: {
      en: ['Queen Bed', 'Work Desk', 'Free Wi-Fi', 'Air Conditioning', 'Room Service'],
      fr: ['Lit Queen', 'Bureau', 'Wi-Fi Gratuit', 'Climatisation', 'Service en Chambre']
    }
  },
  {
    id: 'double-executive',
    name: { en: 'Executive Double', fr: 'Double Exécutive' },
    description: {
      en: 'Spacious comfort for couples or executives desiring more room. Includes a city view and a sitting area.',
      fr: 'Confort spacieux pour couples ou cadres désirant plus d\'espace. Inclut une vue sur la ville et un coin salon.'
    },
    price: 65000,
    currency: 'XOF',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',
    capacity: 2,
    size: '35m²',
    features: {
      en: ['King Bed', 'City View', 'Smart TV', 'Mini Bar', 'Rain Shower'],
      fr: ['Lit King', 'Vue Ville', 'Smart TV', 'Mini Bar', 'Douche Pluie']
    }
  },
  {
    id: 'royal-suite',
    name: { en: 'Royal Suite', fr: 'Suite Royale' },
    description: {
      en: 'The pinnacle of luxury in Cotonou. Separate living room, kitchenette, and panoramic views.',
      fr: 'Le summum du luxe à Cotonou. Salon séparé, kitchenette et vues panoramiques.'
    },
    price: 120000,
    currency: 'XOF',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop',
    capacity: 4,
    size: '60m²',
    features: {
      en: ['2 King Beds', 'Living Area', 'Kitchenette', 'Bathtub', 'VIP Access'],
      fr: ['2 Lits King', 'Salon', 'Kitchenette', 'Baignoire', 'Accès VIP']
    }
  }
];

const MENU_DATA = [
  { id: '1', name: { en: 'Carpaccio de bœuf', fr: 'Carpaccio de bœuf' }, description: { en: 'Thinly sliced raw beef, parmesan, capers.', fr: 'Bœuf cru finement tranché, parmesan, câpres.' }, price: 8000, category: 'Starter' },
  { id: '2', name: { en: 'Grilled Capitaine Fish', fr: 'Capitaine Braisé' }, description: { en: 'Local catch served with aloco and spicy sauce.', fr: 'Pêche locale servie avec aloco et sauce piquante.' }, price: 12000, category: 'Main' },
  { id: '3', name: { en: 'Benin Spiced Chicken', fr: 'Poulet Epicé du Bénin' }, description: { en: 'Roasted chicken marinated in local spices.', fr: 'Poulet rôti mariné aux épices locales.' }, price: 10000, category: 'Main' },
  { id: '4', name: { en: 'Fondant au Chocolat', fr: 'Fondant au Chocolat' }, description: { en: 'Warm chocolate cake with vanilla ice cream.', fr: 'Gâteau au chocolat chaud avec glace vanille.' }, price: 5000, category: 'Dessert' },
];

export const getRooms = (lang: Language): Room[] => {
  return ROOMS_DATA.map(room => ({
    ...room,
    name: room.name[lang],
    description: room.description[lang],
    features: room.features[lang]
  }));
};

export const getMenu = (lang: Language): MenuItem[] => {
  return MENU_DATA.map(item => ({
    ...item,
    name: item.name[lang],
    description: item.description[lang],
    category: item.category as any // Keeping category simpler for now
  }));
};