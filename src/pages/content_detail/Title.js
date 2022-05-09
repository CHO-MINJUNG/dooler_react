import React from "react";
import { Typography } from "@mui/material";

export function Title ({title}) {
  console.log(title);
  return(
    <div 
      style={{
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      <Typography variant='h1' fontWeight={600} fontSize={30}>{title}</Typography>
      
    </div>);
}