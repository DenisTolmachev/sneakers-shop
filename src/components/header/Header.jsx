import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { HeaderMenu } from './HeaderMenu/HeaderMenu';

export const Header = ({ onClickCart, favorites = [], products = [] }) => {
  return (
    <header className='flex flex-col items-center justify-between border-b-2 border-b-gray-200 px-10 py-3 sm:flex-row'>
      <HeaderLogo />
      <HeaderMenu
        onClickCart={onClickCart}
        products={products}
        favorites={favorites}
      />
    </header>
  );
};