import { CartItem } from './CartItem/CartItem';
import styles from './Drawer.module.scss';
import { OrderingBlock } from './OrderingBlock/OrderingBlock';
import { nanoid } from 'nanoid';
import { ImCross } from 'react-icons/im';

export const Drawer = ({ onClose, products = [] }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className='flex-none'>
          <div className='flex justify-between'>
            <h3>Cart</h3>
            <button onClick={onClose}>
              <ImCross color={'#BDBDBD'} />
            </button>
          </div>
        </div>

        <div className='flex-1'>
          {products.map(product => (
            <CartItem
              key={nanoid()}
              name={product.name}
              price={product.price}
              img={product.imageUrl}
            />
          ))}
        </div>
        <OrderingBlock />
      </div>
    </div>
  );
};