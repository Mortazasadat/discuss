"use client";

import { useSession } from "next-auth/react";
import React from "react";

function Profile() {
  const session = useSession();

  return (
    <div className="my-10">
      {session.data?.user ? (
        <div> {session.data.user.name} </div>
      ) : (
        <div>sign out</div>
      )}
    </div>
  );
}

export default Profile;
