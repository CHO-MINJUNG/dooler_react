import React, { Component } from 'react';


import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Button, TextField } from '@mui/material';

import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import sendContentToAxios from './sendContentToAxios';

const ThumnbnailEditor = () => {
  const img = useSelector((state) => state.imageList[0]);
  let navigate = useNavigate();
  const imgSrc = URL.createObjectURL(img);
  const title = useSelector((state) => state.title);

  const dispatch = useDispatch();

  const content = useSelector((state) => state);

  return (
    <div>
      <DialogContent>
        <DialogTitle>썸네일 만들기</DialogTitle>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column',}}
      >
        <CardMedia
          component="img"
          height={192}
          image={imgSrc}
          alt="사무실 사진"
        />
        <Typography variant='caption'>*사진의 좌우 보이는 영역은 다를 수 있습니다. (높이 위주로 확인해주세요)</Typography>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography fontWeight={500} noWrap={true}>
            {title}
          </Typography>
            <Grid container spacing={2}>
              <Grid item xs={8}>
              <TextField
                placeholder={"\'[지역] [역 이름]\' (예, 서울 성수역)"}
                fullWidth
                value={content.location}
                margin="dense"
                size="small"
                onChange={function(e) {
                  dispatch({
                    type: 'LOCATION_CHANGE',
                    text: e.target.value,
                  });
                }}
              />
              </Grid>
              <Grid item xs={4}>
                <Stack direction={'row'}>
                  <TextField
                    placeholder={"보증금"}
                    fullWidth
                    value={content.deposit}
                    margin="dense"
                    size="small"
                    type={"number"}
                    // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    onChange={function(e) {
                      dispatch({
                        type: 'DEPOSIT_CHANGE',
                        number: e.target.value,
                      });
                    }}
                  />
                  <p>
                    /
                  </p>
                  <TextField
                    placeholder={"월세"}
                    fullWidth
                    value={content.fee}
                    margin="dense"
                    size="small"
                    type={"number"}
                    onChange={function(e) {
                      dispatch({
                        type: 'FEE_CHANGE',
                        number: e.target.value,
                      });
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
        </CardContent>
      </Card>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => {
            const isLocation = (content.location != null) && (content.location != '');
            const isFee = (content.fee != null) && (content.fee != '');
            if (isLocation && isFee) {
              const success = sendContentToAxios(content)
              if (success) {
                alert('게시물 작성이 완료되었습니다')
                navigate('/')
              }
            } else {
              alert('정보를 모두 입력해주세요');
            }
          }}
        >
          완료하기
        </Button>
      </DialogActions>
    </div>
  );
}

const isOnlyNumber = (text) => {
  const isNumber = false;

  const re = /^[0-9\b]+$/;

  // if value is not blank, then test the regex

  if (text === '' || re.test(text)) {
    isNumber = true;
  }

  return isNumber;
}

export default ThumnbnailEditor;