'use server';
import UsersList from '@/components/users/usersList';
import { getUsers } from '@/data/DataSource';
import UsersProvider from '@/lib/usersContext';
import { NextRequest } from 'next/server';
import React, { Suspense } from 'react';

export default async function UsersPage() {
    const users = getUsers();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <UsersProvider initialValue={await users}>
                <UsersList users={users} />
            </UsersProvider>
        </Suspense>
    );
}

export async function handleDeleteUser(id: string) {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({ id }),
    });
    console.log('Reponse ' + response.text().then((text) => console.log(text)));
    if (!response.ok) {
        throw new Error(`Failed to delete user with id ${id}`);
    }
    
    console.log('User deleted');
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

    const response = await fetch(`http://localhost:3001/api/users/${id}`, {
        method: 'DELETE',
    });
    console.log('Reponse ' + response.text().then((text) => console.log(text)));
    if (!response.ok) {
        throw new Error(`Failed to delete user with id ${id}`);
    }
    const deletedUser = await response.json();
    console.log('User deleted:', deletedUser);


  // e.g. Delete user with ID `id` in DB
  return new Response(null, { status: 204 });
}

export async function handleUpdateUser(user: any) {
    const response = await fetch(`/api/users/${user.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    if (!response.ok) {
        throw new Error(`Failed to update user with id ${user.id}`);
    }
    const updatedUser = await response.json();
    console.log('User updated:', updatedUser);
}

export async function handleCreateUser(user: any) {
    const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    if (!response.ok) {
        throw new Error('Failed to create user');
    }
    const newUser = await response.json();
    console.log('User created:', newUser);
}
