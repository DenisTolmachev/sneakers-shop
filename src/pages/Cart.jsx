import { CartItem } from '../components/CartItem/CartItem';
import { OrderingBlock } from '../components/OrderingBlock/OrderingBlock';
import { NavLink } from 'react-router-dom';

export const Cart = ({ onRemove, products = [] }) => {
  return (
    <div className='cart'>
      <div className='right-0 bg-white p-10'>
        <div className='cart_title'>
          <div className='flex justify-between'>
            <h3 className='text-2xl font-bold'>Cart</h3>
          </div>
        </div>
        {products.length > 0 ? (
          <div className='flex flex-row '>
            <CartItem products={products} onRemove={onRemove} />
            <OrderingBlock />
          </div>
        ) : (
          <div>
            <p>Нету тута нихера</p>
            <button className='border'>
              <NavLink to='/'>Move to main</NavLink>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};