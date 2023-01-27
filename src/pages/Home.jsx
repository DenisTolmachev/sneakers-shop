import { ProductCard } from '../components/ProductCard/ProductCard';
import { SearchBar } from '../components/SearchBar/SearchBar';

export const Home = ({
  products,
  searchValue,
  setSearchValue,
  searchInput,
  onAddToCart,
  onAddToFavorite,
}) => {
  return (
    <div className='px-10 py-3 m-auto'>
      <SearchBar
        searchValue={searchValue}
        searchInput={searchInput}
        setSearchValue={setSearchValue}
      />

      <div className='flex flex-wrap gap-5 lg:gap-9 mt-10'>
        {products
          .filter(product =>
            product.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              onFavorite={obj => onAddToFavorite(obj)}
              onPlus={obj => onAddToCart(obj)}
            />
          ))}
      </div>
    </div>
  );
};