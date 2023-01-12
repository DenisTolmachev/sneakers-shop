import logo from '../../../img/logo.png';
import styles from './HeaderLogo.module.scss';

export const HeaderLogo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.logoImg} src={logo} alt='logo' />
      <div className='headerInfo'>
        <h3 className={styles.headerInfoTitle}>Best Sneakers</h3>
        <p className={styles.headerInfoText}>Best sneakers in the Europe!</p>
      </div>
    </div>
  );
};