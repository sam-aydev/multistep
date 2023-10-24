import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import FirstMonthButton from "./FirstMonthButton"

function FirstMonthBody({setNumber}) {
    const [profile, setProfile] = useState(false)
    const [storage, setStorage] = useState(true)
    const [service, setService] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams()
    
    const navigate = useNavigate()

    const val = searchParams.get('val')
    const num = searchParams.get('num')
    // console.log(val)

    useEffect(function(){
        setNumber(3)
    }, [])

    function handleSubmit(){
        if(!profile && !service && !storage) return;
        navigate(`/month?val=${val}&num=${num}&profile=${profile ?
            'Customizable profile':'noprofile'}&storage=${storage ?
                'Larger storage': 'nostorage'}&service=${service ?
                    'Online service': 'noservice'}&nserv=${service && 1}&nsto=${storage && 2}&npro=${profile && 2}`)    
    }
    function handleBack(){
        navigate(-1)
    }
    
    

  return (
    <>
        <div>
            <div className='rounded flex justify-center absolute right-0 left-0 mt-[52px] sm:hidden'>
                <div className='bg-white w-5/6 rounded-md pb-8 shadow-xl'>
                        <div className=''>
                            <p className='pt-6 text-2xl  text-blue-950 font-bold px-6'>Pick add-ons</p>
                            <p className='px-6 mt-4 font-medium text-slate-400'>Add-ons help enhance your gaming.</p>
                        </div>
                        <div className="px-6 mt-2">
                            <div className={!service ?`space-x-4 border py-2  border-slate-10  rounded-md px-2`: `space-x-4 border py-2 bg-slate-50 border-blue-700  rounded-md px-2`}>
                                <div className="flex space-x-4 pb-2">
                                    <div onClick={()=>setService((service)=>!service)} className={!service ? `bg-white border w-4 rounded h-4 mt-4`:`bg-blue-500 w-4 rounded h-4 mt-4`}>
                                        
                                        {service ?
                                        <svg className='mx-auto mt-[2px]' xmlns="http://www.w3.org/2000/svg"
                                        width="12" height="12" 
                                        viewBox="0 0 12 9"><path fill="none" stroke="white" strokeWidth="2" 
                                        d="m1 4 3.433 3.433L10.866 1"/>
                                        </svg>  
                                        : 
                                        ''
                                        }                                      
                                        {/* {addons === 'profile'? 
                                            <input type="checkbox"   value={addons} onClick={()=>setAddons('profile')} className="mt-4 bg-blue-400 w-6 h-4"/>:
                                            <input type="checkbox" checked value={addons} onClick={()=>setAddons('profile')} className="mt-4 w-6 h-4"/>}     */}
                                    </div>
                                    <div>
                                        <div>
                                            <h2 className="text-[17px] font-medium">Online service</h2>
                                        </div>
                                        <div>
                                            <p className="text-[13px] text-slate-400">Access to multiplayer games</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <p className="text-blue-800 -mt-10">+1$/mo</p>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 mt-2">
                            <div className={!storage ?`space-x-4 border py-2  border-slate-10  rounded-md px-2`: `space-x-4 border py-2 bg-slate-50 border-blue-700  rounded-md px-2`}>
                                <div className="flex space-x-4 pb-2">
                                    <div onClick={()=>setStorage((storage)=>!storage)} className={!storage ? `bg-white border w-4 rounded h-4 mt-4`:`bg-blue-500 w-4 rounded h-4 mt-4`}>
                                        
                                        {!storage ?
                                        ''
                                        : 
                                        <svg className='mx-auto mt-[2px]' xmlns="http://www.w3.org/2000/svg"
                                        width="12" height="12" 
                                        viewBox="0 0 12 9"><path fill="none" stroke="white" strokeWidth="2" 
                                        d="m1 4 3.433 3.433L10.866 1"/>
                                        </svg>  
                                        }                                      
                                        {/* {addons === 'profile'? 
                                            <input type="checkbox"   value={addons} onClick={()=>setAddons('profile')} className="mt-4 bg-blue-400 w-6 h-4"/>:
                                            <input type="checkbox" checked value={addons} onClick={()=>setAddons('profile')} className="mt-4 w-6 h-4"/>}     */}
                                    </div>
                                    <div>
                                        <div>
                                            <h2 className="text-[17px] font-medium">Larger storage</h2>
                                        </div>
                                        <div>
                                            <p className="text-[13px] text-slate-400">Extra 1TB of Cloud save</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <p className="text-blue-800 -mt-10">+2$/mo</p>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 mt-2">
                            <div className={!profile ?`space-x-4 border py-2  border-slate-10  rounded-md px-2`: `space-x-4 border py-2 bg-slate-50 border-blue-700  rounded-md px-2`}>
                                <div className="flex space-x-4 pb-2">
                                    <div onClick={()=>setProfile((profile)=>!profile)} className={!profile ? `bg-white border w-4 rounded h-4 mt-4`:`bg-blue-500 w-4 rounded h-4 mt-4`}>
                                        
                                        {profile ? <svg className='mx-auto mt-[2px]' xmlns="http://www.w3.org/2000/svg"
                                            width="12" height="12" 
                                            viewBox="0 0 12 9"><path fill="none" stroke="white" strokeWidth="2" 
                                            d="m1 4 3.433 3.433L10.866 1"/>
                                        </svg>: ''  }                                      
                                        
                                    </div>
                                    <div>
                                        <div>
                                            <h2 className="text-[17px] font-medium">Customizable profile</h2>
                                        </div>
                                        <div>
                                            <p className="text-[13px] text-slate-400">Custom theme on your profile</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <p className="text-blue-800 -mt-10">+2$/mo</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            
            <div className="hidden sm:flex">
                <div className='sm:mx-12'>
                    <div className='bg-white rounded-md'>
                        <div className=''>
                            <p className='text-2xl  text-blue-950 font-bold px-6'>Pick add-ons</p>
                            <p className='px-6  font-medium text-slate-400'>Add-ons help enhance your gaming.</p>
                        </div>
                        <div className="px-6 mt-2 w-[350px]">
                            <div className={!service ?`space-x-4 border py-1  border-slate-10  rounded-md px-2`: `space-x-4 border py-1 bg-slate-50 border-blue-700  rounded-md px-2`}>
                                <div className="flex space-x-4 pb-2">
                                    <div onClick={()=>setService((service)=>!service)} className={!service ? `bg-white border w-4 rounded h-4 mt-4`:`bg-blue-500 w-4 rounded h-4 mt-4`}>
                                        
                                        {service ?
                                        <svg className='mx-auto mt-[2px]' xmlns="http://www.w3.org/2000/svg"
                                        width="12" height="12" 
                                        viewBox="0 0 12 9"><path fill="none" stroke="white" strokeWidth="2" 
                                        d="m1 4 3.433 3.433L10.866 1"/>
                                        </svg>  
                                        : 
                                        ''
                                        }                                      
                                        {/* {addons === 'profile'? 
                                            <input type="checkbox"   value={addons} onClick={()=>setAddons('profile')} className="mt-4 bg-blue-400 w-6 h-4"/>:
                                            <input type="checkbox" checked value={addons} onClick={()=>setAddons('profile')} className="mt-4 w-6 h-4"/>}     */}
                                    </div>
                                    <div>
                                        <div>
                                            <h2 className="text-[17px] font-medium">Online service</h2>
                                        </div>
                                        <div>
                                            <p className="text-[13px] text-slate-400">Access to multiplayer games</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <p className="text-blue-800 -mt-10">+1$/mo</p>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 mt-2 w-[350px]">
                            <div className={!storage ?`space-x-4 border py-1  border-slate-10  rounded-md px-2`: `space-x-4 border py-1 bg-slate-50 border-blue-700  rounded-md px-2`}>
                                <div className="flex space-x-4 pb-2">
                                    <div onClick={()=>setStorage((storage)=>!storage)} className={!storage ? `bg-white border w-4 rounded h-4 mt-4`:`bg-blue-500 w-4 rounded h-4 mt-4`}>
                                        
                                        {!storage ?
                                        ''
                                        : 
                                        <svg className='mx-auto mt-[2px]' xmlns="http://www.w3.org/2000/svg"
                                        width="12" height="12" 
                                        viewBox="0 0 12 9"><path fill="none" stroke="white" strokeWidth="2" 
                                        d="m1 4 3.433 3.433L10.866 1"/>
                                        </svg>  
                                        }                                      
                                        {/* {addons === 'profile'? 
                                            <input type="checkbox"   value={addons} onClick={()=>setAddons('profile')} className="mt-4 bg-blue-400 w-6 h-4"/>:
                                            <input type="checkbox" checked value={addons} onClick={()=>setAddons('profile')} className="mt-4 w-6 h-4"/>}     */}
                                    </div>
                                    <div>
                                        <div>
                                            <h2 className="text-[17px] font-medium">Larger storage</h2>
                                        </div>
                                        <div>
                                            <p className="text-[13px] text-slate-400">Extra 1TB of Cloud save</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <p className="text-blue-800 -mt-10">+2$/mo</p>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 mt-2 w-[350px]">
                            <div className={!profile ?`space-x-4 border  py-1  border-slate-10  rounded-md px-2`: `space-x-4 border py-1 bg-slate-50 border-blue-700  rounded-md px-2`}>
                                <div className="flex space-x-4 pb-2">
                                    <div onClick={()=>setProfile((profile)=>!profile)} className={!profile ? `bg-white border w-4 rounded h-4 mt-4`:`bg-blue-500 w-4 rounded h-4 mt-4`}>
                                        
                                        {profile ? <svg className='mx-auto mt-[2px]' xmlns="http://www.w3.org/2000/svg"
                                            width="12" height="12" 
                                            viewBox="0 0 12 9"><path fill="none" stroke="white" strokeWidth="2" 
                                            d="m1 4 3.433 3.433L10.866 1"/>
                                        </svg>: ''  }                                      
                                        
                                    </div>
                                    <div>
                                        <div>
                                            <h2 className="text-[17px] font-medium">Customizable profile</h2>
                                        </div>
                                        <div>
                                            <p className="text-[13px] text-slate-400">Custom theme on your profile</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end ">
                                    <p className="text-blue-800  -mt-10">+2$/mo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-24 '>
                        <div className="flex justify-between  bg-white ">
                            <div>
                                <button onClick={handleBack} className='text-white bg-blue-900 font-medium rounded p-2'>Back</button>
                            </div>
                            <div>
                                {/* { <button className='text-white bg-blue-900 font-medium rounded p-2'>Next Step</button>} */}
                                {<button 
                                onClick={handleSubmit}   
                                className='text-white bg-blue-900 font-medium rounded p-2'>Next Step</button>}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <FirstMonthButton handleSubmit={handleSubmit} handleBack={handleBack}/>
    </>
  )
}

export default FirstMonthBody