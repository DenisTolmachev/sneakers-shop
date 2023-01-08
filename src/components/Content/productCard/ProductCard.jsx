import plusBtn from '../../../img/plusBtn.svg';
import img1 from '../../../img/sneakers/image1.jpg';
import styles from './ProductCard.module.scss';

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <img width={133} height={112} src={img1} alt='sneakers' />
      <h5 className={styles.productName}>Men's sneakers Nike Air Max 270</h5>
      <div className={styles.cardBottom}>
        <div className={styles.priceBlock}>
          <span className='uppercase text-gray-400'>Prise:</span>
          <b>300 $</b>
        </div>
        <button className={styles.button}>
          <img src={plusBtn} alt='add to cart' />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;