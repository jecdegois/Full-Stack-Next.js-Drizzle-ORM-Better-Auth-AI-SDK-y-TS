import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from "../db";
import { AuthEmailService } from "../emails/services/AuthEmailService";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendOnSignIn: true, // envia el correo si no haz verificado tu cuenta
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      console.log("[Auth] sendVerificationEmail", { email: user.email, url });
      await AuthEmailService.sendEmailVerification({
        name: user.name,
        email: user.email,
        url: url,
      });
    },
  },
  plugins: [nextCookies()],
});
