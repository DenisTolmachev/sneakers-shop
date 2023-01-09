import searchIcon from '../../../img/search.svg';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <img src={searchIcon} alt='search' />
      <input type='text' placeholder='Search' />
    </div>
  );
};

export default SearchBar;