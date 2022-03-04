import { Layout } from '../components/layout'
import Image from 'next/image'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import GroupIcon from '@mui/icons-material/Group';
import Link from '../components/link'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const Logo: React.VFC = () => (
  <Image width={220} height={88} src="/images/logo.png" alt="FUNAI GAMING LOGO IMAGE" />
)

function Item(props: BoxProps) {
  const { sx, ...other } = props
  return (
    <Box
      sx={{
        marginBottom: '1rem',
        color: 'white',
        ...sx
      }}
      {...other}
    />
  )
}

export default function Home() {

  return (
    <>
      <Layout>
        <Container>
          <Box sx={{ display: 'flex', flexDirection: 'column', padding: '6em 3.5em 3.5em 3.5em', m: 1, alignItems: 'flex-start' }}>
            <Item><Logo /></Item>
            <Item><Typography variant="h3" component="h1" color="white" fontWeight="bold">TOKYO HARD GAME VIBES</Typography></Item>
            <Item><Typography variant="body1" component="p" color="white">
              FPS, Action, Simulation etc...<br />
              We play hard and be a Pradator.
            </Typography></Item>
            <Item>
              <Stack direction="row" spacing={2} color="white">
                <Button variant="text" component={Link} href="/member" startIcon={<GroupIcon />} sx={{ color: "white" }}>
                  Member
                </Button>
                <Button variant="text" component={Link} href="https://www.youtube.com/channel/UCOzQFkpb0_XvHnC-wPh_h0g" target="_blank" startIcon={<YouTubeIcon />} sx={{ color: "white" }}>
                  Video
                </Button>
                <Button variant="text" component={Link} href="https://steamcommunity.com/groups/funaigaming" target="_blank" startIcon={<SportsEsportsIcon />} sx={{ color: "white" }}>
                  Steam
                </Button>
                <Button variant="text" component={Link} href="https://funairacing.com/" target="_blank" startIcon={<TwoWheelerIcon />} sx={{ color: "white" }}>
                  FUNAI RACING
                </Button>
              </Stack>
            </Item>
          </Box>
        </Container>
      </Layout>
    </>
  )
}
