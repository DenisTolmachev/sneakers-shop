import emptyOrders from '../../img/emptyOrders.png';
import { InfoPage } from '../InfoPage/InfoPage';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const OrdersItems = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const orderResponse = await axios.get('/orders');
        setOrders(orderResponse.data);
      } catch (e) {
        alert('Error');
        console.error('error');
      }
    })();
  }, []);

  return (
    <div>
      {orders.length > 0 ? (
        <div className='flex flex-col-reverse'>
          {orders.map(order => (
            <div className='border-b-2 first:border-b-0' key={order.id}>
              <div className='py-5'>
                <h3 className='text-xl font-bold'>Order #{order.id}</h3>
                <div className='flex flex-wrap gap-5 mt-2'>
                  {order.products.map(product => (
                    <div key={product.id} className='border flex w-64'>
                      <img
                        width={70}
                        height={70}
                        src={product.imageUrl}
                        alt=''
                      />
                      <div className='flex flex-col p-3'>
                        <p className='text-sm'>{product.name}</p>
                        <span className='text-sm font-bold mt-2'>
                          {product.price} $
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='text-l font-bold mt-5'>
                  Total price:{' '}
                  {order.products.reduce((sum, obj) => obj.price + sum, 0)} $
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <InfoPage
          img={emptyOrders}
          title='No orders!'
          description='Please order!'
        />
      )}
    </div>
  );
};