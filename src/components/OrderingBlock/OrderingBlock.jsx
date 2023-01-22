import { Address } from './Address';
import { Buyer } from './Buyer';
import { Comments } from './Comments';
import { PaymentMethod } from './PaymentMethod';
import { ShippingMethod } from './ShippingMethod';

export const OrderingBlock = () => {
  return (
    <div className='lg:w-1/2 px-5 mt-5 md:w-full'>
      <div className='order_info'>
        <Buyer />
        <ShippingMethod />
        <Address />
        <PaymentMethod />
        <Comments />
      </div>

      <button className='mt-5 w-1/2 rounded-xl bg-green-500 px-2 py-2 font-medium text-white hover:bg-green-600'>
        Ordering
      </button>
    </div>
  );
};