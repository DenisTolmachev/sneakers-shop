import img1 from '../../../img/sneakers/image1.jpg';
import styles from './ProductCard.module.scss';
import { ImHeart, ImPlus } from 'react-icons/im';

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <ImHeart
        color={'#BDBDBD'}
        fontSize={20}
        style={{ position: 'absolute', cursor: 'pointer' }}
      />
      <img width={133} height={112} src={img1} alt='sneakers' />
      <h5 className={styles.productName}>Men's sneakers Nike Air Max 270</h5>
      <div className={styles.cardBottom}>
        <div className={styles.priceBlock}>
          <span className='uppercase text-gray-400'>Prise:</span>
          <b>300 $</b>
        </div>
        <button className={styles.button}>
          <ImPlus color={'#BDBDBD'} fontSize={11} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;