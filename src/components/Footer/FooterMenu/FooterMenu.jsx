import { NavLink } from 'react-router-dom';

export const FooterMenu = () => {
  return (
    <div className='flex flex-col px-5 w-1/5 items-center'>
      <div>
        <h3 className='text-lg font-bold'>Menu</h3>
        <ul className='mt-2 text-base text-slate-500 font-medium'>
          <li className='hover:text-black cursor-pointer mt-2'>
            <NavLink to='/profile'>User Profile</NavLink>
          </li>
          <li className='hover:text-black cursor-pointer mt-2'>
            <NavLink to='/favorites'>Favorites</NavLink>
          </li>
          <li className='hover:text-black cursor-pointer mt-2'>
            <NavLink to='/cart'>Cart</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};