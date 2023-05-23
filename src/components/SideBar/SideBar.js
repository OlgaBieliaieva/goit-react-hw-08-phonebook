import { Drawer, Box } from '@mui/material';
import Filter from '../Filter/Filter';

export const SideBar = () => {
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: '30%',
          height: '100vh',
          backgroundColor: '#001f3d',
          [`& .MuiDrawer-paper`]: {
            marginTop: '60px',
            border: 'none',
            width: '30%',            
            backgroundColor: '#001f3d',
          },
        }}
      >
        {/* <Box sx={{width: '100%'}}> */}
        <Filter />
        {/* </Box> */}
      </Drawer>
    </>
  );
};
