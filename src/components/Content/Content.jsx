import { ProductCard } from './ProductCard/ProductCard';
import { SearchBar } from './SearchBar/SearchBar';

export const Content = () => {
  return (
    <div className='p-40 m-auto'>
      <div className='flex flex-col sm:flex-row align-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold'>All sneakers</h1>
        </div>
        <SearchBar />
      </div>

      <div className='flex flex-wrap gap-5 lg:gap-9 mt-40'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};