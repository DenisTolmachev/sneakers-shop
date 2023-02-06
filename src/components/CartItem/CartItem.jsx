import { useCart } from '../../hooks/useCart';
import { ImCross } from 'react-icons/im';

export const CartItem = ({ onRemove, products }) => {
  const { totalPrice } = useCart();

  return (
    <div className='cart_item lg:w-1/2 px-5 lg:border-r-2 md:w-full'>
      {products.map(product => (
        <div
          key={product.id}
          className='gap-2 mt-5 flex flex-row items-center justify-between rounded-lg border p-5 transition-all hover:shadow-md'
        >
          <img width={70} height={70} src={product.imageUrl} alt='cart' />
          <div className='w-36'>
            <p className='text-sm'>{product.name}</p>
            <span className='text-sm font-bold'>{product.price} $</span>
          </div>
          <button
            className='rounded-lg border p-2 transition-all hover:bg-gray-100 hover:shadow-md'
            onClick={() => onRemove(product.id)}
          >
            <ImCross fontSize={11} color={'#BDBDBD'} />
          </button>
        </div>
      ))}

      <div className='total'>
        <div className='flex items-end'>
          <span className='text-base font-bold'>Total</span>
          <div className='flex-1 border-b-2 border-dashed mx-2 relative -top-1'></div>
          <span className='mt-2 text-base font-bold'>{totalPrice} $</span>
        </div>
        <div className='flex items-end'>
          <span className='text-base font-bold'>Tax 5%</span>
          <div className='flex-1 border-b-2 border-dashed mx-2 relative -top-1'></div>
          <span className='mt-2 text-base font-bold'>
            {(totalPrice / 100) * 5} $
          </span>
        </div>
      </div>
    </div>
  );
};