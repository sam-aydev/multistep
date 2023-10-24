import YearlyMulti from "../../components/YearlyMulti";
import MonthlyMulti from "../../components/MonthlyMulti";
import SecondButton from "./SecondButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function SecondBodyComp({setNumber}) {
    const [time, setTime]= useState(false)
    const [plan2, setPlan2] = useState('Arcade (Yearly)')
    const [plan1, setPlan1] = useState('Arcade (Monthly)')

    useEffect(function(){
        setNumber(2)
    }, [])
    const navigate = useNavigate() 

    
    function handleSubmit(){
        navigate(`fimonth?val=${plan1}&num=${plan1 ==='Arcade (Monthly)' ? 
        9 : '' || plan1 === 'Advanced (Monthly)' ? 12 : 
        '' || plan1 === 'Pro (Monthly)' ? 15 : '' }`);
    
    }

    function handleSubYr(){
        navigate(`fiyear?val=${plan2}&num=${plan2 ==='Arcade (Yearly)' ? 
        90 : '' || plan2 === 'Advanced (Yearly)' ? 120 : 
        '' || plan2 === 'Pro (Yearly)' ? 150 : '' }`);
    }

    function handleBack(){
        navigate(-1)
    }
    
  return (
    <>
        <div>
            <div>
                <div className=' rounded mt-12 flex justify-center items-center absolute left-0 right-0 sm:hidden'>
                    <div className='bg-white w-5/6 rounded-md pb-8 shadow-xl '>
                        <div className=''>
                            <p className='pt-6 text-2xl  text-blue-950 font-bold px-6'>Select your plan</p>
                            <p className='px-6 mt-4 font-medium text-slate-400 sm:text-[14px]'>You have the option of monthly or yearly billing.</p>
                            
                            <div>
                                {!time && <MonthlyMulti plan1={plan1} setPlan1={setPlan1} />                
                                }

                                {time &&<YearlyMulti plan2={plan2} setPlan2={setPlan2}/>}

                            </div>

                            <div className="px-6 mt-5"> 
                                <div className="space-x-12  justify-center flex border-blue-300 rounded p-2 bg-slate-100 ">
                                    <div>
                                        <h2 className="font-medium">Monthly</h2>
                                    </div>
                                    <div onClick={()=>setTime((time)=>!time)} className="mt-1">
                                        <div className="w-10 h-5 rounded-full bg-blue-950 flex">
                                            <span className={!time ? `w-3 h-3 mt-[4px] ml-[4px] duration-300 bg-white rounded-full`: `w-3 h-3 mt-[4px] ml-6 duration-300 bg-white rounded-full `} />
                                        </div>
                                    </div>
                                    <div>
                                        <h2>Yearly</h2>
                                    </div>
                                </div>
                            </div>

                            
                        
                            
                            
                        </div>
                    </div>
                </div>
                
                <div className='hidden mx-12  sm:flex sm:justify-center sm:items-center sm:bg-transparent'>
                    <div className=' '>
                        <div className=''>
                            <p className=' text-2xl mt-4 text-blue-950 font-bold px-6'>Select your plan</p>
                            <p className='px-6 mt-4 font-medium text-slate-400 sm:text-[14px]'>You have the option of monthly or yearly billing.</p>
                            
                            <div>
                                {!time && <MonthlyMulti plan1={plan1} setPlan1={setPlan1} />                
                                }

                                {time &&<YearlyMulti plan2={plan2} setPlan2={setPlan2}/>}

                            </div>

                            <div className="px-6 mt-5"> 
                                <div className="space-x-12  justify-center flex border-blue-300 rounded p-2 bg-slate-100 ">
                                    <div>
                                        <h2 className="font-medium">Monthly</h2>
                                    </div>
                                    <div onClick={()=>setTime((time)=>!time)} className="mt-1">
                                        <div className="w-10 h-5 rounded-full bg-blue-950 flex">
                                            <span className={!time ? `w-3 h-3 mt-[4px] ml-[4px] duration-300 bg-white rounded-full`: `w-3 h-3 mt-[4px] ml-6 duration-300 bg-white rounded-full `} />
                                        </div>
                                    </div>
                                    <div>
                                        <h2>Yearly</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='hidden sm:flex mt-[100px] '>
                    <div className="sm:flex sm:space-x-52 px-10  sm:justify-between    bg-white ">
                        <div>
                            <button onClick={handleBack} className='text-white bg-blue-900 font-medium rounded p-2'>Back</button>
                        </div>
                        <div>
                            {!time &&<button onClick={handleSubmit} className='text-white bg-blue-900 font-medium rounded p-2'>Next Step</button>}
                            {time &&<button onClick={handleSubYr}  className='text-white bg-blue-900 font-medium rounded p-2'>Next Step</button>}
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
        <SecondButton 
        handleBack={handleBack} 
        time ={time} 
        handleSubYr ={handleSubYr}
        handleSubmit = {handleSubmit}/>
    </>
  )
}

export default SecondBodyComp