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

export enum ActionType {
    Unknown,
    Added = 'added',
    Changed = 'changed',
    Deleted = 'deleted',
    SetPlaces = 'setPlaces',
}

export type PlaceAction =
    | { type: ActionType.Added; payload: Place }
    | { type: ActionType.Changed; payload: Place }
    | { type: ActionType.Deleted; payload: Place }
    | { type: ActionType.SetPlaces; payload: Place[] };

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
            case ActionType.Added: {
                const place = action.payload;
                return [...state, place];
            }
            case ActionType.SetPlaces: {
                return action.payload;
            }
            case ActionType.Changed: {
                return state.map((t) => {
                    if (t.id === action.payload.id) {
                        return action.payload as Place;
                    } else {
                        return t;
                    }
                });
            }
            case ActionType.Deleted: {
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
