import axios from 'axios';

axios.defaults.baseURL = 'https://63c4354d8067b6bef6d59cf6.mockapi.io';

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`/products`);
    return data;
  } catch (error) {
    console.log('Error');
  }
};