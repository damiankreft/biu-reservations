'use client';
import BookingForm from '@/components/bookings/bookingForm';
import { PlacesContext } from '@/lib/placesContext';
import Image from 'next/image';
import React, { use } from 'react';
import { useTranslation } from 'react-i18next';

import { useSearchParams } from 'next/navigation';
export default function BookPage({
  searchParams,
}: {
  searchParams: { id: string; from?: Date; to?: Date; guests?: string };
}) {
  const { t } = useTranslation();
  const { places, dispatch } = React.useContext(PlacesContext);
  const params = useSearchParams();
  const data = places.find((p) => p.id === params.get('id')) || null;
  return (
    <div className="container w-1/2 mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">
        {t('bookPageTitle', { defaultValue: 'Book Your Stay' })}
      </h1>
      {data ? (
        <div>
          <div className="flex mb-4">
            <div className="flex-col size-20 relative">
              <Image src={data.photos[0]} alt={data.name} fill={true} />
            </div>
            <h2 className="flex-col text-xl font-semibold">{data.name}</h2>
            <p className="display-block">{data.description}</p>
          </div>
          <BookingForm
            from={new Date(params.get('from') || new Date())}
            to={new Date(params.get('to') || new Date())}
            guests={params.get('guests') || '2'}
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
