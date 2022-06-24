import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
var Mixpanel = require("mixpanel");

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: { params: { scope: "identify guilds" } },
    }),
  ],
  events: {
    async signIn({ user, account, profile }) {
      var mixpanel = Mixpanel.init(
        `${process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_ID}`,
        {
          debug: false,
          api_host: "https://api-eu.mixpanel.com",
        }
      );

      mixpanel.people.set(user.id, { $first_name: user.name });
      mixpanel.track("Sign In", { distinct_id: user.id });
    },
  },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      session.id = token.sub
      return session;
    },
  },
});
