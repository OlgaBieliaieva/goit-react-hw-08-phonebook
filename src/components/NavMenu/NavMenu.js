//MUI
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Divider,
  ListItemText,
} from '@mui/material';
import ContactsSharpIcon from '@mui/icons-material/ContactsSharp';

export const NavMenu = () => {
  return (
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
  );
};
