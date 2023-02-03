import { ProductCard } from '../components/ProductCard/ProductCard';
import AppContext from '../context';
import { useContext } from 'react';

export const Favorites = ({ onAddToFavorite }) => {
  const { favorites } = useContext(AppContext);

  return (
    <div className='px-10 py-3 flex-1'>
      <h3 className='text-2xl font-bold'>Favorites</h3>
      <div className='flex flex-wrap gap-5 lg:gap-9 mt-10'>
        {favorites.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            productId={product.productId}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            inFavorited={true}
            onFavorite={onAddToFavorite}
          />
        ))}
      </div>
    </div>
  );
};