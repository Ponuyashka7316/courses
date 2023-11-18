// import NextAuth, { AuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions: AuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID || "",
//       clientSecret: process.env.GOOGLE_SECRET || "",
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     jwt: ({ token, user, account, profile, isNewUser }) => {
//       if (account?.accessToken) {
//         token.accessToken = account.accessToken;
//       }
//       console.log("222", account?.access_token);
//       return token;
//     },
//     session: async ({ session, user, token }) => {
//       //session.user = user;
//       console.log("111", token);
//       (session as any).token = token;
//       return session;
//     },
//   },
// };
// export default NextAuth(authOptions);
