import { CartItem } from '../components/CartItem/CartItem';
import { InfoPage } from '../components/InfoPage/InfoPage';
import { OrderingBlock } from '../components/OrderingBlock/OrderingBlock';
import AppContext from '../context';
import emptyCart from '../img/emptyCart.png';
import orderUp from '../img/orderUp.jpg';
import axios from 'axios';
import { useContext, useState } from 'react';

export const Cart = ({ onRemove, products = [] }) => {
  const { cartProducts, setCartProducts } = useContext(AppContext);
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

  const onClickOrder = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/orders', {
        products: cartProducts,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartProducts([]);

      for (let i = 0; i < cartProducts.length; i++) {
        const product = cartProducts[i];
        await axios.delete('/cart/' + product.id);
        await delay(500);
      }
    } catch (e) {
      alert('order error');
    }
  };

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
            <OrderingBlock onClickOrder={onClickOrder} />
          </div>
        ) : (
          <InfoPage
            img={isOrderComplete ? orderUp : emptyCart}
            title={isOrderComplete ? 'Order up!' : 'Cart is empty!'}
            description={
              isOrderComplete
                ? `Your order ${orderId} will soon be handed over to courier delivery`
                : 'Please add at least one item to cart!'
            }
          />
        )}
      </div>
    </div>
  );
};