import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import HomeIcon from '@mui/icons-material/Home';
import Link from '../components/link';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ProfileCard } from "../components/profileCard";
import axios from 'axios'
import useSWR from 'swr'

type Profile = {
  name: string;
  description?: string;
}

type IdList = {
  twitterId?: string;
  discordId?: string;
  twitchId?: string;
  youtubeChannelId?: string;
  originId?: string;
}

type Member = Profile & IdList

const memberList: Member[] = [{
  name: 'funai',
  twitterId: 'paveg_',
  discordId: 'funai#8796',
  twitchId: 'paveg_',
  youtubeChannelId: ''
},
{
  name: 'テスト太郎',
  twitterId: '',
  discordId: '',
},
{
  name: '一姫二太郎',
}]

export default function Home() {
  const fetcher = (url: string) => axios.get(url).then(res => res.data)
  const { data, error } = useSWR(`https://picsum.photos/v2/list?page=1&limit=${memberList.length}`, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <Container>
    <Box sx={{ p: 4, color: 'white' }}>
      <Typography variant="h3" component="h1" color="white">work in progress</Typography>
      {memberList.map((m: Member, index: number) => {
        const imageUrl = data[index].download_url
        return <ProfileCard key={m.name} name={m.name} avatarUrl={imageUrl} />
      })}
      <Button variant="text" component={Link} href="/" startIcon={<HomeIcon />} sx={{ color: "white" }}>
        HOME
      </Button>
    </Box>
  </Container>
}
