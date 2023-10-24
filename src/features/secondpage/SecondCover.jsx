function SecondCover({children}) {
  return (
    <div>
        <div className='bg-blue-50 '>
            <div className=' sm:flex sm:h-screen sm:justify-center sm:items-center '>
                <div className='sm:flex   sm:justify-center sm:items-center  sm:rounded-xl sm:px-2 sm:py-2 sm:bg-white  sm:h-auto '>
                    {children}
                </div>  
            </div>
        </div>
    </div>
  )
}

export default SecondCover