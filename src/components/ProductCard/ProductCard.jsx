import AppContext from '../../context';
import { useContext } from 'react';
import { ImCheckmark, ImHeart, ImPlus } from 'react-icons/im';

export const ProductCard = ({ id, name, price, imageUrl }) => {
  const { isProductAdded, isFavoriteAdded, onAddToCart, onAddToFavorite } =
    useContext(AppContext);
  const obj = { id, productId: id, name, price, imageUrl };
  const onClickAdd = () => {
    onAddToCart(obj);
  };

  const onClickFavorite = () => {
    onAddToFavorite(obj);
  };

  return (
    <div className='relative flex w-52 flex-col rounded-3xl border px-8 py-5 transition-all hover:-translate-y-1 hover:shadow-md m-2'>
      <>
        <ImHeart
          color={isFavoriteAdded(id) ? '#ff0000' : '#BDBDBD'}
          fontSize={20}
          style={{ position: 'absolute', cursor: 'pointer' }}
          onClick={onClickFavorite}
        />

        <img width={142} height={177} src={imageUrl} alt='sneakers' />
        <h5 className='mt-4 flex-1 text-sm'>{name}</h5>
        <div className='mt-4 flex items-center justify-between'>
          <div className='flex flex-col'>
            <span className='uppercase text-gray-400'>Prise:</span>
            <b>{price} $</b>
          </div>

          <button
            className='rounded-lg border p-2 transition-all hover:bg-gray-100 hover:shadow-md'
            style={
              isProductAdded(id)
                ? { backgroundColor: '#009A17' }
                : { backgroundColor: '#ffffff' }
            }
            onClick={onClickAdd}
          >
            {isProductAdded(id) ? (
              <ImCheckmark color={'#ffffff'} fontSize={11} />
            ) : (
              <ImPlus color={'#BDBDBD'} fontSize={11} />
            )}
          </button>
        </div>
      </>
    </div>
  );
};