'use client';
import PlacesList from '@/components/places/placesList';
import React from 'react';
import { Place } from '@/data/place';
import { useTranslation } from 'react-i18next';
import { PlacesContext } from '@/lib/placesContext';
import PlaceSearchBar from '@/components/places/placeSearchBar';
import BookingMini from '@/components/bookings/bookingMini';

export default function Home() {
    const { t } = useTranslation();
    const bookingModal = React.useRef<HTMLDialogElement>(null);
    const { places, dispatch } = React.useContext(PlacesContext);
    const [dateRange, setDateRange] = React.useState<Date[]>([]);
    const [selectedPlace, setSelectedPlace] = React.useState<Place | null>(
        null,
    );
    // dispatch({ type: PlaceActionType.Added, payload: selectedPlace as Place });
    const onProceed = () => {
        if (selectedPlace) {
            bookingModal.current?.showModal();
        }
    };

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
                            setSelectedPlace(
                                places.find((place) => place.id === placeId) ||
                                    null,
                            );
                            console.log(`Place clicked: ${placeId}`);
                        }}
                    />
                </div>
            </div>
            <div className="flex-col w-1/4 p-4">
                {selectedPlace ? (
                    <BookingMini place={selectedPlace} onProceed={onProceed} />
                ) : (
                    <div className="card bg-base-100 shadow-md p-4">
                        <h2 className="text-lg font-semibold">
                            {t('selectPlaceTitle', {
                                defaultValue: 'Select a Place',
                            })}
                        </h2>
                        <p className="text-sm text-gray-500">
                            {t('selectPlaceDescription', {
                                defaultValue:
                                    'Please select a place to see booking options.',
                            })}
                        </p>
                    </div>
                )}
            </div>

            <dialog id="booking_modal" ref={bookingModal} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                        Press ESC key or click outside to close
                    </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
}
