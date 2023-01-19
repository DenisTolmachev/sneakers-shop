import styles from './CartItem.module.scss';
import { ImCross } from 'react-icons/im';

export const CartItem = ({ img, price, name, onRemove, id }) => {
  return (
    <div className={styles.cartItem}>
      <img width={70} height={70} src={img} alt='cart' />
      <div className={styles.cartItemInfo}>
        <p>{name}</p>
        <span>{price} $</span>
      </div>
      <button onClick={() => onRemove(id)}>
        <ImCross fontSize={11} color={'#BDBDBD'} />
      </button>
    </div>
  );
};