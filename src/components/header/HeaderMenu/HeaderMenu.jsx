import styles from './HeaderMenu.module.scss';
import { ImCart, ImHeart, ImUser } from 'react-icons/im';

export const HeaderMenu = ({ products, onClickCart, favorites }) => {
  return (
    <div>
      <ul className={styles.headerMenuList}>
        <li className='relative'>
          <ImCart
            color={products.length > 0 ? '#009A17' : '#BDBDBD'}
            fontSize={20}
            cursor={'pointer'}
            onClick={onClickCart}
          />
          <div className='absolute flex items-center justify-center w-4 h-4 bg-red-500 text-white rounded-3xl text-xs -top-2 -right-2'>
            {products.length}
          </div>
        </li>
        <li>
          <span className='text-base text-slate-500 font-medium'>300 $</span>
        </li>
        <li>
          <ImHeart
            color={favorites.length > 0 ? '#ff0000' : '#BDBDBD'}
            fontSize={20}
            cursor={'pointer'}
          />
        </li>
        <li>
          <ImUser color={'#BDBDBD'} fontSize={20} cursor={'pointer'} />
        </li>
      </ul>
    </div>
  );
};