import React from 'react';
import { AppBar, Divider, Toolbar, Typography } from '@mui/material';
import logo from '../assets/logo.png';
import { PropTypes } from 'prop-types';

import {authenticationButtons} from './HeaderAuth';


const MidHeader = ({title}) => {
    return (
			// <Toolbar sx={{ justifyContent: "space-between" }}>
			// 	<a href="/">
			// 			<img height='30' src={logo} alt="logo"/>
			// 	</a>
			// 	{authenticationButtons(isAuthNeeded, isLoggedIn)}
			// 	{/* <Typography variant='h1' fontSize={20} fontWeight={20}>둘러 - 개인사무실 공유는 둘러에서</Typography> */}
			// </Toolbar>
      <div 
        style={
          {
            paddingTop: '30px',
            paddingBottom: '30px',
          }
        }
      >
        <Toolbar>
          <Typography variant='h4' fontWeight={400}>{title}</Typography>
        </Toolbar>
      </div>
    );
};

MidHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default MidHeader;