import { FiSearch } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';

export const SearchBar = ({ searchValue, searchInput, setSearchValue }) => {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold'>
            {searchValue ? `Query search: '${searchValue}'` : 'All sneakers'}
          </h1>
        </div>

        <div className='searchBar'>
          <div className='relative'>
            <div className='absolute top-8 left-3 z-10 cursor-pointer md:top-3'>
              <FiSearch color={'#9B9B9B'} fontSize={20} />
            </div>
            <input
              className='mt-5 rounded-lg border p-2 pl-10 pr-10 md:mt-0'
              onChange={searchInput}
              value={searchValue}
              type='text'
              placeholder='Search'
            />
            {searchValue && (
              <div
                className='absolute top-8 right-3 z-10 cursor-pointer md:top-4'
                onClick={() => setSearchValue('')}
              >
                <ImCross color={'#9B9B9B'} fontSize={12} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};