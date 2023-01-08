import ProductCard from './productCard/ProductCard';

const Content = () => {
  return (
    <div className='p-40 m-auto'>
      <h1 className='text-3xl font-bold'>All sneakers</h1>

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

export default Content;