import axios from 'axios';
import { BASE_URL } from '../config/constants';

export const sendRequest = async (data, method, url, headers) => {
  const options = {
    method,
    headers: {headers, 'Content-Type': 'application/json' },
    data: data,
    url: `${BASE_URL}/${url}`,
  };
  try {
    const { data } = await axios(options);
    if (data) return data;

    throw new Error('Something went wrong please try again');
  } catch (err) {
    throw err;
  }
};
