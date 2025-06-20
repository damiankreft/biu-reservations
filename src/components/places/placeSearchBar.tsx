import React, { useState } from 'react';

import { Place } from '@/data/place';
import { useTranslation } from 'react-i18next';

export default function PlaceSearchBar({
  places,
  onPlaceSelected,
}: {
  places: Place[];
  onPlaceSelected: (placeId: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useTranslation();
  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  React.useEffect(() => {
    if (searchTerm === '') {
      onPlaceSelected('');
    } else if (searchTerm.length > 2) {
      <ul className="mt-2">
        {filteredPlaces.map((place) => (
          <li
            key={place.id}
            onClick={() => onPlaceSelected(place.id)}
            className="cursor-pointer hover:bg-gray-200 p-2"
          >
            {place.name}
          </li>
        ))}
        ;
      </ul>;
    }
  }, [searchTerm, setSearchTerm]);

  return (
    <div className="place-search-bar w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          e.preventDefault();
          setSearchTerm(e.target.value);
        }}
        placeholder={t('searchPlaceholder', {
          defaultValue: 'Search for a place...',
        })}
        className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
      />
    </div>
  );
}
