import React, { useEffect } from 'react';
import ContentListMain from './ContentListMain';
import Header from '../../components/Header';
import {Container, Divider} from '@mui/material';
import ArtBoard from './ArtBoard';
import ButtonsOfMainPage from './ButtonsOfMainPage';
import Paging from './Paging';
import { Provider } from "react-redux";
import { createStore } from "redux";
import pageReducer from './pageSlice';

const MainContentList = () => {
  const pageStore = createStore(pageReducer);

  return (
    <Container fixed maxWidth="md">
      <Header></Header>
      <Divider></Divider>
      <br></br>
      <ArtBoard></ArtBoard>
      <br></br>
      <Provider store={pageStore}>
      <ButtonsOfMainPage></ButtonsOfMainPage>
      <ContentListMain></ContentListMain>
      <Paging />
      </Provider>
    </Container>
  );
};

export default MainContentList;