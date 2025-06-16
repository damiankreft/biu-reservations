'use client';
import BookingForm from '@/components/bookings/bookingForm';
import { PlacesContext } from '@/lib/placesContext';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function BookPage({
    searchParams,
}: {
    searchParams: { id: string; from?: Date; to?: Date };
}) {
    const { t } = useTranslation();
    const { places, dispatch } = React.useContext(PlacesContext);
    const data = places.find((p) => p.id === searchParams.id);

    return (
        <div className="container w-1/2 mx-auto px-4">
            <h1 className="text-2xl font-bold my-4">
                {t('bookPageTitle', { defaultValue: 'Book Your Stay' })}
            </h1>
            <p className="mb-4">
                {t('bookPageDescription', {
                    defaultValue:
                        'Select a place and date range to book your stay.',
                })}
            </p>
            {data ? (
                <div className="mb-4">
                    <div className="size-20 relative">
                        <Image
                            src={data.photos[0]}
                            alt={data.name}
                            fill={true}
                        />
                    </div>
                    <h2 className="text-xl font-semibold">{data.name}</h2>
                    <p>{data.description}</p>
                    <BookingForm
                        from={searchParams.from}
                        to={searchParams.to}
                    />
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
