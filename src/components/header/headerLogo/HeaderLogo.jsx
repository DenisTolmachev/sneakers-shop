import logo from '../../../img/logo.png';

const HeaderLogo = () => {
  return (
    <div className='d-flex align-center'>
      <img className='mr-15' src={logo} alt='logo' />
      <div className='headerInfo'>
        <h3 className='text-uppercase text-xl font-bold'>Best Sneakers</h3>
        <p className='text-sm text-slate-500'>Best sneakers in the Europe!</p>
      </div>
    </div>
  );
};

export default HeaderLogo;
