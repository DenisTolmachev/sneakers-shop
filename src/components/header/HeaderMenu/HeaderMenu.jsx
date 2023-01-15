import styles from './HeaderMenu.module.scss';
import { ImCart, ImHeart, ImUser } from 'react-icons/im';

export const HeaderMenu = props => {
  return (
    <div>
      <ul className={styles.headerMenuList}>
        <li>
          <ImCart
            color={'#BDBDBD'}
            fontSize={20}
            cursor={'pointer'}
            onClick={props.onClickCart}
          />
        </li>
        <li>
          <span className='text-base text-slate-500 font-medium'>300 $</span>
        </li>
        <li>
          <ImHeart color={'#BDBDBD'} fontSize={20} cursor={'pointer'} />
        </li>
        <li>
          <ImUser color={'#BDBDBD'} fontSize={20} cursor={'pointer'} />
        </li>
      </ul>
    </div>
  );
};