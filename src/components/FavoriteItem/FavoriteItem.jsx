import { ImCross } from 'react-icons/im';

export const FavoriteItem = ({ onRemove, favorites }) => {
  return (
    <div>
      {favorites.map(favorite => (
        <div
          key={favorite.id}
          className='gap-2 mt-5 flex flex-row items-center justify-between rounded-lg border p-5 transition-all hover:shadow-md'
        >
          <img width={70} height={70} src={favorite.imageUrl} alt='cart' />
          <div className='w-36'>
            <p className='text-sm'>{favorite.name}</p>
            <span className='text-sm font-bold'>{favorite.price} $</span>
          </div>
          <button
            className='rounded-lg border p-2 transition-all hover:bg-gray-100 hover:shadow-md'
            onClick={() => onRemove(favorite.id)}
          >
            <ImCross fontSize={11} color={'#BDBDBD'} />
          </button>
        </div>
      ))}
    </div>
  );
};