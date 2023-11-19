import AuthArea from "@/components/AuthArea/AuthArea";
import mongoose from "mongoose";
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";
import { MouseEventHandler } from "react";

export default function IndexPage() {
  //mongoose.connect(process.env.NEXT_PUBLIC_MONGO_CONNECTION || "");
  //return <></>;

  return (
    <SessionProvider>
      <AuthArea />
    </SessionProvider>
  );
}
