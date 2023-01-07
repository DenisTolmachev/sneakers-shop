import style from './Header.module.scss';
import HeaderLogo from './headerLogo/HeaderLogo';
import HeaderMenu from './headerMenu/HeaderMenu';

const Header = () => {
  return (
    <header className={style.header}>
      <HeaderLogo />
      <HeaderMenu />
    </header>
  );
};

export default Header;