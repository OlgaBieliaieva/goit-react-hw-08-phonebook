import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Divider,
  ListItemText,
  Typography,
  Link,
} from '@mui/material';
import ContactsSharpIcon from '@mui/icons-material/ContactsSharp';
import ContactSupportSharpIcon from '@mui/icons-material/ContactSupportSharp';
// import Filter from '../Filter/Filter';

export const SideBar = () => {
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: '20%',
          height: '100vh',
          backgroundColor: '#001f3d',
          display: 'flex',
          [`& .MuiDrawer-paper`]: {
            marginTop: '60px',
            marginBottom: '60px',
            border: 'none',
            width: '20%',
            backgroundColor: '#001f3d',
          },
        }}
      >
        <Box
          sx={{
            height: '100%',
            paddingBottom: '60px',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <List sx={{ color: '#fff' }}>
            <ListItem key={'Contacts'} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: '#fff' }}>
                  <ContactsSharpIcon />
                </ListItemIcon>
                <ListItemText primary={'Contacts'} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </List>
          
          <List sx={{ color: '#fff' }}>
            <ListItem key={'Support'} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: '#fff' }}>
                  <ContactSupportSharpIcon />
                </ListItemIcon>
                <ListItemText primary={'Support'} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <Typography align="center" sx={{ fontSize: '12px' }}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                  Website
                </Link>{' '}
                {new Date().getFullYear()}
              </Typography>
            </ListItem>
          </List>
          {/* <Box sx={{width: '100%'}}> */}
          {/* <Filter /> */}
        </Box>
      </Drawer>
    </>
  );
};
