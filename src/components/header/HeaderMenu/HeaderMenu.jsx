import styles from './HeaderMenu.module.scss';
import { ImCart, ImHeart, ImUser } from 'react-icons/im';

const HeaderMenu = () => {
  return (
    <div>
      <ul className={styles.headerMenuList}>
        <li>
          <ImCart color={'#BDBDBD'} fontSize={20} />
        </li>
        <li>
          <span className='text-base text-slate-500 font-medium'>300 $</span>
        </li>
        <li>
          <ImHeart color={'#BDBDBD'} fontSize={20} />
        </li>
        <li>
          <ImUser color={'#BDBDBD'} fontSize={20} />
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;