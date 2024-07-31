import Credentials from "next-auth/providers/credentials";

export const authOption = {
  providers: [
    Credentials({
      name: "Emails",
      credentials: {
        username: { label: "email", type: "text", placeholder: "email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials: any) {
        // console.log("credentials : ", credentials);

        return {
          id: "1",
          email: "shshi@gmail.com",
          password: "fsdfdsfsd",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: ({ token, user }: any) => {
      // console.log(token);
      token.userId = token.sub;
      return token;
    },
    session: ({ session, token, user }: any) => {
      if (session && session.user) {
        session.user.userId = token.userId;
      }
      return session;
    },
  },
};
