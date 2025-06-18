'use client';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import places from '@/data/place';
import React from 'react';
import '@/i18n/i18n';
import { useTranslation } from 'react-i18next';
import PlacesProvider from '@/lib/placesContext';
import AppNavigation from '@/components/appFiles/appNavigation';
import AppTitle from '@/components/appFiles/appTitle';
import Footer from '@/components/footer';
import { SessionProvider } from 'next-auth/react';

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
            <SessionProvider>
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    <div className="w-full">
                        <header className="border-b border-base-300">
                            <AppTitle />
                            <AppNavigation />
                        </header>
                    </div>
                    <main className="p-4">
                        <PlacesProvider initialValue={places}>
                            {children}
                        </PlacesProvider>
                    </main>
                    <Footer />
                </body>
            </SessionProvider>
        </html>
    );
}
