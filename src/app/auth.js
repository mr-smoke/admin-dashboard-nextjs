import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { connectToDatabase } from "./lib/utils";
import { UserModel } from "./lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDatabase();
    const user = await UserModel.findOne({ username: credentials.username });

    if (!user || !user.isAdmin) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    return user;
  } catch (error) {
    throw new Error("Failed to authenticate");
  }
};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});
