import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import HomeIcon from '@mui/icons-material/Home';
import Link from '../components/link';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ProfileCard } from "../components/profileCard";
import axios from 'axios'
import useSWR from 'swr'
import { Member } from '../types/member'

const memberList: Member[] = [{
  name: 'フナイ',
  twitterId: 'paveg_',
  twitchId: 'paveg_',
  youtubeChannelId: 'UCOzQFkpb0_XvHnC-wPh_h0g'
},
{
  name: 'ゲンガマン',
  twitterId: 'YZ300Xtpi',
  twitchId: 'genga158',
},
{
  name: '一姫二太郎',
},
{
  name: 'テスト太郎',
}]

export default function Home() {
  const fetcher = (url: string) => axios.get(url).then(res => res.data)
  const { data, error } = useSWR(`https://picsum.photos/v2/list?page=1&limit=${memberList.length}`, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <Container>
    <Box sx={{ p: 4, color: 'white' }}>
      <Typography variant="h3" component="h1" color="white">Member</Typography>
      {memberList.map((m: Member, index: number) => {
        const imageUrl = data[index].download_url
        return <ProfileCard key={m.name} member={m} avatarUrl={imageUrl} />
      })}
      <Button variant="text" component={Link} href="/" startIcon={<HomeIcon />} sx={{ color: "white" }}>
        HOME
      </Button>
    </Box>
  </Container>
}
