'use client';
import PlacesList from "@/components/placesList";
import React  from "react";
import placesVal from "@/data/place";
import { useTranslation } from "react-i18next";
import { ActionType, PlacesContext } from "@/lib/placesContext";
import PlaceSearchBar from "@/components/placeSearchBar";

export default function Home() {

  const { t } = useTranslation();
  const { places, dispatch } = React.useContext(PlacesContext);

  React.useEffect(() => {
    dispatch({type: ActionType.SetPlaces, payload: placesVal});
  }, []);

  return (
      <div className="min-h-screen">
          <div>
              <PlaceSearchBar
                  places={places}
                  onPlaceSelected={(place) => console.log(`Selected place: ${place}`)}
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
  );
}
