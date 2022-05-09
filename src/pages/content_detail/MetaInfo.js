import { Typography, Grid } from "@mui/material";
import { nextWednesday } from "date-fns";
import React from "react";
import { getDateReadable } from "./getDateReadable";

export function MetaInfo ({views_count, create_time}) {
  return (
    <Grid container direction={"row"} justifyContent={'end'} spacing={1}>
      <Grid item>
        <Typography sx={{fontSize: 13, marginTop: '5px'}} fontWeight={350} color="text.secondary">
          조회수: {views_count}
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{fontSize: 13, marginTop: '5px'}} fontWeight={350} color="text.secondary">
          날짜:  {getDateReadable(create_time, false)}
        </Typography>
      </Grid>
    </Grid>
  );
}