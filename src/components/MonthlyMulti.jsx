import Arcade from '../assets/icon-arcade.svg'
import Advance from '../assets/icon-advanced.svg'
import Pro from '../assets/icon-pro.svg'
import { useState } from 'react';

function MonthlyMulti({setPlan1, plan1}) {
    

    
    return (  
        <div> 
            <div className='flex flex-col sm:flex-row '>
                <div onClick={()=>setPlan1('Arcade (Monthly)')} value={plan1} className="px-6 sm:px-0 cursor-pointer mt-3 ">
                    <div className={plan1 === 'Arcade (Monthly)'?`space-x-3 border-2 flex border-blue-300 bg-slate-100  rounded-md p-2 sm:flex-col sm:px-5 sm:space-x-3 `: `sm:px-5 sm:flex-col space-x-3 border-2 flex  rounded-md p-2 bg-white`}>
                        <div >
                            <img src={Arcade} alt="" />
                        </div>
                        <div>
                            <h2 className="font-bold">Arcade</h2>
                            <p className="text-slate-400 font-medium">9/mo</p>
                        </div>
                    </div>
                                     
                </div>

                <div onClick={()=>setPlan1('Advanced (Monthly)')} value={plan1} className="cursor-pointer px-6 mt-3 sm:px-1 ">
                    <div className={plan1 === 'Advanced (Monthly)'?`space-x-3 border-2 flex border-blue-300 bg-slate-100  rounded-md p-2 sm:flex-col sm:px-3`: `sm:px-3 sm:flex-col space-x-3 border-2 flex  rounded-md p-2 bg-white`} >

                        <div>
                            <img src={Advance} alt="" />
                        </div>
                        <div>
                            <h2 className="font-bold">Advanced</h2>
                            <p className="text-slate-400 font-medium">12/mo</p>
                        </div>
                    </div>
                </div>

                <div onClick={()=>setPlan1('Pro (Monthly)')} value={plan1} className="cursor-pointer px-6 mt-3 sm:px-0">
                    <div className={plan1 === 'Pro (Monthly)'?`space-x-3 border-2 flex border-blue-300 bg-slate-100  rounded-md p-2 sm:flex-col sm:px-7`: `sm:px-7 sm:flex-col space-x-3 border-2 flex  rounded-md p-2 bg-white`}>
                        <div>
                            <img src={Pro} alt="" />
                        </div>
                        <div>
                            <h2 className="font-bold">Pro</h2>
                            <p className="text-slate-400 font-medium">15/mo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default MonthlyMulti;