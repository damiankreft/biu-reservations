import React from 'react';
import { useTranslation } from 'react-i18next';

export default function BookingForm({
  from,
  to,
  guests,
}: {
  from?: Date;
  to?: Date;
  guests?: string;
}) {
  const { t } = useTranslation();
  return (
    <form className="space-y-4">
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
          defaultValue={guests || '2'}
          className="mt-1 block w-full rounded-md shadow-sm"
        />
      </div>
      <span className="divider" />

      <h2>{t('order.details', { defaultValue: 'Enter your details:' })}</h2>
      <div>
        <label htmlFor="firstname" className="block text-sm font-medium">
          {t('bookingForm.firstname', { defaultValue: 'First name' })}
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          required
          className="mt-1 block w-full rounded-md shadow-sm"
        />
      </div>

      <div>
        <label htmlFor="lastname" className="block text-sm font-medium">
          {t('bookingForm.lastname', { defaultValue: 'Last name' })}
        </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          required
          className="mt-1 block w-full rounded-md shadow-sm"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          {t('bookingForm.email', { defaultValue: 'Email address' })}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md shadow-sm"
        />
      </div>

      <span className="divider" />
      <h2>{t('order.address', { defaultValue: 'Address details:' })}</h2>
      <div>
        <label htmlFor="street" className="block text-sm font-medium">
          {t('bookingForm.street', { defaultValue: 'Street' })}
        </label>
        <input
          type="text"
          id="street"
          name="street"
          required
          className="mt-1 block w-full rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="city" className="block text-sm font-medium">
          {t('bookingForm.city', { defaultValue: 'City' })}
        </label>
        <input
          type="text"
          id="city"
          name="city"
          required
          className="mt-1 block w-full rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="zip" className="block text-sm font-medium">
          {t('bookingForm.zip', { defaultValue: 'ZIP/post code' })}
        </label>
        <input
          type="text"
          id="zip"
          name="zip"
          required
          className="mt-1 block w-full rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="country" className="block text-sm font-medium">
          {t('bookingForm.country', { defaultValue: 'Country' })}
        </label>
        <input
          type="text"
          id="country"
          name="country"
          required
          className="mt-1 block w-full rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium">
          {t('bookingForm.phone', { defaultValue: 'Phone number' })}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="mt-1 block w-full rounded-md shadow-sm"
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="paperless"
          name="paperless"
          className="mr-2"
        />
        <label htmlFor="paperless" className="text-sm font-medium">
          {t('bookingForm.paperless', {
            defaultValue: 'I want a paperless confirmation (email only)',
          })}
        </label>
      </div>

      <span className="divider" />
      <h2>{t('order.payment', { defaultValue: 'Payment details:' })}</h2>
      <div>
        <label htmlFor="cardNumber" className="block text-sm font-medium">
          {t('bookingForm.cardNumber', { defaultValue: 'Card number' })}
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          required
          className="mt-1 block w-full rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="cardExpiry" className="block text-sm font-medium">
          {t('bookingForm.cardExpiry', { defaultValue: 'Card expiry date' })}
        </label>
        <input
          type="month"
          id="cardExpiry"
          name="cardExpiry"
          required
          className="mt-1 block w-full rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="cardCVC" className="block text-sm font-medium">
          {t('bookingForm.cardCVC', { defaultValue: 'Card CVC' })}
        </label>
        <input
          type="text"
          id="cardCVC"
          name="cardCVC"
          required
          className="mt-1 block w-full rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="cardHolderName" className="block text-sm font-medium">
          {t('bookingForm.cardHolderName', {
            defaultValue: 'Card holder name',
          })}
        </label>
        <input
          type="text"
          id="cardHolderName"
          name="cardHolderName"
          required
          className="mt-1 block w-full rounded-md shadow-sm"
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          required
          className="mr-2"
        />
        <label htmlFor="terms" className="text-sm font-medium">
          {t('bookingForm.terms', {
            defaultValue: 'I agree to the terms and conditions',
          })}
        </label>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        {t('bookingForm.submit', { defaultValue: 'Submit Booking' })}
      </button>
    </form>
  );
}
