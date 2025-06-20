`use server`;

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

console.log('Loaded users:', users.length, users[0]);
export async function db(): Promise<DataSource> {
  return {
    places: await places,
    bookings: await bookings,
    reviews: await reviews,
    users: await users,
  };
}

export async function getUsers(): Promise<User[]> {
  const data = await db();
  return data.users;
}

export async function getPlaces(): Promise<Place[]> {
  const data = await db();
  return data.places;
}

export async function getBookings(): Promise<Booking[]> {
  const data = await db();
  return data.bookings;
}

export async function getReviews(): Promise<Review[]> {
  const data = await db();
  return data.reviews;
}
