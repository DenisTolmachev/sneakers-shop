import { Footer } from './components/Footer/Footer';
import { Header } from './components/header/Header';
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const cartResponse = await axios.get('/cart');
      const favoritesResponse = await axios.get('/favorites');
      const productsResponse = await axios.get('/products');

      setIsLoading(false);

      setCartProducts(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setProducts(productsResponse.data);
    };
    fetchData();
  }, []);

  const onAddToCart = obj => {
    console.log(obj);
    try {
      if (
        cartProducts.find(
          item => Number(item.productId) === Number(obj.productId)
        )
      ) {
        axios.delete(`/cart/${obj.productId}`);
        setCartProducts(prev =>
          prev.filter(item => Number(item.productId) !== Number(obj.productId))
        );
      } else {
        axios.post('/cart', obj);
        setCartProducts(prev => [...prev, obj]);
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
      if (
        favorites.find(
          favObj => Number(favObj.productId) === Number(obj.productId)
        )
      ) {
        axios.delete(`/favorites/${obj.productId}`);
        setFavorites(prev =>
          prev.filter(
            favObj => Number(favObj.productId) !== Number(obj.productId)
          )
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
              isLoading={isLoading}
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