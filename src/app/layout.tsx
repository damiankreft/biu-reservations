'use client';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import places from '@/data/place';
import React from 'react';
import '@/i18n/i18n';
import { useTranslation } from 'react-i18next';
import PlacesProvider from '@/lib/placesContext';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { t } = useTranslation();

    return (
        <html>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-wrap`}
            >
                <div className="flex-row w-full">
                    <header className="flex-row bg-base-100 border-b border-base-300">
                        <h1 className="text-xl font-semibold">
                            {t('appTitle', {
                                defaultValue: 'BIU Reservations',
                            })}
                        </h1>

                        <nav className="bg-base-100 border-t border-base-300">
                            <div className="px-4 sm:px-6 py-4">
                                <ul className="flex flex-row space-x-4">
                                    <li>
                                        <a
                                            href="/"
                                            className="text-base-content hover:text-primary"
                                        >
                                            {t('home', {
                                                defaultValue: 'Home',
                                            })}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/about"
                                            className="text-base-content hover:text-primary"
                                        >
                                            {t('about', {
                                                defaultValue: 'About',
                                            })}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/contact"
                                            className="text-base-content hover:text-primary"
                                        >
                                            {t('contact', {
                                                defaultValue: 'Contact',
                                            })}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/privacy"
                                            className="text-base-content hover:text-primary"
                                        >
                                            {t('privacyPolicy', {
                                                defaultValue: 'Privacy Policy',
                                            })}
                                        </a>
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
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        r="4"
                                                    ></circle>
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
                                </ul>
                            </div>
                        </nav>
                    </header>
                </div>
                <div className="h-full w-sm ml-auto">
                    <aside className="bg-base-200 border-r border-base-300 p-4">
                        <div>
                            <h3 className="text-lg font-semibold">
                                {t('placesSearchTitle', {
                                    defaultValue: 'Search Places',
                                })}
                            </h3>
                            <p className="text-sm text-base-content opacity-70">
                                {t('placesSearchDescription', {
                                    defaultValue:
                                        'Search for places by name or category.',
                                })}
                            </p>
                            <div className="mt-4">
                                <input
                                    type="text"
                                    placeholder={t('searchPlaceholder', {
                                        defaultValue: 'Search for a place...',
                                    })}
                                    className="input input-bordered"
                                />
                            </div>
                        </div>
                    </aside>
                    <aside className="bg-base-200 border-r border-base-300">
                        <div className="px-4 py-4">
                            <h3 className="text-lg font-semibold">
                                {t('placesCategoriesTitle', {
                                    defaultValue: 'Categories',
                                })}
                            </h3>
                            <p className="text-sm text-base-content opacity-70">
                                {t('placesCategoriesDescription', {
                                    defaultValue: 'Filter places by category.',
                                })}
                            </p>
                            <ul className="mt-4">
                                <li className="py-2">
                                    <a
                                        href="/category/cafe"
                                        className="text-base-content hover:text-primary"
                                    >
                                        {t('categoryCafe', {
                                            defaultValue: 'Cafes',
                                        })}
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a
                                        href="/category/restaurant"
                                        className="text-base-content hover:text-primary"
                                    >
                                        {t('categoryRestaurant', {
                                            defaultValue: 'Restaurants',
                                        })}
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a
                                        href="/category/park"
                                        className="text-base-content hover:text-primary"
                                    >
                                        {t('categoryPark', {
                                            defaultValue: 'Parks',
                                        })}
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a
                                        href="/category/museum"
                                        className="text-base-content hover:text-primary"
                                    >
                                        {t('categoryMuseum', {
                                            defaultValue: 'Museums',
                                        })}
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a
                                        href="/category/theater"
                                        className="text-base-content hover:text-primary"
                                    >
                                        {t('categoryTheater', {
                                            defaultValue: 'Theaters',
                                        })}
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a
                                        href="/category/library"
                                        className="text-base-content hover:text-primary"
                                    >
                                        {t('categoryLibrary', {
                                            defaultValue: 'Libraries',
                                        })}
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a
                                        href="/category/other"
                                        className="text-base-content hover:text-primary"
                                    >
                                        {t('categoryOther', {
                                            defaultValue: 'Other',
                                        })}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
                <main className="p-4 mr-auto">
                    <PlacesProvider initialValue={places}>
                        {children}
                    </PlacesProvider>
                </main>
            </body>
        </html>
    );
}
