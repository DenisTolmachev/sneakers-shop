import cart from '../../../img/cart.svg';
import heart from '../../../img/heart.svg';
import user from '../../../img/user.svg';
import styles from './HeaderMenu.module.scss';

const HeaderMenu = () => {
  return (
    <div>
      <ul className={styles.headerMenuList}>
        <li>
          <img src={cart} alt='cart' />
        </li>
        <li>
          <span className='text-base text-slate-500 font-medium'>300 $</span>
        </li>
        <li>
          <img src={heart} alt='heart' />
        </li>
        <li>
          <img src={user} alt='user' />
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;