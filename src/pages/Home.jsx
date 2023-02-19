import { ProductCard } from '../components/ProductCard/ProductCard';
import { SearchBar } from '../components/SearchBar/SearchBar';
import AppContext from '../context';
import { useContext } from 'react';

export const Home = () => {
  const {
    products,
    searchValue,
    setSearchValue,
    searchInput,
    onAddToCart,
    onAddToFavorite,
  } = useContext(AppContext);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className='w-full px-10 py-3'>
      <SearchBar
        searchValue={searchValue}
        searchInput={searchInput}
        setSearchValue={setSearchValue}
      />

      <div className='flex flex-row flex-wrap justify-around mt-10'>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            onFavorite={onAddToFavorite}
            onPlus={onAddToCart}
            {...product}
          />
        ))}
      </div>
    </div>
  );
};