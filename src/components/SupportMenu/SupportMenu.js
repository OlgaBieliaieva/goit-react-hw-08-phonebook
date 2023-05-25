//MUI
import {  
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Link,
} from '@mui/material';
import ContactSupportSharpIcon from '@mui/icons-material/ContactSupportSharp';


export const SupportMenu = () => {
  return (
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
  );
};
