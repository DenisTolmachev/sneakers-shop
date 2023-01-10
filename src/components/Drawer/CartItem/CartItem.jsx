import img1 from '../../../img/sneakers/image1.jpg';
import styles from './CartItem.module.scss';
import { ImCross } from 'react-icons/im';

const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <img width={70} height={70} src={img1} alt='cart' />
      <div className={styles.cartItemInfo}>
        <p>Men's sneakers Nike Air Max 270</p>
        <span>300 $</span>
      </div>
      <button>
        <ImCross fontSize={11} color={'#BDBDBD'} />
      </button>
    </div>
  );
};

export default CartItem;