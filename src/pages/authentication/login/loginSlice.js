import axios from 'axios';
axios.defaults.withCredentials=true;

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

export const authAction = (userInputData) => {
  const request = axios({
    method:'POST',
    url: `${API_BASE_URL}/api/auth/login`,
    data: {email: userInputData.email, password: userInputData.password},
    // withCredentials: true
  })  
    .then(response => {
      return response.data});

  return{
    type: "LOGIN_USER",
    payload: request
  }
}

export const authReducer = (currentState, action) => {
  // state initialize
  if (currentState === undefined) {
    currentState = {
      isLoggedIn: false,
      userId: '',
      message:''
    }
  }

	switch (action.type){
		case 'LOGIN_USER':
      currentState = {
        ...currentState, 
        isLoggedIn: action.payload.userLogin, 
        userId: action.payload.userId,
        message: action.payload.message
      }
      //console.log(currentState)
			break;

		default:
      break;
	}	
  return currentState;
}

