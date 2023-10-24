
function FirstBodyButton({handleSubmit}) {
  return (
    <div className='flex justify-end  bg-white mt-[464px] p-2 sm:hidden'>
        <button onClick={handleSubmit} className='text-white bg-blue-900 font-medium rounded p-2'>Next Step</button>
    </div>
  )
}

export default FirstBodyButton