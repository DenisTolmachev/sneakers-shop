import styles from './ProductCard.module.scss';
import { useState } from 'react';
import { ImCheckmark, ImHeart, ImPlus } from 'react-icons/im';

export const ProductCard = ({ name, price, imageUrl, onPlus, onFaviorite }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickAdd = () => {
    onPlus({ name, price, imageUrl });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <ImHeart
        color={isFavorite ? '#ff0000' : '#BDBDBD'}
        fontSize={20}
        style={{ position: 'absolute', cursor: 'pointer' }}
        onClick={onClickFavorite}
      />
      <img width={142} height={177} src={imageUrl} alt='sneakers' />
      <h5 className={styles.productName}>{name}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.priceBlock}>
          <span className='uppercase text-gray-400'>Prise:</span>
          <b>{price} $</b>
        </div>
        <button
          className={styles.button}
          style={
            isAdded
              ? { backgroundColor: '#009A17' }
              : { backgroundColor: '#ffffff' }
          }
          onClick={onClickAdd}
        >
          {isAdded ? (
            <ImCheckmark color={'#ffffff'} fontSize={11} />
          ) : (
            <ImPlus color={'#BDBDBD'} fontSize={11} />
          )}
        </button>
      </div>
    </div>
  );
};