import cart from '../../../img/cart.svg';
import heart from '../../../img/heart.svg';
import user from '../../../img/user.svg';

const HeaderMenu = () => {
  return (
    <div>
      <ul className='d-flex flex-row align-center'>
        <li className='mr-30'>
          <img src={cart} alt='cart' />
        </li>
        <li className='mr-30'>
          <span className='text-base text-slate-500 font-medium'>300 $</span>
        </li>
        <li className='mr-30'>
          <img src={heart} alt='heart' />
        </li>
        <li className='mr-30'>
          <img src={user} alt='user' />
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
