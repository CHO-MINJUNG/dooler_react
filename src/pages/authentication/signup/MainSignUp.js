
import { isEmailError, isPasswordError } from '../authValidation';

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
axios.defaults.withCredentials=true;


export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

function Copyright(props) {
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

export default function SignUp() {
  let navigate = useNavigate();

  const [datevalue, setDateValue] = React.useState(new Date());
  const [SignupState, setSignupState] = React.useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const kakaoClick = () => {
    axios({
      method: 'get',
      url: `${API_BASE_URL}/api/auth/kakao`,
      })
      .then((response) => {
        if(response.data.loginSuccess){
          navigate('/')
        }
      })
  }

  const handleDateChange = (newValue) => {
    setDateValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let userInputData = {
      name: event.target.name.value, 
      email: event.target.email.value,
      password: event.target.password.value,
      re_password: event.target.re_password.value,
      birth: event.target.birth.value,
      phone: event.target.phone.value
    }

    if (isEmailError(userInputData.email, setEmailError)) {
      alert('4글자 이상의 숫자, 영어 대소문자로만 아이디를 만들어주세요');
    }
    else if (userInputData.password !== userInputData.re_password) {
      alert('비밀번호와 비밀번호 확인에 입력된 값이 다릅니다.');
    }
    else if (isPasswordError(userInputData.password, setPasswordError)) {
      alert('8글자 이상의 숫자, 영어 대소문자, 특수문자를 하나씩 포함하여 비밀번호를 입력해주세요 (가능한 특수문자: #?!@$%^&*-)');
    }
    else {
      axios({
        method:'post',
        url: `${API_BASE_URL}/api/auth/join`,
        data: {
          name: userInputData.name,
          email: userInputData.email, 
          password: userInputData.password,
          re_password: userInputData.re_password,
          birth: userInputData.birth,
          phone: userInputData.phone
        }
        }).then((result) => {
          if(result.data.createUser===true){
            alert("회원가입이 완료되었습니다.")
            navigate('/');
          }
          setSignupState(result.data.message)
      })
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{borderRadius: '5px', paddingBottom:'10px'}}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h6" sx={{marginBottom: '30px', marginTop:'10px'}}>
            회원가입    
          </Typography>
          <Box
            sx={{
              alignItems: 'start',
            }}>
            <Typography component="h1" variant="h5">
              지금 둘러에서 새로운 꿈을 연결보세요!
            </Typography>
          </Box>
          <Box component="form" noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="user-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="이름"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  error={emailError}
                  fullWidth
                  id="email"
                  label="아이디"
                  name="email"
                  autoComplete="user-id"
                  onChange={(e) => {
                    isEmailError(e.target.value, setEmailError);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="re_password"
                  label="비밀번호 확인"
                  type="password"
                  id="re_password"
                  autoComplete="re-password"
                />
              </Grid>
              <Grid item xs={12}>
              <Stack spacing={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="생년월일"
                    inputFormat="yyyy/MM/dd"
                    value={datevalue}
                    onChange={handleDateChange}
                    required
                    renderInput={(params) => <TextField name='birth' {...params} />}
                    />
                </LocalizationProvider>
              </Stack>
              </Grid>
              <Grid item xs={12}>
              <TextField
                    fullWidth
                    required
                    autoComplete="given-name"
                    name="phone"
                    id="phone"
                    label="휴대폰 번호"
                  />
            {/* <Box component="form" noValidate action={`${API_BASE_URL}/api/sms_auth/message`} method="post" sx={{ mt: 3, }} rowSpacing={'space-between'}>
              
              <Button 
                variant="contained" 
                type="submit"
                endIcon={<SendIcon />}
                sx={{ mt: 1, mb: 1 }}
              >
                인증하기
              </Button>
            </Box> */}
              </Grid>
            </Grid>
            <Typography>{SignupState}</Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              완료
            </Button>
            <Grid container justifyContent="flex-start">
              <Grid item>
                <Typography variant='body2' sx={{display: 'inline'}}>이미 계정이 있으신가요? </Typography>
                <Link href="/auth/login" variant="body2">
                  로그인
                </Link>
              </Grid>
            </Grid>
          </Box>
          <button
            onClick={kakaoClick}
          > 카카오톡 로그인 </button>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}