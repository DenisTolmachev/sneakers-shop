import styles from './CartItem.module.scss';
import { ImCross } from 'react-icons/im';

export const CartItem = props => {
  return (
    <div className={styles.cartItem}>
      <img width={70} height={70} src={props.img} alt='cart' />
      <div className={styles.cartItemInfo}>
        <p>{props.name}</p>
        <span>{props.price} $</span>
      </div>
      <button>
        <ImCross fontSize={11} color={'#BDBDBD'} />
      </button>
    </div>
  );
};