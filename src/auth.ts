import NextAuth, { type DefaultSession } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { DataSourceContext } from './data/DataSource';

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's role. */
      role: string;
      active: boolean;
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession['user'];
  }
}

// The `JWT` interface can be found in the `next-auth/jwt` submodule
import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    role: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          role:
            DataSourceContext.users.find((u) => u.name === profile.name)
              ?.role || 'user', // Default role for GitHub users
        };
      },
    }),
  ],
  callbacks: {
    signIn({ user, account, profile }) {
      // Check if the user is in the DataSourceContext
      const cachedUser = DataSourceContext.users.find(
        (u) => u.name === user.name,
      );
      if (cachedUser !== undefined && !cachedUser.isActive) {
        return false;
      }
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        let cachedUser = DataSourceContext.users.find(
          (u) => u.name === user.name,
        );
        if (cachedUser) {
          token.role = 'admin';
        } else {
          token.role = 'user';
        }
      }
      return token;
    },
    session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
});
