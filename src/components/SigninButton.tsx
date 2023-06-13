'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const SigninButton = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div>
        <div className="flex gap-4 ml-auto">
          <p className="text-sky-600">{session.user.name}</p>
          <button onClick={() => signOut} className="text-red-600">
            Sing Out
          </button>
        </div>
      </div>
    );
  }
  return (
    <button onClick={() => signIn} className="text-red-600">
      Sing Out
    </button>
  );
};

export default SigninButton;
