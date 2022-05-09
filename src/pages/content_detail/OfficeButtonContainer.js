import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';
axios.defaults.withCredentials=true;

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

const buttonStyle = {
    border: '1px solid black',
    color: 'black',
    '&:hover': {
      color: 'white',
      backgroundColor: '#000000',
    }
  };

const OfficeButtonContainer = ({office_id}) => {
  let navigate = useNavigate();

  const onUpdateClick = () => {
    alert("준비중인 서비스입니다")
  }

  const onDeleteClick = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      axios({
        method: 'post',
        url: `${API_BASE_URL}/api/office_info/delete/${office_id}`,
      }).then((response) => {
        if(response.data.deleteSuccess) {
          alert("삭제가 완료되었습니다")
          navigate('/');
        } else{
          alert("삭제에 실패하였습니다. 다시 시도해주세요")
        }
      });
    }
  }

  const onReuploadClick = () => {
    if (window.confirm('다시 올리시겠습니까?')){
      axios({
        method: 'post',
        url: `${API_BASE_URL}/api/office_info/reupload/${office_id}`,
      }).then((response) => {
        if(response.data.reuploadSuccess) {
          alert("재업로드가 완료되었습니다")
          navigate('/');
        } else{
          alert("재업로드에 실패하였습니다. 다시 시도해주세요")
        }
      });
    }
  }

  return (
    <div
      style={{
        paddingBottom: '20px',
      }}
      >
      <Stack direction="row" spacing={1}>
        <Button 
          variant="outlined"
          sx={buttonStyle}
        >수정</Button>
        <Button
          variant="outlined"
          sx={buttonStyle}
          onClick={onDeleteClick}
        >삭제</Button>
        {/* <Button variant="outlined" onClick={onReuploadClick}>다시 올리기</Button> */}
      </Stack>
      </div>
    
  ) 
}

export default OfficeButtonContainer;