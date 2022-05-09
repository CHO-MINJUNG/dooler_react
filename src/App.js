import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContentList from "./pages/content_list/MainContentList";
import MainContentSingle from "./pages/content_detail/MainContentSingle";

import MainLogin from "./pages/authentication/login/MainLogin";
import MainMypage from "./pages/authentication/mypage/MainMypage";
import MainSignUp from "./pages/authentication/signup/MainSignUp";
import MainLogout from "./pages/authentication/logout/MainLogout";
import MainEditor from "./pages/editor/MainEditor";

import {Helmet} from "react-helmet";
import favicon from "./assets/favicon.png";
import logo from "./assets/logo.png";

function App() {

  const currentUrl = document.location.href;
  return (
    <div>
      <Helmet>
        <title>둘러 - 개인사무실 공유</title>
        <link rel="icon" href={favicon} />

        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="둘러 - 개인사무실 공유" />
        {/* 페이지 상세 정보 */}
        <meta
            property="og:description"
            content="개인사무실 공유 플랫폼 둘러입니다"
        />
        <meta
          name="description"
          content="개인 사무실 공유. 당신의 작은 시작, 당신의 큰 꿈. 둘러입니다."
        />
        {/* 페이지 대표 이미지 정보 */}
        <meta property="og:image" content={logo} />
      </Helmet>
      <BrowserRouter>
        {/*Switch를 통해서 404페이지 만들 수 있음 (https://www.daleseo.com/react-router-basic/)*/}
        <Routes>
          <Route path="/" exact={true} element={<MainContentList/>} /> 
          <Route path="/dreams/:id" exact={true} element={<MainContentSingle/>} />
          <Route path="/auth/login" exact={true} element={<MainLogin />} />
          <Route path="/mypage" exact={true} element={<MainMypage />} />
          <Route path="/auth/signup" exact={true} element={<MainSignUp />} />
          <Route path="/auth/logout" exact={true} element={<MainLogout />} />
          <Route path="/createDream" exact={true} element={<MainEditor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
