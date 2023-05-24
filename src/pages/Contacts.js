import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Box, Grid, CssBaseline} from '@mui/material';
import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';
// import SectionTitle from '../components/SectionTitle/SectionTitle';
// import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { AppNav } from '../components/AppBar/AppBar';
import { SideBar } from 'components/SideBar/SideBar';


export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100vw' }}>
    <AppNav/>
    <SideBar/>
    <Grid component="main" container sx={{ height: '100vh', width: '80%' }}>
        <CssBaseline />        
        <Box 
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '32px',
            // alignItems: 'center',
            width:'100%',
            height: '85%'
          }}
        >
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
{/* <SectionTitle text="Phonebook" /> */}
{/* <ContactForm /> */}
{/* <SectionTitle text="Contacts" /> */}
{/* <Filter /> */}
{/* {isLoading && !error && <b>Request in progress...</b>} */}
{/* <ContactList /> */}

          </Box>
          </Grid>
    
    </Box>
  );
}








