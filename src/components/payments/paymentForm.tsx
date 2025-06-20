'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function PaymentForm() {
  const { t } = useTranslation();
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="cardNumber"
        >
          {t('Card Number', {
            defaultValue: 'Card Number',
          })}
        </label>
        <input
          type="text"
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="expiryDate"
        >
          {t('Expiry Date', {
            defaultValue: 'Expiry Date',
          })}
        </label>
        <input
          type="text"
          id="expiryDate"
          placeholder="MM/YY"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="cvv"
        >
          {t('CVV', {
            defaultValue: 'CVV',
          })}
        </label>
        <input
          type="text"
          id="cvv"
          placeholder="123"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {t('Pay Now', {
          defaultValue: 'Pay Now',
        })}
      </button>
    </form>
  );
}
