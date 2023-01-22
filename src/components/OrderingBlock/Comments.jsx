export const Comments = () => {
  return (
    <div className='py-3 border-b'>
      <h3 className='text-xl font-bold mb-2'>Comment</h3>
      <form className='flex flex-col' action=''>
        <textarea
          className='border px-3 py-1 rounded mb-3'
          name='comments'
          spellCheck='true'
          maxLength={250}
          rows={4}
        />
      </form>
    </div>
  );
};
