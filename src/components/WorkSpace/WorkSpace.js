import { useSelector } from 'react-redux';
//MUI
import { Box, Grid, CssBaseline } from '@mui/material';
//REDUX
// import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
//COMPONENTS

import { Loader } from 'components/Loader/Loader';
import { ContactTable } from 'components/ContactTable/ContactTable';
import { ToolBar } from 'components/ToolBar/ToolBar';

export const WorkSpace = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Grid component="main" container sx={{ height: '100vh', width: '80%' }}>
      <CssBaseline />
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '32px',
          width: '100%',
          height: '85%',
        }}
      >
        <ToolBar />
        {isLoading && !error ? <Loader /> : <ContactTable />}
      </Box>
    </Grid>
  );
};
