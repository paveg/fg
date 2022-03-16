import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

type Props = {
  name: string;
  avatarUrl: string;
}

export const ProfileCard: React.VFC<Props> = ({ avatarUrl, name }) => {
  return <CardHeader
    avatar={<Avatar aria-label="avatar" src={avatarUrl} />}
    title={name}
    action={
      <IconButton onClick={() => console.log('debug')} aria-label="settings">
        <MoreVertIcon sx={{ color: 'white' }} />
      </IconButton>
    }
  />
}
