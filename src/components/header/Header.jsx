import styles from './Header.module.scss';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { HeaderMenu } from './HeaderMenu/HeaderMenu';

export const Header = ({ onClickCart, favorites = [], products = [] }) => {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <HeaderMenu
        onClickCart={onClickCart}
        products={products}
        favorites={favorites}
      />
    </header>
  );
};