/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      role: string  // Ajout du champ role
    }
  }

  interface User {
    role: string  // Ajout du champ role
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string  // Ajout du champ role
  }
}