'use client';

import React, { use, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { User, UserActionType, UsersContext } from '@/lib/usersContext';

export default function UsersList({ users }: { users: Promise<User[]> }) {
    const { t } = useTranslation();
    const { users: cachedUsers, dispatch } = React.useContext(UsersContext);
    const allUsers = use(users);

    useEffect(() => {
        if (cachedUsers.length === 0) {
            dispatch({ type: UserActionType.SetUsers, users: allUsers });
        }
    }, [cachedUsers]);
    return (
        <div className="flex w-full">
            <div className="flex-col w-1/4">
                <aside className="border-r border-base-300 p-4">
                    <h3 className="text-lg font-semibold">
                        {t('usersTitle', {
                            defaultValue: 'Users',
                        })}
                    </h3>
                    <p className="text-sm text-base-content">
                        {t('usersDescription', {
                            defaultValue: 'Manage users in the system.',
                        })}
                    </p>
                </aside>
            </div>
            <div className="w-3/4 p-4">
                <h2 className="text-2xl font-bold mb-4">
                    {t('usersManagement', {
                        defaultValue: 'User Management',
                    })}
                </h2>

                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                {t('username', { defaultValue: 'Username' })}
                            </th>
                            <th>{t('email', { defaultValue: 'Email' })}</th>
                            <th>{t('role', { defaultValue: 'Role' })}</th>
                            <th>
                                {t('createdAt', { defaultValue: 'Created At' })}
                            </th>
                            <th>{t('actions', { defaultValue: 'Actions' })}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    {new Date(
                                        user.createdAt,
                                    ).toLocaleDateString()}
                                </td>
                                <td>
                                    {/* Actions like edit, delete can be added here */}
                                    <button className="btn btn-primary btn-sm">
                                        {t('edit', { defaultValue: 'Edit' })}
                                    </button>
                                    <button className="btn btn-secondary btn-sm ml-2">
                                        {t('delete', {
                                            defaultValue: 'Delete',
                                        })}
                                    </button>
                                    <button className="btn btn-warning btn-sm ml-2">
                                        {user.isActive
                                            ? t('deactivate', {
                                                  defaultValue: 'Deactivate',
                                              })
                                            : t('activate', {
                                                  defaultValue: 'Activate',
                                              })}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
