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
        const [cartResponse, favoritesResponse, productsResponse] =
          await Promise.all([
            axios.get('/cart'),
            axios.get('/favorites'),
            axios.get('/products'),
          ]);

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
    try {
      const findProduct = cartProducts.find(
        item => Number(item.productId) === Number(obj.id)
      );
      if (findProduct) {
        setCartProducts(prev =>
          prev.filter(item => Number(item.productId) !== Number(obj.id))
        );
        await axios.delete(`/cart/${findProduct.id}`);
      } else {
        setCartProducts(prev => [...prev, obj]);
        const { data } = await axios.post('/cart', obj);
        setCartProducts(prev =>
          prev.map(item => {
            if (item.productId === data.productId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      console.log('Ups, failed to add to cart');
    }
  };

  const onDeleteCartItem = id => {
    try {
      axios.delete(`/cart/${id}`);
      setCartProducts(prev =>
        prev.filter(item => Number(item.id) !== Number(id))
      );
    } catch (error) {
      console.log('error remove');
    }
  };

  const onAddToFavorite = async obj => {
    try {
      const findFavorites = favorites.find(
        item => Number(item.productId) === Number(obj.id)
      );
      if (findFavorites) {
        setFavorites(prev =>
          prev.filter(item => Number(item.productId) !== Number(obj.id))
        );
        await axios.delete(`/favorites/${findFavorites.id}`);
      } else {
        setFavorites(prev => [...prev, obj]);
        const { data } = await axios.post('/favorites', obj);
        setFavorites(prev =>
          prev.map(item => {
            if (item.productId === data.productId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
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

  const isFavoriteAdded = id => {
    return favorites.some(obj => Number(obj.productId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        products,
        cartProducts,
        favorites,
        isProductAdded,
        isFavoriteAdded,
        onAddToCart,
        onAddToFavorite,
        setCartProducts,
        searchValue,
        searchInput,
      }}
    >
      <div className='max-w-5xl m-auto rounded-2xl shadow-xl min-h-full flex flex-col'>
        <Header products={cartProducts} favorites={favorites} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
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