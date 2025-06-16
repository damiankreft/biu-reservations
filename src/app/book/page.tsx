'use client';
import BookingForm from '@/components/bookings/bookingForm';
import { PlacesContext } from '@/lib/placesContext';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function BookPage({
    searchParams,
}: {
    searchParams: { id: string; from?: string; to?: string; guests?: string };
}) {
    const { t } = useTranslation();
    const { places, dispatch } = React.useContext(PlacesContext);
    const data = places.find((p) => p.id === searchParams.id);
    const dateFrom = searchParams.from
        ? new Date(searchParams.from)
        : undefined;
    const dateTo = searchParams.to ? new Date(searchParams.to) : undefined;
    const guests = searchParams.guests ?? '2';
    return (
        <div className="container w-1/2 mx-auto px-4">
            <h1 className="text-2xl font-bold my-4">
                {t('bookPageTitle', { defaultValue: 'Book Your Stay' })}
            </h1>
            {data ? (
                <div>
                    <div className="flex mb-4">
                        <div className="flex-col size-20 relative">
                            <Image
                                src={data.photos[0]}
                                alt={data.name}
                                fill={true}
                            />
                        </div>
                        <h2 className="flex-col text-xl font-semibold">{data.name}</h2>
                        <p className='display-block'>{data.description}</p>
                    </div>
                    <BookingForm from={dateFrom} to={dateTo} guests={guests} />
                </div>
            ) : (
                <div className="bg-error">
                    <p className="text-error-content">
                        {t('bookPageNoPlaceFound', {
                            defaultValue: 'No place found.',
                        })}
                    </p>
                </div>
            )}
        </div>
    );
}
