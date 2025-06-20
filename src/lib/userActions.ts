'server-only';

export async function getUsers() {
  const response = await fetch('/api/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
}

export async function getUserById(id: string) {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user with id ${id}`);
  }
  return response.json();
}

export async function createUser(user: any) {
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
  return response.json();
}

export async function updateUser(id: string, user: any) {
  const response = await fetch(`/api/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error(`Failed to update user with id ${id}`);
  }
  return response.json();
}

export async function deleteUser(id: string) {
  const response = await fetch(`/api/users/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Failed to delete user with id ${id}`);
  }
  return response.json();
}
