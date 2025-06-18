import UsersList from '@/components/users/usersList';
import { DataSourceContext } from '@/data/DataSource';
import React, { Suspense } from 'react';

export default async function UsersPage() {
    const users = Promise.resolve(DataSourceContext.users);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <UsersList users={users} />
        </Suspense>
    );
}
