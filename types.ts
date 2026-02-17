export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  capacity: number;
  features: string[];
  size: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Starter' | 'Main' | 'Dessert' | 'Drink';
}

export interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  guests: number;
  message: string;
}

export enum PageRoute {
  HOME = '/',
  ROOMS = '/rooms',
  RESTAURANT = '/restaurant',
  CONTACT = '/contact',
}