export const OrderingBlock = ({ onClickOrder }) => {
  return (
    <div className='lg:w-1/2 px-5 mt-5 md:w-full'>
      <form className='flex flex-col'>
        <div className='py-3 border-b flex flex-col'>
          <h3 className='text-xl font-bold mb-2'>Buyer</h3>
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
        </div>

        <div className='py-3 border-b flex flex-col'>
          <h3 className='text-xl font-bold mb-2'>Way of Delivery</h3>
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
        </div>

        <div className='py-3 border-b flex flex-col'>
          <h3 className='text-xl font-bold mb-2'>Delivery address</h3>
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
        </div>

        <div className='py-3 border-b flex flex-col'>
          <h3 className='text-xl font-bold mb-2'>Payment method</h3>
          <div className='flex'>
            <input className='mr-3' type='radio' name='payment' />
            <label className='text-base' htmlFor=''>
              Cash
            </label>
          </div>
          <div className='flex'>
            <input className='mr-3' type='radio' name='payment' />
            <label className='text-base' htmlFor=''>
              Credit / Debit Card
            </label>
          </div>
          <div className='flex'>
            <input className='mr-3' type='radio' name='payment' />
            <label className='text-base' htmlFor=''>
              BitPay
            </label>
          </div>
          <div className='flex'>
            <input className='mr-3' type='radio' name='payment' />
            <label className='text-base' htmlFor=''>
              PayPal
            </label>
          </div>
        </div>

        <div className='py-3 border-b flex flex-col'>
          <h3 className='text-xl font-bold mb-2'>Comment</h3>
          <textarea
            className='border px-3 py-1 rounded mb-3'
            name='comments'
            spellCheck='true'
            maxLength={250}
            rows={4}
          />
        </div>

        <button
          onClick={onClickOrder}
          className='mt-5 w-1/2 rounded-xl bg-green-500 px-2 py-2 font-medium text-white hover:bg-green-600'
        >
          Ordering
        </button>
      </form>
    </div>
  );
};
