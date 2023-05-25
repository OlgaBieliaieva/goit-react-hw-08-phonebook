//MUI
import { Stack, Typography } from '@mui/material';
import FolderSharedSharpIcon from '@mui/icons-material/FolderSharedSharp';

export const Logo = () => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <FolderSharedSharpIcon />
      <Typography sx={{ fontWeight: '900' }}>Contacts Store</Typography>
    </Stack>
  );
};
