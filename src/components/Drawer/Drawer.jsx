import { CartItem } from './CartItem/CartItem';
import styles from './Drawer.module.scss';
import { OrderingBlock } from './OrderingBlock/OrderingBlock';
import { createPortal } from 'react-dom';
import { ImCross } from 'react-icons/im';

const drawerRoot = document.getElementById('drawer-root');

export const Drawer = ({ onClose, onRemove, products = [] }) => {
  return createPortal(
    <div>
      <div>
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
            {products.length > 0 ? (
              <div className='flex-1'>
                {products.map(product => (
                  <CartItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    img={product.imageUrl}
                    onRemove={onRemove}
                  />
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
        </div>
      </div>
    </div>,
    drawerRoot
  );
};