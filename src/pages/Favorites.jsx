import { FavoriteItem } from '../components/FavoriteItem/FavoriteItem';

export const Favorites = ({ onRemove, favorites = [] }) => {
  return (
    <div className='px-10 py-3 flex-1'>
      <h3 className='text-2xl font-bold'>Favorites</h3>
      <FavoriteItem favorites={favorites} onRemove={onRemove} />
    </div>
  );
};