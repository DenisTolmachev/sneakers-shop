import styles from './App.module.scss';
import Content from './components/Content/Content';
import Header from './components/header/Header';

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Content />
    </div>
  );
}

export default App;