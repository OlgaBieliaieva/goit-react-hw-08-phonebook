//MUI
import { CircularProgress, Box } from '@mui/material';

export const Loader = () => {
  return (
    <Box
      component={'div'}
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      }}
    >
      <CircularProgress color="inherit" />
    </Box>   
  );
};
