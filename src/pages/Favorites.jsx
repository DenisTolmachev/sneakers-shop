import { InfoPage } from '../components/InfoPage/InfoPage';
import { ProductCard } from '../components/ProductCard/ProductCard';
import AppContext from '../context';
import emptyFavorites from '../img/emptyFavorites.png';
import { useContext } from 'react';

export const Favorites = () => {
  const { favorites, onAddToFavorite, onAddToCart } = useContext(AppContext);

  return (
    <div className='w-full px-10 py-3 flex-1'>
      <h3 className='text-2xl font-bold'>Favorites</h3>
      {favorites.length > 0 ? (
        <div className='flex flex-row flex-wrap justify-around mt-10'>
          {favorites.map(product => (
            <ProductCard
              key={product.id}
              onFavorite={onAddToFavorite}
              onPlus={onAddToCart}
              {...product}
            />
          ))}
        </div>
      ) : (
        <InfoPage
          img={emptyFavorites}
          title='No favourites!'
          description='You haven`t added anything to the favourites! Please add product!'
        />
      )}
    </div>
  );
};