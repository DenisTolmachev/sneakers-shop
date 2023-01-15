import styles from './App.module.scss';
import { Content } from './components/Content/Content';
import { Drawer } from './components/Drawer/Drawer';
import { Header } from './components/header/Header';
import { useState } from 'react';

export const App = () => {
  const [cartOpened, setCartOpened] = useState(false);

  return (
    <div className={styles.appContainer}>
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}

      <Header onClickCart={() => setCartOpened(true)} />
      <Content />
    </div>
  );
};