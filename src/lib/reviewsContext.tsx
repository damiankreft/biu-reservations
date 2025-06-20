import React, { useReducer } from 'react';
import { Review } from '@/data/review';

export enum ReviewActionType {
  Unknown,
  Add = 'add',
  Change = 'change',
  Delete = 'delete',
}

export type ReviewAction =
  | { type: ReviewActionType.Add; review: Review }
  | { type: ReviewActionType.Change; review: Review }
  | { type: ReviewActionType.Delete; id: string }
  | { type: ReviewActionType.Unknown };

export const ReviewsContext = React.createContext<ReviewsContextType>({
  reviews: [],
  dispatch: () => {},
});

export type ReviewsContextType = {
  reviews: Review[];
  dispatch: React.Dispatch<ReviewAction>;
};

export default function ReviewsProvider({
  children,
  initialValue,
}: {
  children: React.ReactNode;
  initialValue: Review[];
}) {
  const [reviews, dispatch] = useReducer(reviewsReducer, initialValue);

  function reviewsReducer(reviews: Review[], action: ReviewAction) {
    switch (action.type) {
      case ReviewActionType.Add: {
        return [...reviews, action.review];
      }
      case ReviewActionType.Change: {
        return reviews.map((t) => {
          if (t.id === action.review?.id) {
            return action.review;
          } else {
            return t;
          }
        });
      }
      case ReviewActionType.Delete: {
        return reviews.filter((t) => t.id !== action.id);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

  return (
    <ReviewsContext.Provider value={{ reviews, dispatch }}>
      {children}
    </ReviewsContext.Provider>
  );
}
