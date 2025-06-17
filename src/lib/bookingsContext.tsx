export enum BookingActionType {
    Unknown,
    Add = 'add',
    Change = 'change',
    Delete = 'delete',
}

export type BookingAction =
    | { type: BookingActionType.Add; booking: Booking }
    | { type: BookingActionType.Change; booking: Booking }
    | { type: BookingActionType.Delete; id: string }
    | { type: BookingActionType.Unknown };

export default function bookingsReducer({
    bookings,
    action,
}: {
    bookings: Booking[];
    action: BookingAction;
}) {
    switch (action.type) {
        case BookingActionType.Add: {
            return [...bookings, action.booking];
        }
        case BookingActionType.Change: {
            return bookings.map((t) => {
                if (t.id === action.booking?.id) {
                    return action.booking;
                } else {
                    return t;
                }
            });
        }
        case BookingActionType.Delete: {
            return bookings.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

type StatusUpdates = {
    status: BookingStatus;
    updatedAt: Date;
};

export type Booking = {
    id: string;
    roomId: string;
    startDate: Date;
    endDate: Date;
    userId: string;
    price: Number;
    priceReductions?: {
        earlyBird?: number; // Optional early bird discount
        lastMinute?: number; // Optional last minute discount
        longStay?: number; // Optional long stay discount
    };
    selectedOptions?: {
        breakfast?: boolean; // Optional breakfast option
        lateCheckout?: boolean; // Optional late checkout option
        earlyCheckin?: boolean; // Optional early check-in option
        additionalGuests?: number; // Optional additional guests
        specialRequests?: string; // Optional special requests
    };
    status: StatusUpdates[];

    feedback?: {
        rating: number; // e.g., 1 to 5 stars
        comment?: string; // Optional feedback comment
    };
};
