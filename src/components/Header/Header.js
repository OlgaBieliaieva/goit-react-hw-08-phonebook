//MUI
import { AppBar, Container } from '@mui/material';
//COMPONENTS
import { Logo } from 'components/Logo/Logo';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: '1201',
        paddingTop: '6px',
        paddingBottom: '6px',
        backgroundColor: '#001f3d',
      }}
    >
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Logo />
        <UserMenu />
      </Container>
    </AppBar>
  );
};
