'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

export default function AdminPage() {
  const session = useSession();
  const isAdmin = session.data?.user?.role === 'admin';
  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p className="text-lg">You do not have permission to view this page.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
      <p className="text-lg">
        This is the admin page. Only accessible to admins.
      </p>
    </div>
  );
}
