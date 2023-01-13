import { products } from '../../mock/products';
import { ProductCard } from './ProductCard/ProductCard';
import { SearchBar } from './SearchBar/SearchBar';

export const Content = () => {
  return (
    <div className='p-10 m-auto'>
      <div className='flex flex-col sm:flex-row align-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold'>All sneakers</h1>
        </div>
        <SearchBar />
      </div>

      <div className='flex flex-wrap gap-5 lg:gap-9 mt-10'>
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};