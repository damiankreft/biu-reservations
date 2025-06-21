'use server';
import { auth } from '@/auth';
import UsersProvider, { User } from '@/lib/usersContext';
import dynamic from 'next/dynamic';
import { unauthorized } from 'next/navigation';
import { NextRequest } from 'next/server';
import React, { Suspense } from 'react';

export default async function UsersPage() {
  const session = await auth();
  console.log('Session:', session);
  if (!session || session.user.role !== 'admin') {
    unauthorized();
  }

  const LazyUsersList = dynamic(() => import('@/components/users/usersList'), {
    ssr: true,
  });

  return (
    <UsersProvider initialValue={[]}>
      <Suspense fallback={<div className="bg-error w-full">Loading...</div>}>
        <LazyUsersList />
      </Suspense>
    </UsersProvider>
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

  const response = await fetch(`http://localhost:3000/api/users/${id}`, {
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

export async function handleUpdateUser(user: User) {
  const response = await fetch(`http://localhost:3000/api/users/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error(`Failed to update user with id ${user.id}`);
  }
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
