export const ShippingMethod = () => {
  return (
    <div className='py-3 border-b'>
      <h3 className='text-xl font-bold mb-2'>Way of Delivery</h3>
      <form className='flex flex-col' action=''>
        <div className='flex'>
          <input className='mr-3' type='radio' name='shipping' />
          <label className='text-base' htmlFor=''>
            Self-delivery
          </label>
        </div>
        <div className='flex'>
          <input className='mr-3' type='radio' name='shipping' />
          <label className='text-base' htmlFor=''>
            Post
          </label>
        </div>
        <div className='flex'>
          <input className='mr-3' type='radio' name='shipping' />
          <label className='text-base' htmlFor=''>
            Delivery service
          </label>
        </div>
      </form>
    </div>
  );
};
