//MUI
import { Box } from '@mui/material';
//COMPONENTS
import { Filter } from 'components/Filter/Filter';
import { ToolMenu } from 'components/ToolMenu/ToolMenu';


export const ToolBar = () => {
    
  return (
    <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'space-between' }}>
      <Filter />
      <ToolMenu />            
    </Box>
  );
};
