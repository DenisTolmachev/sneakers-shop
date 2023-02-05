import AppContext from '../../context';
import { useContext, useState } from 'react';
import { ImCheckmark, ImHeart, ImPlus } from 'react-icons/im';

export const ProductCard = ({
  id,
  productId,
  name,
  price,
  imageUrl,
  onPlus,
  onFavorite,
  inFavorite = false,
}) => {
  const { isProductAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(inFavorite);

  const onClickAdd = () => {
    onPlus({ id, productId, name, price, imageUrl });
  };

  const onClickFavorite = () => {
    onFavorite({ id, productId, name, price, imageUrl });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='relative flex w-52 flex-col rounded-3xl border px-8 py-5 transition-all hover:-translate-y-1 hover:shadow-md'>
      <ImHeart
        color={isFavorite ? '#ff0000' : '#BDBDBD'}
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
    </div>
  );
};