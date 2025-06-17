`use server`;

import { createContext, useContext } from 'react';
import { Place } from '@/data/place';
import { Booking } from '@/data/booking';
import { Review } from '@/data/review';
import { User } from '../lib/usersContext';

export type DataSource = {
  places: Place[];
  bookings: Booking[];
  reviews: Review[];
  users: User[];
};