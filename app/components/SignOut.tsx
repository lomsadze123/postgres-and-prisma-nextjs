"use client";

import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <button
      onClick={() => signOut()}
      className="bg-red-500 font-bold rounded-md p-2 mb-8 text-xl px-4"
    >
      Sign Out
    </button>
  );
};

export default SignOut;
