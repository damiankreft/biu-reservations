'use client';
import { User } from '@/lib/usersContext';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function UserEdit({
    user,
    onSubmit,
}: {
    user: User;
    onSubmit: (user: User) => void;
}) {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">
                {t('userEditTitle', {
                    defaultValue: 'Edit User',
                })}
            </h1>
            <form
                className="w-full max-w-md"
                onSubmit={(e) => {
                    e.preventDefault();
                    const editedUser: User = {
                        ...user,
                        name: e.target.elements.name.value,
                        email: e.target.email.value,
                    };
                    onSubmit(editedUser);
                }}
            >
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="name"
                    >
                        {t('userEditNameLabel', {
                            defaultValue: 'Name',
                        })}
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="input input-bordered w-full"
                        placeholder={t('userEditNamePlaceholder', {
                            defaultValue: 'Enter your name',
                        })}
                        defaultValue={user?.name || ''}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="email"
                    >
                        {t('userEditEmailLabel', {
                            defaultValue: 'Email',
                        })}
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="input input-bordered w-full"
                        placeholder={t('userEditEmailPlaceholder', {
                            defaultValue: 'Enter your email',
                        })}
                        defaultValue={user?.email || ''}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary w-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
                >
                    {t('userEditSaveButton', {
                        defaultValue: 'Save Changes',
                    })}
                </button>
            </form>
        </div>
    );
}
