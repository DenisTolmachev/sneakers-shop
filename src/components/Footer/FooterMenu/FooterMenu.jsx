import { NavLink } from 'react-router-dom';

export const FooterMenu = () => {
  return (
    <div className='flex flex-col mx-10'>
      <h3 className='text-lg font-bold'>Menu</h3>
      <ul className='mt-2 text-base text-slate-500 font-medium'>
        <li className='hover:text-black cursor-pointer'>
          <NavLink to='/profile'>User Profile</NavLink>
        </li>
        <li className='hover:text-black cursor-pointer'>
          <NavLink to='/favorites'>Favorites</NavLink>
        </li>
        <li className='hover:text-black cursor-pointer'>
          <NavLink to='/cart'>Cart</NavLink>
        </li>
      </ul>
    </div>
  );
};