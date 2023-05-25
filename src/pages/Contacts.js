import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//MUI
import { Grid } from '@mui/material';
//REDUX
import { fetchContacts } from '../redux/contacts/operations';
//COMPONENTS
import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import { WorkSpace } from 'components/WorkSpace/WorkSpace';



export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Grid
      sx={{ display: 'flex', justifyContent: 'space-between', width: '100vw' }}
    >
      <Header />
      <SideBar />
      <WorkSpace />      
    </Grid>
  );
}
