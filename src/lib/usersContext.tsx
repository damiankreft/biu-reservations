'use client';
import React, { useReducer } from 'react';

export enum UserActionType {
    Unknown,
    SetUsers = 'setUsers',
    Add = 'add',
    Change = 'change',
    Delete = 'delete',
}
export type UserAction =
    | { type: UserActionType.SetUsers; users: User[] }
    | { type: UserActionType.Add; user: User }
    | { type: UserActionType.Change; user: User }
    | { type: UserActionType.Delete; id: string }
    | { type: UserActionType.Unknown };

export const UsersContext = React.createContext<UsersContextType>({
    users: [],
    dispatch: () => {
        console.log('default entered');
    },
});

export type UsersContextType = {
    users: User[];
    dispatch: React.Dispatch<UserAction>;
};

export type User = {
    id: string;
    name: string;
    email: string;
    profilePicture?: string; // Optional profile picture URL
    role: 'user' | 'host' | 'admin'; // User role, e.g., guest or host
    createdAt: Date; // Date when the user was created
    updatedAt: Date; // Date when the user was last updated
    isActive: boolean; // Indicates if the user account is active
    lastLogin?: Date; // Optional last login date
    preferences?: {
        language?: string; // Preferred language
        currency?: string; // Preferred currency
        notificationsEnabled?: boolean; // Whether the user wants to receive notifications
    };
    contactInfo?: {
        phone?: string; // Optional phone number
        addressStreet: string;
        addressCity: string;
        addressPostalCode: string;
        addressCountry: string;
    };
};

export default function UsersProvider({
    children,
    initialValue,
}: {
    children: React.ReactNode;
    initialValue: User[];
}) {
    const [users, dispatch] = useReducer(usersReducer, initialValue);

    function usersReducer(state: User[], action: UserAction) {
        switch (action.type) {
            case UserActionType.Add: {
                return [...state, action.user];
            }
            case UserActionType.Change: {
                return state.map((t) => {
                    if (t.id === action.user?.id) {
                        return action.user;
                    } else {
                        return t;
                    }
                });
            }
            case UserActionType.Delete: {
                return state.filter((t) => t.id !== action.id);
            }
            default: {
                throw Error('Unknown action: ' + action.type);
            }
        }
    }

    return (
        <UsersContext.Provider value={{ users, dispatch }}>
            {children}
        </UsersContext.Provider>
    );
}
