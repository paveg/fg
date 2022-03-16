export type Profile = {
  name: string;
  description?: string;
}

export type IdList = {
  twitterId?: string;
  discordId?: string;
  twitchId?: string;
  youtubeChannelId?: string;
  originId?: string;
}

export type Member = Profile & IdList
