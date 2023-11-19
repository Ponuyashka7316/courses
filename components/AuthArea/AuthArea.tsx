import { signIn, signOut, useSession } from "next-auth/react";
import React, { MouseEventHandler } from "react";

const AuthArea = () => {
  const { data, status } = useSession();
  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    return (
      <div>
        {data?.user && (
          <>
            <h1> hi {data.user.name}</h1>
            <img
              src={data.user.image as string}
              alt={data.user.name + " photo"}
            />
            <button onClick={signOut as MouseEventHandler<HTMLButtonElement>}>
              sign out
            </button>
          </>
        )}
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => signIn("google")}>sign in with gooogle</button>
    </div>
  );
};

export default AuthArea;
