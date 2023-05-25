//MUI
import { Drawer } from '@mui/material';
//COMPONENTS
import { NavMenu } from 'components/NavMenu/NavMenu';
import { SupportMenu } from 'components/SupportMenu/SupportMenu';

export const SideBar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: '20%',
        height: '100vh',
        backgroundColor: '#001f3d',
        display: 'flex',
        [`& .MuiDrawer-paper`]: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginTop: '60px',
          marginBottom: '60px',
          paddingBottom: '60px',
          border: 'none',
          width: '20%',
          backgroundColor: '#001f3d',
        },
      }}
    >
      <NavMenu />
      <SupportMenu />
    </Drawer>
  );
};
