import logo from '../../../img/logo.png';
import { NavLink } from 'react-router-dom';

export const FooterInfo = () => {
  return (
    <div className='flex-1'>
      <NavLink to={'/'}>
        <div className='flex items-center'>
          <img className='mr-4 hidden sm:block' src={logo} alt='logo' />
          <div className='headerInfo'>
            <h3 className='text-xl font-bold uppercase'>Best Sneakers</h3>
            <p className='text-sm uppercase'>Best sneakers in the Europe!</p>
          </div>
        </div>
      </NavLink>
      <p className='mt-5 text-justify text-sm text-slate-500 font-medium'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto
        autem blanditiis dolore eaque error eveniet hic itaque laudantium modi
        nemo nesciunt, omnis quam quo repellat saepe sit totam ut!
      </p>
    </div>
  );
};