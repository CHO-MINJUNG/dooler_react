import {React, useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { useDispatch } from 'react-redux';

import {authAction} from './loginSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { isEmailError, isPasswordError} from '../authValidation';
axios.defaults.withCredentials=true;

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;


const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://dooler.kr">
        Dooler
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: grey[600],
    },
  }
});

export const LoginWindow = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  let fail_message = useSelector(state => state.message);
  let isUser = useSelector(state => state.isLoggedIn)

  const loginSubmit = (event) => {
    event.preventDefault();

    let userInputData = {
      email: event.target.email.value,
      password: event.target.password.value,
    }

    dispatch(authAction(userInputData))
    .then(response => {
      if(response.payload.userLogin){
        navigate('/');
      }
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography component="h1" variant="h6" sx={{marginBottom: '30px', marginTop:'10px'}}>
            로그인
          </Typography>
          <Box component="form"
           onSubmit={(e) => {
            loginSubmit(e)
           }}
           noValidate sx={{ mt: 1 }}>
             {/* //TODO: required가 작동하지 않는 문제 해결. reducer에서 점검하면 state 바꾸는 게 애매해짐. */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="아이디"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Typography>{fail_message}</Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
            <Grid container>
              <Grid item>
                <Typography variant='body2' sx={{display:'inline'}}>계정이 없으신가요? </Typography>
                <Link href="/auth/signup" variant="body2">
                  {"회원가입"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
export default LoginWindow;