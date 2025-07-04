export type Review = {
  id: string;
  authorId: string;
  rating: number; // e.g., 1 to 5 stars
  comment?: string; // Optional feedback comment
  date: Date; // Date of the review
  placeId: string; // ID of the room being reviewed
  bookingId: string; // ID of the booking associated with the review
};

const reviews: Review[] = [
  {
    id: '1',
    placeId: '1',
    bookingId: '101',
    authorId: '1',
    rating: 5,
    comment: 'Amazing stay! Highly recommend this place.',
    date: new Date('2023-10-01'),
  },
  {
    id: '2',
    placeId: '2',
    bookingId: '102',
    authorId: '2',
    rating: 4,
    comment: 'Very comfortable and clean. Would stay again.',
    date: new Date('2023-10-02'),
  },
  {
    id: '3',
    placeId: '1',
    bookingId: '103',
    authorId: '3',
    rating: 3,
    comment: 'Decent place, but could use some improvements.',
    date: new Date('2023-10-03'),
  },
  {
    id: '4',
    placeId: '3',
    bookingId: '104',
    authorId: '4',
    rating: 5,
    comment: 'Fantastic experience, will book again!',
    date: new Date('2023-10-04'),
  },
  {
    id: '5',
    placeId: '2',
    bookingId: '105',
    authorId: '5',
    rating: 4,
    comment: 'Nice location and friendly host.',
    date: new Date('2023-10-05'),
  },
  {
    id: '6',
    placeId: '1',
    bookingId: '106',
    authorId: '6',
    rating: 2,
    comment: 'Not as expected, but okay for the price.',
    date: new Date('2023-10-06'),
  },
  {
    id: '7',
    placeId: '4',
    bookingId: '107',
    authorId: '7',
    rating: 5,
    comment: 'Loved everything about this place!',
    date: new Date('2023-10-07'),
  },
  {
    id: '8',
    placeId: '3',
    bookingId: '108',
    authorId: '8',
    rating: 3,
    comment: 'Average stay, nothing special.',
    date: new Date('2023-10-08'),
  },
  {
    id: '9',
    placeId: '2',
    bookingId: '109',
    authorId: '9',
    rating: 4,
    comment: 'Clean and cozy, would recommend.',
    date: new Date('2023-10-09'),
  },
  {
    id: '10',
    placeId: '1',
    bookingId: '110',
    authorId: '10',
    rating: 5,
    comment: 'Exceptional service and amenities.',
    date: new Date('2023-10-10'),
  },
  {
    id: '11',
    placeId: '4',
    bookingId: '111',
    authorId: '11',
    rating: 4,
    comment: 'Great value for money.',
    date: new Date('2023-10-11'),
  },
  {
    id: '12',
    placeId: '3',
    bookingId: '112',
    authorId: '12',
    rating: 3,
    comment: 'Good, but a bit noisy at night.',
    date: new Date('2023-10-12'),
  },
  {
    id: '13',
    placeId: '2',
    bookingId: '113',
    authorId: '13',
    rating: 5,
    comment: 'Perfect for a weekend getaway.',
    date: new Date('2023-10-13'),
  },
  {
    id: '14',
    placeId: '1',
    bookingId: '114',
    authorId: '14',
    rating: 4,
    comment: 'Spacious and well-equipped.',
    date: new Date('2023-10-14'),
  },
  {
    id: '15',
    placeId: '4',
    bookingId: '115',
    authorId: '15',
    rating: 2,
    comment: 'Could be cleaner.',
    date: new Date('2023-10-15'),
  },
  {
    id: '16',
    placeId: '3',
    bookingId: '116',
    authorId: '16',
    rating: 5,
    comment: 'Absolutely loved it!',
    date: new Date('2023-10-16'),
  },
  {
    id: '17',
    placeId: '2',
    bookingId: '117',
    authorId: '17',
    rating: 3,
    comment: 'Decent, but expected more.',
    date: new Date('2023-10-17'),
  },
  {
    id: '18',
    placeId: '1',
    bookingId: '118',
    authorId: '18',
    rating: 4,
    comment: 'Nice decor and comfortable bed.',
    date: new Date('2023-10-18'),
  },
  {
    id: '19',
    placeId: '4',
    bookingId: '119',
    authorId: '19',
    rating: 5,
    comment: 'Host was very accommodating.',
    date: new Date('2023-10-19'),
  },
  {
    id: '20',
    placeId: '3',
    bookingId: '120',
    authorId: '20',
    rating: 4,
    comment: 'Good location, close to everything.',
    date: new Date('2023-10-20'),
  },
  {
    id: '21',
    placeId: '2',
    bookingId: '121',
    authorId: '21',
    rating: 3,
    comment: 'Average experience.',
    date: new Date('2023-10-21'),
  },
  {
    id: '22',
    placeId: '1',
    bookingId: '122',
    authorId: '22',
    rating: 5,
    comment: 'Would definitely come back!',
    date: new Date('2023-10-22'),
  },
  {
    id: '23',
    placeId: '4',
    bookingId: '123',
    authorId: '23',
    rating: 4,
    comment: 'Nice and quiet neighborhood.',
    date: new Date('2023-10-23'),
  },
  {
    id: '24',
    placeId: '3',
    bookingId: '124',
    authorId: '24',
    rating: 2,
    comment: 'Not very clean.',
    date: new Date('2023-10-24'),
  },
  {
    id: '25',
    placeId: '2',
    bookingId: '125',
    authorId: '25',
    rating: 5,
    comment: 'Everything was perfect.',
    date: new Date('2023-10-25'),
  },
  {
    id: '26',
    placeId: '1',
    bookingId: '126',
    authorId: '26',
    rating: 4,
    comment: 'Great amenities and location.',
    date: new Date('2023-10-26'),
  },
  {
    id: '27',
    placeId: '4',
    bookingId: '127',
    authorId: '27',
    rating: 3,
    comment: 'Good for a short stay.',
    date: new Date('2023-10-27'),
  },
  {
    id: '28',
    placeId: '3',
    bookingId: '128',
    authorId: '28',
    rating: 5,
    comment: 'Highly recommended!',
    date: new Date('2023-10-28'),
  },
  {
    id: '29',
    placeId: '2',
    bookingId: '129',
    authorId: '29',
    rating: 4,
    comment: 'Nice view from the window.',
    date: new Date('2023-10-29'),
  },
  {
    id: '30',
    placeId: '1',
    bookingId: '130',
    authorId: '30',
    rating: 3,
    comment: 'Okay for the price.',
    date: new Date('2023-10-30'),
  },
  {
    id: '31',
    placeId: '4',
    bookingId: '131',
    authorId: '31',
    rating: 5,
    comment: 'Wonderful host and beautiful place.',
    date: new Date('2023-10-31'),
  },
  {
    id: '32',
    placeId: '3',
    bookingId: '132',
    authorId: '32',
    rating: 4,
    comment: 'Comfortable and clean.',
    date: new Date('2023-11-01'),
  },
  {
    id: '33',
    placeId: '2',
    bookingId: '133',
    authorId: '33',
    rating: 2,
    comment: 'Needs improvement.',
    date: new Date('2023-11-02'),
  },
  {
    id: '34',
    placeId: '1',
    bookingId: '134',
    authorId: '34',
    rating: 5,
    comment: 'Exceeded expectations!',
    date: new Date('2023-11-03'),
  },
  {
    id: '35',
    placeId: '4',
    bookingId: '135',
    authorId: '35',
    rating: 4,
    comment: 'Very nice and peaceful.',
    date: new Date('2023-11-04'),
  },
  {
    id: '36',
    placeId: '3',
    bookingId: '136',
    authorId: '36',
    rating: 3,
    comment: 'Average, but good value.',
    date: new Date('2023-11-05'),
  },
  {
    id: '37',
    placeId: '2',
    bookingId: '137',
    authorId: '37',
    rating: 5,
    comment: 'Loved the decor!',
    date: new Date('2023-11-06'),
  },
  {
    id: '38',
    placeId: '1',
    bookingId: '138',
    authorId: '38',
    rating: 4,
    comment: 'Great for families.',
    date: new Date('2023-11-07'),
  },
  {
    id: '39',
    placeId: '4',
    bookingId: '139',
    authorId: '39',
    rating: 3,
    comment: 'Good, but could be better.',
    date: new Date('2023-11-08'),
  },
  {
    id: '40',
    placeId: '3',
    bookingId: '140',
    authorId: '40',
    rating: 5,
    comment: 'Amazing experience!',
    date: new Date('2023-11-09'),
  },
  {
    id: '41',
    placeId: '2',
    bookingId: '141',
    authorId: '41',
    rating: 4,
    comment: 'Very comfortable stay.',
    date: new Date('2023-11-10'),
  },
  {
    id: '42',
    placeId: '1',
    bookingId: '142',
    authorId: '42',
    rating: 2,
    comment: 'Not what I expected.',
    date: new Date('2023-11-11'),
  },
  {
    id: '43',
    placeId: '4',
    bookingId: '143',
    authorId: '43',
    rating: 5,
    comment: 'Perfect in every way.',
    date: new Date('2023-11-12'),
  },
  {
    id: '44',
    placeId: '3',
    bookingId: '144',
    authorId: '44',
    rating: 4,
    comment: 'Nice and clean.',
    date: new Date('2023-11-13'),
  },
  {
    id: '45',
    placeId: '2',
    bookingId: '145',
    authorId: '45',
    rating: 3,
    comment: 'Good for a short visit.',
    date: new Date('2023-11-14'),
  },
  {
    id: '46',
    placeId: '1',
    bookingId: '146',
    authorId: '46',
    rating: 5,
    comment: 'Would stay again!',
    date: new Date('2023-11-15'),
  },
  {
    id: '47',
    placeId: '4',
    bookingId: '147',
    authorId: '47',
    rating: 4,
    comment: 'Very nice host.',
    date: new Date('2023-11-16'),
  },
  {
    id: '48',
    placeId: '3',
    bookingId: '148',
    authorId: '48',
    rating: 2,
    comment: 'Needs better maintenance.',
    date: new Date('2023-11-17'),
  },
  {
    id: '49',
    placeId: '2',
    bookingId: '149',
    authorId: '49',
    rating: 5,
    comment: 'Fantastic place!',
    date: new Date('2023-11-18'),
  },
  {
    id: '50',
    placeId: '1',
    bookingId: '150',
    authorId: '50',
    rating: 4,
    comment: 'Great location.',
    date: new Date('2023-11-19'),
  },
  {
    id: '51',
    placeId: '4',
    bookingId: '151',
    authorId: '51',
    rating: 3,
    comment: 'Average stay.',
    date: new Date('2023-11-20'),
  },
  {
    id: '52',
    placeId: '3',
    bookingId: '152',
    authorId: '52',
    rating: 5,
    comment: 'Loved the ambiance.',
    date: new Date('2023-11-21'),
  },
  {
    id: '53',
    placeId: '2',
    bookingId: '153',
    authorId: '53',
    rating: 4,
    comment: 'Very clean and tidy.',
    date: new Date('2023-11-22'),
  },
  {
    id: '54',
    placeId: '1',
    bookingId: '154',
    authorId: '54',
    rating: 3,
    comment: 'Good, but noisy.',
    date: new Date('2023-11-23'),
  },
  {
    id: '55',
    placeId: '4',
    bookingId: '155',
    authorId: '55',
    rating: 5,
    comment: 'Amazing host!',
    date: new Date('2023-11-24'),
  },
  {
    id: '56',
    placeId: '3',
    bookingId: '156',
    authorId: '56',
    rating: 4,
    comment: 'Nice and spacious.',
    date: new Date('2023-11-25'),
  },
  {
    id: '57',
    placeId: '2',
    bookingId: '157',
    authorId: '57',
    rating: 2,
    comment: 'Could be better.',
    date: new Date('2023-11-26'),
  },
  {
    id: '58',
    placeId: '1',
    bookingId: '158',
    authorId: '58',
    rating: 5,
    comment: 'Perfect for families.',
    date: new Date('2023-11-27'),
  },
  {
    id: '59',
    placeId: '4',
    bookingId: '159',
    authorId: '59',
    rating: 4,
    comment: 'Very comfortable.',
    date: new Date('2023-11-28'),
  },
  {
    id: '60',
    placeId: '3',
    bookingId: '160',
    authorId: '60',
    rating: 3,
    comment: 'Good, but needs improvement.',
    date: new Date('2023-11-29'),
  },
  {
    id: '61',
    placeId: '2',
    bookingId: '161',
    authorId: '61',
    rating: 5,
    comment: 'Excellent stay!',
    date: new Date('2023-11-30'),
  },
  {
    id: '62',
    placeId: '1',
    bookingId: '162',
    authorId: '62',
    rating: 4,
    comment: 'Nice and quiet.',
    date: new Date('2023-12-01'),
  },
  {
    id: '63',
    placeId: '4',
    bookingId: '163',
    authorId: '63',
    rating: 3,
    comment: 'Average experience.',
    date: new Date('2023-12-02'),
  },
  {
    id: '64',
    placeId: '3',
    bookingId: '164',
    authorId: '64',
    rating: 5,
    comment: 'Loved the place!',
    date: new Date('2023-12-03'),
  },
  {
    id: '65',
    placeId: '2',
    bookingId: '165',
    authorId: '65',
    rating: 4,
    comment: 'Very nice and clean.',
    date: new Date('2023-12-04'),
  },
  {
    id: '66',
    placeId: '1',
    bookingId: '166',
    authorId: '66',
    rating: 2,
    comment: 'Not very clean.',
    date: new Date('2023-12-05'),
  },
  {
    id: '67',
    placeId: '4',
    bookingId: '167',
    authorId: '67',
    rating: 5,
    comment: 'Amazing experience.',
    date: new Date('2023-12-06'),
  },
  {
    id: '68',
    placeId: '3',
    bookingId: '168',
    authorId: '68',
    rating: 4,
    comment: 'Nice and cozy.',
    date: new Date('2023-12-07'),
  },
  {
    id: '69',
    placeId: '2',
    bookingId: '169',
    authorId: '69',
    rating: 3,
    comment: 'Good for a short stay.',
    date: new Date('2023-12-08'),
  },
  {
    id: '70',
    placeId: '1',
    bookingId: '170',
    authorId: '70',
    rating: 5,
    comment: 'Would recommend!',
    date: new Date('2023-12-09'),
  },
  {
    id: '71',
    placeId: '4',
    bookingId: '171',
    authorId: '71',
    rating: 4,
    comment: 'Very comfortable.',
    date: new Date('2023-12-10'),
  },
  {
    id: '72',
    placeId: '3',
    bookingId: '172',
    authorId: '72',
    rating: 3,
    comment: 'Average stay.',
    date: new Date('2023-12-11'),
  },
  {
    id: '73',
    placeId: '2',
    bookingId: '173',
    authorId: '73',
    rating: 5,
    comment: 'Fantastic host!',
    date: new Date('2023-12-12'),
  },
  {
    id: '74',
    placeId: '1',
    bookingId: '174',
    authorId: '74',
    rating: 4,
    comment: 'Nice and clean.',
    date: new Date('2023-12-13'),
  },
  {
    id: '75',
    placeId: '4',
    bookingId: '175',
    authorId: '75',
    rating: 2,
    comment: 'Could be better.',
    date: new Date('2023-12-14'),
  },
  {
    id: '76',
    placeId: '3',
    bookingId: '176',
    authorId: '76',
    rating: 5,
    comment: 'Loved the place!',
    date: new Date('2023-12-15'),
  },
  {
    id: '77',
    placeId: '2',
    bookingId: '177',
    authorId: '77',
    rating: 4,
    comment: 'Very nice and comfortable.',
    date: new Date('2023-12-16'),
  },
  {
    id: '78',
    placeId: '1',
    bookingId: '178',
    authorId: '78',
    rating: 3,
    comment: 'Good, but noisy.',
    date: new Date('2023-12-17'),
  },
  {
    id: '79',
    placeId: '4',
    bookingId: '179',
    authorId: '79',
    rating: 5,
    comment: 'Amazing stay!',
    date: new Date('2023-12-18'),
  },
  {
    id: '80',
    placeId: '3',
    bookingId: '180',
    authorId: '80',
    rating: 4,
    comment: 'Nice and spacious.',
    date: new Date('2023-12-19'),
  },
  {
    id: '81',
    placeId: '2',
    bookingId: '181',
    authorId: '81',
    rating: 3,
    comment: 'Average experience.',
    date: new Date('2023-12-20'),
  },
  {
    id: '82',
    placeId: '1',
    bookingId: '182',
    authorId: '82',
    rating: 5,
    comment: 'Would stay again!',
    date: new Date('2023-12-21'),
  },
  {
    id: '83',
    placeId: '4',
    bookingId: '183',
    authorId: '83',
    rating: 4,
    comment: 'Very nice host.',
    date: new Date('2023-12-22'),
  },
  {
    id: '84',
    placeId: '3',
    bookingId: '184',
    authorId: '84',
    rating: 2,
    comment: 'Needs better maintenance.',
    date: new Date('2023-12-23'),
  },
  {
    id: '85',
    placeId: '2',
    bookingId: '185',
    authorId: '85',
    rating: 5,
    comment: 'Fantastic place!',
    date: new Date('2023-12-24'),
  },
  {
    id: '86',
    placeId: '1',
    bookingId: '186',
    authorId: '86',
    rating: 4,
    comment: 'Great location.',
    date: new Date('2023-12-25'),
  },
  {
    id: '87',
    placeId: '4',
    bookingId: '187',
    authorId: '87',
    rating: 3,
    comment: 'Average stay.',
    date: new Date('2023-12-26'),
  },
  {
    id: '88',
    placeId: '3',
    bookingId: '188',
    authorId: '88',
    rating: 5,
    comment: 'Loved the ambiance.',
    date: new Date('2023-12-27'),
  },
  {
    id: '89',
    placeId: '2',
    bookingId: '189',
    authorId: '89',
    rating: 4,
    comment: 'Very clean and tidy.',
    date: new Date('2023-12-28'),
  },
  {
    id: '90',
    placeId: '1',
    bookingId: '190',
    authorId: '90',
    rating: 3,
    comment: 'Good, but noisy.',
    date: new Date('2023-12-29'),
  },
  {
    id: '91',
    placeId: '4',
    bookingId: '191',
    authorId: '91',
    rating: 5,
    comment: 'Amazing host!',
    date: new Date('2023-12-30'),
  },
  {
    id: '92',
    placeId: '3',
    bookingId: '192',
    authorId: '92',
    rating: 4,
    comment: 'Nice and spacious.',
    date: new Date('2023-12-31'),
  },
  {
    id: '93',
    placeId: '2',
    bookingId: '193',
    authorId: '93',
    rating: 2,
    comment: 'Could be better.',
    date: new Date('2024-01-01'),
  },
  {
    id: '94',
    placeId: '1',
    bookingId: '194',
    authorId: '94',
    rating: 5,
    comment: 'Perfect for families.',
    date: new Date('2024-01-02'),
  },
  {
    id: '95',
    placeId: '4',
    bookingId: '195',
    authorId: '95',
    rating: 4,
    comment: 'Very comfortable.',
    date: new Date('2024-01-03'),
  },
  {
    id: '96',
    placeId: '3',
    bookingId: '196',
    authorId: '96',
    rating: 3,
    comment: 'Good, but needs improvement.',
    date: new Date('2024-01-04'),
  },
  {
    id: '97',
    placeId: '2',
    bookingId: '197',
    authorId: '97',
    rating: 5,
    comment: 'Excellent stay!',
    date: new Date('2024-01-05'),
  },
  {
    id: '98',
    placeId: '1',
    bookingId: '198',
    authorId: '98',
    rating: 4,
    comment: 'Nice and quiet.',
    date: new Date('2024-01-06'),
  },
  {
    id: '99',
    placeId: '4',
    bookingId: '199',
    authorId: '99',
    rating: 3,
    comment: 'Average experience.',
    date: new Date('2024-01-07'),
  },
  {
    id: '100',
    placeId: '3',
    bookingId: '200',
    authorId: '100',
    rating: 5,
    comment: 'Loved the place!',
    date: new Date('2024-01-08'),
  },
  {
    id: '101',
    placeId: '2',
    bookingId: '201',
    authorId: '101',
    rating: 4,
    comment: 'Very nice and clean.',
    date: new Date('2024-01-09'),
  },
  {
    id: '102',
    placeId: '1',
    bookingId: '202',
    authorId: '102',
    rating: 2,
    comment: 'Not very clean.',
    date: new Date('2024-01-10'),
  },
];
export default reviews;
