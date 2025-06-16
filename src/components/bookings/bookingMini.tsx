import { Place } from '@/data/place';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import BookingCalendar from './bookingCalendar';
import { DateRange } from 'react-day-picker';
import Link from 'next/link';

export default function BookingMini({
    place,
    onProceed,
}: {
    place: Place;
    onProceed: () => void;
}) {
    const { t } = useTranslation();
    const [selectedDate, setSelectedDate] = React.useState<DateRange | null>(
        null,
    );
    const [proceedEnabled, setProceedEnabled] = React.useState(false);
    if (!place) {
        return null;
    }
    return (
        <div className="card flex bg-base-100 shadow-md p-4 mb-4">
            <div className="flex-col size-20 relative mb-2">
                <Image
                    src={place.photos[0] || '/placeholder.png'}
                    alt={`${place.name} thumbnail`}
                    className="size-20 rounded-box"
                    fill={true}
                />
            </div>
            <div className="flex-col">
                <h2 className="text-lg font-semibold">{place.name}</h2>
                <p className="text-sm text-gray-500">{`${selectedDate?.from?.toLocaleDateString()} - ${selectedDate?.to?.toLocaleDateString()}`}</p>
            </div>
            <Link href={`/book?id=${place.id}`} className="btn btn-ghost btn-sm ml-auto">
                <button disabled={!proceedEnabled} className="btn btn-primary mt-2" onClick={(e) => onProceed()}>
                ({t('Proceed', { defaultValue: 'Proceed' })})
            </button>
            </Link>
            
            <BookingCalendar
                onDateSelected={(dr) => {
                    setSelectedDate(dr);
                    setProceedEnabled(dr?.from && dr.to ? true : false);
                }}
            />
        </div>
    );
}
