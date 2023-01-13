import styles from './ProductCard.module.scss';
import { ImHeart, ImPlus } from 'react-icons/im';

export const ProductCard = props => {
  return (
    <div className={styles.card}>
      <ImHeart
        color={'#BDBDBD'}
        fontSize={20}
        style={{ position: 'absolute', cursor: 'pointer' }}
      />
      <img width={133} height={133} src={props.image} alt='sneakers' />
      <h5 className={styles.productName}>{props.name}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.priceBlock}>
          <span className='uppercase text-gray-400'>Prise:</span>
          <b>{props.price} $</b>
        </div>
        <button className={styles.button}>
          <ImPlus color={'#BDBDBD'} fontSize={11} />
        </button>
      </div>
    </div>
  );
};