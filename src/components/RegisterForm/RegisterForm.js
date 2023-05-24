import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
// MUI
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,  
  Box,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import css from './RegisterForm.module.css';

const defaultTheme = createTheme();

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
<ThemeProvider theme={defaultTheme}>
      <Grid container sx={{ height: '100vh', width: '70%', maxWidth: '400px' }}>
        <CssBaseline />        
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
             <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              name="name"
              id="name"
              label="Name"
              // autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              name="email"
              id="email"
              label="Email Address"
              autoComplete="email"
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              {/* <Grid item> */}
                <Link to="/" 
                // variant="body2"
                >
                  Already have an account? Sign In
                </Link>
              {/* </Grid> */}
            </Grid>            
          </Box>
        </Box>      
      </Grid>
    </ThemeProvider>
  );


  //   <form  onSubmit={handleSubmit} autoComplete="off">
  //     <label >
  //       Username
  //       <input type="text" name="name" />
  //     </label>
  //     <label >
  //       Email
  //       <input type="email" name="email" />
  //     </label>
  //     <label >
  //       Password
  //       <input type="password" name="password" />
  //     </label>
  //     <button type="submit">Register</button>
  //   </form>
  // );
};
