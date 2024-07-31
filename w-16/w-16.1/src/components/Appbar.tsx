"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Appbar() {
  const session = useSession();
  return (
    <div>
      <button
        onClick={() => {
          signIn();
        }}
      >
        signin
      </button>
      <button onClick={() => signOut()}>signOut</button>

      <div>{JSON.stringify(session)}</div>
    </div>
  );
}
