import { useNavigate } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials=true;

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

export const authButtons = (isAuthNeeded, isLoggedIn) => {
	if (!isAuthNeeded) {
		return ;
	} else {
		if (isLoggedIn) {
			return logoutMypageButton();
		} else {
			return loginRegistrationButton();
		}
	}
}

export const loginRegistrationButton = () => {
	return (
		<div>
			<a href="/auth/login"
				style={{
					textDecoration:'none',
					color: 'black',
				}}
			>
				로그인
			</a>
			/
			<a href="/auth/signup"
				style={{
					textDecoration:'none',
					color: 'black',
				}}
			>
				회원가입
			</a>
		</div>
	);
}

export const logoutMypageButton = () => {
	return (
		<div>
			<a href='/auth/logout'
				style={{
					textDecoration:'none',
					color: 'black',
				}}>
				로그아웃
			</a>
			/
			<a href="/"
				style={{
					textDecoration:'none',
					color: 'black',
				}}
				// onClick={alert("준비중인 서비스입니다")}
			>
				마이페이지
			</a>
		</div>
	);
}