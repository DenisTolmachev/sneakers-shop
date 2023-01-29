import { ProductCard } from '../components/ProductCard/ProductCard';
import { SearchBar } from '../components/SearchBar/SearchBar';

export const Home = ({
  products,
  cartProducts,
  favorites,
  searchValue,
  setSearchValue,
  searchInput,
  onAddToCart,
  onAddToFavorite,
  isLoading,
}) => {
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
            id={product.id}
            productId={product.productId}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            added={cartProducts.some(
              obj => Number(obj.productId) === Number(product.productId)
            )}
            inFavorited={favorites.some(
              obj => Number(obj.productId) === Number(product.productId)
            )}
            onFavorite={obj => onAddToFavorite(obj)}
            onPlus={obj => onAddToCart(obj)}
            loading={isLoading}
          />
        ))}
      </div>
    </div>
  );
};