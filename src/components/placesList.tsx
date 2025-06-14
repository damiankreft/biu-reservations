import { Place } from "@/data/place";
import React from "react";
import PlaceListItem from "./placeListItem";

export default function PlacesList({
  places: places,
  onPlaceClick: onPlaceClick,
}: {
  places: Place[];
  onPlaceClick: (placeId: string) => void;
}) {
  return (
      <div className="places-list">
          <ul className="list bg-base-300 rounded-box shadow-md">
              {places.map((place) => (
                  <li className={`list-row p-4 hover:bg-primary transition delay-150 duration-300 ease-in-out cursor-pointer`} key={`place-${place.id}`} onClick={() => onPlaceClick(place.id)}>
                      <PlaceListItem place={place} />
                  </li>
              ))}
          </ul>
      </div>
  );
}