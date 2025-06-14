export default function bookingsReducer({ bookings, action}: {
  bookings: Booking[]; 
  action: { type: string; id?: string; text?: string; booking?: Booking;};
}) {
  switch (action.type) {
    case 'add': {
      return [
        ...bookings,
        action.booking
      ];
    }
    case 'change': {
      return bookings.map((t) => {
        if (t.id === action.booking?.id) {
          return action.booking;
        } else {
          return t;
        }
      });
    }
    case 'delete': {
      return bookings.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export function roomsReducer({rooms, action}: {
  rooms: Room[]; 
  action: { type: string; id?: string; text?: string; room?: Room;};
}) {
  switch (action.type) {
    case 'add': {
      return [
        ...rooms,
        action.room
      ];
    }
    case 'change': {
      return rooms.map((t) => {
        if (t.id === action.room?.id) {
          return action.room;
        } else {
          return t;
        }
      });
    }
    case 'delete': {
      return rooms.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export function reviewsReducer({reviews, action}: {
  reviews: Review[]; 
  action: { type: string; id?: string; review?: Review;};
}) {
  switch (action.type) {
    case 'add': {
      return [
        ...reviews,
        action.review
      ];
    }
    case 'change': {
      return reviews.map((t) => {
        if (t.id === action.review?.id) {
          return action.review;
        } else {
          return t;
        }
      });
    }
    case 'delete': {
      return reviews.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

type BookingStatus = 'pending' | 'confirmed' | 'cancelled';
enum HotelAmenities {
  AirConditioning = 'Air Conditioning',
  WiFi = 'WiFi',
  Parking = 'Parking',
  Breakfast = 'Breakfast',
  Spa = 'Spa',
  Gym = 'Gym',
}

type StatusChange = {
  name: BookingStatus;
  changedAt: Date;
};

export type Booking = {
  id: string;
  roomId: string;
  start: Date;
  end: Date;
  who: string;
  price: Number;
  selectedOptions?: {
    breakfast?: boolean; // Optional breakfast option
  };
  status: StatusChange[];

  feedback?: {
    rating: number; // e.g., 1 to 5 stars
    comment?: string; // Optional feedback comment
  };
  tags?: string[]; // Tags for categorization or filtering
};

export type Room = {
  id: string;
  name: string;
  description: string;
  image: string; // URL to the room image

  roomOwner: string; // Owner of the room, e.g., hotel name or owner ID
  type: 'single' | 'double' | 'suite'; // Room type

  amenities: HotelAmenities[]; // List of amenities available in the room
  maxGuests: number; // Maximum number of guests allowed in the room
  features: string[]; // List of features or special attributes of the room

  capacity: number;
  basePrice: number;
  bookings: Booking[];

  optionsAvailable?: {
    breakfast?: boolean; // Optional breakfast option
  };
}

type Review = {
  id: string;
  authorUserId: string;
  rating: number; // e.g., 1 to 5 stars
  comment?: string; // Optional feedback comment
  date: Date; // Date of the review
  roomId: string; // ID of the room being reviewed
  bookingId: string; // ID of the booking associated with the review
};

type User = {
  id: string;
  name: string;
  email: string;
  profilePicture?: string; // Optional profile picture URL
  role: 'guest' | 'host'; // User role, e.g., guest or host
  reviews?: Review[]; // Optional reviews written by the user
  bookings?: Booking[]; // Optional bookings made by the user
  rooms?: Room[]; // Optional rooms listed by the user
  createdAt: Date; // Date when the user was created
  updatedAt: Date; // Date when the user was last updated
  isActive: boolean; // Indicates if the user account is active
  lastLogin?: Date; // Optional last login date
  preferences?: {
    language?: string; // Preferred language
    currency?: string; // Preferred currency
    notificationsEnabled?: boolean; // Whether the user wants to receive notifications
  };
  contactInfo?: {
    phone?: string; // Optional phone number
    address?: string; // Optional address
  };
}