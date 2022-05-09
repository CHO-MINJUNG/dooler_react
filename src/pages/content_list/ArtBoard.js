import { Card } from "@mui/material";
import React from "react";
import MediaQuery from 'react-responsive';

import artboardLong from '../../assets/artboard_long.png';
import artboardShort from '../../assets/artboard_short.png';

const ArtBoard = () => {
	return (
		<div>
			<MediaQuery maxWidth={900}>
				<img src={artboardShort} width={'100%'}></img>
			</MediaQuery>
			<MediaQuery minWidth={901}>
				<img src={artboardLong} width={'100%'}></img>
			</MediaQuery>
		</div>
	);
};

export default ArtBoard;