'use client';
import React from "react";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  const getInitials = (name?: string | null) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        {session.data?.user?.image ? (
          <img
            src={session.data.user.image}
            alt="User avatar"
            className="w-12 h-12 rounded-full border border-gray-300 object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-white">
            {getInitials(session.data?.user?.name)}
          </div>
        )}
        <button
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={() => {
            if (session.status === "authenticated") {
              // Sign out the user
              signOut();
            } else {
              signIn();
            }
          }}
        >
          Sign out
        </button>
      </div>

      <div className="flex flex-col rounded-md bg-black">
        <div className="rounded-t-md p-4 font-bold">Current Session</div>
        <pre className="whitespace-pre-wrap break-all px-4 py-6">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  );
}
