import { useNavigate } from 'react-router-dom';
import React, {Component, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Container, Divider, Typography} from '@mui/material';

import Header from '../../components/Header';

import FormContainer from './FormContainer';
import axios from 'axios';
axios.defaults.withCredentials=true;


export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

const MainEditor = () => {
	let navigate = useNavigate();

	axios({
		method: 'get',
		url: `${API_BASE_URL}/api/office_info/create`
	})
	.then((response) => {
		if (response.data.message){
			navigate('/auth/login')
			alert(response.data.message);
		}
	})

	return (
		<Container fixed maxWidth="md">
			<Header></Header>
			<Divider></Divider>
			<FormContainer></FormContainer>
		</Container>
	);
}

export default MainEditor;