import { CartItem } from '../components/CartItem/CartItem';
import { InfoPage } from '../components/InfoPage/InfoPage';
import { OrderingBlock } from '../components/OrderingBlock/OrderingBlock';
import emptyCart from '../img/emptyCart.png';

export const Cart = ({ onRemove, products = [] }) => {
  return (
    <div className='cart flex-1'>
      <div className='right-0 bg-white px-10 pt-3 pb-5'>
        <div className='cart_title'>
          <div className='flex justify-between'>
            <h3 className='text-2xl font-bold'>Cart</h3>
          </div>
        </div>
        {products.length > 0 ? (
          <div className='flex md:flex-row flex-col '>
            <CartItem products={products} onRemove={onRemove} />
            <OrderingBlock />
          </div>
        ) : (
          <InfoPage
            img={emptyCart}
            title='Cart is empty!'
            description='Please add at least one item to cart!'
          />
        )}
      </div>
    </div>
  );
};