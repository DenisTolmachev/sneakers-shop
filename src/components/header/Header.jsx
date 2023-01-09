import styles from './Header.module.scss';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderMenu from './HeaderMenu/HeaderMenu';

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <HeaderMenu />
    </header>
  );
};

export default Header;