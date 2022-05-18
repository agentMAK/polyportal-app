// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const polyPortalDiscordId = "942126590345756785";

  const { accessToken } = req.body;

  // if(session == null) {
  //   res.status(400).json({ message: 'No Session' })
  const guildRes = await fetch("https://discordapp.com/api/users/@me/guilds", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });

  const guild = await guildRes.json();

  let checkGuild = false;
  for (let i = 0; i < guild.length; i++) {
    if (guild[i].id == polyPortalDiscordId) {
      checkGuild = true;
    }
  }
  res.status(400).json({ message: `${checkGuild}` });
}
