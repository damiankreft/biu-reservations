import { Booking } from '@/lib/bookingsContext';

const bookings: Booking[] = [
  {
    id: '1',
    roomId: '101',
    userId: 'user1',
    startDate: new Date('2023-10-01'),
    endDate: new Date('2023-10-05'),
    guests: 2,
    statusChanges: [
      {
        name: 'pending',
        changedAt: new Date('2023-09-30'),
      },
      {
        name: 'confirmed',
        changedAt: new Date('2023-10-01'),
      },
    ],
  },
  {
    id: '2',
    roomId: '102',
    userId: 'user2',
    startDate: new Date('2023-10-02'),
    endDate: new Date('2023-10-06'),
    guests: 1,
    statusChanges: [
      {
        name: 'pending',
        changedAt: new Date('2023-10-01'),
      },
      {
        name: 'confirmed',
        changedAt: new Date('2023-10-02'),
      },
    ],
  },
];
export default bookings;
