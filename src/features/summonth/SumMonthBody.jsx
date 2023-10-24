import { useEffect, useState } from "react"
import { useNavigate, useSearchParams, Link } from "react-router-dom"


function SumMonthBody({setNumber}) {
    const [thanks, setThanks] = useState(false)
    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(function(){
        setNumber(4)
    }, [])

    const val = searchParams.get('val')
    const service = searchParams.get('service')
    const storage = searchParams.get('storage')
    const profile = searchParams.get('profile')
    const num = searchParams.get('num')
    const nserv = searchParams.get('nserv')
    const nsto = searchParams.get('nsto');
    const npro = searchParams.get('npro')
    console.log(service, val, storage, profile, num, nserv, nsto, npro)
    
        const numPro = npro === 'false' ? 0 : npro
        const numServ = nserv === 'false' ? 0 : nserv
        const numSto = nsto === 'false' ? 0 : nsto
        console.log(numPro, numServ, numSto)

    const sum = Number(numServ) + Number(numSto)  + Number(num) + Number(numPro)
     
       function handleBack(){
        navigate(-1)
       }

    

  return (
    <>
        <div>
            <div className='sm:hidden  rounded flex justify-center absolute right-0 left-0  mt-[50px]'>
                <div className='bg-white w-5/6 rounded-md pb-8  shadow-xl'>
                {thanks ?                                                     
                        <div className=" ">
                            <div className="space-y-4 mt-20  flex flex-col items-center justify-center">
                                
                                <div className="">
                                    <div className="">
                                        <img src={ThankYou} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-blue-800">Thank you!</h2>
                                    </div>
                                </div>

                                <div>
                                    <div className="px-6 text-center font-medium text-slate-300">
                                        <p>Thanks for confirming your subscription!
                                            We hope you have fun using our platform.
                                            If you ever need support, please feel free to email us at 
                                            support@loremgaming.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    
                    
                        :
                        
                        
                        <div>
                            <div className=''>
                                <p className='pt-6 text-2xl  text-blue-950 font-bold px-6'>Finishing up</p>
                                <p className='px-6 mt-4 font-medium text-slate-400'>Double-check everything looks OK before confirming.</p>
                            </div>
                            <div className="px-6 mt-2">
                                <div className="bg-blue-50 p-2 rounded-md">
                                    <div className="flex justify-between border-b pb-2 px-2">
                                        <div>
                                            <p className="text-[17px] font-medium">{val}</p>
                                            <p className="underline text-slate">Change</p>
                                        </div>
                                        <div>
                                            <p className="mt-4  font-medium">${num}/mo</p>
                                        </div>
                                    </div>
                                    {service === 'Online service' &&<div className="flex justify-between pb-2 px-2 pt-3">
                                        <div>
                                            <p className="text-slate-400">Online Service</p>
                                        </div>
                                        <div>
                                            <p className="font-medium">+${nserv}/mo</p>
                                        </div>
                                    </div>}
                                    {storage === 'Larger storage' &&<div className="flex justify-between pb-2 px-2">
                                        <div>
                                            <p className="text-slate-400">Larger Storage</p>
                                        </div>
                                        <div>
                                            <p className="font-medium">+${numSto}/mo</p>
                                        </div>
                                    </div>}
                                    {profile === 'Customizable profile' &&<div className="flex justify-between pb-2 px-2">
                                        <div>
                                            <p className="text-slate-400">Customizable Profile</p>
                                        </div>
                                        <div>
                                            <p className="font-medium">+${npro}/mo</p>
                                        </div>
                                    </div>}
                                </div>
                                    <div className="flex justify-between pb-2 px-2 mt-6">
                                        <div>
                                            <p className="text-slate-400">Total (per Month)</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-blue-700">${sum}/mo</p>
                                        </div>
                                    </div>
                        
                            </div>
                        </div>
                        
                        

                }
                        

                    </div>
                    
            </div>   

            <div className='hidden sm:flex rounded mx-5  '>
                <div className='bg-white '>
                {thanks ?                                                     
                    <div className="  flex justify-center space-y-2 flex-col items-center">
                        <div>
                            <img src={ThankYou} alt="" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-blue-800">Thank you!</h2>
                        </div>
                        <div className="px-4 text-center text-sm font-medium text-slate-300">
                            <p>Thanks for confirming your subscription! We hope you have <br/>
                            fun using our platform. If you ever need support, please feel <br/>
                            free to email us at support@loremgaming.com.
                                
                            </p>
                        </div>
                    </div>
                        
                    
                    
                        :
                        
                        
                        <div className="w-4/5 mx-auto">
                            <div className=''>
                                <p className=' text-2xl  text-blue-950 font-bold px-0'>Finishing up</p>
                                <p className=' mt-4 font-medium text-slate-400'>Double-check everything looks OK before confirming.</p>
                            </div>
                            <div className="mt-2">
                                <div className="bg-blue-50 p-2 rounded-md">
                                    <div className="flex justify-between border-b pb-2 px-2">
                                        <div> 
                                            <p className="text-[17px] font-medium">{val}</p>
                                            <p className="underline text-slate"><Link to='/monyr'>Change</Link></p>
                                        </div>
                                        <div>
                                            <p className="mt-4  font-medium">${num}/mo</p>
                                        </div>
                                    </div>
                                    {service === 'Online service' &&<div className="flex justify-between pb-2 px-2 pt-3">
                                        <div>
                                            <p className="text-slate-400">Online Service</p>
                                        </div>
                                        <div>
                                            <p className="font-medium">+${nserv}/mo</p>
                                        </div>
                                    </div>}
                                    {storage === 'Larger storage' &&<div className="flex justify-between pb-2 px-2">
                                        <div>
                                            <p className="text-slate-400">Larger Storage</p>
                                        </div>
                                        <div>
                                            <p className="font-medium">+${numSto}/mo</p>
                                        </div>
                                    </div>}
                                    {profile === 'Customizable profile' &&<div className="flex justify-between pb-2 px-2">
                                        <div>
                                            <p className="text-slate-400">Customizable Profile</p>
                                        </div>
                                        <div>
                                            <p className="font-medium">+${npro}/mo</p>
                                        </div>
                                    </div>}
                                </div>
                                <div className="flex justify-between pb-2 px-2 mt-6">
                                    <div>
                                        <p className="text-slate-400">Total (per Month)</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-blue-700">${sum}/mo</p>
                                    </div>
                                </div>
                                
                                {!thanks &&
            
                                    <div className=' mt-14'>
                                        <div className="flex justify-between  bg-white">
                                            <div>
                                                <button onClick={handleBack} className='text-slate-400  font-medium rounded p-2'>Go Back</button>
                                            </div>
                                            <div>
                                                <button onClick={()=>setThanks(true)}  className='text-white bg-blue-900 font-medium rounded p-2'>Confirm</button>
                                            </div>
                                        </div>
                        
                                    </div>
                                    
                                }

                            </div>
                            
                        </div>
                        
                        

                }
                        

                    </div>
                    
            </div>                  

        </div>
        
        {!thanks &&
                        
            <div className='sm:hidden mt-[460px]'>
                <div className="flex justify-between px-3 bg-white py-2">
                    <div>
                        <button onClick={handleBack} className='text-slate-400  font-medium rounded p-2'>Go Back</button>
                    </div>
                    <div>
                        <button onClick={()=>setThanks(true)}  className='text-white bg-blue-900 font-medium rounded p-2'>Confirm</button>
                    </div>
                </div>

            </div>
            
        }
    </>
  )
}

export default SumMonthBody