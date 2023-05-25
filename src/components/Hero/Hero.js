//MUI
import { Box } from '@mui/material';
//STYLES
import css from './Hero.module.css'



export const Hero = () => {
  return (
    <Box component={'section'} className={css.heroContainer}>
      <h1>Still using paper?</h1>
      <p> Take care of Nature, join the</p>
      <p>Contacts Store</p>
    </Box>
  );
};
