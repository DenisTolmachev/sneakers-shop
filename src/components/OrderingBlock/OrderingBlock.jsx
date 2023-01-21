export const OrderingBlock = () => {
  return (
    <div className='w-1/2 px-5 mt-5'>
      <div className='flex items-end'>
        <span className='text-base'>Total</span>
        <div className='flex-1 border-b-2 border-dashed mx-2 relative -top-1'></div>
        <span className='mt-2 text-base font-bold'>1200 $</span>
      </div>
      <div className='flex items-end'>
        <span className='text-base'>Tax 5%</span>
        <div className='flex-1 border-b-2 border-dashed mx-2 relative -top-1'></div>
        <span className='mt-2 text-base font-bold'>60 $</span>
      </div>
      <button className='mt-5 w-1/2 rounded-xl bg-green-500 px-2 py-2 font-medium text-white hover:bg-green-600'>
        Ordering
      </button>
    </div>
  );
};
