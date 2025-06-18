'use client';

import React, { use, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { User, UserActionType, UsersContext } from '@/lib/usersContext';

export default function UsersList({ users }: { users: Promise<User[]> }) {
    const { t } = useTranslation();
    const { users: cachedUsers, dispatch } = React.useContext(UsersContext);
    const allUsers = use(users);

    const [filters, setFilters] = React.useState<{
        search: string;
        role: string;
        isActive: string;
    }>({
        search: '',
        role: '',
        isActive: '',
    });

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
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder={t('searchPlaceholder', {
                            defaultValue: 'Search by username or email...',
                        })}
                        className="input input-bordered w-full mb-2"
                        value={filters.search}
                        onChange={(e) =>
                            setFilters((f) => ({
                                ...f,
                                search: e.target.value,
                            }))
                        }
                    />
                    <select
                        className="select select-bordered w-full mb-2"
                        value={filters.isActive}
                        onChange={(e) =>
                            setFilters((f) => ({
                                ...f,
                                isActive: e.target.value,
                            }))
                        }
                    >
                        <option value="">
                            {t('allUsers', { defaultValue: 'All Users' })}
                        </option>
                        <option value="active">
                            {t('activeUsers', { defaultValue: 'Active Users' })}
                        </option>
                        <option value="inactive">
                            {t('inactiveUsers', {
                                defaultValue: 'Inactive Users',
                            })}
                        </option>
                    </select>

                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                    {t('username', {
                                        defaultValue: 'Username',
                                    })}
                                </th>
                                <th>{t('email', { defaultValue: 'Email' })}</th>
                                <th>
                                    {t('role', { defaultValue: 'Role' })}
                                    <select
                                        className="select ml-1"
                                        value={filters.role}
                                        onChange={(e) =>
                                            setFilters((f) => ({
                                                ...f,
                                                role: e.target.value,
                                            }))
                                        }
                                    >
                                        <option value="">
                                            {t('all', { defaultValue: 'All' })}
                                        </option>
                                        {[
                                            ...new Set(
                                                allUsers.map((u) => u.role),
                                            ),
                                        ].map((role) => (
                                            <option key={role} value={role}>
                                                {role}
                                            </option>
                                        ))}
                                    </select>
                                </th>
                                <th>
                                    {t('createdAt', {
                                        defaultValue: 'Created At',
                                    })}
                                </th>
                                <th>
                                    {t('actions', { defaultValue: 'Actions' })}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers
                                .filter((u) => {
                                    const matchesSearch = u.name
                                        .toLowerCase()
                                        .includes(filters.search.toLowerCase()) || u.email
                                        .toLowerCase()
                                        .includes(filters.search.toLowerCase());
                                    const matchesRole =
                                        !filters.role ||
                                        u.role === filters.role;
                                    const matchesActiveStatus =
                                        filters.isActive === ''
                                            ? true
                                            : filters.isActive === 'active'
                                              ? u.isActive
                                              : !u.isActive;

                                    return (
                                        matchesSearch &&
                                        matchesRole &&
                                        matchesActiveStatus
                                    );
                                })
                                .map((user) => (
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
                                            <button className="btn btn-primary btn-sm">
                                                {t('edit', {
                                                    defaultValue: 'Edit',
                                                })}
                                            </button>
                                            <button className="btn btn-secondary btn-sm ml-2">
                                                {t('delete', {
                                                    defaultValue: 'Delete',
                                                })}
                                            </button>
                                            {user.isActive ? (
                                                <span className="badge badge-success ml-2">
                                                    {t('active', {
                                                        defaultValue: 'Active',
                                                    })}
                                                </span>
                                            ) : (
                                                <span className="badge badge-error ml-2">
                                                    {t('inactive', {
                                                        defaultValue:
                                                            'Inactive',
                                                    })}
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
