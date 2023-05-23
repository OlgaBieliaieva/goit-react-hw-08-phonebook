// import {Nav} from '../Nav/Nav'
// import {AuthNav} from '../AuthNav/AuthNav'
// import { UserMenu } from '../UserMenu/UserMenu';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import {
  AppBar,
  Container,
  Stack,
  Typography,
  Avatar,
  IconButton,
} from '@mui/material';
import FolderSharedSharpIcon from '@mui/icons-material/FolderSharedSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';

export const AppNav = () => {
    const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <>
      <AppBar position="fixed" sx={{zIndex: '1201', paddingTop: '6px', paddingBottom: '6px', backgroundColor: '#001f3d'}}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <FolderSharedSharpIcon />
            <Typography sx={{ fontWeight: '900' }}>Contacts Store</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography sx={{ fontWeight: '500' }}>
              Welcome, {user.name}
            </Typography>
            <Avatar>{user.name.slice(0, 1)}</Avatar>
            <IconButton type="button" onClick={() => dispatch(logOut())} sx={{color: '#fff'}}>
              <LogoutSharpIcon />
            </IconButton>
          </Stack>
          {/* <Nav/> */}
          {/* <UserMenu /> */}
          {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
        </Container>
      </AppBar>
    </>
  );
};
