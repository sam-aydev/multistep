import Arcade from '../assets/icon-arcade.svg'
import Advance from '../assets/icon-advanced.svg'
import Pro from '../assets/icon-pro.svg'
import { useState } from 'react';


function YearlyMulti({plan2, setPlan2}) {

 
    return (  
        <div>
            <div className='flex flex-col sm:flex-row -mt-2'>
                <div onClick={()=>setPlan2('Arcade (Yearly)')} value={plan2} className="px-6 sm:px-[2px] cursor-pointer  mt-3 ">
                    <div className={plan2 === 'Arcade (Yearly)'?`space-x-3 border-2 flex border-blue-300 bg-slate-100  rounded-md p-1  sm:p-2 sm:flex-col sm:px-2 sm:space-x-2`: `sm:space-x-2 sm:px-2 sm:flex-col space-x-3 border-2 flex  sm:p-2  rounded-md p-1 bg-white`}>
                        <div >
                            <img src={Arcade} alt="" />
                        </div>
                        <div>
                            <h2 className="font-bold ">Arcade</h2>
                            <p className="text-slate-400 font-medium">$90/yr</p>
                            <p className='text-[13px]'>2 months Free</p>
                        </div>
                    </div>
                                
                </div>

                <div onClick={()=>setPlan2('Advanced (Yearly)')} value={plan2} className="px-6 sm:px-1 cursor-pointer mt-3  ">
                    <div className={plan2 === 'Advanced (Yearly)'?`space-x-3 border-2 flex border-blue-300 bg-slate-100  rounded-md p-1 sm:flex-col  sm:p-2 sm:px-2`: `sm:px-2 sm:flex-col space-x-3 border-2 flex  rounded-md sm:p-2 p-1 bg-white`}>
                        <div>
                            <img src={Advance} alt="" />
                        </div>
                        <div>
                            <h2 className="font-bold">Advanced</h2>
                            <p className="text-slate-400 font-medium">120/yr</p>
                            <p className='text-[13px]'>2 months Free</p>
                        </div>
                    </div>
                </div>

                <div onClick={()=>setPlan2('Pro (Yearly)')} value={plan2} className="px-6 sm:px-0 cursor-pointer mt-3">
                    <div className={plan2 === 'Pro (Yearly)'? `space-x-3 border-2 flex border-blue-300 bg-slate-100  rounded-md p-1 sm:p-2 sm:flex-col sm:px-3`: `sm:px-3 sm:flex-col space-x-3 border-2 flex  rounded-md p-1 sm:p-2 bg-white`}>
                        <div>
                            <img src={Pro} alt="" />
                        </div>
                        <div>
                            <h2 className="font-bold">Pro</h2>
                            <p className="text-slate-400 font-medium">150/yr</p>
                            <p className='text-[13px]'>2 months Free</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default YearlyMulti;