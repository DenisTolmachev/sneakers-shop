export const Address = () => {
  return (
    <div className='py-3 border-b'>
      <h3 className='text-xl font-bold mb-2'>Delivery address</h3>
      <form className='flex flex-col' action=''>
        <label className='text-sm' htmlFor=''>
          Country
        </label>
        <input className='border px-3 py-1 rounded mb-3' type='text' />
        <label className='text-sm' htmlFor=''>
          Region
        </label>
        <input className='border px-3 py-1 rounded mb-3' type='text' />
        <label className='text-sm' htmlFor=''>
          City/Town
        </label>
        <input className='border px-3 py-1 rounded mb-3' type='text' />
        <label className='text-sm' htmlFor=''>
          Address
        </label>
        <input className='border px-3 py-1 rounded mb-3' type='text' />
      </form>
    </div>
  );
};
