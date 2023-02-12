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
    <div className='px-10 py-3 m-auto'>
      <SearchBar
        searchValue={searchValue}
        searchInput={searchInput}
        setSearchValue={setSearchValue}
      />

      <div className='flex flex-wrap gap-5 lg:gap-9 mt-10'>
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