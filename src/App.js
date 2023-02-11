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
      try {
        const cartResponse = await axios.get('/cart');
        const favoritesResponse = await axios.get('/favorites');
        const productsResponse = await axios.get('/products');

        setCartProducts(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setProducts(productsResponse.data);
      } catch (e) {
        alert('error');
      }
    };
    fetchData();
  }, []);

  const onAddToCart = async obj => {
    console.log(obj);
    const findProduct = cartProducts.find(
      item => Number(item.productId) === Number(obj.productId)
    );
    try {
      if (findProduct) {
        setCartProducts(prev =>
          prev.filter(item => Number(item.productId) !== Number(obj.productId))
        );
        await axios.delete(`/cart/${findProduct.productId}`);
      } else {
        setCartProducts(prev => [...prev, obj]);
        await axios.post('/cart', obj);
      }
    } catch (error) {
      console.log('Ups, failed to add to cart');
    }
  };

  const onDeleteCartItem = productId => {
    try {
      axios.delete(`/cart/${productId}`);
      setCartProducts(prev =>
        prev.filter(item => item.productId !== productId)
      );
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
        await axios.delete(`/favorites/${obj.productId}`);
        setFavorites(prev =>
          prev.filter(item => Number(item.productId) !== Number(obj.productId))
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

  const isProductAdded = id => {
    return cartProducts.some(obj => Number(obj.productId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        products,
        cartProducts,
        favorites,
        isProductAdded,
        setCartProducts,
      }}
    >
      <div className='max-w-5xl m-auto rounded-2xl shadow-xl min-h-full flex flex-col'>
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