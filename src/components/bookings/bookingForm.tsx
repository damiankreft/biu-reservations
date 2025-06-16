import React from 'react';
import { useTranslation } from 'react-i18next';

export default function BookingForm({ from, to }: { from?: Date; to?: Date }) {
    const { t } = useTranslation();
    return (
        <form className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium">
                    {t('bookingForm.name', { defaultValue: 'Name' })}
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md shadow-sm"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium">
                    {t('bookingForm.email', { defaultValue: 'Email' })}
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md shadow-sm"
                />
            </div>
            <div>
                <label htmlFor="dateFrom" className="block text-sm font-medium">
                    {t('bookingForm.dateFrom', { defaultValue: 'Start date' })}
                </label>
                <input
                    type="date"
                    id="dateFrom"
                    name="dateFrom"
                    required
                    defaultValue={
                        from && !isNaN(new Date(from).getTime())
                            ? new Date(from).toISOString().split('T')[0]
                            : ''
                    }
                    placeholder="YYYY-MM-DD"
                    className="mt-1 block w-full rounded-md shadow-sm"
                />
            </div>
            <div>
                <label htmlFor="dateTo" className="block text-sm font-medium">
                    {t('bookingForm.dateTo', { defaultValue: 'Start date' })}
                </label>
                <input
                    type="date"
                    id="dateTo"
                    name="dateTo"
                    required
                    defaultValue={
                        to && !isNaN(new Date(to).getTime())
                            ? new Date(to).toISOString().split('T')[0]
                            : ''
                    }
                    placeholder="YYYY-MM-DD"
                    className="mt-1 block w-full rounded-md shadow-sm"
                />
            </div>
            <div>
                <label htmlFor="guests" className="block text-sm font-medium">
                    {t('bookingForm.guests', {
                        defaultValue: 'Number of Guests',
                    })}
                </label>
                <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    required
                    defaultValue="2"
                    className="mt-1 block w-full rounded-md shadow-sm"
                />
            </div>
            <button
                type="submit"
                className="w-full text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
                {t('bookingForm.submit', { defaultValue: 'Submit Booking' })}
            </button>
        </form>
    );
}
