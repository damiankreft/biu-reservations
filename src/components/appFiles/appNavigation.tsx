'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import SignIn from '../auth/signIn';

export default function AppNavigation() {
  const { t } = useTranslation();

  return (
    <nav className="bg-base-100 border-t border-base-300">
      <div className="px-4 sm:px-6 py-4">
        <ul className="flex flex-row space-x-4">
          <li>
            <Link href="/" className="text-base-content hover:text-primary">
              {t('home', {
                defaultValue: 'Home',
              })}
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-base-content hover:text-primary"
            >
              {t('about', {
                defaultValue: 'About',
              })}
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-base-content hover:text-primary"
            >
              {t('contact', {
                defaultValue: 'Contact',
              })}
            </Link>
          </li>
          <li>
            <Link
              href="/privacy"
              className="text-base-content hover:text-primary"
            >
              {t('privacyPolicy', {
                defaultValue: 'Privacy Policy',
              })}
            </Link>
          </li>
          <li>
            <label className="toggle text-base-content">
              <input
                type="checkbox"
                value="light"
                className="theme-controller"
              />

              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>

              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
          </li>
          <li>
            <SignIn />
          </li>
        </ul>
      </div>
    </nav>
  );
}
