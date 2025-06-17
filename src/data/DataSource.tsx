`use server`;

import { createContext, useContext } from 'react';
import places, { Place } from '@/data/place';
import { Booking } from '@/lib/bookingsContext';
import bookings from '@/data/booking';
import reviews, { Review } from '@/data/review';

import { User } from '../lib/usersContext';
import users from './user';

export type DataSource = {
  places: Place[];
  bookings: Booking[];
  reviews: Review[];
  users: User[];
};

export const DataSourceContext = {
  places,
  bookings,
  reviews,
  users,
};