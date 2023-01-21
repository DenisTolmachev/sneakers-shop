import { ImCross } from 'react-icons/im';

export const CartItem = ({ onRemove, products }) => {
  return (
    <div className='cart_item w-1/2 px-5 border-r-2'>
      {products.map(product => (
        <div
          key={product.id}
          className='mt-5 flex flex-row items-center justify-between rounded-lg border p-5 transition-all hover:shadow-md'
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
    </div>
  );
};