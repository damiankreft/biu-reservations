import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function UserFilters({
    filters,
    setFilters,
    allUsers,
}: {
    filters: { search: string; role: string; isActive: string };
    setFilters: React.Dispatch<
        React.SetStateAction<{ search: string; role: string; isActive: string }>
    >;
    allUsers: {
        username: string;
        email: string;
        role: string;
        isActive: boolean;
    }[];
}) {
    const { t } = useTranslation();
    
    return (
        <>
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
                    {t('allUsers', {
                        defaultValue: 'Active and inactive users',
                    })}
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
            <select
                className="select select-bordered w-full mb-2"
                value={filters.role}
                onChange={(e) =>
                    setFilters((f) => ({
                        ...f,
                        role: e.target.value,
                    }))
                }
            >
                <option value="">
                    {t('all', { defaultValue: 'All roles' })}
                </option>
                {[...new Set(allUsers.map((u) => u.role))].map((role) => (
                    <option key={role} value={role}>
                        {role}
                    </option>
                ))}
            </select>
        </>
    );
}
