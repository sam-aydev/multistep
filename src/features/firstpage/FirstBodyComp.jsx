import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FirstBodyButton from "./FirstBodyButton";

function FirstBodyComp({setNumber}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [noname, setNoname] = useState(false);
    const [noemail, setNoemail] = useState(false);
    const [nophone, setNophone] = useState(false);
    
    useEffect(function(){
        setNumber(1)
   }, [])

    
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault()
        if(!name) setNoname(true);
        if(!email  ||  !email.includes('.')) setNoemail(true);
        if(!phone) setNophone(true);
        if(!name || !email || !phone)return;
    
        if(!email.includes('@') || !email.includes('.') ) return;

        setNoemail(false);
        setNophone(false);
        setNoname(false);
        navigate('/monyr');

    }
    


  return (
    <>
        <div>
            <div className='hidden sm:mx-2   sm:flex sm:justify-center sm:items-center sm:bg-transparent'>
                <div className=' '>
                    <div className=''>
                        <p className='pt-6 text-2xl  text-blue-950 font-bold px-6'>Personal info</p>
                        <p className='px-6 mt-4 font-medium text-slate-400 sm:text-[14px]'>Please provide your name, email address, and phone number.</p>

                        <form onSubmit={handleSubmit}>
                            <div className='px-6 mt-4'>
                                <label className='block font-medium'>Name</label>
                                {noname && <p className='absolute -mt-5 right-80 text-sm font-medium text-red-500'>The Field Is Required</p>}
                                <input type="text" value={name} onKeyDown={()=>setNoname(false)}  onChange={(e)=>setName(e.target.value)} className={noname ? `border-red-200 rounded px-3 py-1 font-medium border-2 w-full`: `px-3 rounded py-1 font-medium w-full border-2`} placeholder='e.g. Stephen King' />
                            </div>
                            <div className='px-6 mt-2'>
                                <label className='block font-medium'>Email Address</label>
                                {noemail && <p className='absolute -mt-5 right-80 text-sm font-medium text-red-500'>The Field Is Required</p>}
                                <input type="email" value={email} onKeyDown={()=>setNoemail(false)} onChange={(e)=>setEmail(e.target.value)} className={noemail ? `border-red-200 rounded px-3 py-1 font-medium border-2 w-full`: `px-3 rounded py-1 font-medium w-full border-2`} placeholder='e.g. stephenking@lorem.com' />
                            </div>
                            <div className='px-6 mt-2'>
                                <label className='block font-medium'>Phone Number</label>
                                {noemail && <p className='absolute -mt-5 right-80 text-sm font-medium text-red-500'>The Field Is Required</p>}
                                <input type="text" value={phone} onKeyDown={()=>setNophone(false)} onChange={(e)=> setPhone(e.target.value)} className={nophone ? `border-red-200 rounded px-3 py-1 font-medium border-2 w-full`: `px-3 rounded py-1 font-medium w-full border-2`} placeholder='e.g. +1 234 567 890' />
                            </div>
                        </form>
                        <div className=' justify-end  bg-white mt-14 pr-8  hidden sm:flex'>
                            <button onClick={handleSubmit} className='text-white bg-blue-900 font-medium rounded p-2'>Next Step</button>
                        </div>
                        
                    </div>
                </div>
            </div>
                
            <div className='rounded  mt-12  flex justify-center items-center absolute left-0 right-0 sm:hidden'>
                <div className='bg-white w-5/6 rounded-md pb-8 shadow-xl '>
                    <div className=''>
                        <p className='pt-6 text-2xl  text-blue-950 font-bold px-6'>Personal info</p>
                        <p className='px-6 mt-4 font-medium text-slate-400 sm:text-[14px]'>Please provide your name, email address, and phone number.</p>

                        <form onSubmit={handleSubmit}>
                            <div className='px-6 mt-4'>
                                <label className='block font-medium'>Name</label>
                                {/* {noname && <p className='absolute -mt-5 left-1/2 text-[15px] font-medium text-red-500'>The Field Is Required</p>} */}
                                <input type="text" value={name} onKeyDown={()=>setNoname(false)}  onChange={(e)=>setName(e.target.value)} className={noname ? `border-red-200 rounded px-3 py-1 font-medium border-2 w-full`: `px-3 rounded py-1 font-medium w-full border-2`} placeholder='e.g. Stephen King' />
                            </div>
                            <div className='px-6 mt-2'>
                                <label className='block font-medium'>Email Address</label>
                                {/* {noemail && <p className='absolute -mt-5 left-1/2 font-medium text-red-500'>The Field Is Required</p>} */}
                                <input type="email" value={email} onKeyDown={()=>setNoemail(false)} onChange={(e)=>setEmail(e.target.value)} className={noemail ? `border-red-200 rounded px-3 py-1 font-medium border-2 w-full`: `px-3 rounded py-1 font-medium w-full border-2`} placeholder='e.g. stephenking@lorem.com' />
                            </div>
                            <div className='px-6 mt-2'>
                                <label className='block font-medium'>Phone Number</label>
                                {/* {noemail && <p className='absolute -mt-5 left-1/2 font-medium text-red-500'>The Field Is Required</p>} */}
                                <input type="text" value={phone} onKeyDown={()=>setNophone(false)} onChange={(e)=> setPhone(e.target.value)} className={nophone ? `border-red-200 rounded px-3 py-1 font-medium border-2 w-full`: `px-3 rounded py-1 font-medium w-full border-2`} placeholder='e.g. +1 234 567 890' />
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>

        </div>
        <FirstBodyButton handleSubmit = {handleSubmit}/>
    </>
  )
}

export default FirstBodyComp