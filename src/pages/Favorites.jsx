import { InfoPage } from '../components/InfoPage/InfoPage';
import { ProductCard } from '../components/ProductCard/ProductCard';
import AppContext from '../context';
import emptyFavorites from '../img/emptyFavorites.png';
import { useContext } from 'react';

export const Favorites = ({ onAddToFavorite }) => {
  const { favorites } = useContext(AppContext);

  return (
    <div className='px-10 py-3 flex-1'>
      <h3 className='text-2xl font-bold'>Favorites</h3>
      {favorites.length > 0 ? (
        <div className='flex flex-wrap gap-5 lg:gap-9 mt-10'>
          {favorites.map(product => (
            <ProductCard
              key={product.id}
              inFavorited={true}
              onFavorite={onAddToFavorite}
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