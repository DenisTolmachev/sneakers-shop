import CartItem from './CartItem/CartItem';
import styles from './Drawer.module.scss';
import OrderingBlock from './OrderingBlock/OrderingBlock';
import { ImCross } from 'react-icons/im';

const Drawer = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className='flex-none'>
          <div className='flex justify-between'>
            <h3>Cart</h3>
            <button>
              <ImCross color={'#BDBDBD'} />
            </button>
          </div>
        </div>

        <div className='flex-1'>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <OrderingBlock />
      </div>
    </div>
  );
};

export default Drawer;