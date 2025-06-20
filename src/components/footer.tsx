import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer({
  children = null,
}: {
  children?: React.ReactNode;
}) {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{' '}
          {t('footer.copyright', {
            defaultValue: 'biuking.com. All rights reserved.',
          })}
        </p>
        {children}
      </div>
    </footer>
  );
}
