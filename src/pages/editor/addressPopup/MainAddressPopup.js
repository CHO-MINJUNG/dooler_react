import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";

const MainAddressPopup = () => {
	const [addressInfo, setAddressInfo] = useState("")
	const detailField = document.getElementById("detail");
	const dispatch = useDispatch();

	const get_address = () => {
		new window.daum.Postcode({
			oncomplete: function(data){
				var roadAddr = data.roadAddress; // 도로명 주소 변수
				var extraRoadAddr = ''; // 참고 항목 변수

				// 법정동명이 있을 경우 추가한다. (법정리는 제외)
				// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
				if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
						extraRoadAddr += data.bname;
				}
				// 건물명이 있고, 공동주택일 경우 추가한다.
				if(data.buildingName !== '' && data.apartment === 'Y') {
					extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
				}
				// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
				if(extraRoadAddr !== ''){
						extraRoadAddr = ' (' + extraRoadAddr + ')';
				}

				setAddressInfo({
					"road": roadAddr,
					"jibun" : data.jibunAddress,
					"zonecode": data.zonecode,
					"extra": extraRoadAddr
				});
				//sido, sigungu, roadname를 따로 저장해야 할 듯?

				dispatch({
					type: 'ADDRESS_CLASSIFIER_CHANGE',
					addressClassifierDict: {
						sido: data.sido,
						sigungu: data.sigungu,
						roadname: data.roadname,
					}
				})

			setAddressInfo({
				"road": roadAddr,
				"jibun" : data.jibunAddress,
				"zonecode": data.zonecode,
				"extra": extraRoadAddr
			})
			},
		onclose: function(state) {
			if(state === 'COMPLETE_CLOSE'){
				detailField.focus()
			}
		}
    }).open();
	}

	// const onDetailChange = (e) => {
	// 	dispatch({ 
	// 		type: 'ADDRESS_CHANGE',
	// 		addressArray: [addressInfo.zonecode, addressInfo.road, e.target.value],
	// 	});
	// }

	const onDetailClick = () => {
		if(addressInfo===""){
			alert("우편번호 먼저 작성바랍니다")
			detailField.blur();
		}
	}
	
	return(
		<div>
		<Helmet>
			<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" />
		</Helmet>
			<div>
				<TextField defaultValue={"우편번호"} onClick={get_address} value={addressInfo.zonecode} disabled id="outlined-disabled" />
				<Button variant="outlined" onClick={get_address}>우편번호 검색</Button>
				<br/>
				<TextField defaultValue={"도로명주소"} onClick={get_address} value={addressInfo.road} disabled id="outlined-disabled" />
				<TextField defaultValue={"지번주소"} onClick={get_address} value={addressInfo.jibun} disabled id="outlined-disabled" />
				<TextField 
					id="detail" 
					onClick={onDetailClick} 
					required 
					label="상세주소" 
					variant="outlined"
					onChange={
            function (e) {
							dispatch({ 
								type: 'ADDRESS_CHANGE',
								addressDict: {"zipcode":addressInfo.zonecode, "road":addressInfo.road, "detail":e.target.value},
							});
						}
          }/>
			</div>
		</div>
	);
  }

export default MainAddressPopup;