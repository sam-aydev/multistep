import bgImg from '../../assets/bg-sidebar-mobile.svg'
import bgImgDes from '../../assets/bg-sidebar-desktop.svg'


function ImageFirstMonth({number}) {
  return (
    <div className=''>
        <img src={bgImg} alt="label" className='w-full sm:w-auto absolute sm:hidden ' />                            
        <div className=''>
            <div className='list-none relative sm:absolute sm:z-50 sm:mt-10 sm:-ml-8 '>
                <div className='flex space-x-6 pt-10 justify-center sm:pt-0 sm:flex-col sm:space-y-4  sm:space-x-0 sm:px-12 '>
                    <div className='sm:flex sm:space-x-3  '>
                        <div className=''>
                            <li className='w-7 h-7 text-white pt-1 rounded-full border border-white text-center font-bold text-[12px]'>1</li>
                        </div>
                        <div className='hidden sm:flex sm:flex-col sm:w-24 '>
                            <p className='text-slate-200 text-[12px]'>STEP 1</p>
                            <p className='font-medium text-white'>YOUR INFO</p>
                        </div>
                    </div>
                    <div className='sm:flex sm:space-x-3'>
                        <div>
                            <li  className='w-7 h-7 text-white pt-1 rounded-full border border-white text-center font-bold text-[12px]'>2</li>
                        </div>
                        <div className='hidden sm:flex sm:flex-col sm:w-24 '>
                            <p className='text-slate-200 text-[12px]'>STEP 2</p>
                            <p className='font-medium text-white'>SELECT PLAN </p>
                        </div>
                    </div>
                    <div className='sm:flex sm:space-x-3'>
                        <div>
                            <li className={number === 3 ? `bg-blue-200 w-7 h-7 pt-1 rounded-full text-center font-bold text-[12px]` :
                                `w-7 h-7 text-white pt-1 rounded-full border border-white text-center font-bold text-[12px]`}>3</li>
                        </div>
                        <div className='hidden sm:flex sm:flex-col sm:w-24 '>
                            <p className='text-slate-200 text-[12px]'>STEP 3</p>
                            <p className='font-medium text-white'>ADD ONS </p>
                        </div>
                    </div>
                    <div className='sm:flex sm:space-x-3'>
                        <div>
                            <li  className='w-7 h-7 text-white pt-1 rounded-full border border-white text-center font-bold text-[12px]'>4</li>
                        </div>
                        <div className='hidden sm:flex sm:flex-col sm:w-24 '>
                            <p className='text-slate-200 text-[12px]'>STEP 4</p>
                            <p className='font-medium text-white'>SUMMARY</p>
                        </div>
                    </div>
                </div>
                    
            </div>
            <div className='sm:relative'>
                <span>
                    <img src={bgImgDes} alt="label" className='hidden sm:flex sm:h-[430px]' />
                </span>
            </div>
        </div>
    </div>
  )
}

export default ImageFirstMonth