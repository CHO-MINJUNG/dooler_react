import React from "react";
import LoginWindow from "./LoginWindow";
import { Provider } from "react-redux";
import{ applyMiddleware, createStore} from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Header from '../../../components/Header';

import {authReducer} from './loginSlice'
import { Container, Divider } from "@mui/material";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)
const authStore = createStoreWithMiddleware(authReducer);

const MainLogin = () => {
  return (
    <Container fixed maxWidth="md">
      <Header isAuthNeeded={false}></Header>
      <Divider></Divider>
      <Provider store={authStore}>
        <LoginWindow />
      </Provider>
    </Container>
  );
}

export default MainLogin;