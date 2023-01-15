import styles from './Header.module.scss';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { HeaderMenu } from './HeaderMenu/HeaderMenu';

export const Header = props => {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <HeaderMenu onClickCart={props.onClickCart} />
    </header>
  );
};