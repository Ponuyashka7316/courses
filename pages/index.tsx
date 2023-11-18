import mongoose from "mongoose";
import { useSession, signIn, signOut } from "next-auth/react";
import { MouseEventHandler } from "react";

export default function IndexPage() {
  mongoose.connect(process.env.MONGO_CONNECTION || "");

  return <>
  
  </>;
  // const { data, status } = useSession();
  // if (status === "loading") return <h1> loading... please wait</h1>;
  // if (status === "authenticated") {
  //   return (
  //     <div>
  //       {data?.user && (
  //         <>
  //           <h1> hi {data.user.name}</h1>
  //           <img
  //             src={data.user.image as string}
  //             alt={data.user.name + " photo"}
  //           />
  //           <button onClick={signOut as MouseEventHandler<HTMLButtonElement>}>
  //             sign out
  //           </button>
  //         </>
  //       )}
  //     </div>
  //   );
  // }
  // return (
  //   <div>
  //     <button onClick={() => signIn("google")}>sign in with gooogle</button>
  //   </div>
  // );
}
