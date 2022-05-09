import React, { Component } from 'react';

import { Chip, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { getDateReadable } from './getDateReadable';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Icon } from '@mui/material';
import { Stack } from '@mui/material';

import newSign from '../../assets/new_sign.png';

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

class Thumbnail extends Component {
	render() {
		const item = this.props.item;
		const title = item.office_title;
		const location = item.office_location;
		const id = item.id;
		const roadname = item.address_road
		const deposit = item.office_deposit;
		const fee = item.office_fee;
		const views_count = item.views_count;
		const create_time = item.create_time;
		// const sido = item.sido;
		// const sigungu = item.sigungu;
		// const roadname = item.roadname;

		const domain = `${API_BASE_URL}/api/crop_image/`;

		const color1 = '';
		const color2 = '#cccccc';
		const color3 = '#7b7b7b';
        
		return (
			<Grid item key={item} xs={12} sm={6} md={4} sx={
				{
					'&:hover': {  
					transitionDuration: '500ms',
					transform:'scale(1.1)',
				}}}>
				<a href={'dreams/' + id} style={{textDecoration: 'none'}}>
					<Card
						sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column'}}
					>
						<CardMedia
							component="img"
							height={192}
							image={item.thumbnail}
							alt="사무실 사진"
						/>
						{this.getNewSign(create_time)}
						<CardContent sx={{ flexGrow: 1}}>
						<Typography fontSize={20} fontWeight={700}>
								월 {deposit}/{fee}
							</Typography>
							<Typography sx={{fontSize: 14}} fontWeight={350}>
								{roadname ? roadname: '위치 오류'}
							</Typography>
							<Typography noWrap={true} sx={{color: color2, fontSize: 14, marginTop: '5px'}} fontWeight={350}>
								{title}
							</Typography>
							<Grid container sx={{marginTop: '5px'}} justifyContent={'space-between'} spacing={1} >
								<Grid item>
									<Typography sx={{fontSize: 13, color: color3}} fontWeight={350} color="text.secondary">
										{getDateReadable(create_time)}
									</Typography>
								</Grid>
								<Grid item sx={{
									display: 'flex',
									alignItems: 'center',
									flexWrap: 'wrap',}}
								>
									{/* <Chip icon={<VisibilityIcon sx={{fontSize: 13,}}/>} label={'h'}></Chip> */}
									<VisibilityIcon sx={{ fontSize: 13, color: color3}}  />
									<Typography
										variant="span"
										sx={{
											color: color3, 
											fontSize: 13, 
											display: 'inline-block', 
											marginLeft: '2px'
										}} 
										fontWeight={200}
										color="text.secondary"
									>
										{views_count}
									</Typography>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</a>
			</Grid>
		);
  }

	getNewSign (timestamp) {
		var date = new Date(timestamp);
		const now = new Date(Date.now());
	
		var difference = now - date;
		var daysDifference = Math.floor(difference/1000/60/60/24);

		if (daysDifference < 2) {
			return (
				<img 
					src={newSign} 
					style={{
						position:'absolute',
						width: '60px',
						top: '5px',
						left: '5px',
					}}
				/>
			);
		}  else {
			return (<div></div>);
		}
	
	}
};

export default Thumbnail;
