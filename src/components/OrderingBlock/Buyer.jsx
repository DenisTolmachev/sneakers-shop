export const Buyer = () => {
  return (
    <div className='border-b pb-2'>
      <h3 className='text-xl font-bold mb-2'>Buyer</h3>
      <form className='flex flex-col' action=''>
        <label className='text-sm' htmlFor=''>
          Name
        </label>
        <input className='border px-3 py-1 rounded mb-3' type='text' />
        <label className='text-sm' htmlFor=''>
          Surname
        </label>
        <input className='border px-3 py-1 rounded mb-3' type='text' />
        <label className='text-sm' htmlFor=''>
          Phone
        </label>
        <input
          className='border px-3 py-1 rounded mb-3'
          type='tel'
          pattern='\(\d\d\d\) ?\d\d\d-\d\d-\d\d'
          placeholder='(ххх) ххх-хх-хх'
        />
        <label className='text-sm' htmlFor=''>
          E-mail
        </label>
        <input className='border px-3 py-1 rounded mb-3' type='email' />
      </form>
    </div>
  );
};
