import logo from './img/logo.png';
import cart from './img/cart.svg';
import heart from './img/heart.svg';
import user from './img/user.svg';

function App() {
  return (
    <div className='max-w-[80%] m-auto mt-50 rounded-lg shadow-2xl'>
      <header className='d-flex justify-between'>
        <div className='d-flex align-center'>
          <img className='mr-15' src={logo} alt='logo' />
          <div className='headerInfo'>
            <h3 className=''>Best Sneakers</h3>
            <p>Best sneakers in the Europe!</p>
          </div>
        </div>
        <div>
          <ul className='headerRight'>
            <li>
              <img src={cart} alt='cart' />
              <span>300 $</span>
              <img src={heart} alt='heart' />
              <img src={user} alt='user' />
            </li>
            <li>
              <svg />
            </li>
          </ul>
        </div>
      </header>
      <div className='content'>
        <h1>All sneakers</h1>
      </div>
    </div>
  );
}

export default App;
