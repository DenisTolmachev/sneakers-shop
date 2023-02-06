import { useCart } from '../../../hooks/useCart';
import { ImCart, ImHeart, ImUser } from 'react-icons/im';
import { NavLink } from 'react-router-dom';

export const HeaderMenu = ({ products, favorites }) => {
  const { totalPrice } = useCart();

  return (
    <div>
      <ul className='mt-5 flex flex-row items-center sm:mt-0'>
        <li className='relative mr-7'>
          <NavLink to='/cart'>
            <ImCart
              color={products.length > 0 ? '#009A17' : '#BDBDBD'}
              fontSize={20}
              cursor={'pointer'}
            />
            <div className='absolute flex items-center justify-center w-4 h-4 bg-red-500 text-white rounded-3xl text-xs -top-2 -right-2'>
              {products.length}
            </div>
          </NavLink>
        </li>
        <li className='mr-7'>
          <span className='text-base text-slate-500 font-medium'>
            {totalPrice} $
          </span>
        </li>
        <li className='mr-7'>
          <NavLink to='/favorites'>
            <ImHeart
              color={favorites.length > 0 ? '#ff0000' : '#BDBDBD'}
              fontSize={20}
              cursor={'pointer'}
            />
          </NavLink>
        </li>
        <li>
          <NavLink to='/profile'>
            <ImUser color={'#BDBDBD'} fontSize={20} cursor={'pointer'} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};