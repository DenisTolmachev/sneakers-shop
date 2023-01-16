import { getProducts } from '../../services/api';
import { ProductCard } from './ProductCard/ProductCard';
import { SearchBar } from './SearchBar/SearchBar';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Content = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
    });
  }, []);

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
            key={nanoid()}
            name={product.name}
            price={product.price}
            imageUrl={product.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};