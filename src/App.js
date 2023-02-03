import { Footer } from './components/Footer/Footer';
import { Header } from './components/header/Header';
import AppContext from './context';
import { Cart } from './pages/Cart';
import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';
import { UserProfile } from './pages/UserProfile';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

axios.defaults.baseURL = 'https://63c4354d8067b6bef6d59cf6.mockapi.io';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cartResponse = await axios.get('/cart');
      const favoritesResponse = await axios.get('/favorites');
      const productsResponse = await axios.get('/products');

      setCartProducts(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setProducts(productsResponse.data);
    };
    fetchData();
  }, []);

  const onAddToCart = async obj => {
    console.log(obj);
    const findProduct = cartProducts.find(
      item => Number(item.productId) === Number(obj.id)
    );
    try {
      if (findProduct) {
        setCartProducts(prev =>
          prev.filter(item => Number(item.productId) !== Number(obj.id))
        );
        await axios.delete(`/cart/${findProduct.id}`);
      } else {
        setCartProducts(prev => [...prev, obj]);
        await axios.post('/cart', obj);
      }
    } catch (error) {
      console.log('Ups, failed to add to cart');
    }
  };

  const onDeleteCartItem = id => {
    try {
      axios.delete(`/cart/${id}`);
      setCartProducts(prev => prev.filter(item => item.productId !== id));
    } catch (error) {
      console.log('error remove');
    }
  };

  const onAddToFavorite = async obj => {
    console.log(obj);
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`/favorites/${obj.id}`);
        setFavorites(prev =>
          prev.filter(item => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post('/favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      console.log('Ups, failed to add to favourites');
    }
  };

  const searchInput = event => {
    setSearchValue(event.target.value);
  };

  return (
    <AppContext.Provider value={{ products, cartProducts, favorites }}>
      <div className='max-w-5xl m-auto rounded-2xl shadow-xl'>
        <Header products={cartProducts} favorites={favorites} />
        <Routes>
          <Route
            path='/'
            element={
              <Home
                products={products}
                cartProducts={cartProducts}
                favorites={favorites}
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
                // favorites={favorites}
                onAddToFavorite={onAddToFavorite}
              />
            }
          />
          <Route
            path='/cart'
            element={
              <Cart products={cartProducts} onRemove={onDeleteCartItem} />
            }
          />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </AppContext.Provider>
  );
};