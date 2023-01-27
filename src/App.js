import { Footer } from './components/Footer/Footer';
import { Header } from './components/header/Header';
import { Cart } from './pages/Cart';
import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';
import { UserProfile } from './pages/UserProfile';
import { getCartItems, getFavoritesItems, getProducts } from './services/api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
    });
    getCartItems().then(data => {
      setCartProducts(data);
    });
    getFavoritesItems().then(data => {
      setFavorites(data);
    });
  }, []);

  const onAddToCart = obj => {
    axios.post('https://63c4354d8067b6bef6d59cf6.mockapi.io/cart', obj);
    setCartProducts(prev => [...prev, obj]);
  };

  const onDeleteCartItem = id => {
    try {
      axios.delete(`https://63c4354d8067b6bef6d59cf6.mockapi.io/cart/${id}`);
      setCartProducts(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.log('error remove');
    }
  };

  const onAddToFavorite = async obj => {
    if (favorites.find(favObj => favObj.id === obj.id)) {
      axios.delete(
        `https://63c4354d8067b6bef6d59cf6.mockapi.io/favorites/${obj.id}`
      );
      setFavorites(prev => prev.filter(item => item.id !== obj.id));
    } else {
      const { data } = await axios.post(
        'https://63c4354d8067b6bef6d59cf6.mockapi.io/favorites',
        obj
      );
      setFavorites(prev => [...prev, data]);
    }
  };

  const searchInput = event => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='max-w-5xl m-auto rounded-2xl shadow-xl'>
      <Header products={cartProducts} favorites={favorites} />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              products={products}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              searchInput={searchInput}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
            />
          }
        />
        <Route
          path='/favorites'
          element={
            <Favorites
              favorites={favorites}
              onAddToFavorite={onAddToFavorite}
            />
          }
        />
        <Route
          path='/cart'
          element={<Cart products={cartProducts} onRemove={onDeleteCartItem} />}
        />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};