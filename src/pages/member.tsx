import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import HomeIcon from '@mui/icons-material/Home';
import Link from '../components/link';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Home() {
  return <Container>
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" component="h1" color="white">work in progress</Typography>
      <Button variant="text" component={Link} href="/" startIcon={<HomeIcon />} sx={{ color: "white" }}>
        HOME
      </Button>
    </Box>
  </Container>
}
