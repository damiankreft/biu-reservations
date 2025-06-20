'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
export default function AppTitle() {
  const { t } = useTranslation();
  return (
    <div className="text-2xl font-bold text-center my-4">
      <h1>{t('appTitle', { defaultValue: 'biuking.com' })}</h1>
    </div>
  );
}
