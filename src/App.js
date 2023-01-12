import styles from './App.module.scss';
import { Content } from './components/Content/Content';
import { Drawer } from './components/Drawer/Drawer';
import { Header } from './components/header/Header';

export const App = () => {
  return (
    <div className={styles.appContainer}>
      <Drawer />
      <Header />
      <Content />
    </div>
  );
};