import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord";
var Mixpanel = require('mixpanel');


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
        clientId: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
        authorization: { params: { scope: 'identify guilds' } },
      })
  ],
  events: {
    async signIn({ user, account, profile}) {
      var mixpanel = Mixpanel.init(`${process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_ID}`, {
        debug: true,
        api_host: "https://api-eu.mixpanel.com",
      });

      mixpanel.people.set(user.id, {$first_name: user.name});
      mixpanel.track('Sign In', { distinct_id: user.id,});
    
    },
  }
})