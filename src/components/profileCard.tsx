import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube';
import StreamIcon from '@mui/icons-material/Stream';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Button from '@mui/material/Button';
import Link from './link';
import { Member } from '../types/member';

type Props = {
  avatarUrl: string;
  member: Member
}

export const ProfileCard: React.VFC<Props> = ({ avatarUrl, member }) => {
  return <CardHeader
    avatar={<Avatar aria-label="avatar" src={avatarUrl} />}
    title={member.name}
    action={
      <Stack direction="row">
        {member.twitterId && <Button aria-label="Twitter link" target="_blank" variant="text" component={Link} href={`https://twitter.com/${member.twitterId}`} startIcon={<TwitterIcon />} sx={{ color: "white" }} />}
        {member.youtubeChannelId && <Button aria-label="YouTube link" target="_blank" variant="text" component={Link} href={`https://www.youtube.com/channel/${member.youtubeChannelId}`} startIcon={<YouTubeIcon />} sx={{ color: "white" }} />}
        {member.twitchId && <Button aria-label="Twitch link" target="_blank" variant="text" component={Link} href={`https://www.twitch.tv/${member.twitchId}`} startIcon={<StreamIcon />} sx={{ color: "white" }} />}
        {member.steamId && <Button aria-label="Steam link" target="_blank" variant="text" component={Link} href={`https://steamcommunity.com/id/${member.steamId}`} startIcon={<SportsEsportsIcon />} sx={{ color: "white" }} />}
      </Stack>
    }
  />
}
