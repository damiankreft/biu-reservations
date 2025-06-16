'use client';
import PlacesList from '@/components/places/placesList';
import React from 'react';
import placesVal from '@/data/place';
import { useTranslation } from 'react-i18next';
import { ActionType, PlacesContext } from '@/lib/placesContext';
import PlaceSearchBar from '@/components/places/placeSearchBar';
import BookingCalendar from '@/components/bookings/bookingCalendar';

export default function Home() {
    const { t } = useTranslation();
    const { places, dispatch } = React.useContext(PlacesContext);

    return (
        <div className="flex min-h-screen w-full">
            <div className="flex-col w-1/4 bg-base-200">
                <aside className="border-r border-base-300 p-4">
                    <div>
                        <h3 className="text-lg font-semibold">
                            {t('placesSearchTitle', {
                                defaultValue: 'Search Places',
                            })}
                        </h3>
                        <p className="text-sm text-base-content">
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
                <aside className="border-r border-base-300">
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
            <div className="flex-col w-1/2 p-4">
                <div>
                    <PlaceSearchBar
                        places={places}
                        onPlaceSelected={(place) =>
                            console.log(`Selected place: ${place}`)
                        }
                    />
                </div>
                <div>
                    <PlacesList
                        places={places}
                        onPlaceClick={(placeId) => {
                            console.log(`Place clicked: ${placeId}`);
                        }}
                    />
                </div>
            </div>
            <div className="flex-col w-1/4 p-4">
                <BookingCalendar />
            </div>
        </div>
    );
}
