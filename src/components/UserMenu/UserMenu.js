import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
//REDUX
import { logOut } from 'redux/auth/operations';
//MUI
import { Stack, Typography, Avatar, IconButton } from '@mui/material';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography sx={{ fontWeight: '500' }}>Welcome, {user.name}</Typography>
      <Avatar>{user.name.slice(0, 1)}</Avatar>
      <IconButton
        type="button"
        onClick={() => dispatch(logOut())}
        sx={{ color: '#fff' }}
      >
        <LogoutSharpIcon />
      </IconButton>
    </Stack>
  );
};
