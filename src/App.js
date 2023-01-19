import styles from './App.module.scss';
import { ProductCard } from './components/Content/ProductCard/ProductCard';
// import { Content } from './components/Content/Content';
import { Drawer } from './components/Drawer/Drawer';
import { Header } from './components/header/Header';
import { addToCart, getCartItems, getProducts } from './services/api';
import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
    });
    getCartItems().then(data => {
      setCartProducts(data);
    });
  }, []);

  const onAddToCart = obj => {
    addToCart(obj);
    setCartProducts(prev => [...prev, obj]);
  };

  const onDeleteCartItem = id => {
    console.log(id);
    // onRemoveCartItem(id);
    setCartProducts(prev => prev.filter(item => item.id !== id));
  };

  const searchInput = event => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles.appContainer}>
      {cartOpened && (
        <Drawer
          products={cartProducts}
          onClose={() => setCartOpened(false)}
          onRemove={onDeleteCartItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      {/*<Content />*/}
      <div className='content'>
        <div className='p-10 m-auto'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div>
              <h1 className='text-3xl font-bold'>
                {searchValue
                  ? `Query search: '${searchValue}'`
                  : 'All sneakers'}
              </h1>
            </div>
            {/*<SearchBar />*/}
            <div className='searchBar'>
              <div className='relative'>
                <div className='absolute top-8 left-3 z-10 cursor-pointer md:top-3'>
                  <FiSearch color={'#9B9B9B'} fontSize={20} />
                </div>
                {/*<img src={searchIcon} alt='search' />*/}
                <input
                  className='mt-5 rounded-lg border p-2 pl-10 pr-10 md:mt-0'
                  onChange={searchInput}
                  value={searchValue}
                  type='text'
                  placeholder='Search'
                />
                {searchValue && (
                  <div
                    className='absolute top-8 right-3 z-10 cursor-pointer md:top-4'
                    onClick={() => setSearchValue('')}
                  >
                    <ImCross color={'#9B9B9B'} fontSize={12} />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='flex flex-wrap gap-5 lg:gap-9 mt-10'>
            {products
              .filter(product =>
                product.name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  imageUrl={product.imageUrl}
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