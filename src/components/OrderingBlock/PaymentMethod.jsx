export const PaymentMethod = () => {
  return (
    <div className='py-3 border-b'>
      <h3 className='text-xl font-bold mb-2'>Payment method</h3>
      <form className='flex flex-col' action=''>
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
      </form>
    </div>
  );
};
