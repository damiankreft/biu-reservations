import { Place } from '@/data/place';
import React from 'react';
import PlaceListItem from './placeListItem';

export default function PlacesList({
  places: places,
  onPlaceClick: onPlaceClick,
}: {
  places: Place[];
  onPlaceClick: (placeId: string) => void;
}) {
  const [page, setPage] = React.useState(1);
  const handlePageChange = (pageNumber: number) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.ceil(places.length / 10) &&
      pageNumber !== page
    )
      setPage(pageNumber);
  };

  React.useEffect(() => {
    if (places.length > 0 && page > Math.ceil(places.length / 10)) {
      setPage(Math.ceil(places.length / 10));
    }
  }, [places, page]);

  return (
    <div className="places-list">
      <ul className="list bg-base-300 rounded-box shadow-md">
        {places.slice(page * 10 - 10, page * 10).map((place) => (
          <li
            className={`list-row p-4 hover:bg-primary hover:text-primary-content transition delay-150 duration-300 ease-in-out cursor-pointer`}
            key={`place-${place.id}`}
            onClick={() => onPlaceClick(place.id)}
          >
            <PlaceListItem place={place} />
          </li>
        ))}
      </ul>
      <div className="join justify-center mt-2 w-full">
        {Array.from({ length: Math.ceil(places.length / 10) }, (_, i) => (
          <input
            key={`page-${i + 1}`}
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label={`${i + 1}`}
            checked={page === i + 1}
            onChange={() => handlePageChange(i + 1)}
            disabled={places.length === 0}
            onLoad={() => (
              <>
                <h1>Loading</h1>
              </>
            )}
          />
        ))}
      </div>
    </div>
  );
}
