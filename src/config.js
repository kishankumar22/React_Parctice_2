import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.jkiop.org/api', // Replace with your API base URL
});

export default axiosInstance;
