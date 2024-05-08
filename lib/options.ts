import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "Enter email...",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const existUser = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!existUser) {
          return null;
        }

        const passwordMatch =
          !!existUser.password &&
          (await compare(credentials.password, existUser.password));

        if (!passwordMatch) {
          return null;
        }

        return {
          id: existUser.id,
          username: existUser.username,
          email: existUser.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          username: user.username,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
        },
      };
    },
  },
  secret: process.env.SECRET,
};
