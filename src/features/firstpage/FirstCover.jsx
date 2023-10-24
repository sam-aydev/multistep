

function FirstCover({children}) {
  return (
    <div className='bg-blue-50 '>
        <div className='sm:h-screen sm:flex sm:justify-center sm:items-center  '>
            <div className='sm:flex sm:justify-center sm:items-center sm:rounded-xl sm:py-2 sm:px-2 sm:bg-white  '>
                {children}
            </div>
        </div>
    </div>
            
  )
}

export default FirstCover