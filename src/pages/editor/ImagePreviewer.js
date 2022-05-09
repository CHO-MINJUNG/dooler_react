import { ImageList, ImageListItem, Box, Button, Input, Container, Grid } from "@mui/material";
import React from "react";
import Carousel from 'nuka-carousel';
import { useDispatch, useSelector } from "react-redux";

import office from '../../assets/office1.jpeg';


export const API_BASE_URL = process.env.REACT_APP_API_ROOT;


const ImagePreviewer = () => {
	const domain = `${API_BASE_URL}/api/image/`;

	const dispatch = useDispatch();
	const imageList = useSelector((state) => state.imageList);

	const imageOrFileInput = () => {
		const renderedList = [];
		for (var i = 0; i < 4; i++) {
			if (imageList[i] === null) {
				renderedList.push(fileInput(i));
			} else {
				renderedList.push(imageViewer(i));
			}
		}

		return renderedList;
	}

	const onImageChange = event => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			dispatch({
				type: 'IMAGE_UPLOAD',
				index: event.target.dataset.id,
				image: img
			});
		}
	};

	const fileInput = (i) => {
		return (
			<Grid
				key={i}
				container
				justifyContent={'center'} 
				alignContent={'center'} 
				height={'500px'}
				
			>
				<input 
					key={i} 
					type="file" 
					name="myImage" 
					data-id={i} 
					accept="image/*"
					onChange={onImageChange}
				/>
			</Grid>
		);
	};

	const imageViewer = (i) => {
		const image = URL.createObjectURL(imageList[i]);
		return (
			<img key={i} src={image} style={imgStyle()} onClick={() => {
				if (window.confirm('삭제 하시겠습니까?')) {
					dispatch({
						type:'IMAGE_DELETE',
						index: i,
					})
				}
			}}></img>
		);
	}

	return (
		<Carousel
			defaultControlsConfig={{prevButtonText: '<', nextButtonText: '>'}}
			heightMode="current"
		>
			{imageOrFileInput(imageList)}
		</Carousel>
	);
};


const imgStyle = () => {
	return {
		maxHeight: '500px',
		objectFit: 'contain'
	};
}

export default ImagePreviewer;