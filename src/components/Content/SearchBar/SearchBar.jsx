import styles from './SearchBar.module.scss';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.icon}>
        <FiSearch color={'#9B9B9B'} fontSize={20} />
      </div>
      {/*<img src={searchIcon} alt='search' />*/}
      <input type='text' placeholder='Search' />
    </div>
  );
};

export default SearchBar;