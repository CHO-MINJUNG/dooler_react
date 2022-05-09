import axios from 'axios';

axios.defaults.withCredentials=true;

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

const fetchOfficeData = async (setData, page) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api?page=${page}`)
    setData(response.data)
  } catch(err) {
    console.log("Error >>", err);
  }
}

export default fetchOfficeData;