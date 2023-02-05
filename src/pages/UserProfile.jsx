import { InfoPage } from '../components/InfoPage/InfoPage';
import emptyOrders from '../img/emptyOrders.png';

export const UserProfile = () => {
  return (
    <>
      <div className='px-10 py-3 flex-1'>
        <h3 className='text-2xl font-bold'>UserProfile</h3>
        <InfoPage
          img={emptyOrders}
          title='No orders!'
          description='Please order!'
        />
      </div>
    </>
  );
};