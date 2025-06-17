import React, { useReducer } from 'react';
import places, { Place } from '@/data/place';

export const PlacesContext = React.createContext<PlacesContextType>({
    places,
    dispatch: () => {},
});

export type PlacesContextType = {
    places: Place[];
    dispatch: React.Dispatch<PlaceAction>;
};

export enum PlaceActionType {
    Unknown,
    Added = 'added',
    Changed = 'changed',
    Deleted = 'deleted',
    SetPlaces = 'setPlaces',
}

export type PlaceAction =
    | { type: PlaceActionType.Added; payload: Place }
    | { type: PlaceActionType.Changed; payload: Place }
    | { type: PlaceActionType.Deleted; payload: Place }
    | { type: PlaceActionType.SetPlaces; payload: Place[] };

export default function PlacesProvider({
    children,
    initialValue,
}: {
    children: React.ReactNode;
    initialValue: Place[];
}) {
    const [places, dispatch] = useReducer(placesReducer, initialValue);

    function placesReducer(state: Place[], action: PlaceAction) {
        switch (action.type) {
            case PlaceActionType.Added: {
                const place = action.payload;
                return [...state, place];
            }
            case PlaceActionType.SetPlaces: {
                return action.payload;
            }
            case PlaceActionType.Changed: {
                return state.map((t) => {
                    if (t.id === action.payload.id) {
                        return action.payload as Place;
                    } else {
                        return t;
                    }
                });
            }
            case PlaceActionType.Deleted: {
                return state.filter((t) => t.id !== action.payload.id);
            }
            default: {
                throw Error('Unknown action: ' + action);
            }
        }
    }

    return (
        <PlacesContext.Provider value={{ places, dispatch }}>
            {children}
        </PlacesContext.Provider>
    );
}
