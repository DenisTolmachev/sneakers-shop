import { NavLink } from 'react-router-dom';

export const Orders = ({ title, img, description }) => {
  return (
    <div className='flex flex-col items-center py-10'>
      <>
        <img src={img} alt='cart is empty' />
        <h3 className='text-3xl font-bold pt-5'>{title}</h3>
        <p className='text-xl pt-5'>{description}</p>
        <button className='mt-10 w-1/2 rounded-xl bg-green-500 px-2 py-2 font-medium text-white hover:bg-green-600'>
          <NavLink to='/'>Move to main</NavLink>
        </button>
      </>
    </div>
  );
};