import { useNavigate } from 'react-router-dom';
import React from "react";
import axios from 'axios';
axios.defaults.withCredentials=true;

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

const MainLogout = () => {
  let navigate = useNavigate();
  axios({
    method: 'get',
    url: `${API_BASE_URL}/api/auth/logout`,
    })
    .then((response) => {
      if(response.data.logoutSuccess){
        navigate('/')
      }
    })
return (
  <div>
  </div>
  );
};

export default MainLogout;