import { OrderingBlock } from './OrderingBlock/OrderingBlock';
import { createPortal } from 'react-dom';
import { ImCross } from 'react-icons/im';

const drawerRoot = document.getElementById('drawer-root');

export const Drawer = ({ onClose, onRemove, products = [] }) => {
  console.log(products);
  return createPortal(
    <div className='fixed left-0 top-0 z-20 h-full w-full bg-black/[0.6]'>
      <div className='absolute right-0 flex h-full w-96 flex-col bg-white p-6'>
        <div className='flex-none'>
          <div className='flex justify-between'>
            <h3 className='text-2xl font-bold'>Cart</h3>
            <button onClick={onClose}>
              <ImCross color={'#BDBDBD'} />
            </button>
          </div>
        </div>
        {products.length > 0 ? (
          <div className='flex-1'>
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
            <OrderingBlock />
          </div>
        ) : (
          <div>
            <p>Нету тута нихера</p>
            <button className='border' onClick={onClose}>
              Move to main
            </button>
          </div>
        )}
      </div>
    </div>,
    drawerRoot
  );
};