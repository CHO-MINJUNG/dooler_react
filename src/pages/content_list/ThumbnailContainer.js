import * as React from 'react';
import Thumbnail from './Thumbnail';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function ThumbnailContainer(props) {
  return (
    <Grid container spacing={2}>
      {props.itemData.map((item) => (
        <Thumbnail key={item.id} item={item}></Thumbnail>
      ))}
    </Grid>
  );
}