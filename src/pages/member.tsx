import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import axios from "axios";
import useSWR from "swr";

import Link from "../components/link";
import { ProfileCard } from "../components/profileCard";
import { Member } from "../types/member";

const memberList: Member[] = [
  {
    name: "フナイ",
    twitterId: "paveg_",
    twitchId: "paveg_",
    youtubeChannelId: "UCOzQFkpb0_XvHnC-wPh_h0g",
    steamId: "funai_gg",
  },
  {
    name: "ゲンガマン",
    twitterId: "YZ300Xtpi",
    twitchId: "genga158",
    steamId: "genga158",
  },
  {
    name: "ダン チュウタ",
    twitterId: "otk_nkt",
    youtubeChannelId: "UCPLRUmE3AO7kH71i8nv2kfg",
  },
  {
    name: "kisarazuoutlet",
    twitterId: "irumaoutletpark",
  },
  // {
  //   name: '司馬一太郎',
  //   twitterId: 'osiri_online',
  // },
  // {
  //   name: 'kan imiso',
  //   twitterId: 'kulx00',
  // }
];

export default function Home() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    `https://picsum.photos/v2/list?page=1&limit=${memberList.length}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Container>
      <Box sx={{ p: 4, color: "white" }}>
        <Typography variant="h3" component="h1" color="white">
          Member
        </Typography>
        {memberList.map((m: Member, index: number) => {
          const imageUrl = data[index].download_url;
          return <ProfileCard key={m.name} member={m} avatarUrl={imageUrl} />;
        })}
        <Button
          variant="text"
          component={Link}
          href="/"
          startIcon={<HomeIcon />}
          sx={{ color: "white" }}
        >
          HOME
        </Button>
      </Box>
    </Container>
  );
}
