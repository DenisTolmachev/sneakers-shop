import axios from 'axios';

axios.defaults.baseURL = 'https://63c4354d8067b6bef6d59cf6.mockapi.io';

export const getProducts = async () => {
  try {
    return await axios.get(`/products`).then(res => res.data);
  } catch (error) {
    console.log('Error');
  }
};

export const getCartItems = async () => {
  try {
    return await axios.get(`/cart`).then(res => res.data);
  } catch (error) {
    console.log('Error');
  }
};