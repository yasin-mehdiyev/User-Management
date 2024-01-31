import axios from 'axios';
import { BASE_URL } from 'src/utils/consts';

const axiosPublic = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export { axiosPublic };
