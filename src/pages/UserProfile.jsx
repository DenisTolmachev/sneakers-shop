import { OrdersItems } from '../components/Orders/OrdersItems';

export const UserProfile = () => {
  return (
    <>
      <div className='px-10 py-3 flex-1'>
        <h3 className='text-2xl font-bold'>UserProfile</h3>
        <OrdersItems />
      </div>
    </>
  );
};