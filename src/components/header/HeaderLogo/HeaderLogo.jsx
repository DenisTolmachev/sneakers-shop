import logo from '../../../img/logo.png';
import { NavLink } from 'react-router-dom';

export const HeaderLogo = () => {
  return (
    <NavLink to={'/'}>
      <div className='flex items-center'>
        <img className='mr-4 hidden sm:block' src={logo} alt='logo' />
        <div className='headerInfo'>
          <h3 className='text-xl font-bold uppercase'>Best Sneakers</h3>
          <p className='text-sm uppercase'>Best sneakers in the Europe!</p>
        </div>
      </div>
    </NavLink>
  );
};