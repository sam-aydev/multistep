

function SumYearButton({thanks, setThanks, handleBack}) {
  return (
    <div>
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
    </div>
  )
}

export default SumYearButton