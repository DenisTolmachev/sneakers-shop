import styles from './App.module.scss';
import { ProductCard } from './components/Content/ProductCard/ProductCard';
import { SearchBar } from './components/Content/SearchBar/SearchBar';
// import { Content } from './components/Content/Content';
import { Drawer } from './components/Drawer/Drawer';
import { Header } from './components/header/Header';
import { getProducts } from './services/api';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
    });
  }, []);

  const onAddToCart = obj => {
    setCartProducts(prev => [...prev, obj]);
  };

  return (
    <div className={styles.appContainer}>
      {cartOpened && (
        <Drawer products={cartProducts} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      {/*<Content />*/}
      <div className='content'>
        <div className='p-10 m-auto'>
          <div className='flex flex-col sm:flex-row align-center justify-between'>
            <div>
              <h1 className='text-3xl font-bold'>All sneakers</h1>
            </div>
            <SearchBar />
          </div>

          <div className='flex flex-wrap gap-5 lg:gap-9 mt-10'>
            {products.map(product => (
              <ProductCard
                key={nanoid()}
                name={product.name}
                price={product.price}
                imageUrl={product.imgUrl}
                onFaviorite={() => console.log('to favorite')}
                onPlus={obj => onAddToCart(obj)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};