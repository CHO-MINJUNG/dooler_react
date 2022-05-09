import axios from 'axios';
axios.defaults.withCredentials=true;

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

const sendContentToAxios = (content) => {
  let formData = new FormData();
  let createSuccess = true;

  const num = content.imageList.length;
  for (var i=0; i<num; i++){
    if (content.imageList[i]=== null) break;
    formData.append(`image`, content.imageList[i]);
  }
  
  formData.append('contact', content.contact)
  formData.append('deposit', content.deposit)
  formData.append('fee', content.fee)
  formData.append('location', content.location)
  formData.append('mainText', content.mainText)
  formData.append('title', content.title)
  formData.append('zipcode', content.address.zipcode)
  formData.append('road', content.address.road)
  formData.append('detail', content.address.detail)

  axios({
    method: 'post',
    url: `${API_BASE_URL}/api/office_info/create`,
    data: formData,
    headers: { "Content-type" : "multipart/form-data"},
  }).then((response) => {
    createSuccess = response.data.createSuccess
  });
  return createSuccess
}

export default sendContentToAxios;